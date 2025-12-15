# Story 1.2: 初始化项目结构

Status: ready-for-dev

## Story

作为 开发者,
我想 初始化项目的基础结构和依赖,
以便 可以开始本地开发。

## Acceptance Criteria

**Given** 已选定技术栈（VuePress 2 + Vite + TypeScript）

**When** 我执行项目初始化

**Then** 项目应该包含：

1. ✅ `package.json`（包含必要依赖）
2. ✅ 基础目录结构：
   ```
   AINative/
   ├── docs/
   │   ├── .vuepress/
   │   │   ├── config.ts
   │   │   └── public/
   │   └── README.md
   ├── .gitignore
   ├── package.json
   └── README.md
   ```
3. ✅ `.gitignore`正确配置（忽略`node_modules`, `dist`, `.DS_Store`等）
4. ✅ `pnpm install`成功安装所有依赖
5. ✅ Git仓库已初始化（项目已在git管理中）

## Tasks / Subtasks

- [ ] Task 1: 安装VuePress 2和核心依赖 (AC: #1)
  - [ ] 1.1 创建`package.json`并配置项目基本信息
  - [ ] 1.2 安装VuePress 2.0.0-rc.26和Vite依赖
  - [ ] 1.3 安装vuepress-plugin-md-enhance 2.0.0-rc.99（PPT支持）
  - [ ] 1.4 配置package.json scripts（dev, build）
  - [ ] 1.5 使用pnpm生成lockfile

- [ ] Task 2: 创建基础目录结构 (AC: #2)
  - [ ] 2.1 创建`docs/`目录
  - [ ] 2.2 创建`docs/.vuepress/`配置目录
  - [ ] 2.3 创建`docs/.vuepress/config.ts`配置文件
  - [ ] 2.4 创建`docs/.vuepress/public/`公共资源目录
  - [ ] 2.5 创建`docs/.vuepress/public/images/`图片目录
  - [ ] 2.6 创建`docs/.vuepress/styles/`样式目录
  - [ ] 2.7 创建`docs/README.md`首页文件

- [ ] Task 3: 配置.gitignore (AC: #3)
  - [ ] 3.1 创建`.gitignore`文件
  - [ ] 3.2 忽略`node_modules/`
  - [ ] 3.3 忽略`docs/.vuepress/dist/`构建产物
  - [ ] 3.4 忽略`.DS_Store`（macOS）
  - [ ] 3.5 忽略`*.log`日志文件
  - [ ] 3.6 忽略`.cache/`和`temp/`临时文件

- [ ] Task 4: 安装依赖并验证 (AC: #4)
  - [ ] 4.1 执行`pnpm install --frozen-lockfile`
  - [ ] 4.2 验证所有依赖安装成功
  - [ ] 4.3 检查lockfile生成
  - [ ] 4.4 验证Node版本（18.x LTS）
  - [ ] 4.5 确认无安装错误或警告

- [ ] Task 5: 验证Git配置 (AC: #5)
  - [ ] 5.1 确认项目已在Git仓库中
  - [ ] 5.2 验证`.git/`目录存在
  - [ ] 5.3 添加初始文件到staging
  - [ ] 5.4 执行首次commit：`feat(backend:framework-kernel): initialize VuePress project structure`
  - [ ] 5.5 验证commit历史

## Dev Notes

### 架构约束与模式

**架构决策（来自 architecture.md）：**

已确定使用 **VuePress 2 + Vite + TypeScript** 方案：
- **版本规格**:
  - VuePress: 2.0.0-rc.26
  - vuepress-plugin-md-enhance: 2.0.0-rc.99
  - Node: 18.x LTS
  - 包管理器: pnpm 8.x

- **项目初始化方式**：
  - 使用`pnpm create vuepress@latest`交互式初始化
  - 或手动创建package.json并安装依赖
  - 选择Vite bundler（快速构建）
  - 启用TypeScript支持

### Project Structure Notes

**目标目录结构（来自 architecture.md）：**

```
AINative/
├── docs/
│   ├── README.md              # 首页（双入口按钮）
│   ├── contact.md             # 联系页
│   ├── ai-native-intro/       # AI Native简述章节
│   ├── case-studies/          # 真实案例章节
│   ├── transformation/        # 转化路程章节
│   ├── slides/                # PPT模式内容
│   └── .vuepress/
│       ├── config.ts          # VuePress配置（base, sidebar, head, plugins）
│       ├── styles/
│       │   └── index.css      # 主题定制样式
│       └── public/
│           └── images/        # 站点图片资源
├── package.json
├── pnpm-lock.yaml
├── .gitignore
└── README.md                   # 项目级说明
```

**初始化阶段重点：**
- 本Story只创建最小必要结构（骨架）
- 内容目录（ai-native-intro、case-studies等）在后续Story中创建
- config.ts先创建基本配置，插件和主题在后续Story中完善

### 关键配置文件

**package.json 必要依赖：**
```json
{
  "name": "ainative",
  "version": "0.1.0",
  "description": "AI Native知识分享平台",
  "type": "module",
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
  "devDependencies": {
    "vuepress": "2.0.0-rc.26",
    "vuepress-plugin-md-enhance": "2.0.0-rc.99",
    "vue": "^3.3.0",
    "@vuepress/bundler-vite": "2.0.0-rc.26"
  }
}
```

**config.ts 基本配置：**
```ts
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  base: '/AINative/',
  lang: 'zh-CN',
  title: 'AINative',
  description: 'AI Native知识分享平台',
  
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1.0' }]
  ],

  theme: defaultTheme({
    navbar: [],
    sidebar: {}
  })
})
```

**.gitignore 配置：**
```
# Dependencies
node_modules/
pnpm-lock.yaml

# Build output
docs/.vuepress/dist/
docs/.vuepress/.cache/
docs/.vuepress/.temp/

# System files
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
yarn-debug.log*
pnpm-debug.log*

# IDE
.idea/
.vscode/
*.swp
*.swo
```

### 命名约定

**文件/目录命名（来自 architecture.md）：**
- 文件名：kebab-case（如 `config.ts`, `tech-stack-decision.md`）
- 目录名：kebab-case（如 `ai-native-intro`, `case-studies`）
- 图片：kebab-case（如 `core-hook.png`, `og-image.png`）

**Git Commit 规范：**
- 格式：`<type>(<module>): <subject>`
- Type: feat, fix, docs, style, refactor, test, build
- Module: `backend:framework-kernel`（此Story为基础设施）
- 首次commit: `feat(backend:framework-kernel): initialize VuePress project structure`

### 测试策略

**验证方法：**
1. **结构验证**：
   - 检查所有必需目录和文件是否创建
   - 验证目录权限正确

2. **依赖验证**：
   - 执行`pnpm install`无错误
   - 检查`node_modules/`包含vuepress相关包
   - 验证lockfile生成

3. **配置验证**：
   - config.ts语法正确（TypeScript编译通过）
   - .gitignore规则生效（node_modules不被追踪）

4. **Git验证**：
   - 首次commit成功
   - `.git/`目录存在
   - 无未追踪的重要文件

### Learnings from Previous Story

**From Story 1-1-tech-stack-research-and-decision (Status: done)**

**技术决策已确定：**
- ✅ 最终选择：**VuePress 2 + Vite + TypeScript**
- ✅ 版本明确：VuePress 2.0.0-rc.26, vuepress-plugin-md-enhance 2.0.0-rc.99
- ✅ 包管理器：pnpm 8.x（推荐）
- ✅ Node版本：18.x LTS

**关键交付物：**
- ✅ 创建了`docs/tech-stack-decision.md`技术选型决策文档
- ✅ 文档包含详细的VuePress 2集成方案、配置示例、依赖列表

**架构对齐：**
- ✅ 技术选型与`docs/architecture.md`保持一致
- ✅ 双模式支持（Document + PPT）通过vuepress-plugin-md-enhance实现
- ✅ GitHub Pages部署路径：base为`/AINative/`

**实施建议（来自Story 1.1）：**
> "Story 1.2: 初始化VuePress项目结构"  
> "建议在Story 1.2中按照决策文档第6.3节的实施建议进行"  
> "决策文档可作为Epic 1后续Story的参考依据"

**无pending review items或技术债。**

[Source: docs/stories/1-1-tech-stack-research-and-decision.md#Dev-Agent-Record]
[Source: docs/stories/1-1-tech-stack-research-and-decision.md#Senior-Developer-Review]

### References

- [Source: docs/epics.md - Epic 1, Story 1.2: 初始化项目结构]
- [Source: docs/architecture.md - Project Structure]
- [Source: docs/architecture.md - Technology Stack Details]
- [Source: docs/architecture.md - Project Initialization]
- [Source: docs/architecture.md - Consistency Rules - Naming Conventions]
- [Source: docs/stories/1-1-tech-stack-research-and-decision.md - Completion Notes]
- [Source: docs/PRD.md - FR-5.2: 构建系统]

## Dev Agent Record

### Context Reference

- `docs/stories/1-2-initialize-project-structure.context.xml`

### Agent Model Used

Claude Sonnet 4.5 (Cursor Agent)

### Debug Log References

**Implementation Plan - 2025-12-15**

基于Story Context和架构约束的实施策略：
- Phase 1: 创建项目配置文件（package.json, .gitignore）
- Phase 2: 创建目录结构（docs/, docs/.vuepress/, config.ts, README.md）
- Phase 3: 创建项目级README
- Phase 4: 执行pnpm install安装依赖
- Phase 5: Git提交（首次commit）

**关键约束：**
- 版本锁定：VuePress 2.0.0-rc.26, vuepress-plugin-md-enhance 2.0.0-rc.99
- 包管理器：pnpm 8.x
- 命名规范：kebab-case
- Base路径：/AINative/
- Commit格式：feat(backend:framework-kernel): initialize VuePress project structure

### Completion Notes List

<!-- 开发agent完成后填写：
- 实际创建的目录和文件列表
- 安装的依赖版本
- 遇到的问题与解决方案
- 首次commit的SHA
-->

### File List

<!-- 开发agent完成后填写：
- NEW: package.json
- NEW: docs/.vuepress/config.ts
- NEW: docs/README.md
- NEW: .gitignore
- NEW: README.md
- NEW: pnpm-lock.yaml
-->

