# AINative 开发环境配置指南

## 环境要求

### 系统要求

| 组件 | 版本要求 | 当前验证版本 | 说明 |
|------|---------|-------------|------|
| **Node.js** | ≥ 18.0.0 | v22.17.0 ✅ | LTS 版本，推荐使用 18.x 或更高版本 |
| **pnpm** | ≥ 8.0.0 | 10.24.0 ✅ | 快速、节省磁盘空间的包管理器 |
| **操作系统** | macOS/Linux/Windows | macOS 25.1.0 ✅ | Windows 推荐使用 WSL2 |
| **浏览器** | 最新版 | Chrome/Firefox/Edge | 用于开发预览和调试 |

### 版本检查命令

```bash
# 检查 Node 版本
node -v
# 应输出: v18.x.x 或更高

# 检查 pnpm 版本
pnpm -v
# 应输出: 8.x.x 或更高

# 如果未安装 pnpm
npm install -g pnpm
```

---

## 快速开始

### 1. 安装依赖

```bash
# 在项目根目录执行
pnpm install
```

**预期输出：**
- 成功安装 270+ 个包
- 生成 `pnpm-lock.yaml` 锁文件
- 耗时约 7-10 秒

**可能的警告（可忽略）：**
- `Issues with peer dependencies found` - VuePress 2.0.0-rc 系列版本间的已知兼容性警告
- `Ignored build scripts` - 构建脚本权限警告，不影响功能

### 2. 启动开发服务器

```bash
# 启动 VuePress 开发服务器
pnpm run docs:dev
```

**预期输出：**

```
> ainative@0.1.0 docs:dev /Users/apple/Develop/code/gitee/AINative
> vuepress dev docs

- Initializing and preparing data
✔ Initializing and preparing data - done in 324ms

  vite v7.1.12 dev server running at:

  ➜  Local:   http://localhost:8080/AINative/
  ➜  Network: http://172.20.10.x:8080/AINative/
```

**关键指标：**
- ✅ 初始化时间: < 1s（验证值：324ms）
- ✅ 默认端口: `8080`
- ✅ 本地访问: `http://localhost:8080/AINative/`
- ✅ 网络访问: `http://<your-ip>:8080/AINative/`

### 3. 访问开发站点

打开浏览器，访问：

```
http://localhost:8080/AINative/
```

**预期结果：**
- ✅ 首页正确显示（`docs/README.md` 渲染）
- ✅ 页面标题为 "AINative"
- ✅ VuePress 默认主题正确加载
- ✅ 浏览器控制台无 JavaScript 错误

### 4. 测试热重载

修改 `docs/README.md` 文件并保存，页面应自动刷新并显示更新内容。

**预期行为：**
- ✅ 修改 Markdown 文件 → 自动刷新（< 2s）
- ✅ 修改 `config.ts` → 服务器自动重启
- ✅ 修改样式文件 → CSS 热更新

---

## 项目结构

```
AINative/
├── docs/                      # VuePress 文档根目录
│   ├── .vuepress/             # VuePress 配置目录
│   │   ├── .cache/            # Vite 缓存（自动生成，已被 .gitignore）
│   │   ├── .temp/             # 临时文件（自动生成，已被 .gitignore）
│   │   ├── config.ts          # VuePress 主配置文件 ⭐
│   │   ├── public/            # 静态资源目录
│   │   │   └── images/        # 图片资源
│   │   └── styles/            # 自定义样式目录
│   ├── README.md              # 首页（home layout） ⭐
│   └── dev-setup.md           # 本文档
├── package.json               # 项目依赖与脚本 ⭐
├── pnpm-lock.yaml             # 依赖锁定文件
├── .gitignore                 # Git 忽略规则
└── README.md                  # 项目总体说明
```

---

## 开发命令

| 命令 | 说明 | 用途 |
|------|------|------|
| `pnpm run docs:dev` | 启动开发服务器 | 本地开发和实时预览 |
| `pnpm run docs:build` | 构建生产版本 | 生成静态文件到 `docs/.vuepress/dist/` |
| `pnpm run docs:clean` | 清理构建产物 | 删除 dist/、.cache/、.temp/ 目录 |
| `pnpm install` | 安装/更新依赖 | 初始化或依赖变更后执行 |

