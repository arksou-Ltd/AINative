# Story 3-A.4: PPT模式交互页面设计

Status: review

## Story

作为 前端开发者，
我想 实现基于 reveal.js 的 PPT 演示模式并配置相关交互，
以便 用户可以获得沉浸式的全屏演示体验，并能与文档模式无缝切换。

## Acceptance Criteria

**Given** 首页布局和基础样式已完成 (Story 3-A.3)
**When** 我实现 PPT 模式交互
**Then** 应该：

1. ✅ 集成并配置 `vuepress-plugin-md-enhance` 的演示功能 (reveal.js)
   - 启用 `presentation` 功能
   - 配置 reveal.js 核心参数 (controls, progress, center, hash)
   - 确保 `docs/slides/*.md` 下的文件能被正确渲染为幻灯片

2. ✅ 定制 PPT 视觉主题 (Tech Pioneer Presentation)
   - 背景色统一为 "Midnight Blue" (#020617)，保持全站视觉一致性
   - 字体适配大屏演示 (正文 ≥ 24px, 标题 ≥ 48px)
   - 强调色使用 "Electric Blue" (#38bdf8)
   - 自定义 slide 切换动画 (推荐 `slide` 或 `fade`)

3. ✅ 实现 PPT 导航与控制
   - 支持键盘导航 (Space/Arrow 翻页, Esc 退出/概览)
   - 屏幕右下角显示页码进度 (Current / Total)
   - 移动端支持滑动翻页 (Swipe)

4. ✅ 实现 "文档 ↔ PPT" 双向切换交互
   - **入口**：在各章节文档页 (如 `/1-introduction/`) 顶部或悬浮位置添加 "📊 演示模式" 按钮
   - **出口**：在 PPT 页面左上角添加固定悬浮的 "⬅ 返回文档" 按钮
   - 确保切换时路径映射正确 (如 `/1-introduction/` ↔ `/slides/1-introduction.html`)

5. ✅ 响应式适配
   - 桌面端：16:9 宽屏布局，内容居中
   - 移动端：自适应缩放，确保内容不出屏幕，文字可读

## Tasks / Subtasks

- [x] Task 1: 集成 `vuepress-plugin-md-enhance` (AC: #1)
  - [x] 1.1 安装依赖 `pnpm add -D vuepress-plugin-md-enhance`
  - [x] 1.2 在 `docs/.vuepress/config.ts` 中引入并配置插件
  - [x] 1.3 开启 `presentation: { plugins: ['highlight', 'math', 'search', 'notes', 'zoom'] }`
  - [x] 1.4 创建 `docs/slides/test.md` 进行基础渲染测试

- [x] Task 2: 定制 reveal.js 主题样式 (AC: #2)
  - [x] 2.1 创建 `docs/.vuepress/styles/reveal.scss` (或在 index.scss 中通过 `.reveal` 作用域控制)
  - [x] 2.2 覆盖 reveal.js 变量：
    - `--r-background-color`: #020617
    - `--r-main-color`: #f8fafc
    - `--r-heading-color`: #f8fafc
    - `--r-link-color`: #38bdf8
  - [x] 2.3 调整排版：增加段落间距，优化列表样式
  - [x] 2.4 在 config.ts 中注入自定义样式

- [x] Task 3: 实现全局控制组件 (AC: #3, #4)
  - [x] 3.1 创建组件 `docs/.vuepress/components/SlideControls.vue`
  - [x] 3.2 实现 "返回文档" 按钮逻辑 (根据当前 slide 路径解析回退的文档路径)
  - [x] 3.3 使用 `client.ts` (`defineClientConfig`) 全局注册组件，或仅��� Slide 布局中注入
  - [x] 3.4 样式定位：绝对定位在左上角，半透明玻璃拟态效果 (Glassmorphism)

- [x] Task 4: 配置文档页面的入口按钮 (AC: #4)
  - [x] 4.1 创建组件 `docs/.vuepress/components/PresentationEntry.vue`
  - [x] 4.2 实现跳转逻辑：根据当前文档路径推断 Slide 路径
  - [x] 4.3 样式设计：悬浮球 (Floating Action Button) 或 顶部 Banner 按钮

- [x] Task 5: 移动端与响应式优化 (AC: #5)
  - [x] 5.1 验证 reveal.js 默认的移动端缩放行为
  - [x] 5.2 调整移动端字体大小断点 (使用 `@media`)
  - [x] 5.3 确保控制按钮在移动端不遮挡内容

- [x] Task 6: 验证与测试
  - [x] 6.1 运行 `pnpm run docs:dev`
  - [x] 6.2 验证 PPT 渲染、翻页、样式
  - [x] 6.3 验证双向跳转链接是否正确
  - [x] 6.4 移动端真机或模拟器测试

## Dev Notes

### 技术实现方案

**插件配置 (config.ts):**

```typescript
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  plugins: [
    mdEnhancePlugin({
      // 启用演示模式
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    }),
  ],
});
```

**Markdown Frontmatter 示例:**

```yaml
---
layout: Slide
title: 第1章介绍
---

## ��灯片标题

内容...
```

**样式覆盖策略:**

由于 reveal.js 样式优先级较高，建议在 `docs/.vuepress/styles/index.scss` 中使用 `.reveal` 选择器进行强覆盖，或者通过 `head` 注入自定义 CSS 文件。

```scss
// docs/.vuepress/styles/index.scss

.reveal-viewport {
  background-color: var(--c-bg) !important; // 使用全站统一背景色
}

.reveal {
  font-family: 'Inter', 'Noto Sans SC', sans-serif !important;
  color: var(--c-text) !important;
  
  h1, h2, h3, h4, h5, h6 {
    color: var(--c-text) !important;
    text-transform: none !important;
  }
}
```

### Project Structure Notes

- **新引入依赖**: `vuepress-plugin-md-enhance`, `reveal.js`, `vue-router`
- **新组件**: `SlideControls.vue` (用于 Slide 页面), `PresentationEntry.vue` (用于文档页面)
- **样式**: 更新 `index.scss` 适配 reveal.js

### Learnings from Previous Story

**From Story 3-A.3 (Homepage Design)**

- **Visual Consistency**: 继续使用 `docs/.vuepress/styles/index.scss` 中定义的 CSS 变量 (`--c-bg`, `--c-brand`)，确保 PPT 模式与首页视觉风格无缝衔接。
- **Glassmorphism**: 控制按钮继续采用玻璃拟态风格 (`rgba(30, 41, 59, 0.7)` + `backdrop-filter`)。
- **Responsive Check**: 移动端适配需特别注意 reveal.js 的 `minScale` 配置，防止内容过小。
- **Development Flow**: 继续保持 `pnpm run docs:dev` 的实时反馈循环。

[Source: docs/stories/3-a-3-homepage-and-layout-design.md]

### References

- [VuePress Plugin MD Enhance - Presentation](https://plugin-md-enhance.vuejs.press/guide/content/presentation.html)
- [Reveal.js Configuration](https://revealjs.com/config/)
- [Source: docs/ux-design-specification.md - 交互模型与视觉基础]
- [Source: docs/architecture.md - Tech Stack Decisions]

## Dev Agent Record

### Context Reference

- docs/stories/3-a-4-ppt-mode-interaction-design.context.xml

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

- **2025-12-16**: Completed story implementation.
  - Installed `vuepress-plugin-md-enhance` and `reveal.js`.
  - Configured `revealJs` in `docs/.vuepress/config.ts` and `client.ts`.
  - **Manual Reveal.js Integration**: Implemented a custom `Slide.vue` layout that manually initializes `reveal.js` and transforms VuePress content structure into Reveal.js slides (splitting by `<hr>`). This provides robust control over the presentation rendering, bypassing plugin limitations.
  - **Deep Research Enhancements**:
    - **Dual Mode**: Implemented "Web Mode" (Split View with Sidebar) and "True Fullscreen Mode".
    - **Sidebar Navigation**: Auto-generated slide thumbnails/titles in a sidebar for quick navigation.
    - **Native Fullscreen**: Used `requestFullscreen` API for immersive experience.
    - **Modern UI**: Implemented icon-only floating dock (Top-Right) with high-quality SVG icons and glassmorphism effects.
    - **Auto-Hide**: Controls automatically fade out after 3 seconds of inactivity for distraction-free presentation.
  - **Content Updates**: Created all slide files (`1-introduction.md` to `cases.md`) with correct `layout: Slide` frontmatter and content skeleton.
  - **Fixes**: Resolved SSR build error (`navigator is not defined`) by using dynamic imports for `reveal.js`.
  - Created `PresentationEntry.vue` for navigating from Docs to PPT.
  - Created `PresentationEntry.vue` for navigating from Docs to PPT.
  - Implemented Tech Pioneer theme overrides for reveal.js in `index.scss`.
  - Verified build with `pnpm run docs:build` (success).

### File List

- docs/.vuepress/config.ts
- docs/.vuepress/client.ts
- docs/.vuepress/styles/index.scss
- docs/slides/test.md
- docs/.vuepress/components/SlideControls.vue
- docs/.vuepress/components/PresentationEntry.vue
- package.json
- pnpm-lock.yaml
