# AINative - Epic与Story分解

**项目名称**: AINative
**作者**: Jett
**日期**: 2025-12-15
**版本**: 1.0

---

## 执行摘要

本文档将AINative项目的PRD需求分解为**6个Epic**和**33个Story**，每个Story都可由单个开发agent在一次专注session内完成。

### Epic概览

1. **Epic 1: 项目基础设施与技术栈** - 建立技术基础（5个Story）
2. **Epic 2: 部署验证与Hello World** - 验证GitHub Pages部署（4个Story）
3. **Epic 3: 内容体系建设** - 准备3章内容和图片（5个Story）
4. **Epic 4: PPT演示模式** - 实现演示模式（6个Story）
5. **Epic 5: Document文档模式** - 实现文档模式（6个Story）
6. **Epic 6: 页面完善与发布** - 优化发布上线（7个Story）

### 关键原则

- ✅ **Epic 1先行** - 所有开发都依赖基础设施
- ✅ **Epic 2早期验证** - 确保部署通路打通，降低技术风险
- ✅ **先PPT后Document** - PPT相对简单，快速验证双模式可行性
- ✅ **内容与开发并行** - Epic 3可与Epic 4/5并行，提高效率
- ✅ **渐进式交付** - 每个Epic都有明确的可展示成果

### 时间线

- **Week 1**: Epic 1 + Epic 2（技术验证）
- **Week 2**: Epic 3（内容）并行 Epic 4（PPT开发）
- **Week 3**: Epic 5（Document开发）
- **Week 4-5**: Epic 6（完善发布）

**总计**: 4-5周完成MVP上线

---

## Epic 1: 项目基础设施与技术栈 🏗️

**目标**: 建立静态网站的核心技术基础，为后续所有开发奠定基石。

**价值**: 所有后续开发都依赖这个技术基础，必须首先完成并验证。

**验收标准**:
- ✅ 项目可本地运行（`npm run dev`）
- ✅ 构建成功（`npm run build`）
- ✅ 基础响应式布局框架可用

---

### Story 1.1: 技术选型调研与决策

**作为** 技术负责人，
**我想** 评估并选择最适合AINative项目的静态站点生成器，
**以便** 后续开发有坚实的技术基础。

**验收标准：**

**Given** 项目需求是静态文档网站，需要支持GitHub Pages部署、双模式（Document + PPT）、响应式设计
**When** 我评估VuePress、Docusaurus、自定义方案（Vite + Vue 3）的优劣势
**Then** 我应该输出技术选型决策文档（`docs/tech-stack-decision.md`），包含：
- 3个方案的对比分析（功能、生态、学习曲线、社区支持）
- reveal.js集成可行性评估
- 最终推荐方案及理由
- 技术风险评估

**Prerequisites:** 无

**Technical Notes:**
- 重点评估reveal.js集成难度（VuePress有官方插件，Docusaurus需自定义）
- 考虑构建产物是否纯静态（无Node.js服务端依赖）
- 评估中文文档支持和配置灵活性

---

### Story 1.2: 初始化项目结构

**作为** 开发者，
**我想** 初始化项目的基础结构和依赖，
**以便** 可以开始本地开发。

**验收标准：**

**Given** 已选定技术栈（假设VuePress为例）
**When** 我执行项目初始化
**Then** 项目应该包含：
- ✅ `package.json`（包含必要依赖）
- ✅ 基础目录结构：
  ```
  ainative/
  ├── docs/
  │   ├── .vuepress/
  │   │   ├── config.js
  │   │   └── public/
  │   └── README.md
  ├── .gitignore
  ├── package.json
  └── README.md
  ```
- ✅ `.gitignore`正确配置（忽略`node_modules`, `dist`, `.DS_Store`等）
- ✅ `npm install`成功安装所有依赖
- ✅ Git仓库初始化（`git init`）

**Prerequisites:** Story 1.1完成（技术选型已确定）

**Technical Notes:**
- 使用官方脚手架工具（如`npm init vuepress-site`）
- 确保Node.js版本 >= 14.x
- 提交首次commit: `feat(initial): initialize project structure`

---

### Story 1.3: 配置开发环境与本地预览

**作为** 开发者，
**我想** 配置本地开发服务器，
**以便** 可以实时预览修改效果。

**验收标准：**

**Given** 项目结构已初始化
**When** 我运行`npm run dev`
**Then** 应该：
- ✅ 本地开发服务器启动成功（通常是`http://localhost:8080`）
- ✅ 浏览器自动打开并显示默认页面
- ✅ 热重载（Hot Reload）工作正常（修改文件自动刷新）
- ✅ 控制台无报错

**Prerequisites:** Story 1.2完成

**Technical Notes:**
- 配置`package.json`的`scripts`：
  ```json
  {
    "scripts": {
      "dev": "vuepress dev docs",
      "build": "vuepress build docs"
    }
  }
  ```
- 验证HMR（Hot Module Replacement）功能

---

### Story 1.4: 创建基础响应式布局框架

**作为** 开发者，
**我想** 建立基础的响应式布局CSS框架，
**以便** 后续页面都能适配不同设备。

**验收标准：**

**Given** 开发环境已配置
**When** 我创建全局CSS变量和响应式断点
**Then** 应该：
- ✅ 创建`docs/.vuepress/styles/index.styl`（或`.css`）
- ✅ 定义CSS变量：
  ```css
  :root {
    --primary-color: #3eaf7c;
    --text-color: #2c3e50;
    --bg-color: #ffffff;
    --breakpoint-mobile: 768px;
    --breakpoint-tablet: 1024px;
  }
  ```
- ✅ 定义响应式断点mixin：
  ```css
  @media (max-width: 768px) { /* mobile */ }
  @media (min-width: 768px) and (max-width: 1024px) { /* tablet */ }
  @media (min-width: 1024px) { /* desktop */ }
  ```
- ✅ 测试页面在不同视口下正确渲染

**Prerequisites:** Story 1.3完成

**Technical Notes:**
- 使用CSS变量便于后续主题定制
- 遵循移动优先（Mobile First）原则
- 保持CSS简洁，避免过度设计

---

### Story 1.5: 配置构建流程

**作为** 开发者，
**我想** 配置生产环境构建流程，
**以便** 可以生成可部署的静态文件。

**验收标准：**

**Given** 开发环境正常运行
**When** 我运行`npm run build`
**Then** 应该：
- ✅ 构建成功，无报错
- ✅ 生成`docs/.vuepress/dist/`目录（或对应输出目录）
- ✅ `dist/`包含：
  - `index.html`（首页）
  - `assets/`（CSS/JS/图片）
  - 所有页面的静态HTML文件
- ✅ 构建产物是纯静态文件（无服务端依赖）
- ✅ 验证产物可通过HTTP服务器访问（如`npx serve dist`）

**Prerequisites:** Story 1.4完成

**Technical Notes:**
- 配置`docs/.vuepress/config.js`的`base`路径（为GitHub Pages准备）
  ```js
  module.exports = {
    base: '/ainative/',  // 替换为实际仓库名
    // ...
  }
  ```
- 验证所有资源路径正确（相对路径）
- 压缩CSS/JS（生产环境默认开启）

---

## Epic 2: 部署验证与Hello World 🚀✅

**目标**: 验证GitHub Pages部署流程通畅，确保技术可行性。

**价值**: 早期验证部署通路，避免后期"功能都做好了但部署不上去"的风险。

**验收标准**:
- ✅ Git push后自动触发构建
- ✅ 构建成功（GitHub Actions绿色勾）
- ✅ 网站可通过GitHub Pages URL访问
- ✅ HTTPS工作正常
- ✅ 修改内容后重新部署验证更新

---

### Story 2.1: 配置GitHub仓库与Actions工作流

**作为** 开发者，
**我想** 创建GitHub仓库并配置自动部署工作流，
**以便** 代码推送后自动部署到GitHub Pages。

**验收标准：**

**Given** 本地项目已完成基础配置
**When** 我创建GitHub仓库并配置GitHub Actions
**Then** 应该：
- ✅ 在GitHub创建公开仓库`ainative`
- ✅ 本地关联远程仓库：`git remote add origin <repo-url>`
- ✅ 创建`.github/workflows/deploy.yml`：
  ```yaml
  name: Deploy to GitHub Pages

  on:
    push:
      branches: [ main ]

  jobs:
    deploy:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - name: Setup Node.js
          uses: actions/setup-node@v3
          with:
            node-version: '18'
        - name: Install dependencies
          run: npm ci
        - name: Build
          run: npm run build
        - name: Deploy to GitHub Pages
          uses: peaceiris/actions-gh-pages@v3
          with:
            github_token: ${{ secrets.GITHUB_TOKEN }}
            publish_dir: docs/.vuepress/dist
  ```
