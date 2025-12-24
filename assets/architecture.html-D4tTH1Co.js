import{_ as e,c as s,a,o as t}from"./app-TI2dsnHV.js";const i={};function o(l,n){return t(),s("div",null,[...n[0]||(n[0]=[a(`<h1 id="architecture" tabindex="-1"><a class="header-anchor" href="#architecture"><span>Architecture</span></a></h1><h2 id="executive-summary" tabindex="-1"><a class="header-anchor" href="#executive-summary"><span>Executive Summary</span></a></h2><p>本架构采用 VuePress 2 + Vite 构建静态文档站点，内置 reveal.js PPT 模式，部署到 GitHub Pages，覆盖文档模式与演示模式的双入口，强调性能（首屏 &lt;2s）、SEO 与可访问性合规，提供清晰的目录信息架构与一致的实现规范，确保后续内容与样式扩展可持续。</p><hr><h2 id="implementation-status-2025-12-17" tabindex="-1"><a class="header-anchor" href="#implementation-status-2025-12-17"><span>Implementation Status (2025-12-17)</span></a></h2><h3 id="✅-completed-components-systems" tabindex="-1"><a class="header-anchor" href="#✅-completed-components-systems"><span>✅ Completed Components &amp; Systems</span></a></h3><p><strong>核心构建系统</strong>:</p><ul><li>VuePress 2 + Vite bundler ✅</li><li>TypeScript 支持 ✅</li><li>GitHub Pages 部署流程 ✅</li><li>本地开发环境 ✅</li></ul><p><strong>PPT 演示模式</strong>:</p><ul><li>reveal.js 集成 (vuepress-plugin-md-enhance) ✅</li><li>Slide 布局组件 (Slide.vue) ✅</li><li>PPT 导航控制 (SlideControls.vue) ✅</li><li>PPT 侧边栏 (SlideSidebar.vue) ✅</li><li>7 个 slide 文件框架已创建 ✅</li></ul><p><strong>Document 文档模式</strong>:</p><ul><li>自定义三栏布局系统 (Layout.vue) ✅</li><li>Linear Docs 风格主题 (doc-mode.scss) ✅</li><li>自定义导航组件 (CustomNavigation.vue) ✅</li><li>右侧目录组件 (RightTOC.vue) ✅</li><li>面包屑导航 (Breadcrumb.vue) ✅</li><li>Markdown 渲染引擎配置 ✅</li><li>移动端响应式布局 ✅</li></ul><p><strong>双模式交互</strong>:</p><ul><li>Doc ↔ PPT 切换机制 (PresentationEntry.vue) ✅</li><li>导航栏切换按钮 (NavbarPresentationButton.vue) ✅</li><li>统一配置系统 ✅</li></ul><p><strong>样式系统</strong>:</p><ul><li>Linear Docs 风格颜色系统 ✅</li><li>响应式断点 (768px, 1024px) ✅</li><li>Dark mode 优先设计 ✅</li><li>全局样式 (index.scss) ✅</li></ul><h3 id="🚧-in-progress" tabindex="-1"><a class="header-anchor" href="#🚧-in-progress"><span>🚧 In Progress</span></a></h3><p><strong>Epic 3-B: 内容创作与填充</strong> (当前焦点):</p><ul><li>文档模式 6 章内容编写</li><li>PPT 模式 45 页内容填充</li><li>图片资源准备与集成</li><li>内容质量验证</li></ul><p><strong>Epic 6: 优化与发布</strong> (待 3-B 完成):</p><ul><li>SEO 优化</li><li>性能优化</li><li>可访问性测试</li><li>文档完善</li></ul><h3 id="📁-core-file-structure-as-implemented" tabindex="-1"><a class="header-anchor" href="#📁-core-file-structure-as-implemented"><span>📁 Core File Structure (As Implemented)</span></a></h3><pre><code class="language-plaintext">docs/
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
├── 3-transition-practice/            🚧 目录结构已创建，待填充
├── 6-outlook/                        🚧 目录结构已创建，待填充
└── 5-case-studies/                     🚧 目录结构已创建，待填充
</code></pre><h3 id="🎯-next-steps" tabindex="-1"><a class="header-anchor" href="#🎯-next-steps"><span>🎯 Next Steps</span></a></h3><ol><li><p><strong>内容创作</strong>:</p><ul><li>填充所有章节 Markdown 内容</li><li>填充所有 PPT slide 内容</li><li>准备并集成图片资源</li></ul></li><li><p><strong>内容集成验证</strong>:</p><ul><li>验证导航正确性</li><li>测试所有链接</li><li>确保移动端体验</li></ul></li><li><p><strong>优化与发布</strong>:</p><ul><li>SEO 配置</li><li>性能优化</li><li>最终测试与发布</li></ul></li></ol><hr><h2 id="project-context-working" tabindex="-1"><a class="header-anchor" href="#project-context-working"><span>Project Context (Working)</span></a></h2><ul><li>项目类型：静态文档网站（文档模式 + PPT模式）部署到 GitHub Pages，纯前端、无后端/数据库/用户系统/实时交互</li><li>主要内容：3 章（AI Native 简述、真实案例、转化路程），Markdown 驱动，配图为主</li><li>关键功能：Document 模式（3 级导航树、响应式、Markdown 渲染）、PPT 模式（reveal.js，30-50 页）、首页与联系页</li><li>性能与质量：首屏 &lt;2s、Lighthouse &gt;90，SEO 友好（meta/OG/sitemap），可访问性 AA 水平</li><li>规模与规划：6 个 Epic，33 个 Story；先基础设施与部署，再内容与双模式，最终优化发布</li></ul><h2 id="project-initialization" tabindex="-1"><a class="header-anchor" href="#project-initialization"><span>Project Initialization</span></a></h2><p>执行顺序与命令（先本地验证，再接入 CI/CD）：</p><ul><li>包管理器：pnpm（建议 8.x，与 lockfile 对齐）</li><li>Node 版本：18 LTS（锁定于 CI 中）</li><li>依赖安装：<pre><code class="language-bash"><span class="token function">pnpm</span> <span class="token function">install</span> --frozen-lockfile
</code></pre></li><li>本地开发预览：<pre><code class="language-bash"><span class="token function">pnpm</span> run docs:dev   <span class="token comment"># alias to \`vuepress dev docs\`</span>
</code></pre></li><li>生产构建：<pre><code class="language-bash"><span class="token function">pnpm</span> run docs:build <span class="token comment"># alias to \`vuepress build docs\`</span>
</code></pre></li><li>初始化（若尚未生成骨架，可参考）：<pre><code class="language-bash"><span class="token function">pnpm</span> create vuepress@latest
<span class="token comment"># 交互选择 Vite bundler，启用 TypeScript；使用现有 docs 目录</span>
</code></pre></li><li>部署（CI 推送到 gh-pages 分支，详见 Deployment Architecture）</li></ul><h2 id="starter-template-decision" tabindex="-1"><a class="header-anchor" href="#starter-template-decision"><span>Starter Template Decision</span></a></h2><ul><li>选择：VuePress 2.x（最新稳定版待联网校验）+ vuepress-plugin-revealjs（最新稳定版待联网校验）</li><li>初始化命令（推荐先校验版本后执行）：<pre><code class="language-bash"><span class="token function">npm</span> view vuepress version        <span class="token comment"># 记录当前稳定版</span>
<span class="token function">npm</span> view vuepress-plugin-revealjs version
<span class="token function">npm</span> create vuepress@latest
<span class="token comment"># 交互选择项目目录（使用当前仓库），选择 Vite bundler，启用 TypeScript 支持</span>
</code></pre></li><li>Starter 提供的决策（标记为 PROVIDED BY STARTER）： <ul><li>框架：VuePress 2（Vue 3，默认 Vite bundler）</li><li>语言：TypeScript 可选（建议开启）</li><li>构建/开发脚本：<code>vuepress dev/build</code>（通过 npm scripts）</li><li>Lint/格式化：无强制，需要后续决策（ESLint/Prettier）</li><li>目录结构：<code>docs/.vuepress/{config.ts, styles, public}</code> + Markdown 内容</li></ul></li><li>需额外决策/集成： <ul><li>reveal.js 集成：安装并配置 <code>vuepress-plugin-revealjs</code>，为 <code>/slides/</code> 提供 PPT 模式</li><li>主题/导航：侧边栏 3 级导航配置，首页/联系页布局</li><li>SEO/性能：meta/OG/sitemap 插件、图片优化、懒加载</li><li>QA：ESLint/Prettier、简单单测（如无则文档化约束）</li></ul></li></ul><h2 id="decision-summary" tabindex="-1"><a class="header-anchor" href="#decision-summary"><span>Decision Summary</span></a></h2><table><thead><tr><th>Category</th><th>Decision</th><th>Version</th><th>Affects Epics</th><th>Rationale</th></tr></thead><tbody><tr><td>Framework/Build</td><td>VuePress 2 + Vite bundler + TypeScript</td><td>vuepress@2.0.0-rc.26（pnpm view 2025-12-15）；Node 18.x LTS</td><td>Epic 1/2/5/6</td><td>Starter 贴合中文文档 + 静态站点，Vite 构建快，TS 降低回归</td></tr><tr><td>PPT Mode</td><td><code>vuepress-plugin-md-enhance</code>（presentation/reveal），slides <code>docs/slides/*.md</code> → <code>/slides/*.html</code></td><td>2.0.0-rc.99（pnpm view 2025-12-15）</td><td>Epic 4/5</td><td>低成本集成 30-50 页 PPT，复用 Markdown</td></tr><tr><td>Deployment</td><td>GitHub Pages <code>base: /AINative/</code>; CI: setup-node@v4 + <code>pnpm install --frozen-lockfile</code> + <code>pnpm run docs:build</code>; 发布 <code>docs/.vuepress/dist</code> → gh-pages</td><td>Node 18.x；pnpm 8.x</td><td>Epic 2/6</td><td>标准 Pages 流，锁版本降故障</td></tr><tr><td>Information Architecture</td><td>3 级 sidebar：<code>ai-native-intro/*</code>, <code>5-case-studies/*</code>, <code>transformation/*</code>; Doc↔PPT 映射 <code>/ai-native-intro/</code> ↔ <code>/slides/intro.html</code> 等；首页 <code>/</code>，联系 <code>/contact.html</code></td><td>n/a</td><td>Epic 4/5/6</td><td>明确导航与模式切换，降低跳出</td></tr><tr><td>Performance</td><td>图片 &lt;200KB，WebP 优先，<code>loading=&quot;lazy&quot;</code>；首屏 &lt;2s，Lighthouse &gt;90；移除未用插件</td><td>n/a</td><td>Epic 6</td><td>保证体验与指标</td></tr><tr><td>SEO &amp; Accessibility</td><td>全局 meta/OG，sitemap + robots.txt，h1→h2→h3；alt 完整；键盘可导航</td><td>n/a</td><td>Epic 6</td><td>提升曝光与无障碍</td></tr><tr><td>Theme/Styles</td><td>主色 #1F6FEB，字体 Inter + Noto Sans SC（本地备选），断点 768/1024；PPT 主题浅色简洁</td><td>n/a</td><td>Epic 4/5/6</td><td>统一视觉与响应式</td></tr><tr><td>Markdown Enhancements</td><td>提示块、Prism 高亮、表格横向滚动、自动锚点</td><td>n/a</td><td>Epic 5</td><td>提升文档可读性</td></tr><tr><td>Code Quality</td><td>ESLint + Prettier（若不装则文档约束）；可选 commit lint</td><td>n/a</td><td>Epic 1/6</td><td>控制一致性，便于贡献</td></tr><tr><td>Content/Assets</td><td>kebab-case 命名；图片路径 <code>/images/*</code>；slides 与 docs 共用内容源</td><td>n/a</td><td>Epic 3/4/5</td><td>统一资产管理</td></tr></tbody></table><h2 id="project-structure" tabindex="-1"><a class="header-anchor" href="#project-structure"><span>Project Structure</span></a></h2><pre><code>AINative/
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
│   ├── 3-transition-practice/             # 第5章：过渡性转化路程实践
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
│   ├── 5-case-studies/                      # 案例库（独立章节）
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
│           └── images/                    # 站点图片（WebP/&lt;200KB，kebab-case）
├── package.json
├── package-lock.json
├── .github/workflows/deploy.yml
└── README.md                              # 项目级说明
</code></pre><h2 id="epic-to-architecture-mapping" tabindex="-1"><a class="header-anchor" href="#epic-to-architecture-mapping"><span>Epic to Architecture Mapping</span></a></h2><ul><li>Epic 1 基础设施：框架选型（VuePress 2 + Vite + TS）、目录骨架、开发/构建脚本、基础样式变量。</li><li>Epic 2 部署验证：GitHub Actions + Pages 发布，base 路径 <code>/AINative/</code>，Hello World 验证。</li><li><strong>Epic 3-A 内容框架搭建</strong>：建立完整的6章目录结构（1-6章 + 案例库），配置VuePress导航系统，创建IA设计文档。</li><li><strong>Epic 3-B 内容填充</strong>：填充所有6章内容（30000+字）+ 8个案例分析 + 图片资源（WebP格式）。</li><li>Epic 4 PPT 模式：<code>vuepress-plugin-revealjs</code> 集成，7个PPT文件（对应6章+案例库），浅色主题。</li><li>Epic 5 Document 模式：多层侧边栏、导航高亮、表格滚动、提示块、代码高亮、Doc↔PPT 跳转按钮。</li><li>Epic 6 发布与优化：SEO（meta/OG/sitemap/robots）、性能（lazy-load, WebP, &lt;200KB）、可访问性（alt/对比度/键盘导航），README/CONTRIBUTING。</li></ul><h2 id="fr-coverage-notes" tabindex="-1"><a class="header-anchor" href="#fr-coverage-notes"><span>FR Coverage Notes</span></a></h2><ul><li>FR-1 内容展示：6 章章节架构（1-introduction ~ 6-outlook + case-studies），所有图片资源路径 <code>/images</code>，slides 与 docs 一一对应。</li><li>FR-2 文档模式：多层侧边栏（章节5支持3层嵌套）、表格滚动、代码高亮、提示块（Implementation Patterns + IA）。</li><li>FR-3 PPT 模式：slides 目录包含7个文件，每章独立PPT，支持全屏演示和键盘导航。</li><li>FR-4 首页/联系页：结构树包含 README（首页）与 contact.md。</li><li>FR-5 部署：GitHub Pages + gh-pages 发布流程。</li><li>FR-6 SEO/性能：决策表 + Performance/SEO 章节；需补充 meta/OG/robots 示例（见下）。</li></ul><h2 id="technology-stack-details" tabindex="-1"><a class="header-anchor" href="#technology-stack-details"><span>Technology Stack Details</span></a></h2><h3 id="core-technologies" tabindex="-1"><a class="header-anchor" href="#core-technologies"><span>Core Technologies</span></a></h3><ul><li>VuePress 2.0.0-rc.26（Vue 3, Vite bundler, TS 开启）</li><li>vuepress-plugin-md-enhance 2.0.0-rc.99（presentation / reveal）</li><li>Prism 高亮（内置或主题集成）</li><li>ESLint + Prettier（建议）</li><li>GitHub Actions + Pages（部署）</li></ul><h3 id="seo-meta-example-vuepress-config-snippet" tabindex="-1"><a class="header-anchor" href="#seo-meta-example-vuepress-config-snippet"><span>SEO/Meta Example (VuePress config snippet)</span></a></h3><pre><code class="language-ts"><span class="token comment">// docs/.vuepress/config.ts (excerpt)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  base<span class="token operator">:</span> <span class="token string">&#39;/AINative/&#39;</span><span class="token punctuation">,</span>
  head<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;description&#39;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&#39;AINative - 双模式知识站点&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> property<span class="token operator">:</span> <span class="token string">&#39;og:title&#39;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&#39;AINative&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> property<span class="token operator">:</span> <span class="token string">&#39;og:description&#39;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&#39;文档 + PPT 双模式&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> property<span class="token operator">:</span> <span class="token string">&#39;og:image&#39;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&#39;/images/og-image.png&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;robots&#39;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&#39;index,follow&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&#39;sitemap&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> hostname<span class="token operator">:</span> <span class="token string">&#39;https://&lt;username&gt;.github.io/ainative/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;md-enhance&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> presentation<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><h3 id="integration-points" tabindex="-1"><a class="header-anchor" href="#integration-points"><span>Integration Points</span></a></h3><ul><li>Doc ↔ PPT：章节首页提供“查看 PPT”按钮，PPT 左上角“返回文档”，路径映射： <ul><li><code>/ai-native-intro/</code> ↔ <code>/slides/intro.html</code></li><li><code>/5-case-studies/</code> ↔ <code>/slides/cases.html</code></li><li><code>/transformation/</code> ↔ <code>/slides/transformation.html</code></li></ul></li><li>按钮示例：<pre><code class="language-md"><span class="token comment">&lt;!-- 在章节 README.md 末尾 --&gt;</span>
<span class="token url">[<span class="token content">📊 查看 PPT 演示</span>](<span class="token url">/slides/intro.html</span>)</span>{.ppt-button}
</code></pre><pre><code class="language-md"><span class="token comment">&lt;!-- 在 slides/intro.md 顶部 --&gt;</span>
<span class="token url">[<span class="token content">⬅ 返回文档模式</span>](<span class="token url">/ai-native-intro/</span>)</span>{.back-button}
</code></pre></li><li>部署管线：push main → Actions（pnpm install/build）→ gh-pages → Pages</li><li>资源：<code>/images/*</code> 供文档与 PPT 共享；公共 head/meta/主题样式共用</li></ul><h2 id="novel-pattern-designs" tabindex="-1"><a class="header-anchor" href="#novel-pattern-designs"><span>Novel Pattern Designs</span></a></h2><p>无新型复杂交互/数据流需求，沿用标准静态站点模式；若后续引入搜索/i18n/交互问卷，再增补模式。</p><h2 id="implementation-patterns" tabindex="-1"><a class="header-anchor" href="#implementation-patterns"><span>Implementation Patterns</span></a></h2><p>These patterns ensure consistent implementation across all AI agents:</p><ul><li>命名：文件/目录/图片统一 kebab-case；PPT/Doc 文件名按章节命名（intro, cases, transformation）。</li><li>结构：内容放 <code>docs/*</code>，公共资源 <code>/images</code>，样式 <code>docs/.vuepress/styles/index.css</code>，配置 <code>docs/.vuepress/config.ts</code>。</li><li>代码高亮：Prism，需行号则统一开启或关闭，不混用。</li><li>表格：默认开启横向滚动，避免换行破坏布局。</li><li>Doc↔PPT 按映射表添加按钮，按钮样式统一（主色 #1F6FEB）。</li><li>图片优化：源图压缩 &lt;200KB，优先 WebP；存放 <code>/images</code>，引用相对路径；必要时保留 PNG 备份。</li></ul><h2 id="consistency-rules" tabindex="-1"><a class="header-anchor" href="#consistency-rules"><span>Consistency Rules</span></a></h2><h3 id="naming-conventions" tabindex="-1"><a class="header-anchor" href="#naming-conventions"><span>Naming Conventions</span></a></h3><ul><li>目录/文件：kebab-case（<code>ai-native-intro</code>），图片 <code>core-hook.png</code></li><li>路径：文档 <code>/ai-native-intro/</code>，PPT <code>/slides/intro.html</code></li><li>组件/样式文件：若新增自定义组件，使用 PascalCase 文件名</li><li>日期格式：ISO 8601（UTC），示例 <code>2025-12-15T00:00:00Z</code></li><li>用户可见错误文案：中文简洁说明 + 行动指引，例如 “加载失败，请刷新或稍后再试”</li></ul><h3 id="code-organization" tabindex="-1"><a class="header-anchor" href="#code-organization"><span>Code Organization</span></a></h3><ul><li>配置：<code>docs/.vuepress/config.ts</code></li><li>样式：<code>docs/.vuepress/styles/index.css</code>；主题变量集中管理</li><li>内容：每章子目录 <code>README.md</code> 为入口，其余分章节文件</li><li>Slides：<code>docs/slides/*.md</code> 对应章节</li></ul><h3 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling"><span>Error Handling</span></a></h3><ul><li>构建/部署：CI 阶段阻断；本地 <code>pnpm run docs:build</code> 必须通过</li><li>链接校验：启用 VuePress 内链校验（如告警需修正）</li></ul><h3 id="logging-strategy" tabindex="-1"><a class="header-anchor" href="#logging-strategy"><span>Logging Strategy</span></a></h3><ul><li>CI 日志：Actions 输出保留；构建失败需修复后重跑</li><li>前端运行时：纯静态，无运行时日志，仅浏览器控制台清洁为目标</li></ul><h2 id="data-architecture" tabindex="-1"><a class="header-anchor" href="#data-architecture"><span>Data Architecture</span></a></h2><ul><li>数据源：Markdown 文档 + 静态图片（无数据库）</li><li>结构：3 章内容与 PPT 共用素材；路径 <code>/images/*</code></li><li>元信息：frontmatter 标题/描述/keywords 用于 SEO</li></ul><h2 id="api-contracts" tabindex="-1"><a class="header-anchor" href="#api-contracts"><span>API Contracts</span></a></h2><ul><li>无后端 API；静态站点，无网络交互。后续若增加搜索/API，再定义。</li></ul><h2 id="security-architecture" tabindex="-1"><a class="header-anchor" href="#security-architecture"><span>Security Architecture</span></a></h2><ul><li>传输：GitHub Pages 默认 HTTPS</li><li>头部：配置 CSP、HSTS（若 Pages 支持自定义 headers，可通过 <code>_headers</code> 或反向代理；否则记录为限制）</li><li>内容安全：无用户输入；外链加 <code>rel=&quot;noopener noreferrer&quot;</code></li><li>依赖安全：Dependabot / 手动升级，锁定 package-lock</li></ul><h2 id="performance-considerations" tabindex="-1"><a class="header-anchor" href="#performance-considerations"><span>Performance Considerations</span></a></h2><ul><li>目标：首屏 &lt;2s（3G），Lighthouse &gt;90</li><li>资源：WebP 优先；单图 &lt;200KB；<code>loading=&quot;lazy&quot;</code>；避免未用插件</li><li>构建：Vite 代码分割；生产模式 minify；移除死链与未用组件</li><li>监测：发布后使用 Lighthouse（Performance/BestPractice/SEO）、axe（无障碍）、Mozilla Observatory（安全头部）每次发布抽检</li></ul><h2 id="deployment-architecture" tabindex="-1"><a class="header-anchor" href="#deployment-architecture"><span>Deployment Architecture</span></a></h2><ul><li>GitHub Actions（<code>deploy.yml</code>）： <ul><li>触发：push main</li><li>步骤：checkout → setup-node@v4（node 18）→ pnpm/action-setup（pnpm 8.x）→ pnpm install --frozen-lockfile → pnpm run docs:build → 发布 <code>docs/.vuepress/dist</code> 到 gh-pages</li><li>Pages：设置 <code>base: &#39;/AINative/&#39;</code></li></ul></li><li>自定义域名：可选，需同步调整 <code>base</code></li><li>回滚：保留上一次成功构建的 gh-pages 版本（Actions 自动保留历史）</li></ul><h2 id="development-environment" tabindex="-1"><a class="header-anchor" href="#development-environment"><span>Development Environment</span></a></h2><h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h3><ul><li>Node 18.x LTS</li><li>npm 9+（随 Node 18）</li><li>推荐：pnpm/yarn 若使用则需锁定并更新 CI</li></ul><h3 id="setup-commands" tabindex="-1"><a class="header-anchor" href="#setup-commands"><span>Setup Commands</span></a></h3><pre><code class="language-bash"><span class="token function">pnpm</span> <span class="token function">install</span> --frozen-lockfile
<span class="token function">pnpm</span> run docs:dev
<span class="token function">pnpm</span> run docs:build
</code></pre><h2 id="architecture-decision-records-adrs" tabindex="-1"><a class="header-anchor" href="#architecture-decision-records-adrs"><span>Architecture Decision Records (ADRs)</span></a></h2><ul><li>ADR-001 框架与构建：VuePress 2 + Vite + TS，Node 18 LTS</li><li>ADR-002 双模式：Document + reveal.js PPT，slides 目录与映射路径</li><li>ADR-003 部署：GitHub Actions + Pages，base <code>/AINative/</code></li><li>ADR-004 信息架构：3 级 sidebar，Doc↔PPT 路由映射</li><li>ADR-005 性能与资源：WebP/&lt;200KB，lazy-load，移除未用插件</li><li>ADR-006 SEO/AA：meta/OG/sitemap/robots，alt/对比度/键盘导航</li><li>ADR-007 规范：ESLint+Prettier（若未安装则文档约束）；kebab-case 资产命名</li></ul><hr><p>Generated by BMAD Decision Architecture Workflow v1.0<br> Date: 2025-12-15<br> For: Jett</p>`,81)])])}const p=e(i,[["render",o]]),r=JSON.parse('{"path":"/architecture.html","title":"Architecture","lang":"zh-CN","frontmatter":{},"filePathRelative":"architecture.md"}');export{p as comp,r as data};
