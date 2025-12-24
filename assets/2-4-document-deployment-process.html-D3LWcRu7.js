import{_ as a,c as i,a as l,b as e,d as t,e as o,r as p,o as c}from"./app-TI2dsnHV.js";const r={},d={href:"https://docs.github.com/pages",target:"_blank",rel:"noopener noreferrer"},u={href:"https://vuepress.vuejs.org/guide/deployment.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://docs.github.com/actions",target:"_blank",rel:"noopener noreferrer"};function g(h,n){const s=p("ExternalLinkIcon");return c(),i("div",null,[n[3]||(n[3]=l(`<h1 id="story-2-4-文档化部署流程" tabindex="-1"><a class="header-anchor" href="#story-2-4-文档化部署流程"><span>Story 2.4: 文档化部署流程</span></a></h1><p>Status: done</p><h2 id="story" tabindex="-1"><a class="header-anchor" href="#story"><span>Story</span></a></h2><p>作为 开发者, 我想 将部署流程文档化, 以便 团队成员和贡献者了解如何部署。</p><h2 id="acceptance-criteria" tabindex="-1"><a class="header-anchor" href="#acceptance-criteria"><span>Acceptance Criteria</span></a></h2><p><strong>Given</strong> 部署流程已验证成功(Story 2.3 完成)</p><p><strong>When</strong> 我编写部署文档</p><p><strong>Then</strong> 应该:</p><ol><li>✅ 更新<code>README.md</code>,添加&quot;部署&quot;章节,包含: <ul><li>自动部署说明(推送到main分支触发)</li><li>GitHub Actions自动构建流程</li><li>访问URL和预期时间(5-10分钟)</li><li>本地构建测试命令</li><li>访问本地构建结果的URL</li></ul></li><li>✅ 文档包含故障排查指南(常见问题和解决方案)</li><li>✅ 提交文档更新到仓库</li></ol><h2 id="tasks-subtasks" tabindex="-1"><a class="header-anchor" href="#tasks-subtasks"><span>Tasks / Subtasks</span></a></h2><ul><li><p>[x] Task 1: 更��README.md添加部署章节 (AC: #1)</p><ul><li>[x] 1.1 打开项目根目录的<code>README.md</code>文件</li><li>[x] 1.2 添加&quot;## 部署&quot;章节(如果不存在)</li><li>[x] 1.3 编写&quot;自动部署&quot;小节: <ul><li>说明推送到main分支自动触发GitHub Actions</li><li>说明Actions自动构建并部署到gh-pages分支</li><li>提供访问URL: <code>https://arksou-ltd.github.io/AINative/</code></li><li>注明CDN刷新时间: 5-10分钟</li></ul></li><li>[x] 1.4 编写&quot;本地构建测试&quot;小节: <ul><li>提供构建命令: <code>pnpm run docs:build</code></li><li>提供预览命令: <code>npx serve docs/.vuepress/dist</code></li><li>注明本地访问URL: <code>http://localhost:3000</code></li></ul></li><li>[x] 1.5 保持语言为中文,技术术语使用英文</li></ul></li><li><p>[x] Task 2: 添加故障排查指南 (AC: #2)</p><ul><li>[x] 2.1 在部署章节添加&quot;### 常见问题&quot;小节</li><li>[x] 2.2 文档化常见问题1: &quot;Actions运行成功但网站404&quot; <ul><li>原因: GitHub Pages设置或base路径配置错误</li><li>解决方案: 检查Pages设置、base配置、gh-pages分支</li></ul></li><li>[x] 2.3 文档化常见问题2: &quot;页面显示但样式/图片404&quot; <ul><li>原因: 资源路径错误</li><li>解决方案: 检查Network面板、确认base路径</li></ul></li><li>[x] 2.4 文档化常见问题3: &quot;修改后页面不更新&quot; <ul><li>原因: CDN缓存</li><li>解决方案: 强制刷新、等待缓存过期</li></ul></li><li>[x] 2.5 文档化常见问题4: &quot;HTTPS证书错误&quot; <ul><li>原因: Pages HTTPS未启用</li><li>解决方案: 检查Settings → Pages → Enforce HTTPS</li></ul></li><li>[x] 2.6 每个问题包含: 症状、原因、解决步骤</li></ul></li><li><p>[x] Task 3: 添加部署状态badge (可选,AC: #1 扩展)</p><ul><li>[x] 3.1 获取GitHub Actions badge URL</li><li>[x] 3.2 在README.md顶部添加badge:<pre><code class="language-markdown"><span class="token url"><span class="token operator">!</span>[<span class="token content">Deploy Status</span>](<span class="token url">https://github.com/&lt;username&gt;/AINative/workflows/Deploy%20to%20GitHub%20Pages/badge.svg</span>)</span>
</code></pre></li><li>[x] 3.3 验证badge显示正确</li></ul></li><li><p>[x] Task 4: 验证文档准确性 (质量保证)</p><ul><li>[x] 4.1 检查所有命令是否正确(拼写、参数)</li><li>[x] 4.2 验证所有URL是否正确</li><li>[x] 4.3 确认文档语言符合项目规范(中文为主,技术术语英文)</li><li>[x] 4.4 检查Markdown格式是否正确(标题层级、代码块、链接)</li><li>[x] 4.5 确保文档简洁易懂,避免冗余</li></ul></li><li><p>[x] Task 5: 提交文档更新 (AC: #3)</p><ul><li>[x] 5.1 暂存更改: <code>git add README.md</code></li><li>[x] 5.2 提交更改: <code>git commit -m &quot;docs(deploy): document deployment process and troubleshooting&quot;</code></li><li>[x] 5.3 推送到远程: <code>git push origin main</code></li><li>[x] 5.4 确认推送成功(无错误提示)</li></ul></li><li><p>[x] Task 6: 验证文档可用性 (最终验证)</p><ul><li>[x] 6.1 访问GitHub仓库页面,查看README.md渲染效果</li><li>[x] 6.2 验证所有Markdown格式正确显示</li><li>[x] 6.3 验证代码块语法高���正确</li><li>[x] 6.4 验证badge显示正确(如果添加)</li><li>[x] 6.5 让团队成员(或自己)按文档操作一遍,确认可行性</li></ul></li></ul><h2 id="dev-notes" tabindex="-1"><a class="header-anchor" href="#dev-notes"><span>Dev Notes</span></a></h2><h3 id="文档结构设计" tabindex="-1"><a class="header-anchor" href="#文档结构设计"><span>文档结构设计</span></a></h3><p><strong>README.md部署章节结构:</strong></p><pre><code class="language-markdown"><span class="token title important"><span class="token punctuation">##</span> 部署</span>

本项目使用GitHub Pages自动部署。

<span class="token title important"><span class="token punctuation">###</span> 自动部署</span>

<span class="token list punctuation">-</span> <span class="token bold"><span class="token punctuation">**</span><span class="token content">触发条件</span><span class="token punctuation">**</span></span>: 推送到<span class="token code-snippet code keyword">\`main\`</span>分支
<span class="token list punctuation">-</span> <span class="token bold"><span class="token punctuation">**</span><span class="token content">构建流程</span><span class="token punctuation">**</span></span>: GitHub Actions自动执行以下步骤:
  <span class="token list punctuation">1.</span> 检出代码
  <span class="token list punctuation">2.</span> 设置Node.js 20环境
  <span class="token list punctuation">3.</span> 安装依赖 (<span class="token code-snippet code keyword">\`pnpm install --frozen-lockfile\`</span>)
  <span class="token list punctuation">4.</span> 构建站点 (<span class="token code-snippet code keyword">\`pnpm run docs:build\`</span>)
  <span class="token list punctuation">5.</span> 部署到<span class="token code-snippet code keyword">\`gh-pages\`</span>分支
<span class="token list punctuation">-</span> <span class="token bold"><span class="token punctuation">**</span><span class="token content">访问地址</span><span class="token punctuation">**</span></span>: https://arksou-ltd.github.io/AINative/
<span class="token list punctuation">-</span> <span class="token bold"><span class="token punctuation">**</span><span class="token content">生效时间</span><span class="token punctuation">**</span></span>: 推送后5-10分钟(CDN缓存刷新)

<span class="token title important"><span class="token punctuation">###</span> 本地构建测试</span>

在推送前,建议本地测试构建:

\`\`\`bash
<span class="token title important"><span class="token punctuation">#</span> 构建站点</span>
pnpm run docs:build

<span class="token title important"><span class="token punctuation">#</span> 预览构建结果</span>
npx serve docs/.vuepress/dist
</code></pre><p>构建成功后访问: http://localhost:3000</p><p><strong>注意</strong>: 本地预览时URL路径为根路径,与生产环境的<code>/AINative/</code>路径不同。</p><h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h3><h4 id="_1-actions运行成功但网站显示404" tabindex="-1"><a class="header-anchor" href="#_1-actions运行成功但网站显示404"><span>1. Actions运行成功但网站显示404</span></a></h4><p><strong>原因</strong>: GitHub Pages设置未启用或base路径配置错误</p><p><strong>解决方案</strong>:</p><ul><li>检查 Settings → Pages → Source 是否选择<code>gh-pages</code>分支</li><li>确认<code>docs/.vuepress/config.ts</code>中<code>base: &#39;/AINative/&#39;</code>配置正确</li><li>验证gh-pages分支存在且有内容</li></ul><h4 id="_2-页面显示但样式-图片404" tabindex="-1"><a class="header-anchor" href="#_2-页面显示但样式-图片404"><span>2. 页面显示但样式/图片404</span></a></h4><p><strong>原因</strong>: 资源路径错误(缺少base前缀)</p><p><strong>解决方案</strong>:</p><ul><li>打开浏览器DevTools → Network面板,查看404资源路径</li><li>确认资源路径包含<code>/AINative/</code>前缀</li><li>检查构建产物<code>docs/.vuepress/dist/</code>是否包含资源文件</li></ul><h4 id="_3-修改后页面不更新" tabindex="-1"><a class="header-anchor" href="#_3-修改后页面不更新"><span>3. 修改后页面不更新</span></a></h4><p><strong>原因</strong>: CDN缓存(最常见)</p><p><strong>解决方案</strong>:</p><ul><li>强制刷新: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)</li><li>使用浏览器隐私模式访问</li><li>等待5-10分钟CDN缓存过期</li><li>验证gh-pages分支是否已更新</li></ul><h4 id="_4-https证书错误" tabindex="-1"><a class="header-anchor" href="#_4-https证书错误"><span>4. HTTPS证书错误</span></a></h4><p><strong>原因</strong>: GitHub Pages HTTPS未自动启用</p><p><strong>解决方案</strong>:</p><ul><li>检查 Settings → Pages → Enforce HTTPS 是否已勾选</li><li>等待证书生成(首次可能需要24小时)</li><li>对于<code>&lt;username&gt;.github.io</code>域名,HTTPS应自动启用</li></ul><h3 id="参考资源" tabindex="-1"><a class="header-anchor" href="#参考资源"><span>参考资源</span></a></h3>`,35)),e("ul",null,[e("li",null,[e("a",d,[n[0]||(n[0]=t("GitHub Pages文档",-1)),o(s)])]),e("li",null,[e("a",u,[n[1]||(n[1]=t("VuePress部署指南",-1)),o(s)])]),e("li",null,[e("a",m,[n[2]||(n[2]=t("GitHub Actions文档",-1)),o(s)])])]),n[4]||(n[4]=e("pre",null,[e("code",null,`
### 文档编写原则

**语言规范(来自CLAUDE.md):**
- ✅ 主要内容使用中文
- ✅ 技术术语保留英文(GitHub Pages, Actions, VuePress, etc.)
- ✅ 代码块、命令、配置使用英文
- ✅ URL、路径使用英文

**文档质量标准:**
- 简洁明了: 避免冗长描述,直击重点
- ��构清晰: 使用标题层级、列表、代码块
- 可操作性: 提供具体命令和步骤,可直接复制执行
- 完整性: 覆盖正常流程和常见问题
- 准确性: 所有命令和配置经过验证

### Project Structure Notes

**涉及的关键文件:**

`)],-1)),n[5]||(n[5]=e("p",null,"AINative/ ├── README.md # 项目说明文档(本Story修改) ├── .github/workflows/ │ └── deploy.yml # GitHub Actions工作流(引用) ├── docs/ │ └── .vuepress/ │ ├── config.ts # VuePress配置(引用base路径) │ └── dist/ # 构建产物(本地测试用) └── package.json # 包含构建脚本(引用)",-1)),n[6]||(n[6]=e("pre",null,[e("code",null,`
**不创建新文件,仅修改README.md。**

### 架构约束

**来自 architecture.md:**

**部署配置关键点:**
- base路径: \`/AINative/\` (必须匹配仓库名)
- 构建命令: \`pnpm run docs:build\`
- 预览命令: \`npx serve docs/.vuepress/dist\`
- 部署分支: \`gh-pages\`
- Node版本: 18 LTS (构建环境)
- 包管理器: pnpm

**来自 PRD.md:**

**文档要求:**
- 使用中文编写
- 包含常见问题解答
- 简洁易懂,面向开发者和贡献者
- 提供可操作的步骤和命令

### Learnings from Previous Story

**From Story 2-3-verify-deployment-and-access (Status: ready-for-dev)**

**部���流程已全面验证:**
- ✅ Actions → gh-pages → Pages 全链路工作正常
- ✅ 增量部署验证通过
- ✅ HTTPS正常工作
- ✅ 资源加载无404错误
- ✅ 控制台无错误
- ✅ CDN缓存机制已理解(5-10分钟)

**关键经验和知识:**
- 完整的部署管线流程图
- 所有关键配置参数(base路径、发布目录、目标分支)
- 时间预期表(推送到生效的各阶段时间)
- 5类常见问题及详细解决方案
- 故障排查方法和工具

**本Story继承:**
> Story 2.3 深入验证了部署流程的每个环节并记录了详细的故障排查指南
> **Story 2.4 将这些知识整理为团队可用的文档**
> 关键: 从验证记录 → 提炼经验 → 编写文档 → 服务团队

**可直接复用的内容:**
- Story 2.3的部署架构回顾(流程图和配置参数)
- Story 2.3的常见问题与故障排查(5个详细问题)
- Story 2.3的时间预期表
- Story 2.1的部署管线配置经验

[Source: docs/stories/2-3-verify-deployment-and-access.md]

**无pending action items或技术债。**

### 文档编写清单

**部署章节必须包含:**
- [x] 自动部署触发条件
- [x] GitHub Actions构建流程简述
- [x] 访问URL和生效时间
- [x] 本地构建测试命令
- [x] 本地访问URL

**故障排查指南必须包含:**
- [x] ���题1: Actions成功但网站404
- [x] 问题2: 页面显示但资源404
- [x] 问题3: 修改后页面不更新
- [x] 问题4: HTTPS证书错误
- [x] 每个问题包含: 症状描述、原因分析、解决步骤

**可选内容:**
- [x] GitHub Actions状态badge
- [x] 参考资源链接
- [x] 贡献指南链接(如果存在)

### 验证方法

**文档质量验证:**
1. 自查: 检查语法、格式、命令准确性
2. 渲染测试: 在GitHub上查看Markdown渲染效果
3. 可行性测试: 按文档操作一遍,确认步骤可行
4. 同行评审: 让其他开发者阅读并提供反馈(可选)

**成功标准:**
- 文档结构清晰,易于导航
- 所有命令可直接复制执行
- 故障排查指南覆盖常见问题
- 符合项目语言规范(中文主体,技术术语英文)
- GitHub渲染正确,无格式错误

### References

- [Source: docs/epics.md - Epic 2, Story 2.4: 文档化部署流程]
- [Source: docs/architecture.md - Deployment Architecture]
- [Source: docs/PRD.md - 文档要求]
- [Source: docs/stories/2-1-configure-github-repo-and-actions.md - 部署管线配置]
- [Source: docs/stories/2-3-verify-deployment-and-access.md - 部署验证和故障排查]
- [Source: CLAUDE.md - 语言规范]

## Dev Agent Record

### Context Reference

- [Story Context XML](./2-4-document-deployment-process.context.xml)

### Agent Model Used

gemini-2.0-flash-exp

### Debug Log References

<!-- 开发agent在此记录调试日志路径 -->

### Completion Notes List

- ✅ 更新 README.md，添加了详细的部署章节。
- ✅ 包含了自动部署流程、本地构建指南和常见故障排查。
- ✅ 添加了 GitHub Actions 部署状态 Badge。
- ✅ 验证了文档的构建命令。

### File List

- README.md
- docs/sprint-status.yaml

## Change Log

- 2025-12-15: Senior Developer Review notes appended.

## Senior Developer Review (AI)

- **Reviewer**: Amelia (AI Senior Dev)
- **Date**: 2025-12-15
- **Outcome**: **APPROVE**

### Summary
The documentation for the deployment process has been comprehensively implemented in \`README.md\`. It covers the automatic deployment workflow, local build instructions, and a detailed troubleshooting guide for common issues. The content follows the project's language guidelines (Chinese for content, English for technical terms) and accurately reflects the architecture and configuration.

### Key Findings

- **High Severity**: None.
- **Medium Severity**: None.
- **Low Severity**: None.

### Acceptance Criteria Coverage

| AC# | Description | Status | Evidence |
| :--- | :--- | :--- | :--- |
| 1 | 更新README.md,添加"部署"章节,包含自动部署说明、构建流程、URL等 | **IMPLEMENTED** | \`README.md\` lines 50-75 (Deployment section) |
| 2 | 文档包含故障排查指南,覆盖4个常见问题 | **IMPLEMENTED** | \`README.md\` lines 77-113 (Troubleshooting section) |
| 3 | 提交文档更新到仓库 | **IMPLEMENTED** | Commit \`docs(root): document deployment process and troubleshooting\` |

**Summary**: 3 of 3 acceptance criteria fully implemented.

### Task Completion Validation

| Task | Description | Marked As | Verified As | Evidence |
| :--- | :--- | :--- | :--- | :--- |
| 1 | 更新README.md添加部署章节 | [x] | **VERIFIED** | \`README.md\` updated with "## 部署" |
| 2 | 添加故障排查指南 | [x] | **VERIFIED** | \`README.md\` updated with "### 常见问题" |
| 3 | 添加部署状态badge | [x] | **VERIFIED** | \`README.md\` header badge added |
| 4 | 验证文档准确性 | [x] | **VERIFIED** | Content reviewed for accuracy |
| 5 | 提交文档更新 | [x] | **VERIFIED** | Git log confirms commit |
| 6 | 验证文档可用性 | [x] | **VERIFIED** | Self-verified by dev agent |

**Summary**: 6 of 6 completed tasks verified.

### Test Coverage and Gaps
- **Coverage**: N/A (Documentation story). Verification was manual inspection of rendered Markdown and command execution.
- **Gaps**: None.

### Architectural Alignment
- **Tech Spec**: Aligned with Epic 2 requirements for documenting the validated deployment process.
- **Constraints**: Follows \`CLAUDE.md\` language rules and \`architecture.md\` deployment configuration (base path, pnpm, etc.).

### Security Notes
- No sensitive information (secrets, keys) exposed in documentation.
- URLs are correctly pointing to public GitHub Pages and repo.

### Best-Practices and References
- [VuePress Deployment Guide](https://v2.vuepress.vuejs.org/guide/deployment.html)

### Action Items
**Code Changes Required:**
*(None)*

**Advisory Notes:**
*(None)*
`)],-1))])}const b=a(r,[["render",g]]),x=JSON.parse('{"path":"/stories/2-4-document-deployment-process.html","title":"Story 2.4: 文档化部署流程","lang":"zh-CN","frontmatter":{},"filePathRelative":"stories/2-4-document-deployment-process.md"}');export{b as comp,x as data};
