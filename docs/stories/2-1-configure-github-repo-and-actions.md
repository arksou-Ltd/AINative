# Story 2.1: 配置GitHub仓库与Actions工作流

Status: ready-for-dev

## Story

作为 开发者,
我想 创建GitHub仓库并配置自动部署工作流,
以便 代码推送后自动部署到GitHub Pages。

## Acceptance Criteria

**Given** 本地项目已完成基础配置（Epic 1 完成）

**When** 我创建GitHub仓库并配置GitHub Actions

**Then** 应该：

1. ✅ 在GitHub创建公开仓库`AINative`
2. ✅ 本地关联远程仓库：`git remote add origin <repo-url>`
3. ✅ 创建`.github/workflows/deploy.yml`：
   - 监听 `main` 分支的 push 事件
   - 使用 Node.js 18
   - 使用 pnpm 安装依赖
   - 执行 `pnpm run docs:build`
   - 使用 `peaceiris/actions-gh-pages@v3` 部署到 `gh-pages` 分支
4. ✅ 推送代码到GitHub：`git push -u origin main`
5. ✅ GitHub Actions自动触发构建（Actions页面显示工作流运行）

## Tasks / Subtasks

- [x] Task 1: 创建GitHub仓库并关联本地仓库 (AC: #1, #2)
  - [x] 1.1 在GitHub创建新仓库（名称：`AINative`，公开，无README/gitignore/license）
  - [x] 1.2 记录仓库URL：`https://github.com/<username>/AINative.git`
  - [x] 1.3 本地关联远程仓库：`git remote add origin <repo-url>`
  - [x] 1.4 验证远程仓库连接：`git remote -v`
  - [x] 1.5 确认当前分支为 `main`（或重命名：`git branch -M main`）

- [x] Task 2: 配置GitHub Actions工作流文件 (AC: #3)
  - [x] 2.1 创建目录：`.github/workflows/`
  - [x] 2.2 创建文件：`.github/workflows/deploy.yml`
  - [x] 2.3 配置触发条件：监听 `main` 分支 push 事件
  - [x] 2.4 配置构建环境：
    - Ubuntu latest
    - Node.js 18.x
    - pnpm 8.x（通过 `pnpm/action-setup@v4`）
  - [x] 2.5 配置构建步骤：
    - Checkout 代码（`actions/checkout@v4`）
    - 安装 Node.js（`actions/setup-node@v4`）
    - 安装 pnpm（`pnpm/action-setup@v4`）
    - 安装依赖（`pnpm install --frozen-lockfile`）
    - 执行构建（`pnpm run docs:build`）
  - [x] 2.6 配置部署步骤：
    - 使用 `peaceiris/actions-gh-pages@v3`
    - 部署目录：`docs/.vuepress/dist`
    - 目标分支：`gh-pages`
    - Token：`${{ secrets.GITHUB_TOKEN }}`

- [x] Task 3: 验证工作流配置正确性 (AC: #3)
  - [x] 3.1 本地验证 YAML 语法（使用 YAML linter 或在线工具）
  - [x] 3.2 确认所有路径正确（`docs/.vuepress/dist`）
  - [x] 3.3 确认 Node/pnpm 版本与本地一致
  - [x] 3.4 确认 `package.json` 中的 `docs:build` 脚本存在

- [x] Task 4: 首次推送并触发工作流 (AC: #4, #5)
  - [x] 4.1 暂存所有文件：`git add .`
  - [x] 4.2 提交更改：`git commit -m "feat(deploy): configure GitHub Actions workflow"`
  - [x] 4.3 首次推送：`git push -u origin main`
  - [ ] 4.4 访问GitHub仓库 Actions 页面
  - [ ] 4.5 验证工作流自动触发（显示黄色圆圈 ⚪ 表示运行中）
  - [ ] 4.6 等待工作流完成（绿色勾 ✅ 表示成功）

- [ ] Task 5: 验证构建成功与产物 (AC: #5)
  - [ ] 5.1 在 Actions 页面查看工作流日志
  - [ ] 5.2 验证每个步骤都成功（无红色 ❌）
  - [ ] 5.3 确认构建步骤输出正常（`pnpm run docs:build` 成功）
  - [ ] 5.4 验证部署步骤成功（`peaceiris/actions-gh-pages` 推送到 `gh-pages`）
  - [ ] 5.5 检查仓库是否存在 `gh-pages` 分支
  - [ ] 5.6 验证 `gh-pages` 分支包含 `index.html` 和 `assets/`

- [ ] Task 6: 配置GitHub Pages设置 (后续准备)
  - [ ] 6.1 访问仓库 Settings → Pages
  - [ ] 6.2 记录 Pages 设置（Source: gh-pages 分支）
  - [ ] 6.3 记录目标 URL：`https://<username>.github.io/AINative/`
  - [ ] 6.4 说明：实际访问验证在 Story 2.3 进行

- [x] Task 7: 文档化部署流程 (AC: #5)
  - [x] 7.1 更新项目 `README.md` 添加"自动部署"章节
  - [x] 7.2 说明工作流触发条件（push main 分支）
  - [x] 7.3 说明构建环境（Node 18 + pnpm 8）
  - [x] 7.4 说明部署目标（gh-pages 分支）
  - [x] 7.5 添加 Actions badge（可选）：`![Deploy](https://github.com/<username>/AINative/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)`

## Dev Notes

### 架构约束与模式

**部署架构（来自 architecture.md）：**

```yaml
# .github/workflows/deploy.yml（标准配置）
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0  # 获取完整历史（sitemap生成需要）
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      
      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 8
      
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      - name: Build
        run: pnpm run docs:build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vuepress/dist
          publish_branch: gh-pages
          force_orphan: true  # 不保留历史（减小仓库体积）
```

**关键配置点：**

1. **权限**：`permissions: contents: write`
   - 允许工作流推送到 `gh-pages` 分支
   - GitHub 自动提供的 `GITHUB_TOKEN` 足够

2. **Node.js 版本**：18.x
   - 与本地开发环境一致（Story 1.3）
   - LTS 版本，稳定性高

3. **pnpm 版本**：8.x
   - 使用 `pnpm/action-setup@v4` 安装
   - `--frozen-lockfile` 确保依赖一致性

4. **构建目录**：`docs/.vuepress/dist`
   - 与本地构建一致（Story 1.5）
   - base 路径 `/AINative/` 已在 config.ts 配置

5. **部署策略**：
   - 目标分支：`gh-pages`
   - `force_orphan: true`：每次部署创建新的orphan commit（不保留历史）
   - 优点：减小仓库体积，加快clone速度

### Project Structure Notes

**新增文件：**

```
AINative/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 工作流（新增）
├── docs/
│   └── .vuepress/
│       └── dist/                # 构建产物（不提交）
└── README.md                    # 更新部署说明
```

**Git 分支策略：**

- `main` 分支：源代码（Markdown、config、样式等）
- `gh-pages` 分支：构建产物（HTML、CSS、JS、图片）
  - 由 GitHub Actions 自动创建和更新
  - 不需要本地创建或手动推送

### GitHub Actions 工作流详解

**步骤解析：**

1. **Checkout 代码**（`actions/checkout@v4`）
   - 拉取最新的 `main` 分支代码
   - `fetch-depth: 0`：获取完整Git历史（sitemap插件需要）

2. **安装 Node.js**（`actions/setup-node@v4`）
   - 安装 Node.js 18.x
   - 设置 npm registry（加速下载）

3. **安装 pnpm**（`pnpm/action-setup@v4`）
   - 安装 pnpm 8.x
   - 比 npm/yarn 更快，节省CI时间

4. **安装依赖**（`pnpm install --frozen-lockfile`）
   - 根据 `pnpm-lock.yaml` 精确安装依赖
   - `--frozen-lockfile`：确保依赖版本一致，避免意外更新

5. **构建**（`pnpm run docs:build`）
   - 执行 VuePress 构建
   - 输出到 `docs/.vuepress/dist/`
   - 预期耗时：< 30秒（Story 1.5 验证）

6. **部署**（`peaceiris/actions-gh-pages@v3`）
   - 将 `dist/` 目录推送到 `gh-pages` 分支
   - 使用 `GITHUB_TOKEN`（无需额外配置）
   - `force_orphan: true`：每次创建新的orphan commit

**触发条件：**

- 事件：`push`
- 分支：`main`
- 自动触发：每次推送到 `main` 分支都会触发工作流

**执行环境：**

- 运行器：`ubuntu-latest`（GitHub hosted runner）
- 预装软件：Git、curl、wget、Docker等
- 网络：可访问公网（下载依赖）

### 常见问题与解决方案

**问题 1：工作流触发失败**
- **原因**：`.github/workflows/deploy.yml` 路径或文件名错误
- **解决**：
  - 确认目录结构：`.github/workflows/`（注意是 `.github`，不是 `github`）
  - 确认文件名：`deploy.yml`（可以是其他名称，但必须是 `.yml` 或 `.yaml`）

**问题 2：构建步骤失败，提示找不到模块**
- **原因**：`pnpm-lock.yaml` 未提交或版本不匹配
- **解决**：
  - 确认 `pnpm-lock.yaml` 已提交到 Git
  - 本地执行 `pnpm install --frozen-lockfile` 验证
  - 推送更新后的 lockfile

**问题 3：部署步骤失败，提示权限不足**
- **原因**：缺少 `permissions: contents: write`
- **解决**：
  - 在工作流文件顶部添加：
    ```yaml
    permissions:
      contents: write
    ```
  - 或在 Settings → Actions → General → Workflow permissions 中启用 "Read and write permissions"

**问题 4：部署成功但网站显示 404**
- **原因**：GitHub Pages 设置未配置或 base 路径错误
- **解决**：
  - 确认 `config.ts` 中 `base: '/AINative/'`
  - 访问 Settings → Pages，Source 选择 `gh-pages` 分支
  - 等待 5-10 分钟让 Pages 生效
  - 故障排查在 Story 2.3 进行

**问题 5：工作流运行时间过长（>5分钟）**
- **原因**：依赖下载慢或构建耗时
- **解决**：
  - 使用 `pnpm` 而非 `npm`（更快）
  - 添加缓存步骤（可选）：
    ```yaml
    - name: Cache pnpm modules
      uses: actions/cache@v4
      with:
        path: ~/.pnpm-store
        key: ${{ runner.os }}-pnpm-${{ hashFiles('**/pnpm-lock.yaml') }}
    ```

### Learnings from Previous Story

**From Story 1-5-configure-build-process (Status: review)**

**构建流程已验证：**
- ✅ `pnpm run docs:build` 成功（2.21s，无报错）
- ✅ 产物输出至 `docs/.vuepress/dist/`
- ✅ 产物结构：
  - `index.html`（首页）
  - `assets/`（CSS/JS 带 hash）
  - `ai-native-intro/`, `case-studies/`, `transformation/`（各章节 HTML）
  - `images/`（静态资源）
- ✅ base 路径 `/AINative/` 已在构建产物中生效
- ✅ 本地预览验证通过（`http://localhost:3000/AINative/`）

**依赖配置已修复：**
- ✅ 固定 @vuepress/helper 版本
- ✅ SEO/Sitemap 插件占位实现
- ✅ 关闭默认主题 git/seo 插件
- ✅ `pnpm-lock.yaml` 已更新并提交

**GitHub Actions 集成要点：**
> Story 1.5 验证了本地构建流程  
> **Story 2.1 将相同流程迁移到 GitHub Actions**  
> 关键：使用相同的 Node/pnpm 版本、相同的构建命令、相同的输出目录

**无 pending review items 或技术债。**

[Source: docs/stories/1-5-configure-build-process.md#Completion-Notes]

### References

- [Source: docs/epics.md - Epic 2, Story 2.1: 配置GitHub仓库与Actions工作流]
- [Source: docs/architecture.md - Deployment Architecture]
- [Source: docs/architecture.md - Decision Summary - Deployment]
- [Source: docs/PRD.md - FR-5.1: GitHub Pages部署]
- [Source: docs/stories/1-5-configure-build-process.md - Completion Notes]

## Dev Agent Record

### Context Reference

- `docs/stories/2-1-configure-github-repo-and-actions.context.xml`

### Agent Model Used

<!-- 开发agent在此记录使用的模型名称与版本 -->

### Debug Log References

<!-- 开发agent在此记录调试日志路径 -->

### Completion Notes List

<!-- 开发agent完成后填写：
- 仓库创建详情（URL、可见性）
- 工作流配置验证结果
- 首次推送结果（commit hash）
- Actions 运行结果（运行时间、成功/失败）
- gh-pages 分支验证结果
- 遇到的问题与解决方案
-->

### File List

<!-- 开发agent完成后填写：
- ADDED: .github/workflows/deploy.yml
- MODIFIED: README.md（添加部署说明）
- VERIFIED: Actions 工作流运行成功
- VERIFIED: gh-pages 分支创建成功
-->

