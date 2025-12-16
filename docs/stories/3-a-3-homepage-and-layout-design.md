# Story 3.3: 首页与框架布局设计

Status: drafted

## Story

作为 UX设计师/前端开发者，
我想 设计并实现首页和整体框架布局，
以便 用户看到美观、友好的页面，并能快速导航到各章节。

## Acceptance Criteria

**Given** Story 3-A.2的导航系统已配置

**When** 我设计并实现首页布局

**Then** 应该：

1. ✅ 设计首页视觉布局（Hero区域、6章导航卡片、快速入口）
   - Hero区域包含项目标题、副标题、核心价值主张
   - 6章导航卡片：每章一个卡片，包含图标、标题、简短描述
   - 添加"开始阅读"和"演示模式"两个主要CTA按钮

2. ✅ 实现响应式首页组件（桌面端和移动端适配）
   - 桌面端（≥768px）：3列卡片布局
   - 移动端（<768px）：单列卡片布局
   - Hero区域响应式文字大小和间距

3. ✅ 配置首页路由和元信息（title、description、keywords）
   - 页面title：AINative - AI Native知识分享平台
   - Meta description：理解并实践AI Native转型
   - Meta keywords：AI Native, AI转型, 企业数字化, 知识分享

4. ✅ 首页清晰展示6章内容概览和导航入口
   - 每个卡片可点击跳转到对应章节
   - 卡片包含章节编号、标题、概述文字

5. ✅ 整体框架布局美观、交互友好
   - 使用统一的颜色方案和间距系统
   - Hover效果：卡片阴影提升、颜色变化
   - 平滑的过渡动画

## Tasks / Subtasks