- ✅ 推送代码到GitHub：`git push -u origin main`
- ✅ GitHub Actions自动触发构建

**Prerequisites:** Epic 1所有Story完成

**Technical Notes:**
- 确保`package-lock.json`已提交（`npm ci`需要）
- 配置GitHub仓库的Pages设置：Source选择`gh-pages`分支

---

### Story 2.2: 创建Hello World验证页面

**作为** 开发者，
**我想** 创建一个简单的Hello World页面，
**以便** 验证部署流程端到端工作。

**验收标准：**

**Given** GitHub Actions工作流已配置
**When** 我创建简单的Hello World内容
**Then** 应该：
- ✅ 修改`docs/README.md`：
  ```markdown
  # AINative - Hello World 🎉

  欢迎来到AI Native知识分享平台！

  ## 部署验证成功

  如果你看到这个页面，说明GitHub Pages部署已成功配置。

  **项目信息：**
  - 部署平台：GitHub Pages
  - 技术栈：VuePress (或你选择的方案)
  - 自动部署：✅ 已启用

  下一步：开始构建双模式文档系统 📖 + 📊
  ```
- ✅ 提交并推送：`git commit -m "feat(deploy): add hello world page"`
- ✅ 推送触发自动部署

**Prerequisites:** Story 2.1完成

**Technical Notes:**
- 保持内容简单，重点验证部署流程
- 可添加当前日期时间戳，验证更新生效

---

### Story 2.3: 验证部署流程与访问

**作为** 开发者，
**我想** 验证网站可通过GitHub Pages URL正常访问，
**以便** 确认部署流程完全打通。

**验收标准：**

**Given** Hello World页面已推送到GitHub
**When** GitHub Actions构建完成
**Then** 应该：
- ✅ GitHub Actions工作流显示绿色✅（构建成功）
- ✅ 访问`https://<username>.github.io/ainative/`显示Hello World页面
- ✅ HTTPS正常工作（绿色锁图标）
- ✅ 页面样式正确加载（无404错误）
- ✅ 浏览器控制台无报错
- ✅ 修改内容后重新推送，页面自动更新（验证增量部署）

**Prerequisites:** Story 2.2完成

**Technical Notes:**
- 如果部署失败，检查：
  - GitHub Actions日志
  - `base`路径配置是否正确
  - Pages设置中Source分支是否为`gh-pages`
- 首次部署可能需要等待5-10分钟
- 验证CDN缓存：多次访问确保内容稳定

---

### Story 2.4: 文档化部署流程

**作为** 开发者，
**我想** 将部署流程文档化，
**以便** 团队成员和贡献者了解如何部署。

**验收标准：**

**Given** 部署流程已验证成功
**When** 我编写部署文档
**Then** 应该：
- ✅ 更新`README.md`，添加"部署"章节：
  ```markdown
  ## 部署

  本项目使用GitHub Pages自动部署。

  ### 自动部署
  - 推送到`main`分支自动触发构建
  - GitHub Actions自动构建并部署到`gh-pages`分支
  - 5-10分钟后访问：https://<username>.github.io/ainative/

  ### 本地构建测试
  ```bash
  npm run build
  npx serve docs/.vuepress/dist
  ```

  访问 http://localhost:3000
  ```
- ✅ 文档包含故障排查指南
- ✅ 提交文档更新

**Prerequisites:** Story 2.3完成

**Technical Notes:**
- 文档使用中文（遵循项目规范）
- 包含常见问题解答（FAQ）
- 提供部署状态badge（可选）

---

## Epic 3: 内容体系建设 📝

**目标**: 建立完整的6章内容架构，并填充所有内容和图片资源。

**价值**: 内容是产品核心价值，6章完整框架构成AI Native认知体系的完整链路。

**实施策略**: 分两个阶段执行
- **Epic 3-A**: 框架搭建（优先）- 建立目录结构和导航系统
- **Epic 3-B**: 内容填充（Epic 4&5之后）- 填充实际内容

**验收标准**:
- ✅ 6章目录结构完整（第1-6章 + 案例库）
- ✅ VuePress导航配置完成（sidebar + navbar）
- ✅ 所有章节内容完整（30000+字）
- ✅ 图片资源准备完毕（WebP格式，<200KB/张）
- ✅ Doc↔PPT映射关系清晰

---

## Epic 3-A: 内容框架搭建 🏗️

**目标**: 建立完整的6章目录结构和导航系统

**价值**: 框架优先，确保Epic 4和Epic 5有完整的架构基础，避免后期重构

**验收标准**:
- ✅ 完整的6章目录树已创建
- ✅ 所有README.md导航文件已添加
- ✅ VuePress sidebar/navbar配置完成并验证可用
- ✅ Doc↔PPT映射关系已定义
- ✅ Information Architecture文档已完成

---

### Story 3-A.1: 设计完整信息架构（IA）✅

**作为** Product Manager，
**我想** 基于6章框架设计完整的目录树和文件清单，
**以便** 后续开发有清晰的架构蓝图。

**验收标准：**

**Given** 用户指定的6章框架结构
**When** 我设计完整的信息架构
**Then** 应该：
- ✅ 创建完整的6章目录结构（`1-introduction/` ~ `6-outlook/` + `case-studies/`）
- ✅ 每个目录包含`README.md`导航文件（共16个README文件）
- ✅ 所有文件名使用kebab-case，符合架构约定
- ✅ 产出`docs/information-architecture.md` IA设计文档（20KB+），包含：
  - 完整目录树设计
  - 每章的文件清单和内容要点
  - 导航系统设计（navbar + sidebar）
  - Doc↔PPT映射关系
  - 文件命名规范和内容质量标准

**输出文件：**
- `docs/information-architecture.md`（IA设计文档）
- `docs/1-introduction/README.md`
- `docs/2-comparison/README.md`
- `docs/3-core-definition/README.md`
- `docs/4-practice-demo/README.md`
- `docs/5-transition-practice/README.md`（及其下所有子目录README）
- `docs/6-outlook/README.md`
- `docs/case-studies/README.md`（及其下子目录README）

**Prerequisites:** Epic 2完成，用户确认6章框架

**Technical Notes:**
- 参考文档：`brainstorming-session-results-2025-12-15.md`、`PRD.md`
- 章节4为"AI Native实践演示"（桌面操作演示，Linear+Slack+Github+Devin）
- 章节5包含详细的5.1和5.2，包括产品开发7步流程
- 所有目录和文件名必须使用kebab-case

**Status:** ✅ 已完成 (2025-12-16)

---

### Story 3-A.2: 配置VuePress导航和sidebar ✅

**作为** 开发者，
**我想** 实现6章完整导航系统并创建PPT文件骨架，
**以便** Epic 4和Epic 5可以基于完整框架进行布局开发。

**验收标准：**

**Given** Story 3-A.1的IA设计已完成
**When** 我配置VuePress导航
**Then** 应该：
- ✅ 在`docs/.vuepress/config.ts`中配置完整的navbar（9个导航项）
- ✅ 配置所有6章 + 案例库的sidebar（支持多层折叠，章节5有3层嵌套）
- ✅ 创建`docs/slides/`目录下所有PPT文件骨架（7个文件）：
  - `1-introduction.md`
  - `2-comparison.md`
  - `3-definition.md`
  - `4-practice.md`
  - `5-transition.md`
  - `6-outlook.md`
  - `cases.md`
- ✅ 本地运行`pnpm run docs:dev`验证导航可用（服务器成功启动）
- ✅ VuePress编译无错误（可以有broken links警告，因为内容文件尚未创建）

**输出文件：**
- `docs/.vuepress/config.ts`（更新navbar和sidebar）
- `docs/slides/*.md`（7个PPT骨架文件）

**Prerequisites:** Story 3-A.1完成

**Technical Notes:**
- sidebar使用collapsible配置实现折叠功能
- PPT文件包含章节结构和核心观点提炼
- Doc↔PPT映射关系：`/1-introduction/` ↔ `/slides/1-introduction`

**Status:** ✅ 已完成 (2025-12-16)

---

### Story 3-A.3: 首页与框架布局设计

**作为** UX设计师/前端开发者，
**我想** 设计并实现首页和整体框架布局，
**以便** 用户看到美观、友好的页面，并能快速导航到各章节。

**验收标准：**

**Given** Story 3-A.2的导航系统已配置
**When** 我设计并实现首页布局
**Then** 应该：
- ✅ 设计首页视觉布局（Hero区域、6章导航卡片、快速入口）
- ✅ 实现响应式首页组件（桌面端和移动端适配）
- ✅ 配置首页路由和元信息（title、description、keywords）
- ✅ 首页清晰展示6章内容概览和导航入口
- ✅ 整体框架布局美观、交互友好

