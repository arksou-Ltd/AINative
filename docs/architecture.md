# Architecture

## Executive Summary

本架构采用 VuePress 2 + Vite 构建静态文档站点，内置 reveal.js PPT 模式，部署到 GitHub Pages，覆盖文档模式与演示模式的双入口，强调性能（首屏 <2s）、SEO 与可访问性合规，提供清晰的目录信息架构与一致的实现规范，确保后续内容与样式扩展可持续。

---

## Implementation Status (2025-12-17)

### ✅ Completed Components & Systems

**核心构建系统**:
- VuePress 2 + Vite bundler ✅
- TypeScript 支持 ✅
- GitHub Pages 部署流程 ✅
- 本地开发环境 ✅

**PPT 演示模式**:
- reveal.js 集成 (vuepress-plugin-md-enhance) ✅
- Slide 布局组件 (Slide.vue) ✅
- PPT 导航控制 (SlideControls.vue) ✅
- PPT 侧边栏 (SlideSidebar.vue) ✅
- 7 个 slide 文件框架已创建 ✅

**Document 文档模式**:
- 自定义三栏布局系统 (Layout.vue) ✅
- Linear Docs 风格主题 (doc-mode.scss) ✅
- 自定义导航组件 (CustomNavigation.vue) ✅
- 右侧目录组件 (RightTOC.vue) ✅
- 面包屑导航 (Breadcrumb.vue) ✅
- Markdown 渲染引擎配置 ✅
- 移动端响应式布局 ✅

**双模式交互**:
- Doc ↔ PPT 切换机制 (PresentationEntry.vue) ✅
- 导航栏切换按钮 (NavbarPresentationButton.vue) ✅
- 统一配置系统 ✅

**样式系统**:
- Linear Docs 风格颜色系统 ✅
- 响应式断点 (768px, 1024px) ✅
- Dark mode 优先设计 ✅
- 全局样式 (index.scss) ✅

### 🚧 In Progress

**Epic 3-B: 内容创作与填充** (当前焦点):
- 文档模式 6 章内容编写
- PPT 模式 45 页内容填充
- 图片资源准备与集成
- 内容质量验证

**Epic 6: 优化与发布** (待 3-B 完成):
- SEO 优化
- 性能优化
- 可访问性测试
- 文档完善

### 📁 Core File Structure (As Implemented)

```plaintext
docs/
├── .vuepress/
│   ├── components/
│   │   ├── CustomNavigation.vue      ✅ 自定义导航系统
│   │   ├── RightTOC.vue              ✅ 右侧目录
│   │   ├── Breadcrumb.vue            ✅ 面包屑导航
│   │   ├── PresentationEntry.vue     ✅ 模式切换入口
│   │   ├── NavbarPresentationButton.vue ✅ 导航栏按钮
│   │   ├── SlideControls.vue         ✅ PPT 控制条
│   │   ├── SlideSidebar.vue          ✅ PPT 侧边栏
│   │   └── StoryContext.vue          ✅ 故事上下文
│   ├── layouts/
│   │   ├── Layout.vue                ✅ 文档模式布局
│   │   └── Slide.vue                 ✅ PPT 模式布局
│   ├── styles/
│   │   ├── doc-mode.scss             ✅ Linear Docs 主题
│   │   └── index.scss                ✅ 全局样式
│   ├── config.ts                     ✅ VuePress 配置
│   └── client.ts                     ✅ 客户端配置
├── slides/                           ✅ 结构已创建 (7个文件)
│   ├── 1-introduction.md             🚧 框架就绪，待填充内容
│   ├── 2-comparison.md               🚧 框架就绪，待填充内容
│   ├── 3-definition.md               🚧 框架就绪，待填充内容
│   ├── 4-practice.md                 🚧 框架就绪，待填充内容
│   ├── 5-transition.md               🚧 框架就绪，待填充内容
│   ├── 6-outlook.md                  🚧 框架就绪，待填充内容
│   └── cases.md                      🚧 框架就绪，待填充内容
├── 1-introduction/                   🚧 目录结构已创建，待填充
├── 2-comparison/                     🚧 目录结构已创建，待填充
├── 3-core-definition/                🚧 目录结构已创建，待填充
├── 4-practice-demo/                  🚧 目录结构已创建，待填充
├── 5-transition-practice/            🚧 目录结构已创建，待填充
├── 6-outlook/                        🚧 目录结构已创建，待填充
└── case-studies/                     🚧 目录结构已创建，待填充
```

