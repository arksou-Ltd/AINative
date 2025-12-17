# AINative - Product Requirements Document

**Author:** Jett
**Date:** 2025-12-15
**Version:** 1.0

---

## Executive Summary

AINative是一个双模式知识分享平台，旨在帮助个人和组织深刻理解AI Native理念——这不是关于"使用AI工具"，而是关于**组织能力的根本性重构**。通过系统化内容体系（AI Native简述 + 真实案例 + 转化路程）和创新的双模式交互（PPT演示 + 深度文档），AINative让所有人都能理解并实践AI Native转型。

项目将通过GitHub Pages部署，面向从CEO到普通员工的全用户群体，提供因地制宜的转型方案（标准型 vs 过渡型组织架构）。

### What Makes This Special

**产品的Magic时刻（分层）：**

**🌟 通用认知觉醒：**
> "原来AI时代的组织结构和工作流程是这样的，很厉害！"

这不是学会一个工具的兴奋，而是深刻理解了：
- **组织能力才是公司真正的壁垒**（不是规模，不是层级）
- **Builder + AI + 专业团队** = 60-80-100分模型的运作方式
- **扁平化组织**，按结果分工，而非职能分工
- **标准型 vs 过渡型**架构的差异和适用场景
- **双轨制策略**如何在现有组织中落地

**👔 管理者的觉醒：**
> "原来我的团队还可以是这样高效精华的团队！"

- 不需要庞大团队规模，小而精的Builder团队
- 扁平化管理，40+直接下属也能高效协作（NVIDIA模式）
- 按结果分工，而非传统职能分工
- AI赋能让每个人都能放大能力边界

**💪 个人/员工的觉醒：**
> "实践后原来自己可以代替整个团队！"

- Builder + AI = 原本需要5-10人团队的产出
- 从单一技能到端到端交付能力
- 60-80分的产品质量，足以验证和迭代
- 个人能力边界被重新定义

**这个分层的认知转变是一切实践的起点，也是产品最核心的价值。**

---

## Project Classification

**Technical Type:** 静态文档网站（Documentation Site）
**Domain:** 知识分享与教育（General）
**Complexity:** 中等

### 项目特征

**静态文档网站特点：**
- **项目性质**：文档型静态页面应用（不是应用型应用）
- **部署方式**：GitHub Pages原生支持，推送即可访问，零部署
- **双模式呈现**：
  - **文档模式**：标准文档交互（参考主流产品的document部分设计）
  - **PPT模式**：网页幻灯片呈现（基于reveal.js）
- **内容形式**：纯文字 + 图片（无视频、无复杂动画）
- **技术栈**：静态站点生成器（VuePress / Docusaurus / 自定义）

**与传统应用的区别：**
- ❌ 无后端服务器（纯静态HTML/CSS/JS）
- ❌ 无数据库（内容全部来自Markdown文件）
- ❌ 无用户系统（开放访问，无登录）
- ❌ 无复杂交互（内容驱动，阅读为主）
- ❌ 无实时功能（无WebSocket、无SSE）
- ✅ 纯前端渲染（SEO友好）
- ✅ GitHub Pages托管（自动HTTPS、CDN加速）
- ✅ 版本控制（Git管理内容更新）

**领域特征：**
- 知识传播：系统化传播AI Native理念
- 文档教育：内容分层（简述→案例→实践）
- 实践指导：提供工具栈指南和转型方案
- 开源共享：GitHub开源，社区协作

---

## Success Criteria

### 核心成功指标（按优先级排序）

**🎯 优先级1：理解深度（最重要）**

**目标：用户产生真正的认知转变，而非表面理解**

具体衡量标准：
- ✅ **概念理解准确度**
  - 用户能准确阐述"AI Native = 组织能力重构"（而非"使用AI工具"）
  - 能正确使用核心概念：Builder、60-80-100分模型、标准型/过渡型架构
  - 能独立解释"为什么组织能力是壁垒"

- ✅ **认知转变标志**
  - 管理者：从"招更多人"转变为"放大小团队能力"
  - 个人：从"学工具"转变为"重新定义能力边界"
  - 通用：从"职能分工"转变为"按结果分工"

- ✅ **深度印象**
  - 记住核心Hook："组织能力才是公司真正的壁垒"
  - 记住核心类比："传统组织 vs 全球顶尖科学家组织"
  - 主动分享并能传达核心理念

**验证方式：**
- 微信/邮箱交流中的反馈质量
- GitHub Discussions中的讨论深度
- 用户主动分享内容的准确性（而非数量）

**MVP最低标准：** 10个用户反馈"理解了AI Native本质"
**理想标准：** 50个用户能够准确传播核心理念

---

**🚀 优先级2：实践落地**

**目标：用户开始实际行动，而非停留在理解层面**

具体衡量标准：
- ✅ **工具配置实践**
  - 反馈中提到"已配置Cursor"或"开始使用Claude Code CLI"
  - 管理者开始使用Linear/Slack/Github协作工具

- ✅ **转型方案制定**
  - 决策层基于内容制定自己的转型计划
  - 团队负责人设计Builder培养路径
  - 企业开始试点双轨制策略

- ✅ **实践结果反馈**
  - "用Cursor完成了第一个AI辅助项目"
  - "团队开始BMAD-METHOD实践"
  - "减少了管理层级/调整了组织架构"

**验证方式：**
- 联系方式互动中的实践故事
- GitHub Issue/Discussions中的实践案例
- 用户主动分享的成果

**MVP最低标准：** 5个用户开始实践（配置工具或制定方案）
**理想标准：** 20个团队开始AI Native转型实践

---

**📢 优先级3：传播触达**

**目标：让更多人接触到AI Native理念**

具体衡量标准：
- ✅ **PPT使用情况**
  - PPT模式被用于公司内部分享、外部演讲
  - 用户下载或基于内容制作演示