- [ ] Task 1: 设计首页Hero区域 (AC: #1, #3)
  - [ ] 1.1 在`docs/README.md`中配置VuePress Home frontmatter
  - [ ] 1.2 设置home: true启用默认首页布局
  - [ ] 1.3 配置heroText：AI Native 知识分享平台
  - [ ] 1.4 配置tagline：理解并实践AI Native转型
  - [ ] 1.5 配置heroImage（如果有logo图片）或不使用图片
  - [ ] 1.6 配置actionText和actionLink（开始阅读按钮）

- [ ] Task 2: 创建6章导航卡片内容 (AC: #1, #4)
  - [ ] 2.1 在`docs/README.md`中配置features数组
  - [ ] 2.2 添加第1章卡片：title="第1章：介绍"，details="组织能力才是公司真正的壁垒"，link="/1-introduction/"
  - [ ] 2.3 添加第2章卡片：title="第2章：现状对比"，details="传统组织 vs AI Native 组织"，link="/2-comparison/"
  - [ ] 2.4 添加第3章卡片：title="第3章：核心定义"，details="什么是 AI Native？"，link="/3-core-definition/"
  - [ ] 2.5 添加第4章卡片：title="第4章：实践演示"，details="一个Builder完成一个产品的实际操作"，link="/4-practice-demo/"
  - [ ] 2.6 添加第5章卡片：title="第5章：转化路程"，details="组织架构转型与核心实践方法论"，link="/5-transition-practice/"
  - [ ] 2.7 添加第6章卡片：title="第6章：展望"，details="AI时代如何保持个人竞争力"，link="/6-outlook/"

- [ ] Task 3: 配置首页元信息 (AC: #3)
  - [ ] 3.1 在`docs/.vuepress/config.ts`中配置site title
  - [ ] 3.2 在`docs/.vuepress/config.ts`中配置description
  - [ ] 3.3 在head配置中添加keywords meta标签
  - [ ] 3.4 验证配置生效（查看页面title和meta标签）

- [ ] Task 4: 实现响应式布局和样式优化 (AC: #2, #5)
  - [ ] 4.1 创建`docs/.vuepress/styles/index.scss`（如果不存在）
  - [ ] 4.2 使用CSS自定义变量覆盖VuePress默认主题颜色
  - [ ] 4.3 为Hero区域添加响应式字体大小
  - [ ] 4.4 为features卡片添加Hover效果（box-shadow、transform）
  - [ ] 4.5 配置移动端（<768px）单列布局
  - [ ] 4.6 配置桌面端（≥768px）3列网格布局

- [ ] Task 5: 添加"演示模式"入口 (AC: #1, 可选增强)
  - [ ] 5.1 在Hero区域添加第二个action按钮
  - [ ] 5.2 配置text="演示模式"，link="/slides/1-introduction"
  - [ ] 5.3 为两个CTA按钮设置不同样式（primary / secondary）

- [ ] Task 6: 本地验证和测试 (质量保证)
  - [ ] 6.1 运行`pnpm run docs:dev`启动本地开发服务器
  - [ ] 6.2 验证Hero区域显示正确（标题、副标题、按钮）
  - [ ] 6.3 验证6章卡片显示正确且可点击跳转
  - [ ] 6.4 验证响应式布局：调整浏览器宽度测试
  - [ ] 6.5 验证Hover效果：鼠标悬停卡片时有视觉反馈
  - [ ] 6.6 验证页面title和meta标签：打开开发工具查看<head>

- [ ] Task 7: 提交首页更新 (完成)
  - [ ] 7.1 暂存更改：`git add docs/README.md docs/.vuepress/config.ts docs/.vuepress/styles/`
  - [ ] 7.2 提交更改：`git commit -m "feat(epic-3-a): implement homepage layout with hero and chapter cards"`
  - [ ] 7.3 推送到远程（可选，取决于工作流程）

## Dev Notes

### 首页设计方案

**使用VuePress默认主题的Home布局**

VuePress 2默认主题提供了开箱即用的首页布局，通过frontmatter配置即可实现Hero + Features的经典首页结构，无需自定义组件。

**docs/README.md配置结构：**

```yaml
---
home: true
heroText: AI Native 知识分享平台
tagline: 理解并实践AI Native转型
heroImage: null  # 或 /images/logo.png
actions:
  - text: 开始阅读
    link: /1-introduction/
    type: primary
  - text: 演示模式
    link: /slides/1-introduction
    type: secondary
features:
  - title: 第1章：介绍
    details: 组织能力才是公司真正的壁垒
    link: /1-introduction/
  - title: 第2章：现状对比
    details: 传统组织 vs AI Native 组织
    link: /2-comparison/
  # ... 其他4章
---

## 欢迎访问 AI Native 知识分享平台

本平台致力于帮助您理解AI Native的核心概念，并提供实践转型的完整路径。

### 快速开始

选择您感兴趣的章节开始阅读，或使用演示模式浏览完整内容。
```

### 样式定制方案

**创建 `docs/.vuepress/styles/index.scss`**

覆盖默认主题变量，实现统一的视觉风格：

```scss
// 自定义颜色方案
:root {
  --c-brand: #3eaf7c;
  --c-brand-light: #4abf8a;
}

// Hero区域响应式字体
.home .hero h1 {
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

// Features卡片增强
.home .features .feature {
  transition: all 0.3s ease;
  border-radius: 8px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
}

// 响应式布局优化
.home .features {
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}
```

### 响应式设计策略

**断点设计：**
- **Mobile First**: 基础样式面向移动端
- **Tablet (≥768px)**: 2-3列布局
- **Desktop (≥1024px)**: 3列布局，更大间距

**关键响应式元素：**
1. Hero标题：移动端2rem → 桌面端3rem
2. 卡片布局：移动端单列 → 桌面端3列网格
3. 按钮组：移动端垂直堆叠 → 桌面端水平排列
4. 间距系统：移动端紧凑 → 桌面端舒适

### Project Structure Notes

**涉及的关键文件：**

```
AINative/
├── docs/
│   ├── README.md                          # 首页内容（本Story创建/修改）
│   └── .vuepress/
│       ├── config.ts                      # 站点配置（更新title/meta）
│       ├── styles/
│       │   └── index.scss                 # 自定义样式（本Story创建）
│       └── public/
│           └── images/                    # 可选：logo或hero图片
```

**不创建自定义组件**，完全使用VuePress默认主题功能。

### 架构约束

**来自 architecture.md:**

- **技术栈**: VuePress 2 + Vue 3 + Vite
- **主题**: @vuepress/theme-default（默认主题）
- **样式**: SCSS + CSS自定义变量
- **响应式**: Mobile First，断点768px/1024px

**来自 PRD.md:**

- **首页功能**: Hero区域 + 章节导航 + 快速入口
- **视觉风格**: 现代简洁、专业可信、易于导航
- **用户体验**: 清晰的信息层级、快速找到所需内容

### Learnings from Previous Story

**From Story 2-4-document-deployment-process (Status: done)**

**文档和配置文件编写经验：**
- ✅ 使用中文编写面向用户的内容，技术术语保留英文
- ✅ Markdown格式严格遵循规范（标题层级、代码块、列表）
- ✅ 提交信息遵循约定格式：`feat(scope): description`
- ✅ 本地验证必不可少：运行dev服务器测试效果

**可直接复用的模式：**
- README.md的结构化写作方式
- 中英文混排的语言规范
- Git commit message格式
- 本地验证流程（运行dev → 浏览器测试 → 确认无错误）

**技术栈延续：**
- 继续使用pnpm作为包管理器
- 继续使用VuePress默认主题和配置方式
- 保持与现有项目结构一致

[Source: docs/stories/2-4-document-deployment-process.md]

**无pending action items或技术债。**

### VuePress Home Layout 参考

**官方文档：**
- [VuePress 2 - Home Page](https://v2.vuepress.vuejs.org/reference/default-theme/frontmatter.html#home)
- [VuePress 2 - Styling](https://v2.vuepress.vuejs.org/reference/default-theme/styles.html)

**Key Frontmatter Options:**
- `home: true` - 启用首页布局
- `heroText` - Hero标题（大标题）
- `tagline` - Hero副标题（slogan）
- `heroImage` - Hero区域图片（可选）
- `actions` - CTA按钮数组（text, link, type）
- `features` - 特性卡片数组（title, details, link）

**样式覆盖：**
- 创建 `docs/.vuepress/styles/index.scss`
- 使用CSS变量覆盖默认主题
- 添加自定义样式（Hover效果、响应式优化）

### 验证清单

**功能验证：**
- [ ] Hero区域显示正确（标题、tagline、CTA按钮）
- [ ] 6章卡片全部显示且内容准确
- [ ] 所有卡片可点击跳转到正确页面
- [ ] "开始阅读"按钮跳转到第1章
- [ ] "演示模式"按钮跳转到PPT模式

**响应式验证：**
- [ ] 桌面端（≥1024px）：3列布局，舒适间距
- [ ] 平板端（768-1023px）：2-3列布局
- [ ] 移动端（<768px）：单列布局，紧凑间距
- [ ] 文字大小在各端显示舒适

**视觉验证：**
- [ ] 卡片Hover效果流畅（阴影、变换）
- [ ] 颜色方案统一协调
- [ ] 间距系统一致
- [ ] 无样式错误或布局错位

**技术验证：**
- [ ] 页面title正确显示在浏览器标签
- [ ] Meta description和keywords正确设置
- [ ] 无控制台错误或警告
- [ ] 本地开发服务器运行正常

### References

- [Source: docs/epics.md - Epic 3-A, Story 3-A.3: 首页与框架布局设计]
- [Source: docs/PRD.md - 首页功能需求]
- [Source: docs/information-architecture.md - 6章内容结构]
- [Source: docs/.vuepress/config.ts - 现有导航配置]
- [Source: CLAUDE.md - 语言规范]

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