### 🎯 Next Steps

1. **内容创作**:
   - 填充所有章节 Markdown 内容
   - 填充所有 PPT slide 内容
   - 准备并集成图片资源

2. **内容集成验证**:
   - 验证导航正确性
   - 测试所有链接
   - 确保移动端体验

3. **优化与发布**:
   - SEO 配置
   - 性能优化
   - 最终测试与发布

---

## Project Context (Working)

- 项目类型：静态文档网站（文档模式 + PPT模式）部署到 GitHub Pages，纯前端、无后端/数据库/用户系统/实时交互
- 主要内容：3 章（AI Native 简述、真实案例、转化路程），Markdown 驱动，配图为主
- 关键功能：Document 模式（3 级导航树、响应式、Markdown 渲染）、PPT 模式（reveal.js，30-50 页）、首页与联系页
- 性能与质量：首屏 <2s、Lighthouse >90，SEO 友好（meta/OG/sitemap），可访问性 AA 水平
- 规模与规划：6 个 Epic，33 个 Story；先基础设施与部署，再内容与双模式，最终优化发布

## Project Initialization

执行顺序与命令（先本地验证，再接入 CI/CD）：
- 包管理器：pnpm（建议 8.x，与 lockfile 对齐）
- Node 版本：18 LTS（锁定于 CI 中）
- 依赖安装：
  ```bash
  pnpm install --frozen-lockfile
  ```
- 本地开发预览：
  ```bash
  pnpm run docs:dev   # alias to `vuepress dev docs`
  ```
- 生产构建：
  ```bash
  pnpm run docs:build # alias to `vuepress build docs`
  ```
- 初始化（若尚未生成骨架，可参考）：
  ```bash
  pnpm create vuepress@latest
  # 交互选择 Vite bundler，启用 TypeScript；使用现有 docs 目录
  ```
- 部署（CI 推送到 gh-pages 分支，详见 Deployment Architecture）

## Starter Template Decision

- 选择：VuePress 2.x（最新稳定版待联网校验）+ vuepress-plugin-revealjs（最新稳定版待联网校验）
- 初始化命令（推荐先校验版本后执行）：
  ```bash
  npm view vuepress version        # 记录当前稳定版
  npm view vuepress-plugin-revealjs version
  npm create vuepress@latest
  # 交互选择项目目录（使用当前仓库），选择 Vite bundler，启用 TypeScript 支持
  ```
- Starter 提供的决策（标记为 PROVIDED BY STARTER）：
  - 框架：VuePress 2（Vue 3，默认 Vite bundler）
  - 语言：TypeScript 可选（建议开启）
  - 构建/开发脚本：`vuepress dev/build`（通过 npm scripts）
  - Lint/格式化：无强制，需要后续决策（ESLint/Prettier）
  - 目录结构：`docs/.vuepress/{config.ts, styles, public}` + Markdown 内容
- 需额外决策/集成：
  - reveal.js 集成：安装并配置 `vuepress-plugin-revealjs`，为 `/slides/` 提供 PPT 模式
  - 主题/导航：侧边栏 3 级导航配置，首页/联系页布局
  - SEO/性能：meta/OG/sitemap 插件、图片优化、懒加载
  - QA：ESLint/Prettier、简单单测（如无则文档化约束）

## Decision Summary