**输出文件：**
- `docs/README.md`（首页内容，VuePress默认首页）
- `docs/.vuepress/components/`（自定义组件，如需要）
- `docs/.vuepress/styles/`（自定义样式文件）

**Prerequisites:** Story 3-A.2完成

**Technical Notes:**
- 使用VuePress的Home布局或自定义布局
- Hero区域包含项目标题、副标题、快速开始按钮
- 6章导航卡片：每章一个卡片，包含图标、标题、简短描述
- 添加"开始阅读"和"演示模式"两个主要CTA按钮

**Status:** 📍 待开始

---

### Story 3-A.4: PPT模式交互页面设计

**作为** 前端开发者，
**我想** 设计并实现PPT演示模式，
**以便** 用户可以使用全屏PPT风格展示内容。

**验收标准：**

**Given** Story 3-A.3的首页布局已完成
**When** 我实现PPT模式
**Then** 应该：
- ✅ 实现PPT全屏展示模式（类似PowerPoint的全屏效果）
- ✅ 支持键盘导航（Space/Arrow键翻页，Esc退出全屏）
- ✅ 实现PPT风格的视觉设计：
  - 大字号标题
  - 简洁布局
  - 视觉焦点突出
  - 每页一个核心观点
- ✅ 支持全屏切换（F11或自定义全屏按钮）
- ✅ 实现Doc↔PPT模式切换功能（悬浮球或快捷键）
- ✅ 添加进度指示器（当前页/总页数）

**技术方案：**
- 方案1：使用VuePress + vuepress-plugin-md-enhance的Presentation功能
- 方案2：集成Reveal.js（通过自定义组件）
- 方案3：自定义实现（使用Vue 3组件 + CSS全屏API）

**输出文件：**
- `docs/.vuepress/config.ts`（PPT模式插件配置）
- `docs/.vuepress/styles/ppt-mode.scss`（PPT模式样式）
- `docs/.vuepress/components/PPTController.vue`（PPT控制器组件，如需要）

**Prerequisites:** Story 3-A.3完成

**Technical Notes:**
- 参考Reveal.js的键盘快捷键设计
- 全屏API：`document.documentElement.requestFullscreen()`
- 确保移动端也有良好体验（触摸滑动翻页）

**Status:** 📍 待开始

---

### Story 3-A.5: 文档模式交互页面设计

**作为** 前端开发者，
**我想** 设计并实现文档模式，参考Linear Docs的布局和交互，
**以便** 用户获得出色的阅读体验。

**验收标准：**

**Given** Story 3-A.3的首页布局已完成
**When** 我实现文档模式
**Then** 应该：
- ✅ 实现类似Linear Docs的侧边栏导航：
  - 固定侧边栏（左侧）
  - 支持折叠功能（移动端自动折叠）
  - 多层级导航清晰
- ✅ 实现右侧目录大纲（Table of Contents / On This Page）
  - 自动提取H2、H3标题
  - 当前阅读位置高亮
  - 点击跳转到对应章节
- ✅ 优化阅读体验：
  - 合适的行宽（max-width: 720px）
  - 合适的行高（line-height: 1.7）
  - 舒适的字体（系统字体栈或Google Fonts）
- ✅ 添加页面内锚点跳转（点击TOC跳转平滑滚动）
- ✅ 实现搜索功能（VuePress内置搜索或Algolia DocSearch）
- ✅ 响应式设计（移动端折叠侧边栏，点击汉堡菜单打开）
- ✅ 添加面包屑导航（顶部显示当前路径）

**参考设计：**
- Linear Docs: https://linear.app/docs
- 布局特点：侧边栏固定、内容居中、右侧大纲、清晰的视觉层级

**输出文件：**
- `docs/.vuepress/config.ts`（文档模式主题配置）
- `docs/.vuepress/styles/doc-mode.scss`（文档模式样式）
- `docs/.vuepress/components/TableOfContents.vue`（TOC组件，如需要）
- `docs/.vuepress/components/Breadcrumb.vue`（面包屑组件，如需要）

**Prerequisites:** Story 3-A.3完成

**Technical Notes:**
- VuePress默认主题已提供sidebar和TOC功能，可在此基础上优化
- 使用Intersection Observer API实现当前阅读位置高亮
- 搜索功能：VuePress内置`@vuepress/plugin-search`或集成Algolia
- 参考Linear Docs的间距、字体、颜色系统

**Status:** 📍 待开始

---

## Epic 3-B: 内容创作与填充 📝 (当前焦点)

**状态更新 (2025-12-17)**: Epic 4 和 Epic 5 的技术实现已提前完成！框架、布局、交互全部就绪。现在可以直接开始内容填充工作。

**目标**: 填充所有内容到已完成的双模式框架中（Document 模式 + PPT 模式）

**价值**: 技术框架已完美实现，现在专注于内容创作，完成产品核心价值交付

**验收标准**:
- ✅ 6章所有 Markdown 内容完成（30000+字）
- ✅ 8个案例详细分析完成（每篇1000-1500字）
- ✅ PPT 模式 45 页内容完成（基于已创建的 7 个 slide 文件）
- ✅ 所有图片资源制作完成（WebP格式）
- ✅ 内容集成到 Document 模式和 PPT 模式
- ✅ 无臆造数据，所有引用标注来源
- ✅ 内容质量达到发布标准

**实施策略**:
- **阶段 1**: 文档模式内容编写 (Stories 3-B.1 ~ 3-B.9)
- **阶段 2**: PPT 模式内容填充 (Stories 3-B.10 ~ 3-B.12，从 Epic 4 移入)
- **阶段 3**: 内容集成与验证 (Story 3-B.13，从 Epic 5 移入)

**技术依赖**: ✅ 已解除 - Epic 4&5 技术实现已完成

---

### Story 3-B.1: 编写章节1 - 介绍

**作为** 内容创作者，
**我想** 完成"组织能力壁垒"章节内容，
**以便** 引发读者对组织能力的深度思考。

**验收标准：**

**Given** 章节1目录结构已创建
**When** 我编写章节1内容
**Then** 应该完成：
- ✅ `docs/1-introduction/why-organizational-capability.md`（2000-3000字）
  - 什么决定了组织能力
  - 为什么组织能力是壁垒
  - 引发思考：你的组织的核心能力是什么

**内容质量标准：**
- 语言通俗易懂，避免过度技术术语
- 结构清晰：背景 → 概念 → 解释 → 意义
- 包含图片占位符（至少1个）

**Prerequisites:** Epic 3-A完成，Epic 4&5完成（布局验证OK）

**Estimated Effort:** 4小时

---

### Story 3-B.2: 编写章节2 - 现状对比

**作为** 内容创作者，
**我想** 完成"传统 vs AI Native"对比章节，
**以便** 读者清晰看到两种组织模式的差异。

**验收标准：**

**Given** 章节2目录结构已创建
**When** 我编写章节2内容
**Then** 应该完成：
- ✅ `docs/2-comparison/traditional-organization.md`（1500-2000字）
- ✅ `docs/2-comparison/ai-native-organization.md`（1500-2000字）
- ✅ 包含核心对比表（人员能力、组织方式、产出质量）
- ✅ 包含核心类比表述："普通人 vs 全球顶尖科学家"

**内容质量标准：**
- 对比维度清晰
- 包含图示占位符（至少2个）
- 引用真实数据和案例

**Prerequisites:** Story 3-B.1可并行

**Estimated Effort:** 5小时

---

### Story 3-B.3: 编写章节3 - 核心定义

**验收标准：**

**Given** 章节3目录结构已创建
**When** 我编写章节3内容
**Then** 应该完成：
- ✅ `docs/3-core-definition/builder-ai-team.md`（1500-2000字）
- ✅ `docs/3-core-definition/professional-optimization.md`（1000-1500字）
- ✅ `docs/3-core-definition/result-oriented-division.md`（1000-1500字）
- ✅ 详细解释60-80-100分模型
- ✅ 包含核心公式：`AI Native = Builder + AI + 专业团队优化`

**Prerequisites:** Story 3-B.2可并行

**Estimated Effort:** 5小时

---

### Story 3-B.4: 编写章节4 - AI Native实践演示

**验收标准：**

**Given** 章节4目录结构已创建
**When** 我编写章节4内容
**Then** 应该完成：
- ✅ `docs/4-practice-demo/demo-overview.md`（800-1000字）
- ✅ `docs/4-practice-demo/toolchain-setup.md`（1200-1500字）
- ✅ `docs/4-practice-demo/workflow-demonstration.md`（1500-2000字）
- ✅ `docs/4-practice-demo/reference.md`（500-800字）
- ✅ 详细描述Linear+Slack+Github+Devin工具链
- ✅ 展示一个Builder完成一个产品的全过程
- ✅ 包含参考链接（小宇宙播客等）