- ✅ **访问数据**
  - 网站访问量（PV/UV）
  - 独立访客数（月活）
  - 地域分布（国内为主）

- ✅ **社交传播**
  - 社交媒体分享次数
  - 被引用/转发次数
  - GitHub Star数

**验证方式：**
- Google Analytics / 百度统计
- GitHub仓库数据
- 社交媒体监测

**MVP最低标准：** 网站稳定运行，有自然流量
**理想标准：** 形成小规模社区，用户主动传播

---

**📈 优先级4：参与质量**

**目标：用户深度参与，而非浅层浏览**

具体衡量标准：
- ✅ **停留时长**
  - 平均停留时间 > 5分钟
  - 深度阅读用户（>15分钟）占比 > 30%

- ✅ **模式转化**
  - PPT模式 → Document深度学习的转化率 > 20%
  - 完成3章完整阅读的用户占比

- ✅ **内容偏好**
  - 各章节阅读时长分布
  - 最受欢迎章节（简述/案例/转化路程）
  - 用户旅程路径分析

**验证方式：**
- 用户行为分析工具（Google Analytics）
- 热力图分析
- A/B测试（可选）

---

### 综合成功标准

**MVP上线成功：**
- ✅ 至少10个用户理解AI Native核心理念
- ✅ 至少5个用户开始实践
- ✅ 网站稳定运行，双模式功能完整
- ✅ 首页加载 < 2秒，PPT模式流畅无卡顿

**长期成功愿景：**
- ✅ 50+用户深度理解并能传播概念
- ✅ 20+团队开始AI Native转型实践
- ✅ 形成小规模社区，用户主动分享实践案例
- ✅ 成为AI Native领域的权威参考资料

### 关键洞察

**为什么优先级是 理解 > 实践 > 传播 > 质量？**

1. **理解是根基** - 没有深度理解，实践会流于形式
2. **实践是验证** - 理解正确与否，实践会给出反馈
3. **传播是放大** - 前两者做好了，传播自然发生
4. **质量是支撑** - 好的体验支持前三者，但不是核心目标

---

## Product Scope

### MVP - Minimum Viable Product（缺一不可）

**目标：证明核心价值 - 用户能够理解AI Native并开始实践**

**1. 完整内容体系（3章）**

**1.1 AI Native 简述**
- ✅ 核心Hook："组织能力才是公司真正的壁垒"
- ✅ 第一性原理：能力边界重新定义、角色根本转变、组织架构革命
- ✅ 核心类比："传统组织 vs 拥有全球顶尖科学家的组织"
- ✅ 完整定义：Builder + AI + 专业团队 = 60-80-100分模型
- ✅ 为什么是现在：大模型的理解能力与自主程度突破

**1.2 AI Native 案例**
- ✅ **成功公司案例**（4个）
  - OpenAI ($13B ARR, $1B月收入)
  - Cursor AI ($2.6B估值, <100人)
  - Commonwealth Bank (84%用户不愿回退)
  - Bupa APAC (410,000+行AI辅助代码)

- ✅ **组织转型案例**（4个）
  - Amazon (15% IC/Manager比例提升)
  - Moderna (合并技术与HR部门)
  - Bayer (裁减50%管理层)
  - NVIDIA (Jensen Huang 40+直接下属)

- ✅ **市场数据验证**
  - AI Native应用开发工具市场: $26.99B (2025)
  - 企业AI采用率: 79%组织已采用AI agents
  - 开发者AI工具使用: 50%每天使用，90%将在2028年采用

**1.3 转化路程**
- ✅ **组织架构转型**
  - 标准型AI Native组织（核心角色、工作方式、协调机制）
  - 过渡性组织架构（双轨制、微观/宏观层面实践）

- ✅ **实践工具栈**（分层）
  - 基础层：Cursor（所有人，$20/月）
  - 进阶层：Claude Code CLI / Gemini CLI / Codex（技术人员）
  - 管理层：Linear / Slack / Github / Devin（团队负责人）
  - 框架层：BMAD-METHOD（完整项目）

- ✅ **Builder能力培养路径**（5个Level）
  - Level 1: AI素养（1-2月）
  - Level 2: 工具精通（2-3月）
  - Level 3: 架构能力（3-6月）
  - Level 4: 专业优化（6-12月）
  - Level 5: 组织变革（12+月）

---

**2. 双模式交互系统**

**2.1 PPT演示模式（必备）**
- ✅ 全屏演示支持（reveal.js实现）
- ✅ 键盘导航（空格/方向键翻页）
- ✅ 页码指示器（当前页/总页数）
- ✅ 退出到文档模式按钮
- ✅ 响应式布局（自适应屏幕）
- ✅ 约30-50页PPT内容
- ✅ 每页一个核心观点，简洁清晰
- ✅ 内容形式：纯文字 + 图片
  - 文字：标题、要点、引用
  - 图片：图表（静态PNG/SVG）、案例截图、对比表格图片
- ✅ 简洁切换效果（无复杂动画）

**2.2 Document文档模式（必备）**
- ✅ 左侧目录导航树
  - 3级目录结构
  - 当前章节高亮
  - 点击跳转
  - 折叠/展开
- ✅ 主内容区域
  - Markdown渲染
  - 代码高亮
  - 表格支持
  - 图片展示
  - 锚点链接
- ✅ 响应式设计
  - 桌面：左侧导航 + 右侧内容
  - 移动：汉堡菜单 + 全屏内容

---

**3. 支持页面**

**3.1 首页/欢迎页**
- ✅ 项目简介（AI Native是什么，为什么重要）
- ✅ 两个入口按钮："📊 PPT演示模式" + "📖 详细文档模式"
- ✅ GitHub链接
- ✅ 快速导航

**3.2 联系页面**
- ✅ 联系方式区域：微信号/二维码 + 邮箱地址
- ✅ 交流说明与反馈入口