| Category | Decision | Version | Affects Epics | Rationale |
| -------- | -------- | ------- | ------------- | --------- |
| Framework/Build | VuePress 2 + Vite bundler + TypeScript | vuepress@2.0.0-rc.26（pnpm view 2025-12-15）；Node 18.x LTS | Epic 1/2/5/6 | Starter 贴合中文文档 + 静态站点，Vite 构建快，TS 降低回归 |
| PPT Mode | `vuepress-plugin-md-enhance`（presentation/reveal），slides `docs/slides/*.md` → `/slides/*.html` | 2.0.0-rc.99（pnpm view 2025-12-15） | Epic 4/5 | 低成本集成 30-50 页 PPT，复用 Markdown |
| Deployment | GitHub Pages `base: /AINative/`; CI: setup-node@v4 + `pnpm install --frozen-lockfile` + `pnpm run docs:build`; 发布 `docs/.vuepress/dist` → gh-pages | Node 18.x；pnpm 8.x | Epic 2/6 | 标准 Pages 流，锁版本降故障 |
| Information Architecture | 3 级 sidebar：`ai-native-intro/*`, `case-studies/*`, `transformation/*`; Doc↔PPT 映射 `/ai-native-intro/` ↔ `/slides/intro.html` 等；首页 `/`，联系 `/contact.html` | n/a | Epic 4/5/6 | 明确导航与模式切换，降低跳出 |
| Performance | 图片 <200KB，WebP 优先，`loading="lazy"`；首屏 <2s，Lighthouse >90；移除未用插件 | n/a | Epic 6 | 保证体验与指标 |
| SEO & Accessibility | 全局 meta/OG，sitemap + robots.txt，h1→h2→h3；alt 完整；键盘可导航 | n/a | Epic 6 | 提升曝光与无障碍 |
| Theme/Styles | 主色 #1F6FEB，字体 Inter + Noto Sans SC（本地备选），断点 768/1024；PPT 主题浅色简洁 | n/a | Epic 4/5/6 | 统一视觉与响应式 |
| Markdown Enhancements | 提示块、Prism 高亮、表格横向滚动、自动锚点 | n/a | Epic 5 | 提升文档可读性 |
| Code Quality | ESLint + Prettier（若不装则文档约束）；可选 commit lint | n/a | Epic 1/6 | 控制一致性，便于贡献 |
| Content/Assets | kebab-case 命名；图片路径 `/images/*`；slides 与 docs 共用内容源 | n/a | Epic 3/4/5 | 统一资产管理 |

## Project Structure

