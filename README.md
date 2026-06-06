# FluxWorker

> 本地优先、AI 驱动的桌面端编程助手 · 搭载自研 Flux-Coder-Omni 模型

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.8-brightgreen)](package.json)
[![Electron](https://img.shields.io/badge/Electron-31.0-47848F?logo=electron)](https://www.electronjs.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript)](https://www.typescriptlang.org/)

---

## 概述

FluxWorker 是一款**本地优先**的桌面端 AI 编程助手，专注于为开发者提供安全、高效、可扩展的智能编程体验。基于 Electron + Next.js 14 构建，搭载自研 Flux-Coder-Omni 模型，支持多 AI 提供商切换、MCP 协议集成、子代理任务委派等核心能力。

> 🎯 对标：Cursor / Claude Code / Windsurf

---

## 核心架构

FluxWorker 采用**四层架构**设计，各层职责清晰、松耦合：

```
┌─────────────────────────────────────────┐
│          React 前端层 (Next.js)          │
│  代码编辑器 · Diff对比 · 终端面板        │
│  会话管理 · Token监控 · 设置面板        │
├─────────────────────────────────────────┤
│          AI Agent 引擎层                 │
│  Agent循环 · MCP客户端 · 多提供商适配    │
│  子代理系统 · 斜杠命令 · 工具管理器      │
├─────────────────────────────────────────┤
│          安全沙箱层                      │
│  危险命令过滤 · 路径安全检查              │
│  提示词注入防护 · 权限管理               │
├─────────────────────────────────────────┤
│          Electron 主进程层               │
│  窗口管理 · IPC通信 · 原生能力桥接       │
│  自动更新 · 跨平台打包                   │
└─────────────────────────────────────────┘
```

---

## 关键特性

| 特性 | 说明 |
|------|------|
| 🤖 **多 AI 提供商** | 灵活切换 OpenAI、Anthropic 等后端，亦可本地部署 |
| 🛠 **MCP 协议集成** | Model Context Protocol 客户端，标准化工具调用 |
| 🔒 **多层安全防护** | 内置安全沙箱，过滤危险命令，防止注入攻击 |
| 🧩 **子代理系统** | 任务分解与委派，支持复杂工作流自动编排 |
| ⌨️ **30+ 斜杠命令** | 覆盖模型切换、会话管理、工具查询等操作 |
| 📝 **智能代码编辑器** | 基于 CodeMirror 6，支持 12+ 语言语法高亮 |
| 📊 **Token 用量监控** | 实时显示消耗，透明计费 |
| 🔄 **自动更新** | 基于 electron-updater 的平滑升级 |
| 🖥 **跨平台构建** | 支持 Windows (NSIS)、macOS (DMG)、Linux |

### 支持的编程语言

Python · JavaScript · TypeScript · Rust · Go · C++ · Java · CSS · HTML · JSON · Markdown · YAML · SQL · XML

---

## 快速开始

### 环境要求

- Node.js >= 18
- npm >= 9

### 安装与运行

```bash
# 克隆仓库
git clone https://github.com/YEHE-Team/FluxWorker.git
cd FluxWorker

# 安装依赖
npm install

# 启动开发模式
npm run dev

# 构建生产版本
npm run build

# 打包分发
npm run dist:win   # Windows
npm run dist:mac   # macOS
npm run dist:linux # Linux
```

> 已打包好的安装包可在 `dist/` 目录下获取：`FluxWorker-Setup-1.0.8.exe`

---

## 项目结构

```
fluxworker/
├── app/                    # Next.js App Router 页面
│   ├── api/                # API 路由
│   └── page.tsx            # 主页面
├── components/             # React 组件
├── electron/               # Electron 主进程
│   ├── main.ts             # 主进程入口
│   ├── preload.ts          # 预加载脚本
│   ├── agent/              # AI Agent 引擎
│   │   ├── AgentLoop.ts    # Agent 主循环
│   │   ├── commands/       # 斜杠命令实现
│   │   ├── mcp/            # MCP 客户端
│   │   ├── provider/       # AI 提供商适配
│   │   ├── subagent/       # 子代理系统
│   │   └── tool-manager/   # 工具注册与执行
│   └── security/           # 安全沙箱模块
├── hooks/                  # React Hooks
├── lib/                    # 工具函数库
├── public/                 # 静态资源
├── styles/                 # 样式文件
├── types/                  # TypeScript 类型定义
├── package.json            # 项目配置
├── next.config.mjs         # Next.js 配置
├── tailwind.config.ts      # Tailwind CSS 配置
├── tsconfig.json           # TypeScript 配置
└── electron-builder.yml    # 打包配置
```

---

## 斜杠命令（部分示例）

| 命令 | 说明 |
|------|------|
| `/help` | 查看帮助信息 |
| `/model` | 切换 AI 模型 |
| `/clear` | 清空当前会话 |
| `/tools` | 列出可用工具 |
| `/session` | 管理会话 |
| `/config` | 查看/修改配置 |

完整命令列表请在应用内使用 `/help` 查看。

---

## 技术栈

### 核心依赖

| 类别 | 技术 |
|------|------|
| 前端框架 | React 18 + Next.js 14 (App Router) |
| 状态管理 | Zustand |
| 代码编辑器 | CodeMirror 6 |
| 样式方案 | Tailwind CSS + @tailwindcss/typography |
| Markdown | react-markdown + remark-gfm |
| 文件搜索 | fast-glob |

### 桌面框架

| 类别 | 技术 |
|------|------|
| 桌面框架 | Electron 31 |
| 构建工具 | electron-vite + electron-builder |
| 自动更新 | electron-updater |

### 开发工具

TypeScript 5 · Vite · PostCSS · Autoprefixer

---

## 安全

FluxWorker 内置多层安全防护机制：

- **危险命令过滤**：拦截并阻止执行高风险系统命令
- **路径安全检查**：验证文件操作路径，防止目录遍历攻击
- **提示词注入防护**：检测并防御恶意提示注入
- **权限管理**：细粒度的工具执行权限控制

---

## 贡献指南

欢迎贡献代码、提交 Issue 或提出改进建议！

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'feat: add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request

请确保您的代码遵循项目的编码规范并通过所有测试。

---

## 许可证

本项目采用 [MIT 许可证](LICENSE)。

---

## 作者

FluxWorker Team

---

*FluxWorker — 让代码编写更智能，让开发更高效。*