**Prerequisites:** Story 3-B.3可并行

**Estimated Effort:** 5小时

---

### Story 3-B.5: 编写章节5.1 - 组织架构转型

**验收标准：**

**Given** 章节5.1目录结构已创建
**When** 我编写章节5.1内容
**Then** 应该完成：
- ✅ **标准型组织架构**（5个文件，共3000字）：
  - `standard-model/core-principles.md`
  - `standard-model/team-scale.md`
  - `standard-model/role-definition.md`
  - `standard-model/work-style.md`
- ✅ **过渡型组织架构**（3个文件，共2500字）：
  - `transitional-model/new-products.md`
  - `transitional-model/existing-products.md`
- ✅ **过渡性实施路线**（3个主文件 + 7个产品开发流程文件，共6000字）：
  - `transition-roadmap/organization-level.md`
  - `transition-roadmap/daily-workflow.md`
  - `transition-roadmap/product-development/1-data-analysis.md` ~ `7-development.md`

**Prerequisites:** Story 3-B.4完成

**Estimated Effort:** 12小时

---

### Story 3-B.6: 编写章节5.2 - 核心实践方法论

**验收标准：**

**Given** 章节5.2目录结构已创建
**When** 我编写章节5.2内容
**Then** 应该完成：
- ✅ **BMAD-METHOD详解**（4个文件，共3000字）：
  - `bmad-method/core-features.md`（4阶段、3轨道、21智能体）
  - `bmad-method/quality-guarantee.md`（5点质量保障原因）
  - `bmad-method/how-to-use.md`（编程实践应用）
- ✅ `builder-growth-path.md`（2500字，5个Level详细路径）
- ✅ `tool-stack-guide.md`（2500字，分层工具栈推荐）

**Prerequisites:** Story 3-B.5完成

**Estimated Effort:** 8小时

---

### Story 3-B.7: 编写章节6 - 展望引导

**验收标准：**

**Given** 章节6目录结构已创建
**When** 我编写章节6内容
**Then** 应该完成：
- ✅ `docs/6-outlook/scenario-distinction.md`（800-1000字）
- ✅ `docs/6-outlook/path-1-builder.md`（1000-1200字）
- ✅ `docs/6-outlook/path-2-specialist.md`（1000-1200字）
- ✅ `docs/6-outlook/staying-relevant.md`（800-1000字）
- ✅ 场景区分清晰（真实世界 vs 虚拟世界）
- ✅ 两条路径详解
- ✅ 强调开放和适应性

**Prerequisites:** Story 3-B.6可并行

**Estimated Effort:** 5小时

---

### Story 3-B.8: 编写案例库

**验收标准：**

**Given** 案例库目录结构已创建
**When** 我编写案例库内容
**Then** 应该完成：
- ✅ **成功公司案例**（4个文件，每篇1000-1500字）：
  - `success-companies/openai.md`
  - `success-companies/cursor-ai.md`
  - `success-companies/commonwealth-bank.md`
  - `success-companies/bupa.md`
- ✅ **组织转型案例**（4个文件，每篇1000-1500字）：
  - `organization-transformation/amazon.md`
  - `organization-transformation/moderna.md`
  - `organization-transformation/bayer.md`
  - `organization-transformation/nvidia.md`
- ✅ `market-data.md`（1500-2000字，市场数据汇总）
- ✅ 所有数据标注真实来源
- ✅ 无臆造数据

**Prerequisites:** Story 3-B.7可并行

**Estimated Effort:** 10小时

---

### Story 3-B.9: 准备图片资源

**验收标准：**

**Given** 所有内容文件已完成，图片占位符已标注
**When** 我准备图片资源
**Then** 应该：
- ✅ 创建并优化所有图片资源
- ✅ 所有图片格式WebP，单图<200KB
- ✅ 图片命名kebab-case
- ✅ 替换所有占位符为实际图片路径
- ✅ 存放在`docs/.vuepress/public/images/`

**图片清单**：
- 章节1-2：对比图、示意图（4-5张）
- 章节3：模型图、架构图（3-4张）
- 章节4：工具链图、流程图（3-4张）
- 章节5：组织架构图、流程图（6-8张）
- 案例库：数据图表、截图（8-10张）

**Prerequisites:** Story 3-B.8完成

**Estimated Effort:** 8小时

---

### Story 3-B.10: 编写 PPT 简述内容（15页）

**说明**: 本 Story 原为 Epic 4 的 Story 4.2，因技术实现提前完成而移至此处

**作为** 内容创作者，
**我想** 将 AI Native 简述内容精炼为 PPT 幻灯片，
**以便** 用户可以快速了解核心概念。

**验收标准：**

**Given** reveal.js 框架已集成，slide 文件框架已创建
**When** 我编写 PPT 简述部分内容
**Then** 应该在 `docs/slides/1-introduction.md` 中填充约 15 页：
- ✅ 第1页：标题页 - "AI Native：组织能力的根本性重构"
- ✅ 第2页：核心Hook - "组织能力才是公司真正的壁垒"
- ✅ 第3-4页：第一性原理（能力边界、角色转变、组织架构）
- ✅ 第5-6页：核心类比（传统组织 vs 全球顶尖科学家组织）
- ✅ 第7-9页：60-80-100分模型（Builder + AI + 专业团队）
- ✅ 第10-12页：为什么是现在（大模型突破）
- ✅ 第13-15页：分层Magic时刻（通用认知 / 管理者 / 个人）

**内容质量标准：**
- 每页一个核心观点
- 文字简洁（标题+3-5个要点）
- 排版美观（reveal.js Markdown语法）

**Prerequisites:** Story 3-B.1~3-B.3 内容完成（作为素材来源）

**Technical Notes:**
- 使用 reveal.js 的 Markdown 语法：`---` 分隔 slide
- 控制每页文字量（最多150字）
- 图片使用相对路径

**Estimated Effort:** 4小时

---

### Story 3-B.11: 编写 PPT 案例内容（15页）

**说明**: 本 Story 原为 Epic 4 的 Story 4.3，因技术实现提前完成而移至此处

**作为** 内容创作者，
**我想** 将8个案例和市场数据精炼为PPT幻灯片，
**以便** 用户快速建立信任。

**验收标准：**

**Given** 案例内容已完成（Story 3-B.8）
**When** 我编写PPT案例部分
**Then** 应该在 `docs/slides/cases.md` 中填充约15页：
- ✅ 第1页：章节标题 - "真实案例：AI Native已在发生"
- ✅ 第2-3页：市场数据概览（$26.99B市场、79%采用率）
- ✅ 第4-7页：成功公司案例（OpenAI, Cursor, Commonwealth, Bupa）
  - 每个案例1页：Logo + 核心数据 + 一句启示
- ✅ 第8-11页：组织转型案例（Amazon, Moderna, Bayer, NVIDIA）
  - 每个案例1页：公司名 + 转型举措 + 成果
- ✅ 第12-15页：关键洞察（案例共性、趋势、对我们的启示）

**内容质量标准：**
- 数据可视化（图表、对比表）
- 突出关键数字（大字体）
- 避免长段落文字

**Prerequisites:** Story 3-B.8 完成

**Technical Notes:**
- 案例页面使用统一模板
- 数据图表导出为PNG/SVG嵌入
- 引用来源标注在页面底部（小字）

**Estimated Effort:** 4小时

---

### Story 3-B.12: 编写 PPT 转化路程内容（15页）

**说明**: 本 Story 原为 Epic 4 的 Story 4.4，因技术实现提前完成而移至此处

**作为** 内容创作者，
**我想** 将转型路径精炼为PPT幻灯片，
**以便** 用户知道如何行动。

**验收标准：**

**Given** 转化路程内容已完成（Story 3-B.5, 3-B.6）
**When** 我编写PPT转化路程部分
**Then** 应该在 `docs/slides/5-transition.md` 中填充约15页：
- ✅ 第1页：章节标题 - "转化路程：如何成为AI Native组织"
- ✅ 第2-5页：组织架构转型
  - 标准型 vs 过渡型对比
  - 双轨制策略
  - 关键决策点
- ✅ 第6-10页：工具栈推荐
  - 协作工具（Linear/Slack）
  - 开发工具（Devin/Cursor/Continue）
  - Builder 必备工具栈
- ✅ 第11-15页：Builder能力培养路径（5 Levels详解）

**Prerequisites:** Story 3-B.5, 3-B.6 完成

**Estimated Effort:** 4小时

---

### Story 3-B.13: 集成内容到 Document 模式

**说明**: 本 Story 原为 Epic 5 的 Story 5.4，因技术实现提前完成而移至此处

**作为** 开发者，
**我想** 将所有 Markdown 内容集成到 Document 模式，
**以便** 用户可以在文档模式中完整阅读所有章节。