---

**4. 技术基础设施**

**部署方式（GitHub Pages）：**
- ✅ **推送即部署**：`git push` 后自动发布到 `https://<username>.github.io/<repo-name>/`
- ✅ **零配置部署**：无需单独部署流程，GitHub Actions自动构建
- ✅ **HTTPS默认支持**：GitHub Pages自动提供HTTPS
- ✅ **CDN加速**：GitHub全球CDN加速访问
- ✅ **自定义域名**（可选）：支持绑定自有域名

**技术栈要求：**
- ✅ **静态站点生成器**：
  - 方案A：VuePress（推荐） - Vue生态，插件丰富
  - 方案B：Docusaurus - React生态，文档体验好
  - 方案C：自定义（Vite + Vue 3） - 完全自主控制
- ✅ **PPT模式**：reveal.js集成
- ✅ **构建输出**：纯静态文件（HTML/CSS/JS），无服务端依赖
- ✅ **内容管理**：Markdown文件 + 静态图片资源

**性能要求：**
- ✅ 首页加载 < 2秒（纯静态，天然快速）
- ✅ PPT模式流畅切换（无卡顿）
- ✅ 移动端响应式适配
- ✅ 图片优化（压缩，lazy load）
- ✅ SEO友好（静态HTML，爬虫友好）

---

### Growth Features (Post-MVP)

**目标：提升参与度和实践转化率（基于静态网站能力）**

**1. 内容增强**
- 📝 **工具栈实战指南**
  - Cursor配置详细教程（图文 + 代码示例）
  - Claude Code CLI入门指南
  - BMAD-METHOD快速上手
  - 以Markdown页面形式新增

- 📝 **FAQ知识库**
  - 常见问题解答页面
  - 转型中的痛点和解决方案
  - 基于用户反馈持续更新（通过Git提交）

- 📝 **扩展案例库**
  - 更多AI Native实践案例
  - 按行业/规模/场景分类
  - 静态页面呈现

**2. 社区互动（外部平台）**
- 💬 **GitHub Discussions增强**
  - 分类优化（概念讨论、实践分享、工具咨询）
  - 优质讨论整理成FAQ
  - 链接到文档网站

- 📧 **反馈渠道优化**
  - 完善联系页面说明
  - 建立微信群/邮件列表
  - 定期整理反馈更新文档

**3. 内容国际化**
- 🌍 **英文版本**
  - 英文内容翻译（独立分支或路径）
  - 国际案例补充
  - 简单语言切换（双版本链接）

**4. SEO优化**
- 🔍 **搜索引擎优化**
  - 完善页面Meta信息
  - 结构化数据标记
  - sitemap.xml生成
  - 关键词优化

---

### Vision (Future)

**目标：成为AI Native领域的权威参考文档和实践知识库**

**1. 内容生态（静态内容）**
- 📚 **完整知识库**
  - 100+真实案例（静态页面呈现）
  - 按行业/规模/场景分类索引
  - 成功路径模板和最佳实践

- 📖 **深度实践指南**
  - Builder能力培养完整路径（图文教程）
  - 工具配置step-by-step指南
  - 转型实施手册（Markdown格式）

- 🗺️ **知识图谱**
  - AI Native概念关系图
  - 可视化学习路径
  - 交互式概念导航（纯前端实现）

**2. 社区生态（外部协作）**
- 👥 **GitHub社区**
  - 活跃的Discussions区
  - 用户贡献案例（Pull Request）
  - Issue跟踪改进建议

- 🤝 **外部协作**
  - 建立微信社群/Discord频道
  - 定期线上/线下交流活动
  - 优质内容整理回流到文档

**3. 内容形式扩展**
- 📊 **静态交互工具**（纯前端）
  - AI Native成熟度自评问卷（JavaScript实现）
  - Builder技能自测表（本地计算）
  - 转型ROI简易计算器（客户端运行）

- 🌐 **多语言版本**
  - 英文、日文、韩文版本
  - 针对不同地区的案例库
  - 本地化内容适配

**4. 影响力扩展**
- 📢 **权威引用源**
  - 成为AI Native领域标准参考
  - 被学术论文、行业报告引用
  - 企业培训推荐资料

- 🎯 **开源贡献者社区**
  - 接受社区Pull Request
  - 多位维护者协作
  - 透明的内容审核流程

---

### 范围决策原则

**MVP为什么是这些功能？**
1. **内容完整性** - 3章内容缺一不可，构成完整认知链路
2. **双模式创新** - 文档+PPT是核心差异化，必须在MVP体现
3. **静态网站优势** - 零部署成本，推送即上线，快速验证
4. **技术可行性** - VuePress/Docusaurus + reveal.js，4-5周可完成
5. **GitHub Pages原生** - 无需额外基础设施，专注内容

**为什么是纯静态网站？**
- ✅ **零运维成本** - 无服务器、无数据库，无持续成本
- ✅ **快速迭代** - 内容更新通过Git提交，立即生效
- ✅ **开源友好** - 所有内容可版本控制，接受社区贡献
- ✅ **性能优异** - 纯静态HTML，CDN加速，加载极快
- ✅ **SEO友好** - 搜索引擎直接索引HTML内容
- ✅ **安全可靠** - 无后端攻击面，无数据泄露风险

**为什么不包含复杂交互？**
- MVP优先验证"内容能否产生认知转变"
- 阅读体验是核心，不需要登录、评论、互动等功能
- 静态网站的限制反而是优势（简单、稳定、快速）

**为什么社区功能通过外部平台？**
- GitHub Discussions已提供完善的讨论功能
- 微信/邮箱可以覆盖中国用户习惯
- 无需自建系统，专注内容质量

---

## 静态文档网站特定需求

### 浏览器支持

