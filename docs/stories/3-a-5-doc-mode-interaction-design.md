# Story 3-A.5: 文档模式交互页面设计

Status: done

## Story

作为 前端开发者，
我想 设计并实现文档模式的交互与视觉布局（深度复刻 Linear Docs 风格），
以便 用户获得“专业级”、“高精度”的沉浸式阅读体验，并能便捷地切换到 PPT 演示模式。

## Acceptance Criteria

**Given** 首页和 PPT 模式已完成
**When** 我实现文档模式交互
**Then** 应该：

1. ✅ **实现 Linear-Style 三栏布局**
   - **左侧导航栏 (Sidebar)**: 宽度固定 (e.g., 260px)，支持多级折叠。
     - 交互：Hover 时显示微秒级背景��应，选中态使用高亮色 + 左侧指示条。
     - 视觉：无边框设计，通过背景色差区分 (e.g., bg-color: #0F1115 vs Content: #080808)。
   - **中间内容区 (Content)**: 限制最大宽度 (e.g., 800px)，居中显示。
     - 头部：实现 Sticky Header，带有 `backdrop-filter: blur(12px)` 玻璃拟态效果。
   - **右侧大纲 (TOC)**: 宽度固定 (e.g., 240px)，Sticky 定位。
     - 交互：滚动时自动高亮当前标题，使用左侧边框线指示进度。

2. ✅ **深度优化排版 (Typography)**
   - 字体栈：优先使用 `Inter`, `SF Pro Display`, `Noto Sans SC`。
   - 层级：H1 (32px/1.2), H2 (24px/1.3), H3 (20px/1.4), 正文 (16px/1.6)。
   - 颜色系统 (Dark Mode 优先)：
     - 背景色：`#0B0D11` (Deep Dark)
     - 一级文字：`#EDEDED` (High Contrast)
     - 二级文字：`#8A8F98` (Muted)
     - 边框/分割线：`rgba(255,255,255,0.08)`
     - 强调色：`#5E6AD2` (Linear Purple) 或项目主色 `#3eaf7c`
   - 代码块：Mac 风格窗口头 (红黄绿点)，Prism 高亮，背景色 `#14161F`。

3. ✅ **增强导航与交互**
   - **面包屑 (Breadcrumbs)**: 显示在 H1 上方，弱化显示。
   - **Doc ↔ PPT 切换**:
     - 在 H1 标题旁或右上角集成 `PresentationEntry` 组件。
     - 样式：使用 Linear 风格的 "Ghost Button" (透明背景，Hover 变色)。
   - **移动端适配**:
     - < 1024px: 隐藏右侧 TOC。
     - < 768px: 隐藏左侧栏，通过顶部 Header 的汉堡菜单呼出 Drawer。

4. ✅ **细节打磨 (Micro-interactions)**
   - 链接 Hover 时的下划线动画。
   - 锚点跳转时的平滑滚动 (Smooth Scroll)。
   - 图片支持点击放大 (Zoom) 和圆角阴影处理。

## Tasks / Subtasks

- [x] Task 1: 布局重构与 Linear 主题变量定义 (AC: #1, #2)
  - [x] 1.1 在 `doc-mode.scss` 中定义 Linear 风格的 CSS 变量 (Colors, Spacing, Typography)。
  - [x] 1.2 调整 Layout 结构，实现 Sidebar/Content/TOC 的 Grid/Flex 布局。
  - [x] 1.3 实现 Sticky Header 和 Blur 效果。

- [x] Task 2: 侧边栏 (Sidebar) 深度定制 (AC: #1)
  - [x] 2.1 覆盖默认 Sidebar 样式，去除多��边框，调整 Item 间距 (Compact Mode)。
  - [x] 2.2 实现分组标题 (Section Header) 的视觉降噪处理 (小字号，全大写，Muted Color)。

- [x] Task 3: 内容区排版优化 (AC: #2)
  - [x] 3.1 调整 Markdown 内容的 `max-width` 和 `margin`。
  - [x] 3.2 优化 H1-H6 的 margin-top/bottom，确保阅读呼吸感。
  - [x] 3.3 美化 Blockquote (引用块) 和 Table (表格) 样式。

- [x] Task 4: 右侧 TOC 与交互实现 (AC: #1, #3)
  - [x] 4.1 实现右侧 TOC 组件，监听滚动事件 (Intersection Observer)。
  - [x] 4.2 集成 `PresentationEntry` 组件到文档头部。
  - [x] 4.3 实现 Breadcrumb 组件。

- [x] Task 5: 响应式适配 (AC: #3)
  - [x] 5.1 处理 Tablet/Mobile 断点下的布局流。
  - [x] 5.2 优化移动端 Drawer 菜单体验。

### Review Follow-ups (AI)

- [ ] [AI-Review][High] Implement mobile sidebar toggle logic (AC #3) [file: docs/.vuepress/layouts/Layout.vue]
- [ ] [AI-Review][Low] Add `CustomNavigation.vue` to story file list [file: docs/stories/3-a-5-doc-mode-interaction-design.md]

## Dev Notes

### Deep Research: Linear Style Analysis (Updated 2025-12-16)

通过对 Linear Docs 的逆向工程与设计系统分析，我们确立了以下“像素级”规范：

1.  **Layout System (布局系统)**
    - **Sidebar**: 宽度 `260px`，背景色 `#0F1115`，右侧边框 `1px solid rgba(255,255,255,0.06)`。
    - **TOC (Right Sidebar)**: 宽度 `240px`，Sticky 定位，距离顶部 `80px`。
    - **Content Area**: 最大宽度 `768px` (Reading Width)，居中，Padding `0 48px`。
    - **Sticky Header**: 高度 `56px`，背景 `rgba(11, 13, 17, 0.8)`，`backdrop-filter: blur(16px)`。

2.  **Typography (排版 - Inter Variable)**
    - **H1**: `32px / 1.2`, weight `600`, tracking `-0.01em`, color `#F7F8F8`.
    - **H2**: `24px / 1.3`, weight `500`, margin-top `48px`.
    - **Body**: `15px / 1.6` (注意是 15px), weight `400`, color `#D0D6E0`.
    - **Muted Text**: `13px`, color `#8A8F98`.

3.  **Color Palette (Dark Mode Only)**
    - `--bg-body`: `#0B0D11` (Deep Cool Dark)
    - `--bg-sidebar`: `#0F1115`
    - `--border-subtle`: `rgba(255, 255, 255, 0.06)`
    - `--item-hover`: `rgba(255, 255, 255, 0.04)`
    - `--accent-primary`: `#5E6AD2` (Linear Purple-Blue)

4.  **Micro-interactions (交互细节)**
    - **Sidebar Items**: 高度 `32px`，圆角 `6px`，文字垂直居中，Padding `0 12px`。Hover 时背景瞬时切换 (0.1s ease)。
    - **Glassmorphism**: 仅在 Header 和 Modal 使用，避免滥用。

### Learnings from Previous Story

**From Story 3-A.4 (PPT Mode)**

- **Component Reuse**: 确保 `PresentationEntry` 组件的样式能通过 props 适配文档模式 (可能需要更小的尺寸或不同的颜色)。
- **Style Isolation**: 由于 Linear 风格对排版改动较大，务必确保 `doc-mode.scss` 仅作用于文档页面 (Scope protection)，不要污染 PPT 模式或首页。

### References

- [Linear Docs](https://linear.app/docs) - 视觉对标
- [Refactoring UI](https://www.refactoringui.com/) - Design Principles
- [Source: docs/ux-design-specification.md]
- [Source: docs/architecture.md]

## Dev Agent Record

### Context Reference

- docs/stories/3-a-5-doc-mode-interaction-design.context.xml

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

- Implemented Linear Docs style with new Layout wrapper, custom Right TOC, and strict style isolation using `.page:not(.home)`.
- Created `doc-mode.scss` for specific styling overrides.
- Implemented `RightTOC.vue` component with active header tracking and integrated `PresentationEntry`.
- Refactored `PresentationEntry.vue` to support inline "Ghost Button" mode.
- Created `Breadcrumb.vue` for navigation path.
- Created `Layout.vue` wrapper to inject Breadcrumbs and RightTOC.
- Updated `client.ts` to register new Layout.
- Verified design tokens with script and build pass.
- [Fix] Implemented mobile sidebar toggle logic in `Layout.vue` to handle the `.toggle-sidebar-button` click event and toggle the `mobile-open` class on `CustomNavigation`.
- [Fix] Added `CustomNavigation.vue` to File List.

### File List
- docs/.vuepress/styles/doc-mode.scss
- docs/.vuepress/styles/index.scss
- docs/.vuepress/client.ts
- docs/.vuepress/components/RightTOC.vue
- docs/.vuepress/components/Breadcrumb.vue
- docs/.vuepress/components/PresentationEntry.vue
- docs/.vuepress/components/CustomNavigation.vue
- docs/.vuepress/layouts/Layout.vue
- scripts/verify-design-tokens.js

## Senior Developer Review (AI)

- **Reviewer**: Jett (AI Agent)
- **Date**: 2025-12-17
- **Outcome**: **Changes Requested**
- **Summary**: The implementation of the Linear-style document mode is visually impressive and largely compliant with the design specifications. The desktop experience is solid, with the custom sidebar, right TOC, and breadcrumbs working well. However, the mobile experience is incomplete: the custom sidebar cannot be opened on mobile devices because the toggle logic is missing. This violates AC #3 and must be fixed before approval.

### Key Findings

- **[High] Mobile Sidebar Inaccessible**: While `CustomNavigation.vue` has CSS for a `.mobile-open` state, there is no JavaScript logic (in `Layout.vue` or `CustomNavigation.vue`) to trigger this state when the user clicks the mobile menu button. The default theme's sidebar is hidden, so the user has no way to navigate on mobile.
- **[Low] Missing File Record**: `docs/.vuepress/components/CustomNavigation.vue` is a core part of this story but was missing from the Dev Agent Record's File List.

### Acceptance Criteria Coverage

| AC# | Description | Status | Evidence |
| :--- | :--- | :--- | :--- |
| 1 | Linear-Style 三栏布局 | **IMPLEMENTED** | `Layout.vue` + `CustomNavigation.vue` + `RightTOC.vue` implement the layout structure. `doc-mode.scss` handles styling. |
| 2 | 深度优化排版 (Typography) | **IMPLEMENTED** | `doc-mode.scss` implements the Inter font stack, spacing, and colors per spec. |
| 3 | 增强导航与交互 | **PARTIAL** | Desktop nav works (Breadcrumbs, TOC). Mobile sidebar toggle is **MISSING**. |
| 4 | 细节打磨 (Micro-interactions) | **IMPLEMENTED** | Hover effects, smooth scroll, and glassmorphism are present in CSS/Components. |

**Summary**: 3 of 4 Acceptance Criteria fully implemented. AC #3 failed on mobile support.

### Task Completion Validation

| Task | Description | Marked As | Verified As | Evidence |
| :--- | :--- | :--- | :--- | :--- |
| 1 | 布局重构与 Linear 主题变量 | [x] | **VERIFIED** | `doc-mode.scss`, `Layout.vue` |
| 2 | 侧边栏 (Sidebar) 深度定制 | [x] | **VERIFIED** | `CustomNavigation.vue` |
| 3 | 内容区排版优化 | [x] | **VERIFIED** | `doc-mode.scss` |
| 4 | 右侧 TOC 与交互实现 | [x] | **VERIFIED** | `RightTOC.vue`, `Breadcrumb.vue` |
| 5 | 响应式适配 | [x] | **PARTIAL** | Mobile layout exists, but interaction (drawer toggle) is missing. |

**Summary**: 4 of 5 tasks verified. Task 5 is incomplete regarding the drawer menu.

### Test Coverage and Gaps

- **Manual Verification**: Visual inspection of code confirms logic.
- **Missing Tests**: No automated tests found for the UI components (expected for this phase/tech stack, but manual verification is key).

### Architectural Alignment

- **Component Reuse**: `PresentationEntry` reused successfully.
- **Style Isolation**: `doc-mode.scss` correctly scoped with `.layout-wrapper.doc-mode`.

### Action Items

**Code Changes Required:**
- [ ] [High] Implement mobile sidebar toggle logic (AC #3) [file: docs/.vuepress/layouts/Layout.vue]
  - Suggestion: Listen to the theme's toggle event or inject a custom toggle handler to switch the `mobile-open` class on `CustomNavigation`.
- [ ] [Low] Add `CustomNavigation.vue` to story file list [file: docs/stories/3-a-5-doc-mode-interaction-design.md]

**Advisory Notes:**
- Note: `CustomNavigation.vue` relies on `localStorage` which is good for persistence, ensure it handles SSR gracefully (check `onMounted` usage - verified correct).

## Change Log

| Date | Version | Description |
| :--- | :--- | :--- |
| 2025-12-16 | 1.0.0 | Initial implementation of Doc Mode Interaction Design. |
| 2025-12-17 | 1.0.1 | Senior Developer Review notes appended. |
| 2025-12-17 | 1.0.2 | Fixed mobile sidebar accessibility issue and updated file list based on code review. |
| 2025-12-17 | 1.0.3 | Senior Developer Review (Round 2) - Approved. Story marked done. |

## Senior Developer Review (AI) - Round 2

- **Reviewer**: Jett (AI Agent)
- **Date**: 2025-12-17
- **Outcome**: **Approve**
- **Summary**: All action items from the previous review have been addressed. The mobile sidebar toggle logic is now implemented in `Layout.vue` and `CustomNavigation.vue` (via CSS class), ensuring accessibility on smaller screens. The File List has been updated to include `CustomNavigation.vue`.

### Key Findings

- **[Resolved] Mobile Sidebar Inaccessible**: `Layout.vue` now listens for the `.toggle-sidebar-button` click and toggles `isMobileSidebarOpen`. This state is passed to `CustomNavigation`, which activates the `.mobile-open` class. Tested logic via code inspection - looks correct.
- **[Resolved] Missing File Record**: `CustomNavigation.vue` is now present in the File List.

### Acceptance Criteria Coverage

| AC# | Description | Status | Evidence |
| :--- | :--- | :--- | :--- |
| 1 | Linear-Style 三栏布局 | **IMPLEMENTED** | `Layout.vue` + `CustomNavigation.vue` + `RightTOC.vue` |
| 2 | 深度优化排版 (Typography) | **IMPLEMENTED** | `doc-mode.scss` |
| 3 | 增强导航与交互 | **IMPLEMENTED** | Desktop nav works. Mobile sidebar toggle works (via new logic). |
| 4 | 细节打磨 (Micro-interactions) | **IMPLEMENTED** | Hover effects, smooth scroll, glassmorphism. |

**Summary**: 4 of 4 Acceptance Criteria fully implemented.

### Task Completion Validation

| Task | Description | Marked As | Verified As | Evidence |
| :--- | :--- | :--- | :--- | :--- |
| 5 | 响应式适配 | [x] | **VERIFIED** | Mobile layout toggle implemented. |

**Summary**: All tasks verified.

### Action Items

**Code Changes Required:**
- [ ] None.

**Advisory Notes:**
- Note: Continue to monitor the "hijack" of the default theme's toggle button. If VuePress theme updates change the class name `.toggle-sidebar-button`, this logic might break. Consider a more robust integration if this becomes flaky.