**验收标准：**

**Given** 所有章节内容已完成（Story 3-B.1~3-B.8），Document 模式框架已实现
**When** 我集成内容
**Then** 应该：
- ✅ **验证左侧导航**：
  - 所有章节正确显示在导航树
  - 3级目录结构正确
  - 当前页高亮正确
- ✅ **验证 Markdown 渲染**：
  - 所有标题、段落、列表正确渲染
  - 代码块高亮工作正常
  - 表格正确显示
  - 图片正确加载（如已有）
- ✅ **验证交互功能**：
  - 折叠/展开工作正常
  - 点击跳转工作正常
  - 面包屑导航正确
  - 右侧TOC正确同步
  - Doc ↔ PPT 切换正常
- ✅ **移动端验证**：
  - 移动端侧边栏可正常打开
  - 响应式布局正确
- ✅ **内容质量检查**：
  - 无 Markdown 语法错误
  - 无断链
  - 所有引用图片路径正确

**Prerequisites:** Story 3-B.1~3-B.8 全部完成

**Technical Notes:**
- 使用 VuePress 的自动路由，确保文件路径对应
- 检查 `docs/.vuepress/config.ts` 中的 sidebar 配置
- 测试所有内部链接

**Estimated Effort:** 3小时

---

## Epic 4: PPT演示模式 📊 ✅ (技术实现已完成)

**状态更新 (2025-12-17)**: 技术实现已100%完成！框架集成、导航控制、样式定制全部就绪。

**目标**: 实现全屏演示模式，快速验证双模式创新点。

**价值**: PPT模式相对简单，可以快速看到效果，验证双模式的可行性和用户价值。

**验收标准**:
- ✅ reveal.js集成成功 (已完成 - Story 4.1)
- ⏸️ 45页PPT内容完整（简述15页、案例15页、转化15页） → 内容任务已移至 Epic 3-B
- ✅ 导航控制流畅（键盘、页码、退出按钮） (已完成 - Story 4.5)
- ✅ 样式专业美观，响应式适配 (已完成 - Story 4.6)

**技术实现状态**: ✅ 完成
**内容填充状态**: ⏸️ Epic 3-B (Stories 3-B.10~3-B.12)

---

### Story 4.1: 集成reveal.js框架

**作为** 开发者，
**我想** 将reveal.js集成到VuePress项目中，
**以便** 实现PPT演示功能。

**验收标准：**

**Given** 项目基础设施已完成
**When** 我集成reveal.js
**Then** 应该：
- ✅ 安装reveal.js相关依赖：
  - VuePress方案：`npm install vuepress-plugin-revealjs`
  - 或自定义方案：`npm install reveal.js`
- ✅ 配置VuePress插件（如使用插件）：
  ```js
  // docs/.vuepress/config.js
  plugins: [
    ['vuepress-plugin-revealjs', {
      theme: 'white',
      controls: true,
      progress: true,
      // ...其他配置
    }]
  ]
  ```
- ✅ 创建测试PPT页面：`docs/slides/test.md`
  ```markdown
  ---
  revealOptions:
    transition: 'slide'
  ---

  # 测试幻灯片

  ---

  ## 第二页

  这是测试内容
  ```
- ✅ 本地预览确认reveal.js正常工作（全屏、翻页）

**Prerequisites:** Epic 3的Story 3.1-3.3完成（内容已准备）

**Technical Notes:**
- 评估VuePress插件 vs 自定义集成的优劣
- 如果插件不满足需求，考虑创建独立HTML页面
- 确保reveal.js版本与VuePress兼容

---

### Story 4.2: 编写PPT核心内容（简述部分，15页）

**作为** 内容创作者，
**我想** 将AI Native简述内容精炼为PPT幻灯片，
**以便** 用户可以快速了解核心概念。

**验收标准：**

**Given** AI Native简述Markdown内容已完成
**When** 我编写PPT简述部分
**Then** 应该创建`docs/slides/intro.md`，包含约15页：
- ✅ 第1页：标题页 - "AI Native：组织能力的根本性重构"
- ✅ 第2页：核心Hook - "组织能力才是公司真正的壁垒"
- ✅ 第3-4页：第一性原理（能力边界、角色转变、组织架构）
- ✅ 第5-6页：核心类比（传统组织 vs 全球顶尖科学家组织）
- ✅ 第7-9页：60-80-100分模型（Builder + AI + 专业团队）
- ✅ 第10-12页：为什么是现在（大模型突破）
- ✅ 第13-15页：分层Magic时刻（通用认知 / 管理者 / 个人）

**内容质量标准：**
- 每页一个核心观点
- 文字简洁（标题+3-5个要点）
- 图片嵌入（使用准备好的图片）
- 排版美观（reveal.js Markdown语法）

**Prerequisites:** Story 4.1完成

**Technical Notes:**
- 使用reveal.js的Markdown语法：`---`分隔slide
- 控制每页文字量（最多150字）
- 图片使用相对路径：`![](../.vuepress/public/images/xxx.png)`

---

### Story 4.3: 编写PPT案例部分（15页）

**作为** 内容创作者，
**我想** 将8个案例和市场数据精炼为PPT幻灯片，
**以便** 用户快速建立信任。

**验收标准：**

**Given** 案例内容已完成
**When** 我编写PPT案例部分
**Then** 应该在`docs/slides/cases.md`创建约15页：
- ✅ 第1页：章节标题 - "真实案例：AI Native已在发生"
- ✅ 第2-3页：市场数据概览（$26.99B市场、79%采用率）
- ✅ 第4-7页：成功公司案例（OpenAI, Cursor, Commonwealth, Bupa）
  - 每个案例1页：Logo + 核心数据 + 一句启示
- ✅ 第8-11页：组织转型案例（Amazon, Moderna, Bayer, NVIDIA）
  - 每个案例1页：公司名 + 转型举措 + 成果
- ✅ 第12-15页：关键洞察（案例共性、趋势、对我们的启示）

**内容质量标准：**
- 数据可视化（图表、对比表）
- 突出关键数字（大字体）
- 避免长段落文字

**Prerequisites:** Story 4.2可并行

**Technical Notes:**
- 案例页面使用统一模板
- 数据图表导出为PNG/SVG嵌入
- 引用来源标注在页面底部（小字）

---

### Story 4.4: 编写PPT转化路程部分（15页）

**作为** 内容创作者，
**我想** 将转型路径精炼为PPT幻灯片，
**以便** 用户知道如何行动。

**验收标准：**

**Given** 转化路程内容已完成
**When** 我编写PPT转化路程部分
**Then** 应该在`docs/slides/transformation.md`创建约15页：
- ✅ 第1页：章节标题 - "转化路程：如何成为AI Native组织"
- ✅ 第2-5页：组织架构转型
  - 标准型 vs 过渡型对比
  - 双轨制策略
  - 关键决策点
- ✅ 第6-10页：工具栈推荐
  - 分层模型（基础/进阶/管理/框架）
  - 核心工具介绍（Cursor, Claude Code, Linear）
  - 成本预估
- ✅ 第11-14页：Builder能力培养路径
  - Level 1-5概览
  - 关键里程碑
  - 时间投入预估
- ✅ 第15页：行动号召 - "从今天开始，重新定义你的能力边界"

**内容质量标准：**
- 路径清晰可视化（流程图、矩阵图）
- 工具对比表简洁明了
- 强调可行性和ROI

**Prerequisites:** Story 4.3可并行

**Technical Notes:**
- 复杂图表拆分为多页
- 使用渐进展示（reveal.js fragment功能）
- 最后一页留联系方式

---

### Story 4.5: 实现导航控制与交互

**作为** 开发者，
**我想** 实现PPT模式的完整导航控制，
**以便** 用户可以流畅控制演示。

**验收标准：**

**Given** PPT内容已编写（45页）
**When** 我实现导航控制
**Then** 应该：
- ✅ **键盘导航**：
  - 空格键：下一页
  - 方向键（←→）：前后翻页
  - Home/End：首页/末页
  - Esc：退出全屏/概览模式
- ✅ **页码指示器**：
  - 显示"当前页/总页数"（如"15 / 45"）
  - 位置：屏幕右下角
  - 样式：半透明背景，不遮挡内容
- ✅ **退出按钮**：
  - 显示"退出到文档模式"按钮
  - 位置：左上角
  - 点击跳转到对应Document页面
- ✅ **进度条**（可选）：
  - 屏幕底部显示进度条
  - 随翻页更新

**Prerequisites:** Story 4.2-4.4完成

**Technical Notes:**
- 使用reveal.js配置：
  ```js
  {
    controls: true,
    progress: true,
    slideNumber: 'c/t',  // current/total
    keyboard: true
  }
  ```