```
AINative/
├── docs/
│   ├── README.md                          # 首页（双入口按钮：PPT / Document）
│   ├── contact.md                         # 联系页
│   ├── information-architecture.md        # IA设计文档
│   │
│   ├── 1-introduction/                    # 第1章：介绍
│   │   ├── README.md
│   │   └── why-organizational-capability.md
│   │
│   ├── 2-comparison/                      # 第2章：现状对比
│   │   ├── README.md
│   │   ├── traditional-organization.md
│   │   └── ai-native-organization.md
│   │
│   ├── 3-core-definition/                 # 第3章：核心定义
│   │   ├── README.md
│   │   ├── builder-ai-team.md
│   │   ├── professional-optimization.md
│   │   └── result-oriented-division.md
│   │
│   ├── 4-practice-demo/                   # 第4章：AI Native实践演示
│   │   ├── README.md
│   │   ├── demo-overview.md
│   │   ├── toolchain-setup.md
│   │   ├── workflow-demonstration.md
│   │   └── reference.md
│   │
│   ├── 5-transition-practice/             # 第5章：过渡性转化路程实践
│   │   ├── README.md
│   │   ├── 5-1-organization-architecture/ # 5.1 组织架构转型
│   │   │   ├── README.md
│   │   │   ├── standard-model/            # 标准型组织
│   │   │   │   ├── README.md
│   │   │   │   ├── core-principles.md
│   │   │   │   ├── team-scale.md
│   │   │   │   ├── role-definition.md
│   │   │   │   └── work-style.md
│   │   │   ├── transitional-model/        # 过渡型组织
│   │   │   │   ├── README.md
│   │   │   │   ├── new-products.md
│   │   │   │   └── existing-products.md
│   │   │   └── transition-roadmap/        # 过渡性实施路线
│   │   │       ├── README.md
│   │   │       ├── organization-level.md
│   │   │       ├── daily-workflow.md
│   │   │       └── product-development/   # 7步产品开发流程
│   │   │           ├── README.md
│   │   │           ├── 1-data-analysis.md
│   │   │           ├── 2-idea-generation.md
│   │   │           ├── 3-market-research.md
│   │   │           ├── 4-competitive-analysis.md
│   │   │           ├── 5-requirements.md
│   │   │           ├── 6-ux-design.md
│   │   │           └── 7-development.md
│   │   └── 5-2-core-practices/            # 5.2 核心实践方法论
│   │       ├── README.md
│   │       ├── bmad-method/               # BMAD-METHOD详解
│   │       │   ├── README.md
│   │       │   ├── core-features.md
│   │       │   ├── quality-guarantee.md
│   │       │   └── how-to-use.md
│   │       ├── builder-growth-path.md
│   │       └── tool-stack-guide.md
│   │
│   ├── 6-outlook/                         # 第6章：AI Native展望
│   │   ├── README.md
│   │   ├── scenario-distinction.md
│   │   ├── path-1-builder.md
│   │   ├── path-2-specialist.md
│   │   └── staying-relevant.md
│   │
│   ├── case-studies/                      # 案例库（独立章节）
│   │   ├── README.md
│   │   ├── success-companies/             # 成功公司案例
│   │   │   ├── README.md
│   │   │   ├── openai.md
│   │   │   ├── cursor-ai.md
│   │   │   ├── commonwealth-bank.md
│   │   │   └── bupa.md
│   │   ├── organization-transformation/   # 组织转型案例
│   │   │   ├── README.md
│   │   │   ├── amazon.md
│   │   │   ├── moderna.md
│   │   │   ├── bayer.md
│   │   │   └── nvidia.md
│   │   └── market-data.md
│   │
│   ├── slides/                            # PPT 演示模式
│   │   ├── 1-introduction.md              # 对应第1章
│   │   ├── 2-comparison.md                # 对应第2章
│   │   ├── 3-definition.md                # 对应第3章
│   │   ├── 4-practice.md                  # 对应第4章
│   │   ├── 5-transition.md                # 对应第5章
│   │   ├── 6-outlook.md                   # 对应第6章
│   │   └── cases.md                       # 对应案例库
│   │
│   └── .vuepress/
│       ├── config.ts                      # VuePress 配置（base、sidebar、head、插件）
│       ├── styles/
│       │   └── index.css                  # 主题定制（颜色/字体/断点）
│       └── public/
│           └── images/                    # 站点图片（WebP/<200KB，kebab-case）
├── package.json
├── package-lock.json
├── .github/workflows/deploy.yml
└── README.md                              # 项目级说明
```

## Epic to Architecture Mapping

- Epic 1 基础设施：框架选型（VuePress 2 + Vite + TS）、目录骨架、开发/构建脚本、基础样式变量。
- Epic 2 部署验证：GitHub Actions + Pages 发布，base 路径 `/AINative/`，Hello World 验证。
- **Epic 3-A 内容框架搭建**：建立完整的6章目录结构（1-6章 + 案例库），配置VuePress导航系统，创建IA设计文档。
- **Epic 3-B 内容填充**：填充所有6章内容（30000+字）+ 8个案例分析 + 图片资源（WebP格式）。
- Epic 4 PPT 模式：`vuepress-plugin-revealjs` 集成，7个PPT文件（对应6章+案例库），浅色主题。
- Epic 5 Document 模式：多层侧边栏、导航高亮、表格滚动、提示块、代码高亮、Doc↔PPT 跳转按钮。
- Epic 6 发布与优化：SEO（meta/OG/sitemap/robots）、性能（lazy-load, WebP, <200KB）、可访问性（alt/对比度/键盘导航），README/CONTRIBUTING。