**自定义端口启动：**

```bash
# 使用 8081 端口启动
PORT=8081 pnpm run docs:dev
```

---

## 核心配置说明

### VuePress 配置文件 (`docs/.vuepress/config.ts`)

```typescript
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  // 站点基础路径（生产环境）
  base: '/AINative/',
  
  // 语言设置
  lang: 'zh-CN',
  
  // 站点标题
  title: 'AINative',
  
  // 站点描述
  description: 'AI Native知识分享平台',
  
  // 主题配置
  theme: defaultTheme({
    navbar: [/* 导航栏配置 */],
    sidebar: {/* 侧边栏配置 */}
  }),
  
  // 构建工具配置 ⚠️ 必须使用函数调用
  bundler: viteBundler({}),
})
```

**关键配置项：**

| 配置项 | 说明 | 开发模式 | 生产模式 |
|--------|------|---------|---------|
| `base` | 站点基础路径 | 忽略（使用 `/`） | 应用（`/AINative/`） |
| `lang` | 语言设置 | `zh-CN` | `zh-CN` |
| `bundler` | 构建工具 | Vite（快速 HMR） | Vite（优化构建） |

### 依赖说明 (`package.json`)

```json
{
  "devDependencies": {
    "@vuepress/bundler-vite": "2.0.0-rc.26",    // Vite 打包器 ⭐
    "@vuepress/theme-default": "2.0.0-rc.26",   // 默认主题 ⭐
    "vuepress": "2.0.0-rc.26",                  // VuePress 核心
    "vuepress-plugin-md-enhance": "2.0.0-rc.99",// Markdown 增强（PPT 支持）
    "vue": "^3.3.0"                             // Vue 3 运行时
  }
}
```

**关键依赖：**
- ✅ `vuepress`: VuePress 2 核心框架
- ✅ `@vuepress/theme-default`: 默认主题（**必需**，否则启动失败）
- ✅ `@vuepress/bundler-vite`: Vite 打包器（**必需**，否则启动失败）
- ✅ `vuepress-plugin-md-enhance`: Markdown 增强插件（支持 reveal.js PPT 模式）

---

## 常见问题与排查

### 问题 1: `Cannot find package '@vuepress/theme-default'`

**错误信息：**

```
error Error [ERR_MODULE_NOT_FOUND]: Cannot find package '@vuepress/theme-default' 
imported from /Users/apple/Develop/code/gitee/AINative/docs/.vuepress/config.ts
```

**原因分析：**
- `package.json` 缺少 `@vuepress/theme-default` 依赖
- `config.ts` 中使用了 `defaultTheme`，但主题包未安装

**解决方案：**

```bash
# 1. 添加依赖到 package.json
# 在 devDependencies 中添加：
# "@vuepress/theme-default": "2.0.0-rc.26"

# 2. 重新安装依赖
pnpm install

# 3. 重新启动开发服务器
pnpm run docs:dev
```

**修复记录：**
- ✅ 在 Story 1.3 实施中已修复
- ✅ `package.json` 已更新，包含主题依赖
- ✅ 此问题已解决，不应再次出现

---

### 问题 2: `app.options.bundler.dev is not a function`

**错误信息：**

```
error TypeError: app.options.bundler.dev is not a function
    at app.dev (file:///.../node_modules/@vuepress/core/dist/index.js:975:45)
```

**原因分析：**
- `config.ts` 中 `bundler` 配置使用了字符串而非函数调用
- VuePress 2 要求显式导入并调用 bundler

**错误配置（❌）：**

```typescript
export default defineUserConfig({
  bundler: '@vuepress/bundler-vite',  // ❌ 错误：使用字符串
})
```

**正确配置（✅）：**

```typescript
import { viteBundler } from '@vuepress/bundler-vite'  // ✅ 导入 bundler

export default defineUserConfig({
  bundler: viteBundler({}),  // ✅ 正确：函数调用
})
```

**解决方案：**

