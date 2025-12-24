import{_ as s,c as a,a as t,o as p}from"./app-TI2dsnHV.js";const o={};function e(i,n){return p(),a("div",null,[...n[0]||(n[0]=[t(`<h1 id="ainative-项目信息架构设计-information-architecture" tabindex="-1"><a class="header-anchor" href="#ainative-项目信息架构设计-information-architecture"><span>AINative 项目信息架构设计 (Information Architecture)</span></a></h1><p><em>版本: v1.1 | 创建时间: 2025-12-16 | 最后更新: 2025-12-16 | 作者: Product Manager</em></p><hr><h2 id="执行摘要" tabindex="-1"><a class="header-anchor" href="#执行摘要"><span>执行摘要</span></a></h2><p>本文档详细定义了AINative项目的完整信息架构（IA），包括6章内容体系、案例库、以及PPT演示模式的完整结构设计。</p><p><strong>设计原则</strong>：</p><ul><li><strong>6章完整框架</strong>：严格遵循用户指定的6章结构</li><li><strong>Doc↔PPT双模式</strong>：支持文档模式和PPT演示模式无缝切换</li><li><strong>模块化设计</strong>：每个章节独立，便于维护和扩展</li><li><strong>Kebab-case命名</strong>：所有目录和文件使用英文kebab-case命名</li></ul><hr><h2 id="_1-整体架构概览" tabindex="-1"><a class="header-anchor" href="#_1-整体架构概览"><span>1. 整体架构概览</span></a></h2><h3 id="_1-1-顶层结构" tabindex="-1"><a class="header-anchor" href="#_1-1-顶层结构"><span>1.1 顶层结构</span></a></h3><pre><code>docs/
├── 1-introduction/              # 第一章：介绍
├── 2-comparison/                # 第二章：现状对比
├── 3-core-definition/           # 第三章：核心定义
├── 4-practice-demo/             # 第四章：AI Native实践演示
├── 3-transition-practice/       # 第五章：过渡性转化路程实践
├── 6-outlook/                   # 第六章：AI Native展望
├── 5-case-studies/                # 案例库（独立章节）
├── slides/                      # PPT演示模式
└── .vuepress/                   # VuePress配置
    ├── config.ts                # 导航和配置
    └── public/                  # 静态资源
        └── images/              # 图片资源
</code></pre><h3 id="_1-2-内容层级关系" tabindex="-1"><a class="header-anchor" href="#_1-2-内容层级关系"><span>1.2 内容层级关系</span></a></h3><pre><code class="language-mermaid"><span class="token keyword">graph</span> TD
    A<span class="token text string">[AINative 知识体系]</span> <span class="token arrow operator">--&gt;</span> B<span class="token text string">[6章主体内容]</span>
    A <span class="token arrow operator">--&gt;</span> C<span class="token text string">[案例库]</span>
    A <span class="token arrow operator">--&gt;</span> D<span class="token text string">[PPT演示]</span>

    B <span class="token arrow operator">--&gt;</span> B1<span class="token text string">[第1章：介绍]</span>
    B <span class="token arrow operator">--&gt;</span> B2<span class="token text string">[第2章：现状对比]</span>
    B <span class="token arrow operator">--&gt;</span> B3<span class="token text string">[第3章：核心定义]</span>
    B <span class="token arrow operator">--&gt;</span> B4<span class="token text string">[第4章：实践演示]</span>
    B <span class="token arrow operator">--&gt;</span> B5<span class="token text string">[第5章：转化路程]</span>
    B <span class="token arrow operator">--&gt;</span> B6<span class="token text string">[第6章：展望引导]</span>

    C <span class="token arrow operator">--&gt;</span> C1<span class="token text string">[成功公司案例]</span>
    C <span class="token arrow operator">--&gt;</span> C2<span class="token text string">[组织转型案例]</span>
    C <span class="token arrow operator">--&gt;</span> C3<span class="token text string">[市场数据]</span>

    D <span class="token arrow operator">--&gt;</span> D1<span class="token text string">[对应6章PPT]</span>
    D <span class="token arrow operator">--&gt;</span> D2<span class="token text string">[案例PPT]</span>
</code></pre><hr><h2 id="_2-章节详细设计" tabindex="-1"><a class="header-anchor" href="#_2-章节详细设计"><span>2. 章节详细设计</span></a></h2><h3 id="第一章-介绍-1-introduction" tabindex="-1"><a class="header-anchor" href="#第一章-介绍-1-introduction"><span>第一章：介绍 (<code>1-introduction/</code>)</span></a></h3><p><strong>目标</strong>：通过开场Hook引发思考，建立核心认知</p><p><strong>文件结构</strong>：</p><pre><code>1-introduction/
├── README.md                           # 章节导航（开场Hook）
├── why-organizational-capability.md    # 为什么组织能力是壁垒
├── ai-native-brief.md                  # AI Native简述
└── simple-case-demo.md                 # AI Native简单案例演示
</code></pre><p><strong>内容要点</strong>：</p><ul><li><strong>开场Hook</strong>：组织能力才是公司真正的壁垒 <ul><li>引发思考：什么决定了组织能力？</li><li>引出问题：传统组织的能力边界在哪？</li></ul></li><li><strong>AI Native简述</strong>：快速介绍AI Native的核心概念</li><li><strong>简单案例演示</strong>：通过具体案例展示AI Native的实际效果</li></ul><hr><h3 id="第二章-现状对比-2-comparison" tabindex="-1"><a class="header-anchor" href="#第二章-现状对比-2-comparison"><span>第二章：现状对比 (<code>2-comparison/</code>)</span></a></h3><p><strong>目标</strong>：通过对比展示传统组织和AI Native组织的差异</p><p><strong>文件结构</strong>：</p><pre><code>2-comparison/
├── README.md                    # 章节导航和对比表
├── traditional-organization.md  # 传统组织：普通人构建的组织
└── ai-native-organization.md    # AI Native：顶尖科学家级别的组织
</code></pre><p><strong>内容要点</strong>：</p><ul><li>传统组织的特征和局限</li><li>AI Native组织的特征和优势</li><li>核心对比维度（人员能力、组织方式、产出质量）</li></ul><hr><h3 id="第三章-核心定义-3-core-definition" tabindex="-1"><a class="header-anchor" href="#第三章-核心定义-3-core-definition"><span>第三章：核心定义 (<code>3-core-definition/</code>)</span></a></h3><p><strong>目标</strong>：详细定义什么是AI Native</p><p><strong>文件结构</strong>：</p><pre><code>3-core-definition/
├── README.md                       # 章节导航和核心公式
├── builder-ai-team.md              # Builder + AI团队（60-80分）
├── professional-optimization.md    # 专业团队优化（90-100分）
├── digital-workforce.md            # 数字劳动力：Clone Builder思维
└── result-oriented-division.md     # 按结果分工，端到端负责
</code></pre><p><strong>内容要点</strong>：</p><ul><li><strong>AI Native = Builder + AI（60-80分） + 专业团队优化（90-100分）</strong><ul><li>Builder + AI团队：目标是完整实现，可以是MVP版本、MVP功能或基本实现（60-80分）</li><li>专业团队优化：打造成完美、高质量的结果（90-100分）</li></ul></li><li><strong>数字劳动力</strong>：新兴的AI Clone技术 <ul><li>Clone当前Builder的思维、SOP等特性</li><li>持续进化，将Builder的工作量越来越少</li><li>形成可复制的个性化高质量拟人劳动力</li><li>减轻人员离职风险</li><li>参考产品：yoolee.cn、viven.ai</li></ul></li><li><strong>按结果分工，端到端负责</strong>：一个Builder完成整条链路，并可持续PDCA</li></ul><hr><h3 id="第四章-ai-native实践演示-4-practice-demo" tabindex="-1"><a class="header-anchor" href="#第四章-ai-native实践演示-4-practice-demo"><span>第四章：AI Native实践演示 (<code>4-practice-demo/</code>)</span></a></h3><p><strong>目标</strong>：通过实际操作演示展示AI Native工作方式</p><p><strong>文件结构</strong>：</p><pre><code>4-practice-demo/
├── README.md                   # 演示概述
├── demo-overview.md            # 演示目标和整体流程
├── toolchain-setup.md          # Linear、Slack、Github、Devin配置
├── workflow-demonstration.md   # 完整工作流程演示
└── reference.md                # 参考资源（播客链接等）
</code></pre><p><strong>内容要点</strong>：</p><ul><li>桌面操作演示说明</li><li>Linear任务管理</li><li>Slack协作沟通</li><li>Github代码管理</li><li>Devin等智能体使用</li><li>一个Builder完成一个产品的完整流程</li><li>参考播客：https://www.xiaoyuzhoufm.com/episode/68ccfa75a56ca3e0c438706c</li></ul><hr><h3 id="第五章-过渡性转化路程实践-3-transition-practice" tabindex="-1"><a class="header-anchor" href="#第五章-过渡性转化路程实践-3-transition-practice"><span>第五章：过渡性转化路程实践 (<code>3-transition-practice/</code>)</span></a></h3><p><strong>目标</strong>：提供详细的转型路径和实践方法论</p><p><strong>文件结构</strong>：</p><pre><code>3-transition-practice/
├── README.md                               # 章节总览
│
├── 5-1-organization-architecture/          # 组织架构与工作流程转型
│   ├── README.md                           # 导航
│   │
│   ├── standard-model/                     # 标准型AI Native组织
│   │   ├── README.md                       # 标准型概述
│   │   ├── core-principles.md              # 核心原则
│   │   ├── team-scale.md                   # 团队规模（完全灵活）
│   │   ├── role-definition.md              # 角色定义（Builder核心）
│   │   └── work-style.md                   # 工作方式（端到端、PDCA）
│   │
│   ├── transitional-model/                 # 过渡型AI Native组织
│   │   ├── README.md                       # 过渡型概述
│   │   ├── new-products.md                 # 新产品（完全标准模式）
│   │   └── existing-products.md            # 现有产品（双轨制）
│   │
│   └── transition-roadmap/                 # 过渡性实施路线
│       ├── README.md                       # 实施路线概述
│       ├── organization-level.md           # 组织层面转型步骤
│       ├── daily-workflow.md               # 日常工作流程转型
│       └── product-development/            # 产品开发流程转型（7步详解）
│           ├── README.md                   # 7步流程概述
│           ├── 1-data-analysis.md          # 数据分析
│           ├── 2-idea-generation.md        # Idea生成
│           ├── 3-market-research.md        # 市场研究
│           ├── 4-competitive-analysis.md   # 竞品分析
│           ├── 5-requirements.md           # 需求定义
│           ├── 6-ux-design.md              # UX设计
│           └── 7-development.md            # 开发实现
│
└── 5-2-core-practices/                     # 5.2 核心实践方法论
    ├── README.md                           # 5.2导航
    │
    ├── bmad-method/                        # BMAD-METHOD详解
    │   ├── README.md                       # 什么是BMAD-METHOD
    │   ├── core-features.md                # 核心特点（4阶段、3轨道、21智能体、50+工作流）
    │   ├── quality-guarantee.md            # 为什么能保证高质量（5点原因）
    │   └── how-to-use.md                   # 如何使用（编程实践）
    │
    ├── builder-growth-path.md              # Builder能力培养路径（5个Level）
    └── tool-stack-guide.md                 # 工具栈指南（基础/进阶/管理/框架）
</code></pre><p><strong>内容要点</strong>：</p><p><strong>组织架构与工作流程转型</strong>：</p><ul><li>标准型组织（新产品/新团队）</li><li>过渡型组织（现有产品/大型组织）</li><li>详细的转型实施路线 <ul><li>组织层面（架构、角色、KPI）</li><li>日常工作（会议、协作、工具）</li><li>产品开发（7步完整流程）</li></ul></li></ul><p><strong>核心实践方法论</strong>：</p><ul><li>BMAD-METHOD完整解析</li><li>Builder成长路径（Level 1-5）</li><li>工具栈推荐和使用指南</li></ul><hr><h3 id="第六章-ai-native展望-6-outlook" tabindex="-1"><a class="header-anchor" href="#第六章-ai-native展望-6-outlook"><span>第六章：AI Native展望 (<code>6-outlook/</code>)</span></a></h3><p><strong>目标</strong>：引导读者思考个人在AI时代的竞争力</p><p><strong>文件结构</strong>：</p><pre><code>6-outlook/
├── README.md                   # 章节导航
├── scenario-distinction.md     # 场景区分（真实世界 vs 虚拟世界）
├── path-1-builder.md           # 路径1：成为Builder
├── path-2-specialist.md        # 路径2：成为专业领域顶尖
└── staying-relevant.md         # 保持开放和适应性
</code></pre><p><strong>内容要点</strong>：</p><ul><li><strong>场景区分</strong>： <ul><li>涉及真实世界的场景（物理世界、线下业务）</li><li>纯虚拟世界的场景（数字产品、线上服务）</li></ul></li><li><strong>核心思维</strong>：是做Builder还是做专业领域的顶尖，但核心都离不开AI</li><li><strong>路径1：成为Builder</strong>（端到端能力）</li><li><strong>路径2：成为专业领域顶尖</strong>（专业深度）</li><li><strong>保持开放和适应性</strong></li></ul><hr><h3 id="案例库-5-case-studies" tabindex="-1"><a class="header-anchor" href="#案例库-5-case-studies"><span>案例库 (<code>5-case-studies/</code>)</span></a></h3><p><strong>目标</strong>：提供真实案例支撑和启发</p><p><strong>文件结构</strong>：</p><pre><code>5-case-studies/
├── README.md                           # 案例库导航
│
├── success-companies/                  # 成功公司案例（AI Native新兴公司）
│   ├── README.md                       # 成功公司案例概述
│   ├── openai.md                       # OpenAI
│   ├── cursor-ai.md                    # Cursor AI
│   ├── commonwealth-bank.md            # Commonwealth Bank
│   └── bupa.md                         # Bupa
│
├── organization-transformation/        # 组织转型案例（传统组织转型）
│   ├── README.md                       # 组织转型案例概述
│   ├── amazon.md                       # Amazon
│   ├── moderna.md                      # Moderna
│   ├── bayer.md                        # Bayer
│   └── nvidia.md                       # NVIDIA
│
└── market-data.md                      # 市场数据汇总
</code></pre><p><strong>内容要点</strong>：</p><ul><li>4个成功的AI Native公司案例</li><li>4个传统组织转型案例</li><li>市场数据和趋势分析</li><li>所有数据必须真实，标注来源</li></ul><hr><h3 id="ppt演示模式-slides" tabindex="-1"><a class="header-anchor" href="#ppt演示模式-slides"><span>PPT演示模式 (<code>slides/</code>)</span></a></h3><p><strong>目标</strong>：支持PPT演示模式，与6章内容一一对应</p><p><strong>文件结构</strong>：</p><pre><code>slides/
├── 1-introduction.md      # 对应第1章
├── 2-comparison.md        # 对应第2章
├── 3-definition.md        # 对应第3章
├── 4-practice.md          # 对应第4章（实践演示）
├── 5-transition.md        # 对应第5章（转化路程）
├── 6-outlook.md           # 对应第6章（展望）
└── cases.md               # 对应案例库
</code></pre><p><strong>设计原则</strong>：</p><ul><li>每个slide文件对应一章内容</li><li>提取核心观点和视觉元素</li><li>适合全屏演示</li><li>支持键盘导航（Space/Arrow键）</li></ul><hr><h2 id="_3-导航系统设计" tabindex="-1"><a class="header-anchor" href="#_3-导航系统设计"><span>3. 导航系统设计</span></a></h2><h3 id="_3-1-vuepress-navbar-顶部导航" tabindex="-1"><a class="header-anchor" href="#_3-1-vuepress-navbar-顶部导航"><span>3.1 VuePress Navbar（顶部导航）</span></a></h3><pre><code class="language-typescript">navbar<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;第1章：介绍&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/1-introduction/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;第2章：现状对比&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/2-comparison/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;第3章：核心定义&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/3-core-definition/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;第4章：实践演示&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/4-practice-demo/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;第5章：转化路程&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/3-transition-practice/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;第6章：展望&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/6-outlook/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;案例库&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/5-case-studies/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;演示模式&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/slides/1-introduction&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><h3 id="_3-2-vuepress-sidebar-侧边栏" tabindex="-1"><a class="header-anchor" href="#_3-2-vuepress-sidebar-侧边栏"><span>3.2 VuePress Sidebar（侧边栏）</span></a></h3><p><strong>章节1-4</strong>：扁平结构</p><pre><code class="language-typescript"><span class="token string-property property">&#39;/1-introduction/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;1. 介绍&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/1-introduction/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;为什么组织能力是壁垒&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/1-introduction/why-organizational-capability&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token string-property property">&#39;/2-comparison/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;2. 现状对比&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/2-comparison/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;传统组织&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/2-comparison/traditional-organization&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;AI Native组织&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/2-comparison/ai-native-organization&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token string-property property">&#39;/3-core-definition/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;3. 核心定义&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/3-core-definition/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;Builder + AI团队&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/3-core-definition/builder-ai-team&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;专业团队优化&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/3-core-definition/professional-optimization&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;按结果分工&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/3-core-definition/result-oriented-division&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token string-property property">&#39;/4-practice-demo/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;4. AI Native实践演示&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/4-practice-demo/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;演示概述&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/4-practice-demo/demo-overview&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;工具链配置&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/4-practice-demo/toolchain-setup&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;工作流演示&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/4-practice-demo/workflow-demonstration&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;参考资源&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/4-practice-demo/reference&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><p><strong>章节5</strong>：多层折叠结构</p><pre><code class="language-typescript"><span class="token string-property property">&#39;/3-transition-practice/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;过渡性转化路程&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/3-transition-practice/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&#39;组织架构与工作流程转型&#39;</span><span class="token punctuation">,</span>
    collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">&#39;标准型组织&#39;</span><span class="token punctuation">,</span>
        link<span class="token operator">:</span> <span class="token string">&#39;/3-transition-practice/5-1-organization-architecture/standard-model/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">&#39;过渡型组织&#39;</span><span class="token punctuation">,</span>
        link<span class="token operator">:</span> <span class="token string">&#39;/3-transition-practice/5-1-organization-architecture/transitional-model/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">&#39;过渡性实施路线&#39;</span><span class="token punctuation">,</span>
        link<span class="token operator">:</span> <span class="token string">&#39;/3-transition-practice/5-1-organization-architecture/transition-roadmap/&#39;</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;产品开发7步流程&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/3-transition-practice/5-1-organization-architecture/transition-roadmap/product-development/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&#39;5.2 核心实践方法论&#39;</span><span class="token punctuation">,</span>
    collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;BMAD-METHOD&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/3-transition-practice/5-2-core-practices/bmad-method/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;Builder成长路径&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/3-transition-practice/5-2-core-practices/builder-growth-path&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;工具栈指南&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/3-transition-practice/5-2-core-practices/tool-stack-guide&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><p><strong>章节6和案例库</strong>：</p><pre><code class="language-typescript"><span class="token string-property property">&#39;/6-outlook/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;6. AI Native展望&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/6-outlook/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;场景区分&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/6-outlook/scenario-distinction&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;路径1：Builder&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/6-outlook/path-1-builder&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;路径2：专业顶尖&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/6-outlook/path-2-specialist&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;保持适应性&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/6-outlook/staying-relevant&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token string-property property">&#39;/5-case-studies/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;案例库&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/5-case-studies/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&#39;成功公司案例&#39;</span><span class="token punctuation">,</span>
    collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;OpenAI&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/5-case-studies/success-companies/openai&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;Cursor AI&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/5-case-studies/success-companies/cursor-ai&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;Commonwealth Bank&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/5-case-studies/success-companies/commonwealth-bank&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;Bupa&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/5-case-studies/success-companies/bupa&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&#39;组织转型案例&#39;</span><span class="token punctuation">,</span>
    collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;Amazon&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/5-case-studies/organization-transformation/amazon&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;Moderna&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/5-case-studies/organization-transformation/moderna&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;Bayer&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/5-case-studies/organization-transformation/bayer&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;NVIDIA&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/5-case-studies/organization-transformation/nvidia&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;市场数据&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/5-case-studies/market-data&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><h3 id="_3-3-doc-↔-ppt-映射关系" tabindex="-1"><a class="header-anchor" href="#_3-3-doc-↔-ppt-映射关系"><span>3.3 Doc ↔ PPT 映射关系</span></a></h3><table><thead><tr><th>文档模式</th><th>PPT模式</th><th>映射关系</th></tr></thead><tbody><tr><td><code>/1-introduction/</code></td><td><code>/slides/1-introduction</code></td><td>1:1映射</td></tr><tr><td><code>/2-comparison/</code></td><td><code>/slides/2-comparison</code></td><td>1:1映射</td></tr><tr><td><code>/3-core-definition/</code></td><td><code>/slides/3-definition</code></td><td>1:1映射</td></tr><tr><td><code>/4-practice-demo/</code></td><td><code>/slides/4-practice</code></td><td>1:1映射</td></tr><tr><td><code>/3-transition-practice/</code></td><td><code>/slides/5-transition</code></td><td>1:1映射</td></tr><tr><td><code>/6-outlook/</code></td><td><code>/slides/6-outlook</code></td><td>1:1映射</td></tr><tr><td><code>/5-case-studies/</code></td><td><code>/slides/cases</code></td><td>1:1映射</td></tr></tbody></table><p><strong>切换机制</strong>：</p><ul><li>悬浮切换球（右下角）</li><li>键盘快捷键（P键进入/退出PPT模式）</li><li>URL参数（<code>?mode=ppt</code>）</li></ul><hr><h2 id="_4-文件命名规范" tabindex="-1"><a class="header-anchor" href="#_4-文件命名规范"><span>4. 文件命名规范</span></a></h2><h3 id="_4-1-目录命名" tabindex="-1"><a class="header-anchor" href="#_4-1-目录命名"><span>4.1 目录命名</span></a></h3><p><strong>规则</strong>：kebab-case，全英文</p><p><strong>示例</strong>：</p><ul><li>✅ <code>1-introduction/</code></li><li>✅ <code>3-transition-practice/</code></li><li>✅ <code>5-case-studies/</code></li><li>✅ <code>product-development/</code></li><li>❌ <code>AI-Native-Introduction/</code> （避免大写）</li><li>❌ <code>5_transition_practice/</code> （避免下划线）</li></ul><h3 id="_4-2-文件命名" tabindex="-1"><a class="header-anchor" href="#_4-2-文件命名"><span>4.2 文件命名</span></a></h3><p><strong>规则</strong>：kebab-case，全英文，<code>.md</code>后缀</p><p><strong>示例</strong>：</p><ul><li>✅ <code>why-organizational-capability.md</code></li><li>✅ <code>traditional-organization.md</code></li><li>✅ <code>builder-growth-path.md</code></li><li>✅ <code>1-data-analysis.md</code></li><li>❌ <code>WhyOrganizationalCapability.md</code> （避免大写）</li><li>❌ <code>traditional_organization.md</code> （避免下划线）</li><li>❌ <code>数据分析.md</code> （避免中文）</li></ul><h3 id="_4-3-图片命名" tabindex="-1"><a class="header-anchor" href="#_4-3-图片命名"><span>4.3 图片命名</span></a></h3><p><strong>规则</strong>：kebab-case，全英文，使用WebP格式</p><p><strong>示例</strong>：</p><ul><li>✅ <code>organization-comparison-chart.webp</code></li><li>✅ <code>builder-ai-model-diagram.webp</code></li><li>✅ <code>bmad-method-architecture.webp</code></li><li>❌ <code>组织对比图.png</code> （避免中文）</li><li>❌ <code>Chart_1.jpg</code> （避免下划线和非WebP）</li></ul><hr><h2 id="_5-内容质量标准" tabindex="-1"><a class="header-anchor" href="#_5-内容质量标准"><span>5. 内容质量标准</span></a></h2><h3 id="_5-1-文档内容要求" tabindex="-1"><a class="header-anchor" href="#_5-1-文档内容要求"><span>5.1 文档内容要求</span></a></h3><ol><li><p><strong>语言要求</strong>：</p><ul><li>主体内容：中文</li><li>技术术语：英文（如Builder、AI Native、BMAD-METHOD）</li><li>代码示例：英文</li></ul></li><li><p><strong>结构要求</strong>：</p><ul><li>必须包含标题（H1）</li><li>使用层级标题（H2, H3）</li><li>包含关键要点总结</li><li>添加必要的图示占位符</li></ul></li><li><p><strong>质量要求</strong>：</p><ul><li>无臆造数据</li><li>引用标注来源</li><li>逻辑清晰连贯</li><li>避免过度专业术语</li></ul></li></ol><h3 id="_5-2-图片资源要求" tabindex="-1"><a class="header-anchor" href="#_5-2-图片资源要求"><span>5.2 图片资源要求</span></a></h3><ol><li><strong>格式</strong>：WebP（优先），PNG/JPG（备选）</li><li><strong>大小</strong>：单图 &lt; 200KB</li><li><strong>命名</strong>：kebab-case</li><li><strong>路径</strong>：统一存放在<code>.vuepress/public/images/</code></li></ol><h3 id="_5-3-案例数据要求" tabindex="-1"><a class="header-anchor" href="#_5-3-案例数据要求"><span>5.3 案例数据要求</span></a></h3><ol><li><strong>真实性</strong>：所有数据必须真实，不可臆造</li><li><strong>来源标注</strong>：明确标注数据来源（公司官网、新闻报道、研究报告）</li><li><strong>时效性</strong>：优先使用2023-2024年的最新数据</li><li><strong>可验证性</strong>：提供链接或引用，便于读者验证</li></ol><hr><h2 id="_6-实施阶段规划" tabindex="-1"><a class="header-anchor" href="#_6-实施阶段规划"><span>6. 实施阶段规划</span></a></h2><h3 id="phase-1-框架搭建-epic-3-a" tabindex="-1"><a class="header-anchor" href="#phase-1-框架搭建-epic-3-a"><span>Phase 1: 框架搭建（Epic 3-A）</span></a></h3><p><strong>Story 3-A.1：信息架构设计</strong> ✅</p><ul><li>创建完整目录结构</li><li>添加README.md导航文件</li><li>编写本IA设计文档</li></ul><p><strong>Story 3-A.2：VuePress配置</strong></p><ul><li>配置sidebar和navbar</li><li>创建PPT文件骨架</li><li>测试导航可用性</li></ul><h3 id="phase-2-布局验证-epic-4-epic-5" tabindex="-1"><a class="header-anchor" href="#phase-2-布局验证-epic-4-epic-5"><span>Phase 2: 布局验证（Epic 4 &amp; Epic 5）</span></a></h3><p>在Epic 3-A完成后，先执行Epic 4和Epic 5，验证：</p><ul><li>PPT模式展示效果</li><li>Document模式阅读体验</li><li>Doc↔PPT切换流畅性</li></ul><h3 id="phase-3-内容填充-epic-3-b" tabindex="-1"><a class="header-anchor" href="#phase-3-内容填充-epic-3-b"><span>Phase 3: 内容填充（Epic 3-B）</span></a></h3><p>布局验证OK后，依次填充内容：</p><ul><li>Story 3-B.1 ~ 3-B.7：6章内容</li><li>Story 3-B.8：案例库</li><li>Story 3-B.9：图片资源</li></ul><hr><h2 id="_7-验收标准" tabindex="-1"><a class="header-anchor" href="#_7-验收标准"><span>7. 验收标准</span></a></h2><h3 id="ia设计文档-本文档-验收标准" tabindex="-1"><a class="header-anchor" href="#ia设计文档-本文档-验收标准"><span>IA设计文档（本文档）验收标准</span></a></h3><ul><li>✅ 完整的6章目录结构定义</li><li>✅ 每章的文件清单和内容要点</li><li>✅ 导航系统设计（navbar + sidebar）</li><li>✅ Doc↔PPT映射关系</li><li>✅ 文件命名规范</li><li>✅ 内容质量标准</li><li>✅ 实施阶段规划</li></ul><h3 id="目录结构验收标准" tabindex="-1"><a class="header-anchor" href="#目录结构验收标准"><span>目录结构验收标准</span></a></h3><ul><li>✅ 所有目录已创建</li><li>✅ 所有目录包含README.md</li><li>✅ 目录命名符合kebab-case规范</li><li>✅ 目录结构与IA文档一致</li></ul><hr><h2 id="_8-维护和更新" tabindex="-1"><a class="header-anchor" href="#_8-维护和更新"><span>8. 维护和更新</span></a></h2><h3 id="_8-1-文档更新流程" tabindex="-1"><a class="header-anchor" href="#_8-1-文档更新流程"><span>8.1 文档更新流程</span></a></h3><p>当需要调整IA结构时：</p><ol><li>更新本IA设计文档</li><li>更新<code>docs/architecture.md</code>的Project Structure部分</li><li>更新<code>docs/epics.md</code>的Epic 3定义</li><li>更新<code>docs/PRD.md</code>的Epic分解部分</li><li>更新<code>.vuepress/config.ts</code>配置</li></ol><h3 id="_8-2-版本控制" tabindex="-1"><a class="header-anchor" href="#_8-2-版本控制"><span>8.2 版本控制</span></a></h3><ul><li><strong>主版本号</strong>（v1.0, v2.0）：重大结构调整</li><li><strong>次版本号</strong>（v1.1, v1.2）：章节增删</li><li><strong>修订号</strong>（v1.1.1）：细节修正</li></ul><p>当前版本：<strong>v1.0</strong></p><hr><h2 id="_9-参考文档" tabindex="-1"><a class="header-anchor" href="#_9-参考文档"><span>9. 参考文档</span></a></h2><ul><li><code>docs/brainstorming-session-results-2025-12-15.md</code> (lines 190-392) - 6章框架来源</li><li><code>docs/PRD.md</code> - 产品需求文档</li><li><code>docs/product-brief-AINative-2025-12-15.md</code> - 产品愿景</li><li><code>docs/bmm-research-market-2025-12-15.md</code> - 市场研究报告</li><li><code>docs/ux-design-specification.md</code> - UX设计规范</li><li><code>docs/architecture.md</code> - 架构设计文档</li></ul><hr><h2 id="_10-总结" tabindex="-1"><a class="header-anchor" href="#_10-总结"><span>10. 总结</span></a></h2><p>本IA设计文档定义了AINative项目的完整内容架构，包括：</p><p>✅ <strong>6章完整框架</strong>：严格遵循用户指定的章节结构 ✅ <strong>详细文件清单</strong>：每章的具体文件和内容要点 ✅ <strong>导航系统</strong>：VuePress sidebar/navbar配置 ✅ <strong>Doc↔PPT映射</strong>：双模式无缝切换机制 ✅ <strong>质量标准</strong>：文件命名、内容质量、图片规范 ✅ <strong>实施规划</strong>：Epic 3-A → Epic 4&amp;5 → Epic 3-B</p><p>该IA设计为后续的内容开发提供了清晰的蓝图和标准，确保整个项目的一致性和可维护性。</p><hr><p><em>信息架构设计版本: v1.0 | 最后更新: 2025-12-16</em></p>`,147)])])}const r=s(o,[["render",e]]),l=JSON.parse('{"path":"/information-architecture.html","title":"AINative 项目信息架构设计 (Information Architecture)","lang":"zh-CN","frontmatter":{},"filePathRelative":"information-architecture.md"}');export{r as comp,l as data};