## FR Coverage Notes
- FR-1 内容展示：6 章章节架构（1-introduction ~ 6-outlook + case-studies），所有图片资源路径 `/images`，slides 与 docs 一一对应。
- FR-2 文档模式：多层侧边栏（章节5支持3层嵌套）、表格滚动、代码高亮、提示块（Implementation Patterns + IA）。
- FR-3 PPT 模式：slides 目录包含7个文件，每章独立PPT，支持全屏演示和键盘导航。
- FR-4 首页/联系页：结构树包含 README（首页）与 contact.md。
- FR-5 部署：GitHub Pages + gh-pages 发布流程。
- FR-6 SEO/性能：决策表 + Performance/SEO 章节；需补充 meta/OG/robots 示例（见下）。

## Technology Stack Details

### Core Technologies

- VuePress 2.0.0-rc.26（Vue 3, Vite bundler, TS 开启）
- vuepress-plugin-md-enhance 2.0.0-rc.99（presentation / reveal）
- Prism 高亮（内置或主题集成）
- ESLint + Prettier（建议）
- GitHub Actions + Pages（部署）
### SEO/Meta Example (VuePress config snippet)
```ts
// docs/.vuepress/config.ts (excerpt)
export default {
  base: '/AINative/',
  head: [
    ['meta', { name: 'description', content: 'AINative - 双模式知识站点' }],
    ['meta', { property: 'og:title', content: 'AINative' }],
    ['meta', { property: 'og:description', content: '文档 + PPT 双模式' }],
    ['meta', { property: 'og:image', content: '/images/og-image.png' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
  ],
  plugins: [
    ['sitemap', { hostname: 'https://<username>.github.io/ainative/' }],
    ['md-enhance', { presentation: true }],
  ],
};
```

### Integration Points

- Doc ↔ PPT：章节首页提供“查看 PPT”按钮，PPT 左上角“返回文档”，路径映射：
  - `/ai-native-intro/` ↔ `/slides/intro.html`
  - `/case-studies/` ↔ `/slides/cases.html`
  - `/transformation/` ↔ `/slides/transformation.html`
- 按钮示例：
  ```md
  <!-- 在章节 README.md 末尾 -->
  [📊 查看 PPT 演示](/slides/intro.html){.ppt-button}
  ```
  ```md
  <!-- 在 slides/intro.md 顶部 -->
  [⬅ 返回文档模式](/ai-native-intro/){.back-button}
  ```
- 部署管线：push main → Actions（pnpm install/build）→ gh-pages → Pages
- 资源：`/images/*` 供文档与 PPT 共享；公共 head/meta/主题样式共用

## Novel Pattern Designs

无新型复杂交互/数据流需求，沿用标准静态站点模式；若后续引入搜索/i18n/交互问卷，再增补模式。

## Implementation Patterns

These patterns ensure consistent implementation across all AI agents:

- 命名：文件/目录/图片统一 kebab-case；PPT/Doc 文件名按章节命名（intro, cases, transformation）。
- 结构：内容放 `docs/*`，公共资源 `/images`，样式 `docs/.vuepress/styles/index.css`，配置 `docs/.vuepress/config.ts`。
- 代码高亮：Prism，需行号则统一开启或关闭，不混用。
- 表格：默认开启横向滚动，避免换行破坏布局。
- Doc↔PPT 按映射表添加按钮，按钮样式统一（主色 #1F6FEB）。
- 图片优化：源图压缩 <200KB，优先 WebP；存放 `/images`，引用相对路径；必要时保留 PNG 备份。

## Consistency Rules

### Naming Conventions