**目标浏览器：**
- ✅ **现代浏览器**（最近2个版本）
  - Chrome / Edge（Chromium）
  - Firefox
  - Safari
- ✅ **移动浏览器**
  - iOS Safari
  - Android Chrome
- ⚠️ **不支持IE**（已废弃）

**兼容性策略：**
- 使用现代JavaScript特性（ES2020+）
- CSS Grid / Flexbox布局
- 不考虑老旧浏览器polyfill

### 响应式设计

**断点设计：**
- 📱 **移动端**（< 768px）
  - 汉堡菜单导航
  - 单栏布局
  - PPT模式：竖屏优化
  - 图片自适应缩放

- 💻 **平板**（768px - 1024px）
  - 侧边栏可折叠
  - 两栏布局（导航+内容）
  - PPT模式：横屏优化

- 🖥️ **桌面**（> 1024px）
  - 固定侧边栏导航
  - 宽屏内容布局
  - PPT模式：全屏沉浸

### SEO优化

**目标：让搜索引擎有效索引AI Native相关内容**

**技术实现：**
- ✅ **语义化HTML**
  - 正确使用h1-h6标签
  - 文章使用`<article>`标签
  - 导航使用`<nav>`标签

- ✅ **Meta标签完整**
  - 每页独立的title / description
  - Open Graph标签（社交分享）
  - 结构化数据（Schema.org）

- ✅ **URL友好**
  - `/ai-native-intro/` 而非 `/page?id=1`
  - 层级清晰的路径结构

- ✅ **Sitemap生成**
  - 自动生成sitemap.xml
  - 提交到Google / Bing / Baidu

- ✅ **性能优化**（影响SEO排名）
  - 首屏加载 < 2秒
  - 图片lazy load
  - 代码分割

### 内容管理

**Markdown为核心：**
- ✅ **标准Markdown语法**
  - 标题、列表、引用、代码块
  - 表格、图片、链接

- ✅ **扩展语法（按需）**
  - 提示框（Tip / Warning / Danger）
  - 代码组（Tab切换）
  - 数学公式（KaTeX，如需要）

**图片资源管理：**
- ✅ **静态图片**
  - 存放在 `/public/images/` 或 `/docs/.vuepress/public/`
  - 使用相对路径引用
  - 建议格式：PNG（截图）、SVG（图表）、WebP（优化）

- ✅ **图片优化**
  - 压缩（TinyPNG / ImageOptim）
  - 尺寸适配（2x屏幕分辨率）
  - Alt文本（可访问性 + SEO）

**内容组织：**
```
docs/
├── index.md                    # 首页
├── ai-native-intro/            # AI Native简述
│   ├── README.md
│   ├── first-principles.md
│   └── ...
├── case-studies/               # 案例
│   ├── README.md
│   ├── openai.md
│   └── ...
├── transformation/             # 转化路程
│   ├── README.md
│   ├── org-structure.md
│   └── ...
├── slides/                     # PPT模式内容
│   └── presentation.md
└── contact.md                  # 联系页面
```

### PPT模式技术实现

**基于reveal.js：**
- ✅ **集成方式**
  - VuePress插件：`vuepress-plugin-revealjs`
  - Docusaurus MDX：内嵌reveal.js组件
  - 自定义：单独的reveal.js页面

- ✅ **内容编写**
  - Markdown格式编写幻灯片
  - 使用 `---` 分隔slides
  - 支持嵌套slides（垂直滚动）

- ✅ **样式定制**
  - 自定义reveal.js主题
  - 配色符合品牌风格
  - 字体大小适配

**示例结构：**
```markdown
# AI Native 简述

---

## 组织能力才是公司真正的壁垒

![壁垒示意图](./images/capability-wall.png)

---

## Builder + AI + 专业团队

60-80-100分模型

...
```

---

## 创新模式分析

### 双模式文档网站

**创新点：同一内容，两种消费方式**

**市场现状：**
目前文档网站主流模式：
- **纯文档模式**：VuePress, Docusaurus, GitBook - 深度阅读，但不便于演示
- **纯PPT模式**：Slidev, reveal.js - 演示友好，但不适合深度学习

**AINative创新：**
- ✅ **同一套内容源**（Markdown）生成两种形式
- ✅ **模式自由切换**：Document → PPT → Document 无缝衔接
- ✅ **场景适配**：
  - 团队分享用PPT模式
  - 个人学习用Document模式
  - 从PPT引发兴趣 → Document深入学习

**技术验证：**
根据WebSearch结果，现有工具要么专注文档（VuePress/Docusaurus），要么专注演示（Slidev/reveal.js），**很少有产品将两者无缝整合**。

