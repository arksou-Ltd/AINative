# Story 1.5: 配置构建流程

Status: drafted

## Story

作为 开发者,
我想 配置生产环境构建流程,
以便 可以生成可部署的静态文件。

## Acceptance Criteria

**Given** 开发环境正常运行（Story 1.4 完成）

**When** 我运行 `pnpm run docs:build`

**Then** 应该：

1. ✅ 构建成功，无报错
2. ✅ 生成 `docs/.vuepress/dist/` 目录（或对应输出目录）
3. ✅ `dist/` 包含：
   - `index.html`（首页）
   - `assets/`（CSS/JS/图片）
   - 所有页面的静态HTML文件
4. ✅ 构建产物是纯静态文件（无服务端依赖）
5. ✅ 验证产物可通过HTTP服务器访问（如 `npx serve dist`）

## Tasks / Subtasks

- [ ] Task 1: 配置构建输出路径 (AC: #2)
  - [ ] 1.1 确认 `docs/.vuepress/config.ts` 中的 `dest` 配置（默认 `dist/`）
  - [ ] 1.2 验证输出目录路径正确（相对于 `docs/` 目录）
  - [ ] 1.3 确保 `.gitignore` 包含 `dist/` 目录
  - [ ] 1.4 清理旧的构建产物（如有）

- [ ] Task 2: 配置生产环境 base 路径 (AC: #5)
  - [ ] 2.1 在 `config.ts` 中设置 `base: '/AINative/'`
  - [ ] 2.2 验证所有资源路径使用相对路径或带 base 前缀
  - [ ] 2.3 测试本地预览时 base 路径生效
  - [ ] 2.4 文档化 base 路径配置（为 GitHub Pages 准备）

- [ ] Task 3: 执行生产构建 (AC: #1, #3)
  - [ ] 3.1 运行 `pnpm run docs:build`
  - [ ] 3.2 验证构建过程无错误或警告
  - [ ] 3.3 检查构建时间（合理范围：< 30秒）
  - [ ] 3.4 验证 `dist/` 目录生成完整

- [ ] Task 4: 验证构建产物完整性 (AC: #3, #4)
  - [ ] 4.1 检查 `dist/index.html` 存在且内容正确
  - [ ] 4.2 检查 `dist/assets/` 包含 CSS、JS、图片文件
  - [ ] 4.3 验证所有 Markdown 页面已转换为 HTML
  - [ ] 4.4 确认无服务端依赖（纯静态文件）
  - [ ] 4.5 检查资源路径包含 `/AINative/` 前缀

- [ ] Task 5: 本地验证部署预览 (AC: #5)
  - [ ] 5.1 安装 `serve`：`npm install -g serve`（或使用 npx）
  - [ ] 5.2 启动本地服务器：`npx serve docs/.vuepress/dist`
  - [ ] 5.3 浏览器访问 `http://localhost:3000/AINative/`
  - [ ] 5.4 验证首页正确显示
  - [ ] 5.5 测试页面导航、样式、图片加载
  - [ ] 5.6 验证热重载已禁用（静态文件）

- [ ] Task 6: 构建产物优化检查 (AC: #4)
  - [ ] 6.1 检查 CSS/JS 文件是否已压缩（minified）
  - [ ] 6.2 验证资源文件是否有 hash 指纹（缓存优化）
  - [ ] 6.3 检查图片资源是否正确复制到 `dist/`
  - [ ] 6.4 测试不同浏览器访问（Chrome、Firefox、Safari）

- [ ] Task 7: 文档化构建流程 (AC: #1)
  - [ ] 7.1 更新项目 `README.md` 添加构建说明
  - [ ] 7.2 记录构建命令：`pnpm run docs:build`
  - [ ] 7.3 说明输出目录：`docs/.vuepress/dist/`
  - [ ] 7.4 提供本地预览命令：`npx serve docs/.vuepress/dist`
  - [ ] 7.5 添加故障排查指南（常见构建错误）

## Dev Notes

### 架构约束与模式

**构建系统架构（来自 architecture.md）：**

- **框架**：VuePress 2.0.0-rc.26 + Vite bundler
- **构建工具**：Vite（快速构建，ES modules优化）
- **输出目录**：`docs/.vuepress/dist/`
- **Base 路径**：`/AINative/`（GitHub Pages 部署需求）
- **构建产物**：纯静态 HTML/CSS/JS，无服务端依赖

**VuePress 构建配置：**

```typescript
// docs/.vuepress/config.ts
export default {
  base: '/AINative/',  // 替换为实际仓库名
  dest: 'docs/.vuepress/dist',  // 输出目录（默认值）
  
  bundler: viteBundler({
    viteOptions: {
      build: {
        minify: true,  // 压缩 CSS/JS
        cssCodeSplit: true,  // CSS 代码分割
        rollupOptions: {
          output: {
            manualChunks: undefined  // 自动分割策略
          }
        }
      }
    }
  })
}
```

**关键配置点：**

1. **base 路径**：`/AINative/`
   - 影响所有资源路径（CSS、JS、图片）
   - GitHub Pages URL 格式：`https://<username>.github.io/AINative/`
   - 本地预览需使用 `serve` 并访问 `/AINative/` 路径

2. **输出目录**：`docs/.vuepress/dist/`
   - 相对于 `docs/` 目录
   - 绝对路径：`/Users/apple/Develop/code/gitee/AINative/docs/.vuepress/dist`
   - `.gitignore` 必须包含 `dist/` 避免提交构建产物

3. **构建优化**：
   - Vite 自动压缩 CSS/JS（生产模式）
   - 自动添加资源文件 hash 指纹（缓存策略）
   - 代码分割（按页面）

### Project Structure Notes

**构建产物结构（预期）：**

```
docs/.vuepress/dist/
├── index.html              # 首页
├── 404.html                # 404 页面（自动生成）
├── assets/
│   ├── app.{hash}.js       # 应用主逻辑（带 hash）
│   ├── app.{hash}.css      # 应用样式（带 hash）
│   ├── chunk-{hash}.js     # 代码分割 chunk
│   └── ...
├── ai-native-intro/
│   ├── index.html
│   ├── core-hook.html
│   └── ...
├── case-studies/
│   └── ...
├── transformation/
│   └── ...
├── images/
│   └── ...                 # 从 .vuepress/public/ 复制
└── slides/
    └── ...                 # PPT 模式页面（如已实现）
```

**关键特征：**

- 所有 Markdown 文件转换为 HTML
- 资源文件添加 hash 指纹（`app.abc123.js`）
- 目录结构保持与源文件一致
- `public/` 目录内容直接复制到根目录

### 构建命令与验证

**构建命令：**

```bash
# 生产构建
pnpm run docs:build

# 等效于
npx vuepress build docs
```

**本地预览构建产物：**

```bash
# 方案 1：使用 serve（推荐）
npx serve docs/.vuepress/dist

# 访问: http://localhost:3000/AINative/
# 注意：必须访问 /AINative/ 路径，因为 base 设置为此值
```

```bash
# 方案 2：使用 Python HTTP 服务器（备选）
cd docs/.vuepress/dist
python3 -m http.server 3000

# 访问: http://localhost:3000/AINative/
```

**验证清单：**

1. ✅ 首页正确显示（`/AINative/`）
2. ✅ 导航链接正常工作
3. ✅ 样式正确加载（CSS 变量生效）
4. ✅ 图片正确显示（路径带 `/AINative/` 前缀）
5. ✅ 控制台无 404 错误
6. ✅ 响应式布局正常（Story 1.4 样式生效）

### 常见问题与解决方案

**问题 1：构建失败，提示找不到模块**
- **原因**：依赖未安装或版本不匹配
- **解决**：`pnpm install --frozen-lockfile` 重新安装依赖

**问题 2：本地预览显示 404**
- **原因**：未访问 `/AINative/` 路径
- **解决**：确保访问 `http://localhost:3000/AINative/`（带 base 前缀）

**问题 3：样式/图片无法加载**
- **原因**：资源路径未包含 base 前缀
- **解决**：
  - 确认 `config.ts` 中 `base: '/AINative/'`
  - 重新构建：`pnpm run docs:build`

**问题 4：构建时间过长（>1分钟）**
- **原因**：文件过多或依赖过大
- **解决**：
  - 检查 `node_modules/` 是否过大
  - 确认 `.gitignore` 正确排除 `dist/`
  - 清理缓存：`rm -rf node_modules/.vite`

**问题 5：热重载不工作（生产环境）**
- **说明**：这是预期行为，生产构建产物为静态文件，无热重载
- **验证**：开发模式使用 `pnpm run docs:dev`，构建后使用 `serve` 预览

### Performance Considerations

**构建性能：**

- **预期构建时间**：< 30秒（首次构建）
- **增量构建**：Vite 缓存机制，后续构建 < 10秒
- **优化策略**：
  - 代码分割：按页面自动分割
  - Tree shaking：移除未使用代码
  - 压缩：CSS/JS minify
  - 资源优化：图片 lazy load（开发时配置）

**产物大小（预估）：**

- **总大小**：< 5MB（包含所有页面、样式、图片）
- **首页**：< 500KB（初始加载）
- **单页面**：< 200KB（按需加载）

**性能目标（符合 PRD NFR-1）：**

- ✅ 首页加载 < 2秒（3G 网络）
- ✅ Lighthouse Performance > 90分
- ✅ 资源压缩率 > 60%（gzip）

### Learnings from Previous Story

**From Story 1-4-create-responsive-layout-framework (Status: review)**

**响应式样式框架已完成：**
- ✅ `docs/.vuepress/styles/index.css` 创建（700+ 行）
- ✅ 40+ CSS 变量系统定义完成
- ✅ 5 层响应式断点实现（Mobile, Tablet, Tablet Landscape, Desktop, XL Desktop）
- ✅ 移动优先（Mobile First）设计原则落地
- ✅ 实用工具类提供（文本、颜色、间距、显示/隐藏）
- ✅ 详细的使用说明注释和响应式示例

**技术栈确认（与本 Story 相关）：**
- ✅ VuePress 2.0.0-rc.26 正常运行
- ✅ Vite bundler 构建速度快（开发服务器 337ms 启动）
- ✅ 热重载功能正常（<2s 响应）
- ✅ 样式自动加载机制验证通过（`docs/.vuepress/styles/index.css`）

**构建相关验证（本 Story 需确认）：**
- ⚠️ **生产构建未验证**：需确认 `pnpm run docs:build` 成功
- ⚠️ **样式文件是否正确打包**：需验证 `dist/assets/` 包含自定义样式
- ⚠️ **响应式布局是否在构建后生效**：需通过 `serve` 预览验证
- ⚠️ **CSS 变量是否正确注入**：需在构建产物中检查

**本 Story 衔接重点：**
> Story 1.4 建立了响应式样式基础  
> **Story 1.5 验证构建流程与样式打包**  
> 确保样式框架在生产环境正确工作，为 Epic 2（部署验证）做准备

**无 pending review items 或技术债。**

[Source: docs/stories/1-4-create-responsive-layout-framework.md#Completion-Notes]

### References

- [Source: docs/epics.md - Epic 1, Story 1.5: 配置构建流程]
- [Source: docs/architecture.md - Decision Summary - Deployment]
- [Source: docs/architecture.md - Deployment Architecture]
- [Source: docs/PRD.md - FR-5.2: 构建系统]
- [Source: docs/stories/1-4-create-responsive-layout-framework.md - Completion Notes]

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

<!-- 开发agent在此记录使用的模型名称与版本 -->

### Debug Log References

<!-- 开发agent在此记录调试日志路径 -->

### Completion Notes List

<!-- 开发agent完成后填写：
- 构建命令执行结果
- 构建时间
- 产物大小统计
- 本地预览验证结果
- 遇到的问题与解决方案
- base 路径验证结果
-->

### File List

<!-- 开发agent完成后填写：
- MODIFIED: docs/.vuepress/config.ts（如有 base 路径调整）
- MODIFIED: README.md（添加构建说明）
- MODIFIED: .gitignore（确保包含 dist/）
- VERIFIED: docs/.vuepress/dist/（构建产物目录）
-->