- 自定义CSS覆盖默认样式
- 退出按钮需自定义HTML：
  ```html
  <a href="/ai-native-intro/" class="exit-btn">退出到文档模式</a>
  ```

---

### Story 4.6: 样式定制与响应式适配

**作为** 开发者，
**我想** 定制PPT模式的视觉风格并适配不同设备，
**以便** 演示体验专业美观。

**验收标准：**

**Given** 导航控制已实现
**When** 我定制PPT样式
**Then** 应该：
- ✅ **主题定制**：
  - 创建自定义reveal.js主题CSS
  - 配色：主色调`#3eaf7c`（与VuePress一致）
  - 字体：中文字体（思源黑体 / PingFang SC）
  - 背景：简洁白色或淡灰色
- ✅ **响应式适配**：
  - 桌面（>1024px）：16:9横屏，字体24-32px
  - 平板（768-1024px）：字体20-28px
  - 移动端（<768px）：竖屏优化，字体18-24px
- ✅ **切换效果**：
  - 使用简洁的slide transition（如fade或slide）
  - 无复杂动画（避免晕眩）
- ✅ **图片适配**：
  - 图片自动缩放适应slide
  - 保持纵横比，不变形
- ✅ **测试**：
  - Chrome、Firefox、Safari测试
  - 移动端Safari/Chrome测试
  - 全屏模式测试

**Prerequisites:** Story 4.5完成

**Technical Notes:**
- 创建`docs/.vuepress/styles/reveal-custom.css`
- 使用CSS媒体查询适配设备：
  ```css
  @media (max-width: 768px) {
    .reveal h1 { font-size: 2em; }
  }
  ```
- 避免过度设计，保持专业简洁
- 测试不同分辨率（1920x1080, 1366x768, 414x896）

---

## Epic 5: Document文档模式 📖 ✅ (技术实现已完成)

**状态更新 (2025-12-17)**: 技术实现已100%完成！Linear Docs 风格三栏布局、导航系统、Markdown渲染、移动响应式全部实现。

**目标**: 实现深度阅读的文档体验，支持3级导航和完整内容展示。

**价值**: Document模式提供深度学习体验，是用户理解AI Native的核心路径。

**验收标准**:
- ✅ 左侧导航树完整（3级结构，折叠/展开） (已完成 - Story 5.1, 5.3)
- ✅ Markdown内容正确渲染（代码高亮、表格、图片） (已完成 - Story 5.2)
- ✅ 响应式布局完美适配（桌面/平板/移动） (已完成 - Story 5.5)
- ✅ Document ↔ PPT无缝切换 (已完成 - Story 5.6)
- ⏸️ 3章完整内容集成 → 内容任务已移至 Epic 3-B (Story 3-B.13)

**技术实现状态**: ✅ 完成
**内容集成状态**: ⏸️ Epic 3-B (Story 3-B.13)

---

### Story 5.1: 实现左侧导航树基础结构

**作为** 开发者，
**我想** 实现左侧导航树的基础UI结构，
**以便** 用户可以看到内容目录。

**验收标准：**

**Given** 内容文件结构已组织（Epic 3完成）
**When** 我实现导航树
**Then** 应该：
- ✅ **导航显示**：
  - 左侧边栏显示3级目录结构：
    ```
    ├─ AI Native简述
    │  ├─ 核心Hook
    │  ├─ 第一性原理
    │  ├─ 核心类比
    │  ├─ 60-80-100模型
    │  └─ 为什么是现在
    ├─ 真实案例
    │  ├─ 成功公司案例
    │  │  ├─ OpenAI
    │  │  ├─ Cursor AI
    │  │  ├─ Commonwealth Bank
    │  │  └─ Bupa
    │  └─ 组织转型案例
    │     ├─ Amazon
    │     ├─ Moderna
    │     ├─ Bayer
    │     └─ NVIDIA
    └─ 转化路程
       ├─ 组织架构转型
       ├─ 工具栈推荐
       └─ Builder能力培养
    ```
- ✅ **基础样式**：
  - 导航栏宽度：280px（桌面）
  - 层级缩进：每级16px
  - 链接样式：默认灰色，hover蓝色
- ✅ 配置VuePress sidebar（如果使用VuePress）

**Prerequisites:** Epic 4完成（可并行，但建议先完成PPT验证双模式可行性）

**Technical Notes:**
- VuePress自动生成sidebar（基于文件结构）
- 或手动配置sidebar数组
- 确保sidebar与文件路径对应

---

### Story 5.2: 配置Markdown渲染引擎

**作为** 开发者，
**我想** 配置Markdown渲染引擎支持所需的扩展功能，
**以便** 内容正确显示。

**验收标准：**

**Given** 导航树已实现
**When** 我配置Markdown渲染
**Then** 应该支持：
- ✅ **基础语法**：标题、段落、列表、引用、代码块、表格、图片、链接
- ✅ **代码高亮**：
  - 安装Prism.js或highlight.js
  - 支持常见语言（JavaScript, Python, Bash, YAML）
  - 行号显示（可选）
- ✅ **表格渲染**：
  - Markdown表格正确渲染为HTML `<table>`
  - 响应式：移动端横向滚动
- ✅ **图片优化**：
  - Lazy load（图片延迟加载）
  - 自动添加`loading="lazy"`属性
  - 点击放大（可选，使用medium-zoom插件）
- ✅ **锚点链接**：
  - 标题自动生成id（如`#核心hook`）
  - 点击目录跳转到对应锚点
- ✅ **提示框**（可选）：
  - Tip / Warning / Danger样式
  - 语法：`::: tip\n内容\n:::`

**Prerequisites:** Story 5.1完成

**Technical Notes:**
- VuePress内置Markdown增强功能
- 配置`docs/.vuepress/config.js`：
  ```js
  markdown: {
    lineNumbers: true,
    anchor: { permalink: true },
    toc: { includeLevel: [2, 3] }
  }
  ```
- 安装插件：`npm install @vuepress/plugin-medium-zoom`

---

### Story 5.3: 实现3级目录导航交互

**作为** 开发者，
**我想** 实现导航树的交互功能，
**以便** 用户可以折叠/展开、高亮当前页。

**验收标准：**

**Given** 导航树基础结构已实现
**When** 我实现交互功能
**Then** 应该：
- ✅ **当前章节高亮**：
  - 访问某页面时，对应导航项高亮（如蓝色背景）
  - 父级菜单自动展开
- ✅ **折叠/展开**：
  - 有子菜单的项目显示展开/折叠图标（▼/▶）
  - 点击图标切换展开状态
  - 默认：当前章节展开，其他折叠
- ✅ **点击跳转**：
  - 点击导航项跳转到对应页面
  - URL更新（支持浏览器前进/后退）
  - 页面无刷新（SPA体验）
- ✅ **滚动同步**：
  - 页面滚动时，导航高亮自动更新到当前可见section

**Prerequisites:** Story 5.2可并行

**Technical Notes:**
- VuePress默认支持高亮和折叠
- 自定义行为需修改VuePress主题
- 使用Intersection Observer API实现滚动同步（可选）

---

### Story 5.4: 集成3章完整内容

**作为** 开发者，
**我想** 将Epic 3准备的所有内容集成到Document模式，
**以便** 用户可以完整阅读3章内容。

**验收标准：**

**Given** Markdown渲染和导航已完成
**When** 我集成内容
**Then** 应该：
- ✅ 所有Markdown文件正确渲染
- ✅ 所有图片正确显示
- ✅ 内链正常工作（如："详见[工具栈推荐](/transformation/tool-stack.html)"）
- ✅ 外链正常工作（如市场研究来源链接）
- ✅ 代码块正确高亮（如果有）
- ✅ 表格响应式渲染
- ✅ 无404错误（所有资源都能加载）
- ✅ 测试3章内容的完整阅读流程

**Prerequisites:** Story 5.3完成

**Technical Notes:**
- 使用相对路径链接：`[文本](./file.html)` 或 `[文本](../other/file.html)`
- 图片路径：`![](~@public/images/xxx.png)` 或 `/images/xxx.png`
- 验证所有锚点链接：`[跳转](#section-id)`
- 本地预览逐页检查

---

### Story 5.5: 实现响应式布局（移动端）

**作为** 开发者，
**我想** 优化Document模式在移动端的体验，
**以便** 移动用户也能舒适阅读。

**验收标准：**

**Given** 桌面版Document模式已完成
**When** 我实现移动端适配
**Then** 应该：
- ✅ **移动端导航**（<768px）：
  - 左侧导航隐藏
  - 显示汉堡菜单图标（☰）
  - 点击展开全屏导航抽屉（Drawer）
  - 选择页面后自动关闭抽屉
- ✅ **内容区域**：
  - 单栏布局，全屏宽度
  - 字体大小适配（16px正文，24px标题）
  - 图片自动缩放，不超出屏幕宽度
  - 表格横向滚动（避免挤压变形）
