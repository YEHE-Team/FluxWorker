import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'

const CONFIG_DIR = path.join(os.homedir(), '.fluxworker')
const CONFIG_FILE = path.join(CONFIG_DIR, 'config.json')

export interface FluxConfig {
  apiUrl: string
  apiKey: string
  modelId: string
  workspacePath?: string
}

const DEFAULT_CONFIG: FluxConfig = {
  apiUrl: process.env.FLUX_API_URL || 'http://186.241.94.104:3000/v1/chat/completions',
  apiKey: process.env.FLUX_API_KEY || 'sk-h6kRshTK5lRWRzpkrL2PZizNAiqtiziRPq22LPP3wYv8nupE',
  modelId: process.env.FLUX_MODEL_ID || 'Flux-Coder-Omni'
}

let cachedConfig: FluxConfig | null = null

function ensureDir(): void {
  fs.mkdirSync(CONFIG_DIR, { recursive: true })
}

export function loadConfig(): FluxConfig {
  if (cachedConfig) return cachedConfig
  ensureDir()
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      const raw = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8')) as Partial<FluxConfig>
      cachedConfig = {
        apiUrl: raw.apiUrl || DEFAULT_CONFIG.apiUrl,
        apiKey: raw.apiKey || DEFAULT_CONFIG.apiKey,
        modelId: raw.modelId || DEFAULT_CONFIG.modelId,
        workspacePath: raw.workspacePath
      }
      return cachedConfig
    }
  } catch {}
  cachedConfig = { ...DEFAULT_CONFIG }
  return cachedConfig
}

export function saveConfig(config: Partial<FluxConfig>): FluxConfig {
  const current = loadConfig()
  const updated: FluxConfig = {
    apiUrl: config.apiUrl || current.apiUrl,
    apiKey: config.apiKey || current.apiKey,
    modelId: config.modelId || current.modelId,
    workspacePath: config.workspacePath !== undefined ? config.workspacePath : current.workspacePath
  }
  ensureDir()
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(updated, null, 2), 'utf-8')
  cachedConfig = updated
  return updated
}

export function getConfigDisplay(): string {
  const config = loadConfig()
  const keyMasked = config.apiKey.length > 8
    ? config.apiKey.slice(0, 4) + '...' + config.apiKey.slice(-4)
    : config.apiKey
  return [
    `🌐 API URL  : ${config.apiUrl}`,
    `🔑 API Key  : ${keyMasked}`,
    `🤖 Model    : ${config.modelId}`,
    ``,
    `配置文件位置: ${CONFIG_FILE}`,
    `设置方式: 编辑该 JSON 文件，或使用环境变量:`,
    `  FLUX_API_URL  / FLUX_API_KEY  / FLUX_MODEL_ID`
  ].join('\n')
}

export function clearConfigCache(): void {
  cachedConfig = null
}