**来源：**
- [Slidev - A Web-Based Presentation Creation Solution](https://www.webdong.dev/en/post/slidev-build-presentation-with-markdown/)
- [The HTML presentation framework | reveal.js](https://revealjs.com/)
- [GitHub - slidevjs/slidev: Presentation Slides for Developers](https://github.com/slidevjs/slidev)

**验证方式：**
- MVP上线后收集用户反馈
- 追踪 Document ↔ PPT 模式切换率
- 用户访谈：哪种模式更有价值？两种模式是否互补？

**风险与备选方案：**
- **风险**：双模式增加开发复杂度
- **备选**：如果双模式验证失败，可回退到单一Document模式 + 导出PDF供演示
- **成本**：使用成熟工具（VuePress + reveal.js插件），风险可控

---

## Functional Requirements

### FR-1: 内容展示系统

**FR-1.1 AI Native简述**
- **需求**：提供AI Native核心概念的系统化介绍
- **内容要求**：
  - 核心Hook："组织能力才是公司真正的壁垒"
  - 第一性原理：能力边界重新定义、角色根本转变、组织架构革命
  - 核心类比："传统组织 vs 拥有全球顶尖科学家的组织"
  - 完整定义：Builder + AI + 专业团队 = 60-80-100分模型
  - 时代背景：为什么是现在（大模型突破）
- **呈现形式**：Markdown文档 + 配图
- **验收标准**：用户读完能准确理解AI Native≠使用AI工具

**FR-1.2 真实案例展示**
- **需求**：通过真实案例建立信任和可行性
- **必须包含**：
  - 4个成功公司案例（OpenAI, Cursor AI, Commonwealth Bank, Bupa）
  - 4个组织转型案例（Amazon, Moderna, Bayer, NVIDIA）
  - 市场数据验证（$26.99B市场规模，79%采用率等）
- **呈现形式**：结构化案例页面 + 数据图表（静态图片）
- **验收标准**：案例数据准确，来源可追溯

**FR-1.3 转化路程指南**
- **需求**：提供可落地的转型实践路径
- **必须包含**：
  - 组织架构转型（标准型 vs 过渡型）
  - 工具栈推荐（分层：基础/进阶/管理/框架）
  - Builder能力培养路径（5个Level，1-2月到12+月）
- **呈现形式**：分步指南 + 工具对比表 + 能力模型图
- **验收标准**：用户能根据自身情况选择合适的转型方案

---

### FR-2: Document文档模式

**FR-2.1 导航系统**
- **需求**：左侧目录导航树，支持3级结构
- **功能要求**：
  - 当前章节高亮
  - 点击跳转到对应内容
  - 支持折叠/展开
  - 移动端：汉堡菜单
- **验收标准**：用户能快速定位任意内容，3次点击内到达任何页面

**FR-2.2 内容渲染**
- **需求**：主内容区域渲染Markdown内容
- **功能要求**：
  - 标准Markdown语法支持（标题、列表、引用、代码、表格、图片、链接）
  - 代码高亮（如有代码示例）
  - 图片展示（响应式）
  - 锚点链接（页内跳转）
  - 提示框（Tip / Warning，可选）
- **验收标准**：所有Markdown格式正确渲染，图片加载正常

**FR-2.3 响应式布局**
- **需求**：适配桌面、平板、移动端
- **功能要求**：
  - 桌面（>1024px）：固定侧边栏 + 宽屏内容
  - 平板（768-1024px）：可折叠侧边栏 + 两栏布局
  - 移动端（<768px）：汉堡菜单 + 单栏布局
- **验收标准**：所有设备都有良好阅读体验，无横向滚动

---

### FR-3: PPT演示模式

**FR-3.1 幻灯片展示**
- **需求**：基于reveal.js的全屏演示模式
- **功能要求**：
  - 全屏显示（F11或原生全屏API）
  - 30-50页PPT内容
  - 每页一个核心观点
  - 内容形式：纯文字 + 图片（图表、截图、对比表）
- **验收标准**：PPT内容完整覆盖3章核心内容，视觉清晰

**FR-3.2 导航控制**
- **需求**：便捷的幻灯片翻页和导航
- **功能要求**：
  - 键盘导航：空格/方向键前后翻页
  - 页码指示器：显示"当前页/总页数"
  - 退出到文档模式按钮（明显位置）
  - 鼠标点击屏幕边缘翻页（可选）
- **验收标准**：用户能流畅控制演示进度，随时退出到文档模式

**FR-3.3 响应式适配**
- **需求**：PPT模式在不同设备上的体验优化
- **功能要求**：
  - 桌面：横屏全屏沉浸
  - 平板：横屏优化，字体大小适配
  - 移动端：竖屏优化（如必要）
  - 简洁切换效果（无复杂动画）
- **验收标准**：所有设备都能流畅演示，文字清晰可读

---

### FR-4: 首页与导航

**FR-4.1 首页欢迎页**
- **需求**：清晰的入口引导用户选择模式
- **功能要求**：
  - 项目简介（1-2段，说明AI Native是什么、为什么重要）
  - 两个入口按钮：
    - "📊 PPT演示模式"（醒目）
    - "📖 详细文档模式"（醒目）
  - GitHub链接（Star / Fork）
  - 快速导航（3章内容快速跳转链接）
- **验收标准**：首次访问用户能在5秒内理解网站价值并选择模式

**FR-4.2 联系页面**
- **需求**：提供反馈和交流渠道
- **功能要求**：
  - 联系方式区域：
    - 微信号/二维码（图片）
    - 邮箱地址（可点击`mailto:`）
  - 交流说明（鼓励反馈、分享实践）
  - GitHub Discussions链接
- **验收标准**：用户能轻松找到联系方式，说明清晰友好

---

### FR-5: 静态站点基础设施

**FR-5.1 GitHub Pages部署**
- **需求**：推送代码后自动部署到GitHub Pages
- **功能要求**：
  - Git push触发构建
  - GitHub Actions自动构建静态文件
  - 发布到 `https://<username>.github.io/<repo>/`
  - HTTPS默认支持
  - 自定义域名支持（可选配置）
- **验收标准**：每次推送后5分钟内网站自动更新

**FR-5.2 构建系统**
- **需求**：Markdown转换为静态HTML
- **技术选型**：
  - 方案A（推荐）：VuePress
  - 方案B（备选）：Docusaurus
  - 方案C（自定义）：Vite + Vue 3
- **构建输出**：纯静态文件（HTML/CSS/JS），无服务端依赖
- **验收标准**：构建成功，所有页面可访问，资源加载正常

**FR-5.3 内容版本控制**
- **需求**：所有内容通过Git管理
- **功能要求**：
  - Markdown文件存储在 `/docs/` 目录
  - 图片资源存储在 `/docs/.vuepress/public/images/` 或类似路径
  - `.gitignore` 忽略构建产物
  - 清晰的目录结构（ai-native-intro / case-studies / transformation）
- **验收标准**：内容更新通过Git commit，有清晰的提交历史

---

### FR-6: SEO与性能

**FR-6.1 SEO优化**
- **需求**：让搜索引擎有效索引AI Native内容
- **功能要求**：
  - 每页独立的`<title>` 和 `<meta description>`
  - 语义化HTML标签（h1-h6, article, nav）
  - Open Graph标签（社交分享预览）
  - Sitemap.xml自动生成
  - URL友好（`/ai-native-intro/` 而非 `/page?id=1`）
- **验收标准**：Google搜索"AI Native 组织能力"能找到网站

**FR-6.2 性能优化**
- **需求**：快速加载，流畅体验
- **功能要求**：
  - 首页加载时间 < 2秒（3G网络）
  - 图片lazy load（可见区域外的图片延迟加载）
  - 图片压缩（WebP格式 或 压缩PNG/JPG）
  - 代码分割（按页面加载）
  - 静态资源CDN加速（GitHub Pages自带）
- **验收标准**：Lighthouse性能评分 > 90分

---

### 功能需求优先级

**P0（MVP必须）**：
- FR-1.1, FR-1.2, FR-1.3（3章内容）
- FR-2（Document模式）
- FR-3（PPT模式）
- FR-4（首页 + 联系页面）
- FR-5（GitHub Pages部署）
- FR-6.2（基本性能优化）

**P1（MVP后立即）**：
- FR-6.1（SEO优化）

**P2（Growth阶段）**：
- 扩展内容（工具栈指南、FAQ）
- 英文版本

---

## Non-Functional Requirements

### NFR-1: 性能（Performance）

**为什么重要：** 静态网站的核心优势就是性能，快速加载直接影响用户体验和SEO排名

**具体要求：**

**NFR-1.1 加载时间**
- **首页加载** < 2秒（3G网络，国内访问）
- **内容页加载** < 1秒（已缓存资源）
- **PPT模式切换** < 500ms

**NFR-1.2 Lighthouse指标**
- **Performance** > 90分
- **Best Practices** > 90分
- **SEO** > 95分
- **Accessibility** > 85分

**NFR-1.3 资源优化**
- 图片大小：单张 < 200KB
- 总页面大小：< 1MB（含图片）
- JavaScript bundle：< 300KB（gzip后）
- CSS bundle：< 100KB（gzip后）

**NFR-1.4 缓存策略**
- 静态资源缓存1年（immutable）
- HTML缓存5分钟（允许快速更新）
- 利用GitHub Pages CDN加速

**验收标准：**
- 使用WebPageTest或Lighthouse测试，通过所有指标
- 从国内3G网络访问，首页2秒内可交互

---

### NFR-2: 可用性（Availability）

**为什么重要：** GitHub Pages稳定性高，但仍需考虑可用性

**具体要求：**

**NFR-2.1 正常运行时间**
- **目标SLA**：99.9%（依赖GitHub Pages的SLA）
- **降级策略**：如果GitHub Pages不可用，用户仍可clone仓库本地查看

**NFR-2.2 构建可靠性**
- GitHub Actions构建成功率 > 95%
- 构建失败时有明确错误提示
- 保留上一次成功的部署版本

**验收标准：**
- 监控GitHub Pages状态页
- 构建失败时能快速定位问题

---

### NFR-3: 安全性（Security）

**为什么重要：** 虽然是静态网站，仍需基础安全保障

**具体要求：**

**NFR-3.1 HTTPS**
- **强制HTTPS**：所有访问通过HTTPS
- **证书管理**：GitHub Pages自动提供Let's Encrypt证书
- **HSTS**：启用Strict-Transport-Security

**NFR-3.2 内容安全**
- **无用户输入**：静态网站无需处理用户输入，天然安全
- **无敏感数据**：不存储用户数据，无隐私泄露风险
- **依赖安全**：定期更新依赖（Dependabot自动PR）

**NFR-3.3 防外部注入**
- **CSP（Content Security Policy）**：配置合理的CSP头
- **XSS防护**：Markdown渲染器自动转义HTML
- **安全链接**：外部链接使用`rel="noopener noreferrer"`

**验收标准：**
- Mozilla Observatory安全评分 B+以上
- 无XSS漏洞（Markdown渲染测试）

---

### NFR-4: 可访问性（Accessibility）

**为什么重要：** 确保所有用户都能访问内容，包括视障用户

**具体要求：**

**NFR-4.1 语义化HTML**
- 正确使用标题层级（h1 → h2 → h3）
- 导航使用`<nav>`标签
- 主内容使用`<main>`标签
- 文章使用`<article>`标签

**NFR-4.2 键盘导航**
- Tab键可遍历所有交互元素
- PPT模式支持键盘控制（空格/方向键）
- Skip to content链接（跳过导航）

**NFR-4.3 屏幕阅读器支持**
- 图片必须有`alt`文本
- 链接文字具有描述性（不使用"点击这里"）
- ARIA标签（where appropriate）

**NFR-4.4 对比度**
- 文字与背景对比度 > 4.5:1（WCAG AA标准）
- 链接颜色与周围文字对比度 > 3:1

**验收标准：**
- 使用axe DevTools扫描，无critical/serious问题
- 使用NVDA/VoiceOver测试，导航流畅

---

### NFR-5: 维护性（Maintainability）

**为什么重要：** 长期维护的便利性直接影响项目可持续性

**具体要求：**

**NFR-5.1 内容更新便利性**
- **Markdown编写**：非技术人员也能编辑内容
- **Git工作流**：清晰的commit message，PR review流程
- **预览机制**：本地`npm run dev`预览变更

**NFR-5.2 代码质量**
- **ESLint/Prettier**：代码格式统一
- **TypeScript**（如自定义组件）：类型安全
- **模块化**：组件可复用

**NFR-5.3 文档完整**
- **README.md**：安装、开发、部署说明
- **CONTRIBUTING.md**：贡献指南
- **代码注释**：关键逻辑有注释

**验收标准：**
- 新贡献者能在30分钟内完成本地环境搭建
- 代码审查无明显质量问题

---

### NFR-6: 可扩展性（Scalability）

**为什么适用：** 静态网站天然可扩展，CDN自动处理流量

**具体说明：**

**NFR-6.1 内容扩展**
- **结构灵活**：新增章节无需修改架构
- **分页支持**：如果单页内容过长，支持分页
- **多语言预留**：目录结构支持 `/en/`, `/zh/` 路径

**NFR-6.2 流量处理**
- **GitHub Pages CDN**：自动全球分发
- **并发无限制**：静态文件可承载任意并发
- **成本固定**：无论流量多大，成本为$0

**验收标准：**
- 1000+并发访问无性能下降
- 新增内容不影响现有页面性能

---

### 非功能需求优先级

**P0（MVP必须）**：
- NFR-1（性能）
- NFR-2（可用性）
- NFR-3.1, NFR-3.2（基础安全）

**P1（MVP后立即）**：
- NFR-4（可访问性）
- NFR-5（维护性）

**P2（持续改进）**：
- NFR-3.3（高级安全）
- NFR-6（扩展性优化）

---

## Implementation Planning

### 开发时间线（预估）

**总计：4-5周MVP上线**

**Week 1：内容准备 + 技术选型**
- ✅ 整理3章内容（基于头脑风暴和研究报告）
- ✅ 准备图片资源（图表、案例截图、对比表）
- ✅ 技术选型确定（VuePress vs Docusaurus vs 自定义）
- ✅ 项目初始化，GitHub仓库创建
- **交付物**：content-draft.md, /images/ 目录

**Week 2：核心开发 - Document模式**
- 📝 配置静态站点生成器
- 📝 实现左侧导航树（3级结构）
- 📝 Markdown渲染配置（代码高亮、表格、图片）
- 📝 响应式布局（桌面/平板/移动）
- 📝 3章内容集成到文档结构
- **交付物**：Document模式可本地预览

**Week 3：核心开发 - PPT模式 + 首页**
- 📝 集成reveal.js（VuePress插件 或 自定义页面）
- 📝 编写30-50页PPT内容（Markdown格式）
- 📝 PPT样式定制（配色、字体、布局）
- 📝 实现首页（双入口按钮 + 项目简介）
- 📝 联系页面
- **交付物**：PPT模式可演示，首页完成

**Week 4：测试与优化**
- 🧪 功能测试（导航、切换、响应式）
- 🧪 性能优化（图片压缩、lazy load）
- 🧪 SEO配置（meta标签、sitemap）
- 🧪 可访问性测试（键盘导航、屏幕阅读器）
- 🧪 浏览器兼容性测试
- 📝 README.md 和 CONTRIBUTING.md
- **交付物**：测试通过，性能达标

**Week 5：部署与发布**
- 🚀 GitHub Actions配置（自动构建部署）
- 🚀 GitHub Pages部署
- 🚀 自定义域名配置（可选）
- 🚀 社交媒体宣传（微信、GitHub）
- 📊 Google Analytics / 百度统计集成
- **交付物**：网站上线，开始收集反馈

---

### 实际进展对照 (2025-12-17)

**重大进展：技术实现超预期完成！** 🎉

| 阶段 | 原计划 | 实际完成 | 状态 | 说明 |
|------|--------|---------|------|------|
| Week 1: 内容准备 + 技术选型 | Week 1 | Week 1 | ✅ 按时 | Epic 1 全部完成 |
| Week 2: Document 模式开发 | Week 2 | Week 2-3 | ✅ 提前 | Epic 2 + Epic 3-A 完成 |
| Week 3: PPT 模式 + 首页 | Week 3 | Week 3 | ✅ 超前完成 | Epic 4 & 5 技术部分全部完成 |
| Week 4: 测试与优化 | Week 4 | - | ⏸️ 待定 | 等待内容完成后进行 |
| Week 5: 部署与发布 | Week 5 | - | ⏸️ 待定 | Epic 6 |

**关键里程碑更新**：

- ✅ **Epic 1-2 完成**: Week 2 (按时)
- ✅ **Epic 3-A 完成**: Week 3 (按时)
- ✅ **Epic 4-5 技术实现完成**: Week 3 **(超前 1-2 周)**
  - reveal.js 框架集成 ✅
  - Linear Docs 风格三栏布局 ✅
  - 自定义导航系统 ✅
  - 移动端响应式 ✅
  - 双模式切换机制 ✅
  - 所有 Vue 组件和样式 ✅
- ⏸️ **Epic 3-B 内容填充**: Week 4-5 (当前焦点)
- ⏸️ **Epic 6 优化与发布**: Week 5-6

**技术实现总结**：

**已完成组件**（12个）：
- `CustomNavigation.vue` - 自定义左侧导航
- `RightTOC.vue` - 右侧目录
- `Breadcrumb.vue` - 面包屑导航
- `PresentationEntry.vue` - 模式切换入口
- `SlideControls.vue` - PPT 控制条
- `SlideSidebar.vue` - PPT 侧边栏
- `Layout.vue` - 文档模式布局包装
- `Slide.vue` - PPT 模式布局
- `NavbarPresentationButton.vue` - 导航栏切换按钮
- `StoryContext.vue` - 故事上下文
- `doc-mode.scss` - Linear Docs 主题
- `index.scss` - 全局样式

**已创建 Slides 文件**（7个）：
- `slides/1-introduction.md` (框架)
- `slides/2-comparison.md` (框架)
- `slides/3-definition.md` (框架)
- `slides/4-practice.md` (框架)
- `slides/5-transition.md` (框架)
- `slides/6-outlook.md` (框架)
- `slides/cases.md` (框架)

**剩余工作**：
- Epic 3-B: 内容创作与填充（13 个 stories）
- Epic 6: 页面完善与发布

**进度评估**：技术实现进度 **42%** → **技术 100%** | 整体进度 **42%** | 内容填充 **0%**

---

### Epic分解要求

**按照BMAD-METHOD，已将PRD分解为6个Epic和33个Story：**

**Epic 1: 项目基础设施与技术栈** ✅ 已完成
- Story 1.1-1.5: 技术选型、项目初始化、开发环境、响应式框架、构建流程

**Epic 2: 部署验证与Hello World** ✅ 已完成
- Story 2.1-2.4: GitHub配置、Hello World页面、部署验证、文档编写

**Epic 3-A: 内容框架搭建** ✅ 已完成
- Story 3-A.1: 设计完整信息架构（IA）- 6章目录结构 + IA文档 ✅
- Story 3-A.2: 配置VuePress导航和sidebar - 完整导航系统 + PPT骨架 ✅
- Story 3-A.3: 首页与框架布局设计 - Hero区域 + 6章导航卡片 ✅
- Story 3-A.4: PPT模式交互页面设计 - 全屏PPT风格 + 键盘导航 ✅
- Story 3-A.5: 文档模式交互页面设计 - Linear Docs风格布局 ✅

**Epic 3-B: 内容创作与填充** 🔄 当前焦点
- Story 3-B.1 ~ 3-B.9: 编写6章内容 + 案例库 + 图片资源
- Story 3-B.10 ~ 3-B.12: PPT 内容填充（从 Epic 4 移入）
- Story 3-B.13: 内容集成（从 Epic 5 移入）

**Epic 4: PPT演示模式** ✅ 技术实现已完成
- Story 4.1: reveal.js集成 ✅
- Story 4.5: 导航控制 ✅
- Story 4.6: 样式定制和响应式 ✅
- 注：内容任务已移至 Epic 3-B

**Epic 5: Document文档模式** ✅ 技术实现已完成
- Story 5.1: 左侧导航树 ✅
- Story 5.2: Markdown渲染 ✅
- Story 5.3: 导航交互 ✅
- Story 5.5: 移动响应式 ✅
- Story 5.6: 模式切换 ✅
- 注：内容集成任务已移至 Epic 3-B

**Epic 6: 页面完善与发布** 📍 待Epic 3-B完成后执行
- Story 6.1-6.7: 首页/联系页、SEO、性能优化、可访问性、文档编写、发布

**详细的Epic与Story分解**：参见 `docs/epics.md`

**当前进度**：Epic 1、2、3-A、4（技术）、5（技术）已完成 | Epic 3-B 进行中

---

## References

**支撑文档：**

- **Product Brief**: `docs/product-brief-AINative-2025-12-15.md`
  - 完整产品愿景、目标用户、MVP范围、成功指标
  - 双模式交互设计、工具栈推荐、转型方案

- **市场研究报告**: `docs/bmm-research-market-2025-12-15.md`
  - AI Native市场规模：$26.99B（2025）
  - 企业AI采用率：79%
  - 成功案例：OpenAI, Cursor AI, Commonwealth Bank, Bupa, Amazon, Moderna, Bayer, NVIDIA
  - 工具栈详细对比：Cursor, Claude Code, Devin, Linear
  - Builder能力模型：5维能力框架
  - 52个权威来源支撑

- **头脑风暴成果**: `docs/brainstorming-session-results-2025-12-15.md`
  - AI Native第一性原理
  - 核心类比："传统组织 vs 全球顶尖科学家组织"
  - 60-80-100分模型
  - 标准型 vs 过渡型组织架构

---

## Next Steps

### 立即开始

**1. Epic & Story分解（必需）**
```bash
workflow create-epics-and-stories
```
将PRD需求分解为可实施的Epics和Stories，适配200k context开发agent。

**2. 技术架构设计（推荐）**
```bash
workflow create-architecture
```
确定技术栈选型（VuePress vs Docusaurus vs 自定义），设计目录结构、构建流程、部署pipeline。

**3. 内容创作（并行）**
- 编写3章完整内容（基于头脑风暴和研究报告）
- 准备图片资源（使用Figma/Canva制作图表）
- 编写30-50页PPT内容大纲

### 可选后续

**UX设计（可选）**
- 静态文档网站UX相对标准，可参考VuePress/Docusaurus默认主题
- 如需定制化视觉设计，可运行 `workflow ux-design`

**验证与测试（MVP上线前）**
- 内部测试（5-10人）阅读体验
- 收集反馈：双模式是否有效？内容是否产生认知转变？
- 性能测试：Lighthouse评分是否达标？

---

## Product Magic Summary

**AINative的核心魔力：认知觉醒时刻**

当用户完整浏览完AINative后，产生三层认知觉醒：

**🌟 通用认知：** "原来AI时代的组织结构和工作流程是这样的，很厉害！"
- 理解组织能力才是壁垒，而非规模和层级
- 理解Builder + AI + 专业团队的协作模式
- 理解扁平化、按结果分工的运作方式

**👔 管理者认知：** "原来我的团队还可以是这样高效精华的团队！"
- 小而精的Builder团队可以替代庞大组织
- 扁平化管理下的高效协作
- AI赋能下的能力边界扩展

**💪 个人认知：** "实践后原来自己可以代替整个团队！"
- Builder + AI = 原本5-10人团队的产出
- 从单一技能到端到端交付
- 个人能力边界被重新定义

**这个分层的认知转变，通过双模式内容（PPT传播 + Document深度学习）得以实现，是产品的核心价值。**

---

_This PRD captures the complete product vision for AINative - a dual-mode documentation website that transforms how people understand and practice AI Native organizations._

_Created through collaborative discovery between Jett and AI PM on 2025-12-15._

_Project Track: BMad Method (method-greenfield)_