- 目录/文件：kebab-case（`ai-native-intro`），图片 `core-hook.png`
- 路径：文档 `/ai-native-intro/`，PPT `/slides/intro.html`
- 组件/样式文件：若新增自定义组件，使用 PascalCase 文件名
- 日期格式：ISO 8601（UTC），示例 `2025-12-15T00:00:00Z`
- 用户可见错误文案：中文简洁说明 + 行动指引，例如 “加载失败，请刷新或稍后再试”

### Code Organization

- 配置：`docs/.vuepress/config.ts`
- 样式：`docs/.vuepress/styles/index.css`；主题变量集中管理
- 内容：每章子目录 `README.md` 为入口，其余分章节文件
- Slides：`docs/slides/*.md` 对应章节

### Error Handling

- 构建/部署：CI 阶段阻断；本地 `pnpm run docs:build` 必须通过
- 链接校验：启用 VuePress 内链校验（如告警需修正）

### Logging Strategy

- CI 日志：Actions 输出保留；构建失败需修复后重跑
- 前端运行时：纯静态，无运行时日志，仅浏览器控制台清洁为目标

## Data Architecture

- 数据源：Markdown 文档 + 静态图片（无数据库）
- 结构：3 章内容与 PPT 共用素材；路径 `/images/*`
- 元信息：frontmatter 标题/描述/keywords 用于 SEO

## API Contracts

- 无后端 API；静态站点，无网络交互。后续若增加搜索/API，再定义。

## Security Architecture

- 传输：GitHub Pages 默认 HTTPS
- 头部：配置 CSP、HSTS（若 Pages 支持自定义 headers，可通过 `_headers` 或反向代理；否则记录为限制）
- 内容安全：无用户输入；外链加 `rel="noopener noreferrer"`
- 依赖安全：Dependabot / 手动升级，锁定 package-lock

## Performance Considerations

- 目标：首屏 <2s（3G），Lighthouse >90
- 资源：WebP 优先；单图 <200KB；`loading="lazy"`；避免未用插件
- 构建：Vite 代码分割；生产模式 minify；移除死链与未用组件
- 监测：发布后使用 Lighthouse（Performance/BestPractice/SEO）、axe（无障碍）、Mozilla Observatory（安全头部）每次发布抽检

## Deployment Architecture

- GitHub Actions（`deploy.yml`）：
  - 触发：push main
  - 步骤：checkout → setup-node@v4（node 18）→ pnpm/action-setup（pnpm 8.x）→ pnpm install --frozen-lockfile → pnpm run docs:build → 发布 `docs/.vuepress/dist` 到 gh-pages
  - Pages：设置 `base: '/AINative/'`
- 自定义域名：可选，需同步调整 `base`
- 回滚：保留上一次成功构建的 gh-pages 版本（Actions 自动保留历史）

## Development Environment

### Prerequisites

- Node 18.x LTS
- npm 9+（随 Node 18）
- 推荐：pnpm/yarn 若使用则需锁定并更新 CI

### Setup Commands

```bash
pnpm install --frozen-lockfile
pnpm run docs:dev
pnpm run docs:build
```

## Architecture Decision Records (ADRs)

- ADR-001 框架与构建：VuePress 2 + Vite + TS，Node 18 LTS
- ADR-002 双模式：Document + reveal.js PPT，slides 目录与映射路径
- ADR-003 部署：GitHub Actions + Pages，base `/AINative/`
- ADR-004 信息架构：3 级 sidebar，Doc↔PPT 路由映射
- ADR-005 性能与资源：WebP/<200KB，lazy-load，移除未用插件
- ADR-006 SEO/AA：meta/OG/sitemap/robots，alt/对比度/键盘导航
- ADR-007 规范：ESLint+Prettier（若未安装则文档约束）；kebab-case 资产命名

---

Generated by BMAD Decision Architecture Workflow v1.0  
Date: 2025-12-15  
For: Jett
