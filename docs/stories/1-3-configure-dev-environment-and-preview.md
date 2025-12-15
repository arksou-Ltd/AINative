# Story 1.3: 配置开发环境与本地预览

Status: ready-for-dev

## Story

作为 开发者,
我想 配置本地开发服务器并验证实时预览功能,
以便 可以高效地进行开发和调试。

## Acceptance Criteria

**Given** 项目结构已初始化（Story 1.2 完成）

**When** 我运行 `pnpm run docs:dev`

**Then** 应该：

1. ✅ 本地开发服务器启动成功（默认 `http://localhost:8080`）
2. ✅ 浏览器自动打开并显示默认页面
3. ✅ 热重载（Hot Reload）工作正常（修改文件自动刷新）
4. ✅ 控制台无报错或警告
5. ✅ 开发环境配置文档化（`docs/dev-setup.md`）

## Tasks / Subtasks

- [ ] Task 1: 验证 VuePress 开发服务器启动 (AC: #1, #4)
  - [ ] 1.1 执行 `pnpm run docs:dev` 命令
  - [ ] 1.2 验证服务器在 `localhost:8080` 启动
  - [ ] 1.3 检查终端输出无错误
  - [ ] 1.4 验证 Vite 开发服务器正常运行
  - [ ] 1.5 确认端口占用检测机制（端口冲突时自动切换）

- [ ] Task 2: 验证浏览器自动打开与页面渲染 (AC: #2, #4)
  - [ ] 2.1 确认浏览器自动打开（若未自动打开则手动访问）
  - [ ] 2.2 验证首页 `README.md` 正确渲染
  - [ ] 2.3 检查页面标题显示为 "AINative"
  - [ ] 2.4 验证 VuePress 默认主题正确加载
  - [ ] 2.5 检查浏览器控制台无 JavaScript 错误

- [ ] Task 3: 验证热重载功能 (AC: #3)
  - [ ] 3.1 修改 `docs/README.md` 内容（添加测试文本）
  - [ ] 3.2 保存文件并验证页面自动刷新
  - [ ] 3.3 验证修改内容立即显示（<2s 延迟）
  - [ ] 3.4 修改 `config.ts` 配置并验证服务器自动重启
  - [ ] 3.5 验证 CSS 热更新（修改样式文件）

- [ ] Task 4: 验证开发服务器配置 (AC: #4)
  - [ ] 4.1 检查 `config.ts` 的 `base: '/AINative/'` 配置
  - [ ] 4.2 验证本地开发忽略 base 路径（直接 `/` 访问）
  - [ ] 4.3 测试响应式布局在不同视口（Mobile/Tablet/Desktop）
  - [ ] 4.4 验证 TypeScript 类型检查工作（config.ts）
  - [ ] 4.5 确认开发模式下 source map 生成

- [ ] Task 5: 创建开发环境文档 (AC: #5)
  - [ ] 5.1 创建 `docs/dev-setup.md` 文档
  - [ ] 5.2 记录环境要求（Node 18.x, pnpm 8.x）
  - [ ] 5.3 记录启动命令和常见问题排查
  - [ ] 5.4 记录开发服务器配置说明
  - [ ] 5.5 添加常见错误处理指南（端口占用、依赖冲突等）

- [ ] Task 6: 性能与资源验证 (AC: #4)
  - [ ] 6.1 检查开发服务器启动时间（<10s）
  - [ ] 6.2 验证热重载响应时间（<2s）
  - [ ] 6.3 监控开发服务器内存占用（<500MB）
  - [ ] 6.4 验证文件监听范围正确（仅 docs/ 目录）
  - [ ] 6.5 确认 `.vuepress/.cache/` 和 `.temp/` 自动生成

## Dev Notes

### 架构约束与模式

**VuePress 开发服务器（来自 architecture.md）：**

- **启动命令**：`pnpm run docs:dev`（别名 `vuepress dev docs`）
- **默认端口**：8080（可通过环境变量 `PORT` 修改）
- **Vite 开发服务器**：
  - 快速热重载（HMR）
  - 按需编译
  - 原生 ESM 支持
  - Source map 自动生成

**开发环境要求：**
- Node.js: 18.x LTS
- pnpm: 8.x
- 操作系统: macOS/Linux/Windows（WSL2）
- 浏览器: Chrome/Firefox/Edge (最新版)

**config.ts 关键配置：**
```ts
export default defineUserConfig({
  base: '/AINative/',      // 生产环境路径前缀
  lang: 'zh-CN',
  title: 'AINative',
  description: 'AI Native知识分享平台',
  
  // 开发服务器配置
  port: 8080,              // 默认端口
  open: true,              // 自动打开浏览器
  host: 'localhost',       // 监听地址
  
  theme: defaultTheme({
    navbar: [],
    sidebar: {}
  })
})
```

### Project Structure Notes

**开发环境文件（来自 architecture.md）：**

```
AINative/
├── docs/
│   ├── .vuepress/
│   │   ├── .cache/        # Vite 缓存（自动生成，已被 .gitignore）
│   │   ├── .temp/         # 临时文件（自动生成，已被 .gitignore）
│   │   ├── config.ts      # VuePress 配置
│   │   ├── styles/
│   │   └── public/
│   ├── README.md          # 首页
│   └── dev-setup.md       # 开发环境文档（本 Story 创建）
├── package.json           # 包含 docs:dev 脚本
└── pnpm-lock.yaml
```

**开发模式与生产模式差异：**
| 特性 | 开发模式 (dev) | 生产模式 (build) |
|------|---------------|------------------|
| 路径 | `/` (忽略 base) | `/AINative/` (base 生效) |
| 热重载 | ✅ 启用 | ❌ 不适用 |
| 构建速度 | 按需编译 | 全量构建 |
| Source Map | ✅ 生成 | ❌ 不生成 |
| 优化 | 最小化 | 完全优化（压缩、Tree-shaking） |

### 常见问题与排查

**端口占用：**
- 错误信息: `EADDRINUSE: address already in use :::8080`
- 解决方案: 
  1. 查找占用进程: `lsof -i :8080`
  2. 终止进程: `kill -9 <PID>`
  3. 或使用其他端口: `PORT=8081 pnpm run docs:dev`

**依赖冲突：**
- 错误信息: `ERR_PNPM_PEER_DEP_ISSUES`
- 解决方案: 
  1. 删除 `node_modules/` 和 `pnpm-lock.yaml`
  2. 重新安装: `pnpm install --frozen-lockfile`
  3. 确认 Node 版本: `node -v` (应为 18.x)

**配置错误：**
- 错误信息: TypeScript 类型错误 in `config.ts`
- 解决方案:
  1. 检查 VuePress 导入路径
  2. 确认 `defineUserConfig` 正确导入
  3. 验证主题配置对象结构

**热重载失败：**
- 症状: 修改文件后页面不刷新
- 解决方案:
  1. 检查文件是否在 `docs/` 目录内
  2. 确认文件未被 `.gitignore` 忽略
  3. 重启开发服务器: `Ctrl+C` 后重新运行

### 测试策略

**验证方法：**

1. **启动验证**：
   - 执行 `pnpm run docs:dev`
   - 检查终端输出包含 "vuepress dev started" 和 URL
   - 验证进程正常运行（无退出）

2. **页面渲染验证**：
   - 手动或自动打开 `http://localhost:8080`
   - 验证首页内容正确显示
   - 检查浏览器控制台无错误

3. **热重载验证**：
   - 修改 `docs/README.md` → 保存 → 验证自动刷新
   - 修改 `config.ts` → 保存 → 验证服务器重启
   - 修改样式文件 → 保存 → 验证 CSS 热更新

4. **响应式验证**：
   - Chrome DevTools 切换设备视口
   - 测试 Mobile (375px), Tablet (768px), Desktop (1440px)
   - 验证布局自适应正常

5. **性能验证**：
   - 测量启动时间: `time pnpm run docs:dev`
   - 测量热重载延迟: 修改文件到页面刷新的时间
   - 监控内存占用: Chrome 任务管理器

### 命名约定

**文档文件命名：**
- 开发文档: `dev-setup.md` (kebab-case)
- 配置文件: `config.ts` (kebab-case)
- Markdown 文件: `README.md` (大写约定)

**脚本命名：**
- 开发命令: `docs:dev` (冒号分隔，命名空间风格)
- 构建命令: `docs:build`

### Learnings from Previous Story

**From Story 1-2-initialize-project-structure (Status: ready-for-dev)**

**项目结构已就绪：**
- ✅ `package.json` 已创建，包含 `docs:dev` 和 `docs:build` 脚本
- ✅ 基础目录 `docs/.vuepress/` 已创建
- ✅ `config.ts` 配置文件已创建
- ✅ `.gitignore` 已配置，忽略 `node_modules/`, `.cache/`, `.temp/`
- ✅ 依赖已安装: VuePress 2.0.0-rc.26, vuepress-plugin-md-enhance 2.0.0-rc.99

**配置基础：**
- ✅ `base: '/AINative/'` 已在 `config.ts` 中配置
- ✅ `lang: 'zh-CN'` 语言设置完成
- ✅ 默认主题 `defaultTheme` 已启用
- ✅ 响应式 viewport meta 已配置

**待验证事项（本 Story 重点）：**
- ⚠️ Story 1.2 创建了结构，但**未验证开发服务器启动**
- ⚠️ **热重载未测试**
- ⚠️ **配置正确性未验证**（config.ts 是否可正常加载）
- ⚠️ **依赖完整性未验证**（是否所有包正确安装）

**本 Story 衔接重点：**
> Story 1.2 负责"初始化项目结构"  
> **Story 1.3 负责"验证开发环境可用性"**  
> 确保后续 Story 可以在稳定的开发环境中进行

**无 pending review items 或技术债。**

[Source: docs/stories/1-2-initialize-project-structure.md]

### References

- [Source: docs/epics.md - Epic 1, Story 1.3: 配置开发环境与本地预览]
- [Source: docs/architecture.md - Project Initialization - 本地开发预览]
- [Source: docs/architecture.md - Decision Summary - Framework/Build]
- [Source: docs/stories/1-2-initialize-project-structure.md - Dev Notes]
- [Source: docs/PRD.md - FR-5.2: 构建系统]

## Dev Agent Record

### Context Reference

- `docs/stories/1-3-configure-dev-environment-and-preview.context.xml`

### Agent Model Used

<!-- 开发agent在此记录使用的模型名称与版本 -->

### Debug Log References

<!-- 开发agent在此记录调试日志路径 -->

### Completion Notes List

<!-- 开发agent完成后填写：
- 开发服务器启动成功时间与 URL
- 热重载测试结果
- 配置验证结果
- 创建的 dev-setup.md 文档路径
- 遇到的问题与解决方案
-->

### File List

<!-- 开发agent完成后填写：
- NEW: docs/dev-setup.md
- MODIFIED: docs/.vuepress/config.ts (如有调整)
- MODIFIED: package.json (如有脚本优化)
-->