- ✅ **代码块**：
  - 横向滚动（避免代码换行）
  - 字体大小适配（14px）
- ✅ **测试**：
  - iPhone（414x896）测试
  - Android（360x640）测试
  - 横屏/竖屏切换测试

**Prerequisites:** Story 5.4完成

**Technical Notes:**
- VuePress默认支持响应式，但可能需微调
- 使用CSS媒体查询：
  ```css
  @media (max-width: 768px) {
    .sidebar { display: none; }
    .page { padding: 1rem; }
  }
  ```
- 测试触摸手势（滑动）

---

### Story 5.6: 实现Document ↔ PPT模式切换

**作为** 开发者，
**我想** 实现Document和PPT模式之间的无缝切换，
**以便** 用户可以自由选择阅读方式。

**验收标准：**

**Given** Document和PPT模式都已完成
**When** 我实现模式切换
**Then** 应该：
- ✅ **Document → PPT**：
  - 每个章节首页显示"📊 查看PPT演示"按钮
  - 点击跳转到对应PPT页面（如：简述章节 → `slides/intro.html`）
- ✅ **PPT → Document**：
  - PPT左上角"退出到文档模式"按钮
  - 点击跳转到对应Document页面（如：`slides/intro.html` → `/ai-native-intro/`）
- ✅ **URL映射**：
  - `/ai-native-intro/` ↔ `/slides/intro.html`
  - `/case-studies/` ↔ `/slides/cases.html`
  - `/transformation/` ↔ `/slides/transformation.html`
- ✅ **状态保持**（可选）：
  - PPT退出时记住当前页码，Document链接到对应section
- ✅ **视觉提示**：
  - 按钮醒目，易于发现
  - Hover效果清晰

**Prerequisites:** Story 5.5完成

**Technical Notes:**
- 按钮使用Vue组件或HTML：
  ```html
  <a href="/slides/intro.html" class="view-slides-btn">
    📊 查看PPT演示
  </a>
  ```
- 样式统一（颜色、大小、位置）
- 测试双向跳转都正常工作

---

## Epic 6: 页面完善与发布 🎉

**目标**: 完善支持页面，优化性能和SEO，正式发布上线。

**价值**: 最后的润色和优化，确保MVP达到专业水准，可以正式面向用户。

**验收标准**:
- ✅ 首页和联系页面完成
- ✅ SEO优化到位（Meta标签、Sitemap）
- ✅ 性能达标（Lighthouse > 90分）
- ✅ 可访问性合格（Accessibility > 85分）
- ✅ 文档完整（README、CONTRIBUTING）
- ✅ 正式发布，开始收集反馈

---

### Story 6.1: 实现首页

**作为** 开发者，
**我想** 创建一个吸引人的首页，
**以便** 用户快速理解项目价值并选择阅读模式。

**验收标准：**

**Given** Document和PPT模式都已完成
**When** 我创建首页
**Then** `docs/README.md`应包含：
- ✅ **Hero区域**：
  - 项目标题："AINative - 重新定义AI时代的组织能力"
  - 副标题："双模式知识分享平台：深度学习 + 快速演示"
  - 背景图（可选）：组织能力示意图
- ✅ **双入口按钮**（醒目）：
  - "📊 PPT演示模式"（蓝色按钮，链接到`/slides/intro.html`）
  - "📖 详细文档模式"（绿色按钮，链接到`/ai-native-intro/`）
  - 按钮大小适中（桌面：200x60px，移动：160x50px）
- ✅ **项目简介**（1-2段）：
  - AI Native是什么
  - 为什么重要
  - 适合谁阅读
- ✅ **快速导航**（3个卡片）：
  - AI Native简述 → `/ai-native-intro/`
  - 真实案例 → `/case-studies/`
  - 转化路程 → `/transformation/`
- ✅ **页脚**：
  - GitHub链接（Star / Fork）
  - 联系方式链接 → `/contact.html`
  - 版权信息："© 2025 AINative. 开源协议：MIT"

**Prerequisites:** Epic 5完成

**Technical Notes:**
- VuePress支持Home页面特殊布局：
  ```yaml
  ---
  home: true
  heroText: AINative
  tagline: 重新定义AI时代的组织能力
  actionButtons:
    - text: 📊 PPT演示模式
      link: /slides/intro.html
    - text: 📖 详细文档模式
      link: /ai-native-intro/
  features:
    - title: AI Native简述
      details: ...
  ---
  ```
- 样式定制：`docs/.vuepress/styles/index.styl`

---

### Story 6.2: 实现联系页面

**作为** 开发者，
**我想** 创建联系页面，
**以便** 用户可以反馈和交流。

**验收标准：**

**Given** 首页已完成
**When** 我创建联系页面
**Then** `docs/contact.md`应包含：
- ✅ **标题**："联系我们"
- ✅ **联系方式区域**：
  - **微信**：
    - 微信号：XXXXX（文字）
    - 二维码图片（150x150px）
  - **邮箱**：
    - 邮箱地址：contact@ainative.dev（示例）
    - `mailto:`链接（点击打开邮件客户端）
- ✅ **GitHub Discussions**：
  - 说明："加入我们的社区讨论"
  - 链接：`https://github.com/<username>/ainative/discussions`
  - 引导用户在Discussions分享实践经验
- ✅ **反馈说明**：
  - 鼓励反馈：概念理解、实践经验、改进建议
  - 说明响应时间预期（如：1-3个工作日）
- ✅ **友好语气**：
  - 使用中文
  - 温暖友好的表述
  - 感谢用户关注

**Prerequisites:** Story 6.1可并行

**Technical Notes:**
- 微信二维码需准备实际图片
- 邮箱可使用占位符（如果还未确定）
- GitHub仓库需启用Discussions功能

---

### Story 6.3: SEO优化配置

**作为** 开发者，
**我想** 配置SEO优化，
**以便** 搜索引擎可以有效索引网站内容。

**验收标准：**

**Given** 所有页面内容已完成
**When** 我配置SEO
**Then** 应该：
- ✅ **全局Meta标签**（`docs/.vuepress/config.js`）：
  ```js
  head: [
    ['meta', { name: 'description', content: 'AINative - 双模式知识分享平台，深度理解AI Native组织能力重构' }],
    ['meta', { name: 'keywords', content: 'AI Native, 组织能力, Builder, AI工具, 组织转型' }],
    ['meta', { property: 'og:title', content: 'AINative - 重新定义AI时代的组织能力' }],
    ['meta', { property: 'og:description', content: '...' }],
    ['meta', { property: 'og:image', content: '/images/og-image.png' }],
    ['meta', { property: 'og:url', content: 'https://<username>.github.io/ainative/' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ]
  ```
- ✅ **每页独立Meta**：
  - 每个Markdown文件frontmatter添加：
    ```yaml
    ---
    title: AI Native简述
    description: 理解AI Native的核心理念：组织能力才是公司真正的壁垒
    ---
    ```
- ✅ **Sitemap生成**：
  - 安装插件：`npm install vuepress-plugin-sitemap`
  - 配置自动生成`sitemap.xml`
  - 提交到Google Search Console / Bing Webmaster / 百度站长
- ✅ **robots.txt**：
  - 创建`docs/.vuepress/public/robots.txt`：
    ```
    User-agent: *
    Allow: /
    Sitemap: https://<username>.github.io/ainative/sitemap.xml
    ```
- ✅ **语义化HTML**：
  - 标题层级正确（h1 → h2 → h3）
  - 使用`<article>`, `<nav>`, `<main>`标签
  - 图片都有`alt`属性

**Prerequisites:** Story 6.1-6.2完成

**Technical Notes:**
- Open Graph图片（og:image）需准备1200x630px PNG
- 测试工具：
  - Google Rich Results Test
  - Facebook Sharing Debugger
  - Twitter Card Validator

---

### Story 6.4: 性能优化

**作为** 开发者，
**我想** 优化网站性能，
**以便** 用户获得快速流畅的体验。

**验收标准：**

**Given** 所有功能已完成
**When** 我执行性能优化
**Then** 应该：
- ✅ **图片优化**：
  - 所有图片压缩（TinyPNG）
  - 转换为WebP格式（保留PNG备份）
  - 尺寸适配（最大宽度1200px）
  - 所有图片添加`loading="lazy"`
- ✅ **代码分割**：
  - VuePress自动按页面分割代码
  - 验证Network面板：每个页面只加载必要JS
- ✅ **资源压缩**：
  - 生产构建启用Gzip/Brotli压缩
  - CSS/JS minify（VuePress默认启用）
- ✅ **缓存策略**：
  - 配置GitHub Pages缓存头（通过`_headers`文件，如支持）
  - 或依赖GitHub Pages默认缓存策略
