import { ChatMessage, streamChat } from './api-client'

const ASCII_RATIO = 4
const CJK_RATIO = 1.5
const CJK_REGEX = /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af]/g
const MAX_TOKEN_WINDOW = 140000
const COMPACT_RESERVE_LAST = 4
const COMPACT_THRESHOLD = 0.9

export function estimateTokens(text: string): number {
  if (!text) return 0
  const cjkCount = (text.match(CJK_REGEX) || []).length
  const asciiCount = text.length - cjkCount
  return Math.ceil(asciiCount / ASCII_RATIO) + Math.ceil(cjkCount / CJK_RATIO)
}

export function estimateMessagesTokens(messages: ChatMessage[]): number {
  let total = 0
  for (const msg of messages) {
    total += estimateTokens(msg.content || '')
    if (msg.tool_calls) {
      total += estimateTokens(JSON.stringify(msg.tool_calls))
    }
    if (msg.name) total += estimateTokens(msg.name)
  }
  return total
}

export function getTokenUsageRatio(messages: ChatMessage[]): number {
  return estimateMessagesTokens(messages) / MAX_TOKEN_WINDOW
}

export function shouldCompact(messages: ChatMessage[]): boolean {
  return estimateMessagesTokens(messages) > MAX_TOKEN_WINDOW * COMPACT_THRESHOLD
}

function collectCompactableMessages(messages: ChatMessage[]): { head: ChatMessage[]; middle: ChatMessage[]; tail: ChatMessage[] } {
  const head: ChatMessage[] = []
  const tail: ChatMessage[] = []
  for (const msg of messages) {
    if (msg.role === 'system') head.push(msg)
  }
  const nonSystem = messages.filter((m) => m.role !== 'system')
  const lastN = nonSystem.slice(-COMPACT_RESERVE_LAST)
  const middle = nonSystem.slice(0, -COMPACT_RESERVE_LAST)
  return { head, middle, tail: lastN }
}

function extractConversationText(messages: ChatMessage[]): string {
  const parts: string[] = []
  for (const msg of messages) {
    const roleLabel = msg.role === 'user' ? 'User' : msg.role === 'assistant' ? 'Assistant' : msg.role === 'tool' ? `Tool(${msg.name || 'unknown'})` : msg.role
    parts.push(`[${roleLabel}]: ${msg.content || ''}`)
  }
  return parts.join('\n')
}

export async function compactMessages(messages: ChatMessage[], signal: AbortSignal): Promise<ChatMessage[]> {
  const { head, middle, tail } = collectCompactableMessages(messages)
  if (middle.length === 0) return messages
  const conversationText = extractConversationText(middle)
  const summaryPrompt: ChatMessage = {
    role: 'user',
    content: `请将以下对话历史压缩为结构化摘要。保留关键信息。\n\n<conversation>\n${conversationText}\n</conversation>`
  }
  let summary = ''
  try {
    const stream = streamChat([
      { role: 'system', content: '你是一个对话摘要器。' },
      summaryPrompt
    ], signal)
    for await (const event of stream) {
      if (signal.aborted) break
      if (event.type === 'text') summary += event.content
    }
  } catch {
    summary = `[对话摘要生成失败]`
  }
  const compacted: ChatMessage[] = [...head, ...tail]
  const summaryText = `以下是对之前对话的压缩摘要：\n\n${summary}`
  compacted.unshift({ role: 'system', content: `<conversation_history_summary>\n${summaryText}\n</conversation_history_summary>` })
  return compacted
}

export function isCompactCommand(content: string): boolean {
  return content.trim() === '/compact'
}