```bash
# 1. 修改 docs/.vuepress/config.ts
# - 添加导入: import { viteBundler } from '@vuepress/bundler-vite'
# - 修改配置: bundler: viteBundler({})

# 2. 重新启动开发服务器
pnpm run docs:dev
```

**修复记录：**
- ✅ 在 Story 1.3 实施中已修复
- ✅ `config.ts` 已更新为正确的函数调用
- ✅ 此问题已解决，不应再次出现

---

### 问题 3: 端口占用 (`EADDRINUSE`)

**错误信息：**

```
EADDRINUSE: address already in use :::8080
```

**原因分析：**
- 端口 8080 已被其他进程占用
- 可能是之前的开发服务器未正常关闭

**解决方案：**

**方法 1：终止占用进程（推荐）**

```bash
# 查找占用 8080 端口的进程
lsof -i :8080

# 输出示例：
# COMMAND   PID  USER   FD   TYPE  DEVICE  SIZE/OFF  NODE  NAME
# node    12345  apple  23u  IPv6  0x...   0t0       TCP  *:http-alt (LISTEN)

# 终止进程（替换 12345 为实际 PID）
kill -9 12345

# 重新启动服务器
pnpm run docs:dev
```

**方法 2：使用其他端口**

```bash
# 使用 8081 端口启动
PORT=8081 pnpm run docs:dev

# 访问: http://localhost:8081/AINative/
```

---

### 问题 4: 依赖冲突 (`ERR_PNPM_PEER_DEP_ISSUES`)

**错误信息：**

```
 ERR_PNPM_PEER_DEP_ISSUES  Unmet peer dependencies
```

**原因分析：**
- 依赖版本不兼容
- `pnpm-lock.yaml` 损坏
- Node.js 版本不匹配

**解决方案：**

```bash
# 1. 删除依赖和锁文件
rm -rf node_modules pnpm-lock.yaml

# 2. 验证 Node 版本（应为 18.x 或更高）
node -v

# 3. 重新安装依赖
pnpm install --frozen-lockfile

# 4. 重新启动服务器
pnpm run docs:dev
```

---

### 问题 5: 配置文件 TypeScript 错误

**错误信息：**

```
error TS2345: Argument of type '...' is not assignable to parameter of type '...'
```

**原因分析：**
- `config.ts` 类型定义错误
- VuePress 导入路径错误
- 主题配置对象结构不正确

**解决方案：**

```bash
# 1. 检查导入路径
# 确认以下导入正确：
# - import { defineUserConfig } from 'vuepress'
# - import { defaultTheme } from '@vuepress/theme-default'
# - import { viteBundler } from '@vuepress/bundler-vite'

# 2. 验证配置结构
# 参考本文档 "核心配置说明" 部分

# 3. 重新安装类型定义（如果问题持续）
pnpm install -D @types/node
```

---

### 问题 6: 热重载失败（页面不自动刷新）

**症状：**
- 修改 Markdown 文件后，页面不自动刷新
- 需要手动刷新浏览器

**原因分析：**
- 修改的文件不在 `docs/` 目录内
- 文件被 `.gitignore` 忽略
- Vite HMR 连接断开

**解决方案：**

```bash
# 1. 确认文件位置
# 确保修改的文件在 docs/ 目录内

# 2. 检查 .gitignore
# 确认文件未被忽略

# 3. 重启开发服务器
# Ctrl+C 停止服务器
pnpm run docs:dev
```

---

### 问题 7: 系统级网络接口错误 (`uv_interface_addresses`)

**错误信息：**

```
SystemError [ERR_SYSTEM_ERROR]: A system error occurred: 
uv_interface_addresses returned Unknown system error 1
```

**原因分析：**
- Sandbox 权限限制导致 Vite 无法访问网络接口
- 操作系统网络配置问题

**解决方案：**

**方法 1：使用完全权限启动（推荐）**

```bash
# 在非 sandbox 环境或完全权限模式下启动
pnpm run docs:dev
```

**方法 2：检查系统网络配置**

```bash
# 检查网络接口
ifconfig

# 确认网络连接正常
ping google.com
```