- ✅ **首屏优化**：
  - 首页Hero图片预加载
  - 关键CSS内联（VuePress自动处理）
  - 移除不必要的第三方脚本
- ✅ **Lighthouse测试**：
  - Performance > 90分
  - Best Practices > 90分
  - SEO > 95分
  - Accessibility > 85分
- ✅ **真实设备测试**：
  - 3G网络模拟：首页 < 2秒
  - 移动设备：流畅无卡顿

**Prerequisites:** Story 6.3可并行

**Technical Notes:**
- 使用WebPageTest测试真实性能
- 使用Chrome DevTools Lighthouse
- 图片优化工具：
  - TinyPNG API批量处理
  - 或使用`imagemin`构建时自动优化

---

### Story 6.5: 可访问性测试与修复

**作为** 开发者，
**我想** 确保网站符合可访问性标准，
**以便** 所有用户（包括视障用户）都能访问。

**验收标准：**

**Given** 网站功能和性能已优化
**When** 我执行可访问性测试
**Then** 应该：
- ✅ **键盘导航测试**：
  - Tab键可遍历所有交互元素（链接、按钮）
  - Tab顺序符合逻辑（从上到下、从左到右）
  - PPT模式键盘控制正常（空格/方向键）
  - 提供"Skip to content"链接（跳过导航）
- ✅ **屏幕阅读器测试**：
  - 使用NVDA（Windows）或VoiceOver（Mac）测试
  - 所有图片有描述性`alt`文本
  - 链接文字具有描述性（避免"点击这里"）
  - 标题层级正确（h1-h6）
- ✅ **对比度检查**：
  - 文字与背景对比度 > 4.5:1（WCAG AA）
  - 链接颜色与周围文字对比度 > 3:1
  - 使用Contrast Checker工具验证
- ✅ **ARIA标签**：
  - 导航使用`<nav>`标签
  - 主内容使用`<main>`标签
  - 适当使用`aria-label`、`aria-labelledby`
- ✅ **自动化测试**：
  - 使用axe DevTools扫描
  - 修复所有critical/serious问题
  - Lighthouse Accessibility > 85分

**Prerequisites:** Story 6.4完成

**Technical Notes:**
- 安装浏览器扩展：
  - axe DevTools
  - WAVE (Web Accessibility Evaluation Tool)
- 常见问题修复：
  - 图片添加alt文本
  - 按钮添加aria-label
  - 颜色对比度调整

---

### Story 6.6: 文档编写（README & CONTRIBUTING）

**作为** 开发者，
**我想** 编写完整的项目文档，
**以便** 团队成员和贡献者了解项目。

**验收标准：**

**Given** 项目已基本完成
**When** 我编写文档
**Then** 应该：
- ✅ **README.md**（项目根目录）包含：
  - 项目简介（AI Native是什么）
  - 功能特性（双模式、3章内容、响应式）
  - 在线访问链接
  - 本地开发指南：
    ```bash
    git clone https://github.com/<username>/ainative.git
    cd ainative
    npm install
    npm run dev  # 访问 http://localhost:8080
    ```
  - 构建部署指南（已在Epic 2完成）
  - 技术栈说明
  - 开源协议（MIT）
  - 联系方式
- ✅ **CONTRIBUTING.md**包含：
  - 贡献指南（如何提交PR）
  - 代码规范（ESLint、Prettier）
  - Commit message规范：
    ```
    feat(scope): 简短描述

    - 详细说明1
    - 详细说明2
    ```
  - 分支策略（main分支 + feature分支）
  - Issue模板（Bug / Feature Request）
  - PR审查流程
- ✅ **LICENSE**文件：
  - MIT License全文
- ✅ **中文语言**：
  - 文档使用中文编写
  - 技术术语保留英文（Markdown, VuePress等）

**Prerequisites:** Story 6.5可并行

**Technical Notes:**
- README.md可添加badges：
  - Build status
  - License
  - GitHub stars
- CONTRIBUTING.md参考成熟开源项目
- LICENSE从GitHub模板生成

---

### Story 6.7: 正式发布与宣传

**作为** 项目负责人，
**我想** 正式发布AINative并进行初步宣传，
**以便** 开始收集用户反馈。

**验收标准：**

**Given** 所有功能、优化、文档都已完成
**When** 我正式发布项目
**Then** 应该：
- ✅ **最终检查**：
  - 所有页面内容完整无误
  - 所有链接正常工作
  - 图片全部加载
  - 无控制台报错
  - 性能和可访问性达标
- ✅ **版本标记**：
  - Git打tag：`v1.0.0`
  - GitHub Release发布版本：
    ```
    # AINative v1.0.0 - MVP版本

    ## 功能特性
    - ✅ 双模式：Document文档模式 + PPT演示模式
    - ✅ 完整内容：AI Native简述、真实案例、转化路程
    - ✅ 响应式设计：桌面/平板/移动端适配
    - ✅ 性能优化：首页<2秒，Lighthouse>90分

    ## 在线访问
    https://<username>.github.io/ainative/

    ## 已知限制
    - 暂无英文版本（计划中）
    - 暂无搜索功能（计划中）
    ```
- ✅ **宣传渠道**：
  - **GitHub**：完善仓库Description，添加Topics（ai-native, documentation, vuepress等）
  - **社交媒体**（可选）：
    - 微信朋友圈/公众号
    - Twitter/LinkedIn（如有）
    - 相关技术社区（掘金、V2EX等）
  - **GitHub Discussions**：发布欢迎帖，邀请反馈
- ✅ **分析工具**：
  - Google Analytics / 百度统计集成
  - 配置事件追踪（PPT点击、Document阅读时长）
- ✅ **反馈收集**：
  - 监控GitHub Issues / Discussions
  - 微信/邮箱反馈
  - 准备快速响应机制

**Prerequisites:** Story 6.6完成（所有前置工作完成）

**Technical Notes:**
- 发布前进行全面回归测试
- 准备FAQ文档应对常见问题
- 设定MVP成功指标（参考PRD成功标准）：
  - 10个用户理解AI Native本质
  - 5个用户开始实践
  - 网站稳定运行，有自然流量

---

## 总结

### Epic和Story统计

| Epic | Story数 | 预估工时 | 关键里程碑 |
|------|---------|---------|-----------|
| **Epic 1: 基础设施** | 5 | 3-5天 | 项目可本地运行、构建成功 |
| **Epic 2: 部署验证** | 4 | 2-3天 | Hello World上线，GitHub Pages通路打通 |
| **Epic 3: 内容体系** | 5 | 5-7天 | 3章内容完成、图片资源齐全 |
| **Epic 4: PPT模式** | 6 | 4-5天 | 45页PPT可演示，双模式验证 |
| **Epic 5: Document模式** | 6 | 5-7天 | 文档模式完整，导航流畅 |
| **Epic 6: 完善发布** | 7 | 3-5天 | 正式发布，开始收集反馈 |
| **总计** | **33** | **4-5周** | **MVP上线** |

### Epic依赖关系

```
Epic 1 (基础设施)
    ↓
Epic 2 (部署验证) ←── 早期技术风险验证
    ↓
Epic 3 (内容体系) ──┬→ Epic 4 (PPT模式) ──┐
                   │      ↓                 ├→ Epic 6 (发布)
                   └→ Epic 5 (Document) ────┘
```

### 执行建议

**Week 1: 技术验证阶段**
- 完成Epic 1 + Epic 2
- 里程碑：Hello World部署成功
- 目标：确保技术通路完全打通

**Week 2: 快速原型阶段**
- Epic 3（内容）与 Epic 4（PPT）并行
- 里程碑：PPT模式可演示
- 目标：验证双模式创新点

**Week 3: 深度开发阶段**
- 完成Epic 5（Document模式）
- 里程碑：双模式完整可用
- 目标：核心功能全部就绪

**Week 4-5: 完善发布阶段**
- 完成Epic 6（优化、文档、发布）
- 里程碑：正式上线
- 目标：开始收集用户反馈，验证产品价值

### MVP成功标准（来自PRD）

**核心指标：**
1. **理解深度**（最重要）- 10个用户理解AI Native本质
2. **实践落地** - 5个用户开始实践
3. **传播触达** - 网站稳定运行，有自然流量
4. **参与质量** - 停留>5分钟，深度阅读>30%

**技术指标：**
- ✅ 首页加载 < 2秒
- ✅ Lighthouse Performance > 90分
- ✅ Lighthouse Accessibility > 85分
- ✅ 所有功能正常工作

---

**文档结束**

此Epic分解已准备就绪，可以开始实施。建议按顺序执行，每完成一个Epic进行里程碑验收。

_Created: 2025-12-15_
_Project: AINative_
_Methodology: BMAD-METHOD_
