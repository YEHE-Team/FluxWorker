# FluxWorker

<div align="center">

![FluxWorker Logo](https://via.placeholder.com/120x120?text=FluxWorker)

✨ **FluxWorker** - AI编程助手，由Flux-Coder-Omni驱动

一个现代化的桌面端AI编程助手，基于Electron构建，提供智能代码补全、多语言支持和强大的编辑器体验。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/YEHE-Team/FluxWorker?style=social)](https://github.com/YEHE-Team/FluxWorker/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/YEHE-Team/FluxWorker?style=social)](https://github.com/YEHE-Team/FluxWorker/network/members)
[![GitHub issues](https://img.shields.io/github/issues/YEHE-Team/FluxWorker)](https://github.com/YEHE-Team/FluxWorker/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/YEHE-Team/FluxWorker)](https://github.com/YEHE-Team/FluxWorker/pulls)
[![GitHub release](https://img.shields.io/github/v/release/YEHE-Team/FluxWorker)](https://github.com/YEHE-Team/FluxWorker/releases)
[![GitHub license](https://img.shields.io/github/license/YEHE-Team/FluxWorker)](LICENSE)

</div>

---

## 🌟 项目介绍与定位

**FluxWorker** 是一款基于 Electron + React 的 AI 编程助手桌面客户端，由 YEHE-Team 开发。它使用自研的 **Flux-Coder-Omni** 模型，定位类似 Cursor / Claude Code，旨在为开发者提供一个强大的 AI 辅助编程环境。

FluxWorker 将 AI 智能与现代桌面应用相结合，提供完整的 AI Agent 循环体验，支持多种工具集成、项目规则系统、Git 检查点管理等高级功能，让 AI 真正成为你的编程伙伴。

## 🚀 核心功能特性

### 1. AI Agent 完整循环
- 自动化的任务理解、规划、执行和反馈循环
- 支持复杂多步骤任务处理
- 实时进度追踪和状态更新

### 2. 15个内置工具
- 文件读写、编辑、搜索
- 代码执行、终端操作
- Git 操作、浏览器控制
- 网络请求、数据库查询
- 图像处理、系统信息获取

### 3. MCP 协议支持
- Model Context Protocol 集成
- 支持自定义工具扩展
- 标准化的工具接口规范

### 4. 多层安全体系
- 操作权限分级控制
- 危险操作二次确认
- 代码执行沙箱隔离
- 敏感信息过滤保护

### 5. 项目规则系统
- `.fluxrules` 配置文件支持
- 项目级别的 AI 行为定制
- 团队协作规则共享

### 6. Git 检查点管理
- 自动创建代码检查点
- AI 操作前快照保存
- 一键回滚到任意状态
- 操作历史完整追踪

### 7. 长期记忆系统
- 跨会话的知识保留
- 项目上下文持续记忆
- 学习用户编码习惯
- 智能知识检索

### 8. 上下文压缩
- 智能 Token 优化
- 关键信息保留算法
- 长对话性能提升
- 历史上下文摘要

### 9. 钩子系统
- 事件驱动的扩展机制
- 自定义工作流集成
- 第三方服务对接
- 自动化任务触发

### 10. 丰富 UI 体验
- 毛玻璃效果界面设计
- 暗色主题优化
- 响应式布局适配
- 流畅动画交互

## 📸 截图

<div align="center">

<!-- 这里可以添加应用截图 -->

![FluxWorker Screenshot](https://via.placeholder.com/800x400?text=FluxWorker+Screenshot)

</div>

## 🛠️ 技术栈详细说明

### 前端技术
- **UI框架**: React 18 + TypeScript 5.5
- **代码编辑器**: CodeMirror 6（支持 13+ 种语言语法高亮）
- **样式方案**: Tailwind CSS 3.4 + PostCSS（毛玻璃 UI，暗色主题）
- **状态管理**: React Context + Hooks
- **通信协议**: SSE 流式响应 + JSON-RPC 2.0

### 桌面框架
- **框架**: Electron 31
- **构建工具**: electron-vite + electron-builder
- **包管理器**: npm
- **平台支持**: Windows / macOS / Linux

### AI模型
- **核心模型**: Flux-Coder-Omni（自研模型）
- **代码分析**: 智能语法分析和语义理解
- **上下文管理**: 多层次上下文窗口优化

### 项目规模
- **主入口 App.tsx**: 69KB
- **设置面板 SettingsPanel.tsx**: 47KB
- **工具执行器**: 29KB
- **主进程核心 index.ts**: 53KB
- **安装包大小**: 84MB (NSIS) / 181MB (unpacked)

## 🚀 安装和使用指南

### 系统要求

- **操作系统**: Windows 10+, macOS 10.15+, Ubuntu 18.04+
- **Node.js**: v16.0.0 或更高版本
- **npm**: v7.0.0 或更高版本
- **磁盘空间**: 至少 500MB 可用空间

### 安装依赖

```bash
# 克隆仓库
git clone https://github.com/YEHE-Team/FluxWorker.git

# 进入项目目录
cd FluxWorker

# 安装依赖
npm install
```

### 开发模式

```bash
# 启动开发服务器（支持热重载）
npm run dev
```

### 构建生产版本

```bash
# 构建应用
npm run build

# 打包为可执行文件
npm run dist
```

### 平台特定构建

```bash
# Windows版本
npm run dist:win

# macOS版本
npm run dist:mac

# Linux版本
npm run dist:linux
```

## 💬 内置斜杠命令列表

FluxWorker 提供 14 个内置斜杠命令，让你与 AI 的交互更加高效：

| 命令 | 功能描述 |
|------|----------|
| `/help` | 显示帮助信息，列出所有可用命令 |
| `/clear` | 清空当前对话历史 |
| `/compact` | 压缩上下文，优化 Token 使用 |
| `/undo` | 撤销上一步 AI 操作 |
| `/diff` | 显示代码变更差异 |
| `/review` | 进行代码审查 |
| `/tests` | 生成或运行测试用例 |
| `/git` | 执行 Git 相关操作 |
| `/memory` | 管理长期记忆系统 |
| `/rules` | 查看或修改项目规则 |
| `/mcp` | 管理 MCP 协议配置 |
| `/sessions` | 管理会话历史 |
| `/config` | 查看或修改配置 |
| `/workspace` | 管理工作区设置 |

## 📁 项目架构概述

```
fluxworker/
├── electron/                  # Electron主进程
│   ├── main.ts               # 主进程入口 (53KB)
│   ├── preload.ts            # 预加载脚本
│   └── ipc/                  # IPC通信处理
├── src/                      # 前端源代码
│   ├── App.tsx               # 主应用组件 (69KB)
│   ├── components/           # React组件
│   │   ├── SettingsPanel.tsx # 设置面板 (47KB)
│   │   └── ...
│   ├── pages/                # 页面组件
│   ├── hooks/                # 自定义Hooks
│   ├── utils/                # 工具函数
│   │   └── toolExecutor.ts   # 工具执行器 (29KB)
│   ├── styles/               # 全局样式
│   └── types/                # TypeScript类型定义
├── resources/                # 应用资源
│   ├── icons/                # 应用图标
│   └── themes/               # 编辑器主题
├── scripts/                  # 构建脚本
├── dist/                     # 构建输出
├── out/                      # 编译输出
├── electron-builder.yml      # 打包配置
├── electron-vite.config.ts   # Vite配置
└── package.json              # 项目配置
```

### 核心模块说明

- **Agent Engine**: AI Agent 核心引擎，负责任务理解和执行
- **Tool System**: 工具执行系统，管理 15 个内置工具
- **Memory System**: 长期记忆系统，支持跨会话知识保留
- **Git Integration**: Git 集成模块，提供检查点管理
- **Rule Engine**: 规则引擎，管理项目级 AI 行为配置
- **UI Components**: 用户界面组件，包括毛玻璃效果和暗色主题

## 🎯 支持的编程语言

| 语言类别 | 支持的语言 |
|---------|-----------|
| **Web开发** | JavaScript, TypeScript, HTML, CSS, JSX, TSX |
| **系统编程** | C, C++, Rust, Go |
| **脚本语言** | Python, Ruby, PHP, Perl |
| **数据科学** | R, Julia, MATLAB |
| **配置文件** | JSON, YAML, XML, TOML, INI |
| **文档** | Markdown, LaTeX, reStructuredText |
| **数据库** | SQL, GraphQL |
| **其他** | Shell/Bash, PowerShell, Dockerfile, Makefile |

## ⚙️ 配置说明

### 环境变量

创建 `.env` 文件配置以下环境变量：

```env
# AI模型配置
VITE_AI_API_KEY=your_api_key_here
VITE_AI_API_URL=https://api.flux-ai.com/v1

# 应用配置
VITE_APP_NAME=FluxWorker
VITE_APP_VERSION=1.0.0

# 开发配置
VITE_DEV_SERVER_PORT=3000
```

### 编辑器配置

编辑器支持自定义配置，可以通过以下方式修改：

1. **主题切换**: 设置 → 外观 → 主题
2. **字体大小**: 设置 → 编辑器 → 字体大小
3. **自动保存**: 设置 → 编辑器 → 自动保存
4. **代码补全**: 设置 → AI → 智能补全

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

### 开发流程

1. **Fork 本仓库**
   ```bash
   # 在GitHub上点击Fork按钮
   ```

2. **克隆你的分支**
   ```bash
   git clone https://github.com/your-username/FluxWorker.git
   cd FluxWorker
   ```

3. **创建特性分支**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

4. **提交更改**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

5. **推送到分支**
   ```bash
   git push origin feature/AmazingFeature
   ```

6. **打开 Pull Request**

### 代码规范

- 使用TypeScript编写代码
- 遵循ESLint和Prettier配置
- 添加必要的注释和文档
- 编写单元测试（如适用）

### 提交规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式调整
refactor: 代码重构
test: 测试相关
chore: 构建/工具链更新
```

## 📊 项目统计

<div align="center">

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=YEHE-Team&repo=FluxWorker&show_icons=true&theme=radical)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=YEHE-Team&repo=FluxWorker&layout=compact&theme=radical)

</div>

## 📄 许可证

本项目使用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

感谢以下开源项目和社区：

- [Electron](https://www.electronjs.org/) - 桌面应用框架
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [CodeMirror](https://codemirror.net/) - 代码编辑器
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的CSS框架
- [React](https://react.dev/) - 用于构建用户界面的JavaScript库
- [Flux-AI](https://flux-ai.com/) - AI模型提供方

## 📞 联系我们

- **GitHub Issues**: [提交问题](https://github.com/YEHE-Team/FluxWorker/issues)
- **邮箱**: 3660911045@qq.com

---

<div align="center">

**FluxWorker** - 让AI成为你的编程伙伴 ✨

⭐ 如果这个项目对你有帮助，请给我们一个Star！

</div>