**修复记录：**
- ✅ 在 Story 1.3 实施中，通过调整权限解决
- ✅ 开发服务器成功启动并运行
- ✅ 此问题在标准开发环境中不应出现

---

## 开发模式 vs 生产模式

### 路径差异

| 特性 | 开发模式 (`docs:dev`) | 生产模式 (`docs:build`) |
|------|----------------------|------------------------|
| **Base 路径** | `/` (忽略 config.base) | `/AINative/` (应用 config.base) |
| **访问 URL** | `http://localhost:8080/` | 部署后: `https://your-domain.com/AINative/` |
| **原因** | 本地开发便利性 | GitHub Pages 子路径部署 |

**示例：**

```typescript
// config.ts 中配置
base: '/AINative/'

// 开发模式访问（base 被忽略）
http://localhost:8080/         // ✅ 可以访问
http://localhost:8080/AINative/ // ⚠️ 也可以访问，但不必要

// 生产模式访问（base 生效）
https://your-org.github.io/AINative/  // ✅ 正确
https://your-org.github.io/           // ❌ 404
```

### 性能差异

| 特性 | 开发模式 | 生产模式 |
|------|---------|---------|
| **编译方式** | 按需编译 | 全量构建 |
| **热重载** | ✅ 启用 | ❌ 不适用 |
| **启动时间** | < 1s | N/A |
| **构建时间** | N/A | 30-60s |
| **Source Map** | ✅ 生成 | ❌ 不生成 |
| **代码优化** | 最小化 | 完全优化（压缩、Tree-shaking） |

---

## 性能基线

基于 Story 1.3 实施验证的性能数据：

| 指标 | 要求 | 实际验证值 | 状态 |
|------|-----|-----------|------|
| **开发服务器启动时间** | < 10s | 324ms | ✅ 优秀 |
| **初始化时间** | < 2s | 324ms | ✅ 优秀 |
| **热重载响应时间** | < 2s | 未测试（待验证） | ⏸️ 待验证 |
| **开发服务器内存占用** | < 500MB | 未测量 | ⏸️ 待验证 |
| **首屏加载时间** | < 3s | 未测量 | ⏸️ 待验证 |

**后续优化目标：**
- 测量并优化热重载响应时间
- 监控内存占用情况
- 使用 Lighthouse 评估首屏性能

---

## 调试技巧

### 1. 查看详细日志

```bash
# 启用 VuePress 调试日志
DEBUG=vuepress:* pnpm run docs:dev
```

### 2. 清理缓存

```bash
# 清理所有构建产物和缓存
pnpm run docs:clean

# 重新启动
pnpm install
pnpm run docs:dev
```

### 3. 浏览器开发者工具

**Chrome DevTools 快捷键：** `Cmd + Option + I` (macOS) 或 `F12` (Windows/Linux)

**检查项：**
- Console 面板：查看 JavaScript 错误
- Network 面板：查看资源加载情况
- Elements 面板：检查 DOM 结构和样式

### 4. 响应式布局测试

**Chrome DevTools 设备模式：** `Cmd + Shift + M` (macOS) 或 `Ctrl + Shift + M` (Windows/Linux)

**测试视口：**
- Mobile: 375px × 667px (iPhone SE)
- Tablet: 768px × 1024px (iPad)
- Desktop: 1440px × 900px (MacBook Pro)

---

## 故障排除检查清单

遇到问题时，按以下顺序检查：

- [ ] **Node 版本检查**: `node -v` (应为 ≥ 18.0.0)
- [ ] **pnpm 版本检查**: `pnpm -v` (应为 ≥ 8.0.0)
- [ ] **依赖完整性**: 删除 `node_modules/` 和 `pnpm-lock.yaml`，重新 `pnpm install`
- [ ] **端口占用**: `lsof -i :8080` 检查端口，必要时终止进程或换端口
- [ ] **配置语法**: 检查 `config.ts` 是否有 TypeScript 错误
- [ ] **清理缓存**: `pnpm run docs:clean` 清理构建产物
- [ ] **重启服务器**: `Ctrl+C` 停止，重新 `pnpm run docs:dev`
- [ ] **查看日志**: 检查终端输出和 `/tmp/vuepress-dev.log`（如有）

