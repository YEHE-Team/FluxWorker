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

</div>

---

## 🌟 特性

- 🤖 **AI智能补全** - 由Flux-Coder-Omni模型驱动的代码智能提示
- 🎨 **优雅编辑器** - 基于CodeMirror 6的现代化代码编辑体验
- 🌍 **多语言支持** - 支持Python、JavaScript、TypeScript、Go、Rust等10+编程语言
- 🎯 **精准语法高亮** - 针对不同语言的语法高亮和代码折叠
- 📊 **实时预览** - 支持Markdown实时预览
- ⚡ **极速启动** - 基于Vite的极速开发体验
- 🎨 **主题定制** - 支持暗色主题和自定义样式
- 🔄 **自动更新** - 内置electron-updater，支持自动更新
- 📁 **项目管理** - 支持多文件项目管理和快速导航
- 🔍 **全局搜索** - 支持文件内容和项目内搜索
- 💾 **自动保存** - 实时保存编辑状态，防止数据丢失

## 📸 截图

<div align="center">

<!-- 这里可以添加应用截图 -->

![FluxWorker Screenshot](https://via.placeholder.com/800x400?text=FluxWorker+Screenshot)

</div>

## 🛠️ 技术栈

### 前端技术
- **UI框架**: React 18 + TypeScript
- **代码编辑器**: CodeMirror 6
- **样式方案**: Tailwind CSS + PostCSS
- **状态管理**: React Context + Hooks

### 桌面框架
- **框架**: Electron 31
- **构建工具**: Vite + electron-vite
- **包管理器**: npm
- **自动更新**: electron-updater

### AI模型
- **核心模型**: Flux-Coder-Omni
- **代码分析**: 智能语法分析和语义理解

## 🚀 快速开始

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

## 📁 项目结构

```
fluxworker/
├── electron/                  # Electron主进程
│   ├── main.ts               # 主进程入口
│   ├── preload.ts            # 预加载脚本
│   └── ipc/                  # IPC通信处理
├── src/                      # 前端源代码
│   ├── components/           # React组件
│   ├── pages/                # 页面组件
│   ├── hooks/                # 自定义Hooks
│   ├── utils/                # 工具函数
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

## ⚙️ 配置

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

## 🐛 故障排除

### 常见问题

**Q: 应用启动失败？**
A: 请确保已安装所有依赖并检查Node.js版本是否符合要求。

**Q: AI补全不工作？**
A: 检查网络连接和API密钥配置是否正确。

**Q: 文件保存失败？**
A: 检查文件权限和磁盘空间是否充足。

**Q: 应用更新失败？**
A: 尝试手动下载最新版本或检查网络连接。

### 日志文件

应用日志文件位于：
- **Windows**: `%APPDATA%/FluxWorker/logs/`
- **macOS**: `~/Library/Logs/FluxWorker/`
- **Linux**: `~/.config/FluxWorker/logs/`

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