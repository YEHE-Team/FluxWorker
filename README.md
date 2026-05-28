# FluxWorker

✨ **FluxWorker** - AI编程助手，由Flux-Coder-Omni驱动

一个现代化的桌面端AI编程助手，基于Electron构建，提供智能代码补全、多语言支持和强大的编辑器体验。

## 🌟 特性

- 🤖 **AI智能补全** - 由Flux-Coder-Omni模型驱动的代码智能提示
- 🎨 **优雅编辑器** - 基于CodeMirror 6的现代化代码编辑体验
- 🌍 **多语言支持** - 支持Python、JavaScript、TypeScript、Go、Rust等10+编程语言
- 🎯 **精准语法高亮** - 针对不同语言的语法高亮和代码折叠
- 📊 **实时预览** - 支持Markdown实时预览
- ⚡ **极速启动** - 基于Vite的极速开发体验
- 🎨 **主题定制** - 支持暗色主题和自定义样式
- 🔄 **自动更新** - 内置electron-updater，支持自动更新

## 🛠️ 技术栈

- **前端框架**: React 18 + TypeScript
- **桌面框架**: Electron 31
- **构建工具**: Vite + electron-vite
- **代码编辑器**: CodeMirror 6
- **样式方案**: Tailwind CSS + PostCSS
- **包管理器**: npm

## 🚀 快速开始

### 安装依赖

```bash
# 克隆仓库
git clone https://github.com/YEHE-Team/FluxWorker.git

# 进入项目目录
cd FluxWorker

# 安装依赖
npm install
```

### 启动开发

```bash
# 开发模式（热重载）
npm run dev
```

### 构建生产版本

```bash
# 构建应用
npm run build

# 打包为可执行文件
npm run dist
```

## 📦 构建目标

```bash
# Windows版本
npm run dist:win

# macOS版本
npm run dist:mac

# Linux版本
npm run dist:linux
```

## 🎯 支持的编程语言

- JavaScript / TypeScript
- Python
- Go
- Rust
- Java
- C/C++
- HTML / CSS
- JSON / YAML
- Markdown
- SQL
- XML

## 📁 项目结构

```
fluxworker/
├── electron/          # Electron主进程
├── src/              # 前端源代码
├── resources/        # 应用资源
├── scripts/          # 构建脚本
├── dist/             # 构建输出
├── out/              # 编译输出
├── electron-builder.yml  # 打包配置
├── electron-vite.config.ts  # Vite配置
└── package.json
```

## 🤝 贡献

欢迎贡献代码！请遵循以下步骤：

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📄 许可证

本项目使用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- [Electron](https://www.electronjs.org/) - 桌面应用框架
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [CodeMirror](https://codemirror.net/) - 代码编辑器
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的CSS框架
- [React](https://react.dev/) - 用于构建用户界面的JavaScript库

---

**FluxWorker** - 让AI成为你的编程伙伴 ✨