---

## Story 1.3 实施记录

### 发现并修复的问题

**问题 1: 缺少 `@vuepress/theme-default` 依赖**
- **发现时间**: 2025-12-15 (Story 1.3 实施)
- **根因**: Story 1.2 创建 `package.json` 时未包含主题包
- **影响**: 开发服务器启动失败，报错 `Cannot find package '@vuepress/theme-default'`
- **修复**: 在 `package.json` devDependencies 中添加 `"@vuepress/theme-default": "2.0.0-rc.26"`
- **状态**: ✅ 已修复并验证

**问题 2: `bundler` 配置错误**
- **发现时间**: 2025-12-15 (Story 1.3 实施)
- **根因**: `config.ts` 中 `bundler` 使用字符串配置而非函数调用
- **影响**: 开发服务器启动失败，报错 `app.options.bundler.dev is not a function`
- **修复**: 
  - 导入 `viteBundler`: `import { viteBundler } from '@vuepress/bundler-vite'`
  - 修改配置: `bundler: viteBundler({})`
- **状态**: ✅ 已修复并验证

**问题 3: Sandbox 权限限制**
- **发现时间**: 2025-12-15 (Story 1.3 实施)
- **根因**: Sandbox 环境限制导致 Vite 无法访问网络接口
- **影响**: 报错 `uv_interface_addresses returned Unknown system error 1`
- **修复**: 使用完全权限模式启动开发服务器
- **状态**: ✅ 已解决（标准开发环境无此问题）

### 验证结果

**✅ AC #1: 本地开发服务器启动成功**
- 服务器地址: `http://localhost:8080/AINative/`
- 初始化时间: 324ms（远低于 10s 要求）
- Vite 7.1.12 开发服务器运行正常

**✅ AC #4: 控制台无报错或警告**
- 终端输出正常，无错误
- 仅有可忽略的 peer dependency 警告（VuePress 2.0.0-rc 已知问题）

**✅ AC #5: 开发环境配置文档化**
- `docs/dev-setup.md` 已创建 ✅
- 包含环境要求、快速开始、故障排除等完整内容 ✅

**⏸️ AC #2: 浏览器自动打开（待手动验证）**
- 配置项 `open: true` 未在 `config.ts` 中显式设置（VuePress 默认行为）
- 建议手动验证浏览器是否自动打开

**⏸️ AC #3: 热重载工作正常（待手动验证）**
- Vite HMR 功能已启用（Vite 7.1.12 自带）
- 建议手动测试：修改 `docs/README.md` 并验证页面自动刷新

### 文件变更

**NEW:**
- `docs/dev-setup.md` - 开发环境配置文档 ✅

**MODIFIED:**
- `package.json` - 添加 `@vuepress/theme-default` 依赖 ✅
- `docs/.vuepress/config.ts` - 修复 `bundler` 配置 ✅

**AUTO-GENERATED:**
- `docs/.vuepress/.cache/` - Vite 缓存目录 ✅
- `docs/.vuepress/.temp/` - VuePress 临时文件目录 ✅

---

## 下一步建议

1. **验证浏览器自动打开**：
   - 执行 `pnpm run docs:dev`
   - 观察浏览器是否自动打开 `http://localhost:8080/AINative/`

2. **验证热重载功能**：
   - 修改 `docs/README.md` 内容
   - 保存文件
   - 观察浏览器页面是否在 2 秒内自动刷新

3. **继续 Epic 1 下一个 Story**：
   - Story 1.4: 创建响应式布局框架
   - Story 1.5: 配置构建流程

---

## 参考资料

- [VuePress 2 官方文档](https://v2.vuepress.vuejs.org/zh/)
- [Vite 官方文档](https://vitejs.dev/)
- [pnpm 官方文档](https://pnpm.io/)
- [Node.js 官方文档](https://nodejs.org/)

---

**文档版本**: v1.0  
**创建日期**: 2025-12-15  
**最后更新**: 2025-12-15  
**维护者**: AINative Development Team

