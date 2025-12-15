# Story 2.4: 文档化部署流程

Status: ready-for-dev

## Story

作为 开发者,
我想 将部署流程文档化,
以便 团队成员和贡献者了解如何部署。

## Acceptance Criteria

**Given** 部署流程已验证成功(Story 2.3 完成)

**When** 我编写部署文档

**Then** 应该:

1. ✅ 更新`README.md`,添加"部署"章节,包含:
   - 自动部署说明(推送到main分支触发)
   - GitHub Actions自动构建流程
   - 访问URL和预期时间(5-10分钟)
   - 本地构建测试命令
   - 访问本地构建结果的URL
2. ✅ 文档包含故障排查指南(常见问题和解决方案)
3. ✅ 提交文档更新到仓库

## Tasks / Subtasks

- [ ] Task 1: 更新README.md添加部署章节 (AC: #1)
  - [ ] 1.1 打开项目根目录的`README.md`文件
  - [ ] 1.2 添加"## 部署"章节(如果不存在)
  - [ ] 1.3 编写"自动部署"小节:
    - 说明推送到main分支自动触发GitHub Actions
    - 说明Actions自动构建并部署到gh-pages分支
    - 提供访问URL: `https://arksou-ltd.github.io/AINative/`
    - 注明CDN刷新时间: 5-10分钟
  - [ ] 1.4 编写"本地构建测试"小节:
    - 提供构建命令: `pnpm run docs:build`
    - 提供预览命令: `npx serve docs/.vuepress/dist`
    - 注明本地访问URL: `http://localhost:3000`
  - [ ] 1.5 保持语言为中文,技术术语使用英文

- [ ] Task 2: 添加故障排查指南 (AC: #2)
  - [ ] 2.1 在部署章节添加"### 常见问题"小节
  - [ ] 2.2 文档化常见问题1: "Actions运行成功但网站404"
    - 原因: GitHub Pages设置或base路径配置错误
    - 解决方案: 检查Pages设置、base配置、gh-pages分支
  - [ ] 2.3 文档化常见问题2: "页面显示但样式/图片404"
    - 原因: 资源路径错误
    - 解决方案: 检查Network面板、确认base路径
  - [ ] 2.4 文档化常见问题3: "修改后页面不更新"
    - 原因: CDN缓存
    - 解决方案: 强制刷新、等待缓存过期
  - [ ] 2.5 文档化常见问题4: "HTTPS证书错误"
    - 原因: Pages HTTPS未启用
    - 解决方案: 检查Settings → Pages → Enforce HTTPS
  - [ ] 2.6 每个问题包含: 症状、原因、解决步骤

- [ ] Task 3: 添加部署状态badge (可选,AC: #1 扩展)
  - [ ] 3.1 获取GitHub Actions badge URL
  - [ ] 3.2 在README.md顶部添加badge:
    ```markdown
    ![Deploy Status](https://github.com/<username>/AINative/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
    ```
  - [ ] 3.3 验证badge显示正确

- [ ] Task 4: 验证文档准确性 (质量保证)
  - [ ] 4.1 检查所有命令是否正确(拼写、参数)
  - [ ] 4.2 验证所有URL是否正确
  - [ ] 4.3 确认文档语言符合项目规范(中文为主,技术术语英文)
  - [ ] 4.4 检查Markdown格式是否正确(标题层级、代码块、链接)
  - [ ] 4.5 确保文档简洁易懂,避免冗余

- [ ] Task 5: 提交文档更新 (AC: #3)
  - [ ] 5.1 暂存更改: `git add README.md`
  - [ ] 5.2 提交更改: `git commit -m "docs(deploy): document deployment process and troubleshooting"`
  - [ ] 5.3 推送到远程: `git push origin main`
  - [ ] 5.4 确认推送成功(无错误提示)

- [ ] Task 6: 验证文档可用性 (最终验证)
  - [ ] 6.1 访问GitHub仓库页面,查看README.md渲染效果
  - [ ] 6.2 验证所有Markdown格式正确显示
  - [ ] 6.3 验证代码块语法高亮正确
  - [ ] 6.4 验证badge显示正确(如果添加)
  - [ ] 6.5 让团队成员(或自己)按文档操作一遍,确认可行性

## Dev Notes

### 文档结构设计

**README.md部署章节结构:**

```markdown
## 部署

本项目使用GitHub Pages自动部署。

### 自动部署

- **触发条件**: 推送到`main`分支
- **构建流程**: GitHub Actions自动执行以下步骤:
  1. 检出代码
  2. 设置Node.js 20环境
  3. 安装依赖 (`pnpm install --frozen-lockfile`)
  4. 构建站点 (`pnpm run docs:build`)
  5. 部署到`gh-pages`分支
- **访问地址**: https://arksou-ltd.github.io/AINative/
- **生效时间**: 推送后5-10分钟(CDN缓存刷新)

### 本地构建测试

在推送前,建议本地测试构建:

```bash
# 构建站点
pnpm run docs:build

# 预览构建结果
npx serve docs/.vuepress/dist
```

构建成功后访问: http://localhost:3000

**注意**: 本地预览时URL路径为根路径,与生产环境的`/AINative/`路径不同。

### 常见问题

#### 1. Actions运行成功但网站显示404

**原因**: GitHub Pages设置未启用或base路径配置错误

**解决方案**:
- 检查 Settings → Pages → Source 是否选择`gh-pages`分支
- 确认`docs/.vuepress/config.ts`中`base: '/AINative/'`配置正确
- 验证gh-pages分支存在且有内容

#### 2. 页面显示但样式/图片404

**原因**: 资源路径错误(缺少base前缀)

**解决方案**:
- 打开浏览器DevTools → Network面板,查看404资源路径
- 确认资源路径包含`/AINative/`前缀
- 检查构建产物`docs/.vuepress/dist/`是否包含资源文件

#### 3. 修改后页面不更新

**原因**: CDN缓存(最常见)

**解决方案**:
- 强制刷新: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)
- 使用浏览器隐私模式访问
- 等待5-10分钟CDN缓存过期
- 验证gh-pages分支是否已更新

#### 4. HTTPS证书错误

**原因**: GitHub Pages HTTPS未自动启用

**解决方案**:
- 检查 Settings → Pages → Enforce HTTPS 是否已勾选
- 等待证书生成(首次可能需要24小时)
- 对于`<username>.github.io`域名,HTTPS应自动启用

### 参考资源

- [GitHub Pages文档](https://docs.github.com/pages)
- [VuePress部署指南](https://vuepress.vuejs.org/guide/deployment.html)
- [GitHub Actions文档](https://docs.github.com/actions)
```

### 文档编写原则

**语言规范(来自CLAUDE.md):**
- ✅ 主要内容使用中文
- ✅ 技术术语保留英文(GitHub Pages, Actions, VuePress, etc.)
- ✅ 代码块、命令、配置使用英文
- ✅ URL、路径使用英文

**文档质量标准:**
- 简洁明了: 避免冗长描述,直击重点
- 结构清晰: 使用标题层级、列表、代码块
- 可操作性: 提供具体命令和步骤,可直接复制执行
- 完整性: 覆盖正常流程和常见问题
- 准确性: 所有命令和配置经过验证

### Project Structure Notes

**涉及的关键文件:**

```
AINative/
├── README.md                # 项目说明文档(本Story修改)
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions工作流(引用)
├── docs/
│   └── .vuepress/
│       ├── config.ts        # VuePress配置(引用base路径)
│       └── dist/            # 构建产物(本地测试用)
└── package.json             # 包含构建脚本(引用)
```

**不创建新文件,仅修改README.md。**

### 架构约束

**来自 architecture.md:**

**部署配置关键点:**
- base路径: `/AINative/` (必须匹配仓库名)
- 构建命令: `pnpm run docs:build`
- 预览命令: `npx serve docs/.vuepress/dist`
- 部署分支: `gh-pages`
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

**部署流程已全面验证:**
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
- [ ] 自动部署触发条件
- [ ] GitHub Actions构建流程简述
- [ ] 访问URL和生效时间
- [ ] 本地构建测试命令
- [ ] 本地访问URL

**故障排查指南必须包含:**
- [ ] 问题1: Actions成功但网站404
- [ ] 问题2: 页面显示但资源404
- [ ] 问题3: 修改后页面不更新
- [ ] 问题4: HTTPS证书错误
- [ ] 每个问题包含: 症状描述、原因分析、解决步骤

**可选内容:**
- [ ] GitHub Actions状态badge
- [ ] 参考资源链接
- [ ] 贡献指南链接(如果存在)

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

{{agent_model_name_version}}

### Debug Log References

<!-- 开发agent在此记录调试日志路径 -->

### Completion Notes List

<!-- 开发agent完成后记录实施细节 -->

### File List

<!-- 开发agent记录修改的文件清单 -->
