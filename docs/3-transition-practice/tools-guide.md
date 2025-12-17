# 常用工具使用指南

## AI Native 核心工具链

Builder 需要掌握的核心工具包括：**AI 代码编辑器**、**AI CLI 工具**和**系统化方法论**。本指南帮助你快速上手这些工具，开启 AI Native 工作方式。

---

## 第一部分：Cursor - AI 代码编辑器

### 什么是 Cursor？

Cursor 是专为 AI 协作编程设计的代码编辑器，基于 VSCode 构建，深度集成了 AI 能力。它不仅仅是一个编辑器，而是 Builder + AI 协作的核心界面。

官网：[cursor.sh](https://cursor.sh)

---

### 核心功能

#### 1. AI Chat（AI 对话）

**功能**：与 AI 对话讨论代码问题

**使用场景**：
- 询问代码实现方案
- 理解复杂代码逻辑
- 获取最佳实践建议
- 调试和问题诊断

**快捷键**：
- Mac: `Cmd + L`
- Windows/Linux: `Ctrl + L`

**示例**：
```
用户：如何在 React 中实现一个可拖拽的列表？
AI：我建议使用 react-beautiful-dnd 库。这里是实现步骤...
```

---

#### 2. Inline Edit（行内编辑）

**功能**：直接在代码中请求 AI 修改

**使用场景**：
- 重构代码
- 优化性能
- 修复 bug
- 添加功能

**快捷键**：
- Mac: `Cmd + K`
- Windows/Linux: `Ctrl + K`

**使用方法**：
1. 选中需要修改的代码
2. 按 `Cmd + K` 唤起编辑框
3. 输入修改指令（如"优化这段代码的性能"）
4. AI 生成新代码，可以接受、拒绝或继续迭代

---

#### 3. Composer（AI 组合器）

**功能**：多文件协同编辑，AI 理解整个项目上下文

**使用场景**：
- 跨文件重构
- 实现新功能（涉及多个文件）
- 项目级别的代码优化
- 架构调整

**快捷键**：
- Mac: `Cmd + I`
- Windows/Linux: `Ctrl + I`

**使用方法**：
1. 打开 Composer 面板
2. 描述需要实现的功能（可以很复杂）
3. AI 分析项目结构，自动创建/修改相关文件
4. 查看变更，接受或调整

**示例**：
```
用户：添加用户认证功能，包括登录、注册、密码重置
AI：我将创建以下文件：
- auth/login.tsx
- auth/register.tsx
- auth/reset-password.tsx
- api/auth.ts
- hooks/useAuth.ts
并修改 App.tsx 添加路由...
```

---

#### 4. Codebase Indexing（代码库索引）

**功能**：AI 理解整个项目的代码库

**使用场景**：
- 快速理解项目结构
- 搜索相关代码
- 上下文感知的代码生成
- 大型项目导航

**配置**：
1. 打开设置：`Cmd + ,`
2. 搜索 "Indexing"
3. 确保 "Enable Codebase Indexing" 开启

**使用方法**：
- 在 Chat 或 Composer 中使用 `@codebase` 引用整个项目
- AI 会基于项目上下文提供建议

**示例**：
```
用户：@codebase 这个项目的用户认证是如何实现的？
AI：根据代码库分析，用户认证使用了 JWT 方案...
```

---

### 最佳实践

#### 1. 清晰的指令

**❌ 不好的指令**：
```
"优化这个"
"改一下"
```

**✅ 好的指令**：
```
"优化这个函数的性能，减少不必要的循环"
"将这个类组件改写为函数组件，使用 Hooks"
```

---

#### 2. 利用上下文

**提供足够上下文**：
- 使用 `@file` 引用相关文件
- 使用 `@codebase` 引用整个项目
- 解释业务需求，而不仅仅是技术实现

**示例**：
```
用户：@file components/UserProfile.tsx 需要添加编辑功能，
参考 @file components/UserSettings.tsx 的表单实现
```

---

#### 3. 迭代优化

**不要期望一次完美**：
1. AI 生成初始代码
2. 测试和验证
3. 根据反馈迭代优化
4. 必要时人工调整

---

### 高级技巧

#### 1. Custom Instructions（自定义指令）

在设置中添加项目特定的指令，让 AI 遵循你的编码规范：

**路径**：Settings → Cursor Settings → Custom Instructions

**示例**：
```
- 使用 TypeScript 严格模式
- 遵循 Airbnb JavaScript Style Guide
- 组件使用函数式写法和 Hooks
- 错误处理使用 try-catch
- 添加 JSDoc 注释
```

---

#### 2. AI Rules（AI 规则）

创建 `.cursorrules` 文件，定义项目级别的 AI 行为规则：

**示例 `.cursorrules`**：
```
# 代码风格
- 使用 4 空格缩进
- 单引号替代双引号
- 函数名使用 camelCase
- 类名使用 PascalCase

# 框架约定
- React 组件必须有 PropTypes 或 TypeScript 类型
- 状态管理使用 Redux Toolkit
- API 调用使用 axios

# 质量要求
- 每个函数添加单元测试
- 复杂逻辑添加注释
- 避免魔法数字，使用常量
```

---

#### 3. 快捷命令

| 命令 | 功能 | 快捷键 |
|------|------|--------|
| Chat | 打开 AI 对话 | `Cmd + L` |
| Inline Edit | 行内编辑 | `Cmd + K` |
| Composer | 多文件编辑 | `Cmd + I` |
| Accept | 接受 AI 建议 | `Tab` |
| Reject | 拒绝建议 | `Esc` |
| Next Suggestion | 下一个建议 | `Alt + ]` |
| Previous Suggestion | 上一个建议 | `Alt + [` |

---

## 第二部分：AI CLI 工具

### 1. Claude Code CLI

**官网**：[claude.ai/code](https://claude.ai/code)

**特点**：
- 命令行界面的 Claude AI 交互
- 支持文件上传和代码分析
- 可集成到脚本和自动化工作流
- 适合服务器环境和 CI/CD

**安装**：
```bash
npm install -g @anthropic-ai/claude-cli
```

**基本使用**：
```bash
# 直接提问
claude "解释这段代码的作用" < script.js

# 生成代码
claude "生成一个 Express API server" > server.js

# 代码审查
claude "审查这个文件的代码质量" < app.js

# 多文件分析
claude "分析这个项目的架构" --files src/**/*.js
```

**高级用法**：
```bash
# 持续对话模式
claude --chat

# 指定模型
claude --model claude-3-5-sonnet-latest "你的问题"

# 使用系统提示
claude --system "你是一个 Python 专家" "如何优化这段代码" < slow.py
```

**实际场景**：
```bash
# 自动生成测试
for file in src/**/*.js; do
  claude "为这个文件生成单元测试" < $file > tests/$(basename $file .js).test.js
done

# CI/CD 中的代码审查
claude "检查这次提交是否有安全漏洞" < git diff > security-report.txt
```

---

### 2. Gemini CLI

**官网**：[ai.google.dev](https://ai.google.dev)

**特点**：
- Google Gemini 的命令行接口
- 支持多模态输入（文本、图片、代码）
- 强大的代码理解和生成能力
- 免费额度较大

**安装**：
```bash
pip install google-generativeai
```

**配置**：
```bash
# 设置 API Key
export GOOGLE_API_KEY="your-api-key"
```

**基本使用**：
```python
# Python 脚本方式
import google.generativeai as genai

genai.configure(api_key="YOUR_API_KEY")
model = genai.GenerativeModel('gemini-pro')

# 生成代码
response = model.generate_content("用 Python 实现快速排序")
print(response.text)

# 分析代码
with open('app.js', 'r') as f:
    code = f.read()
response = model.generate_content(f"审查这段代码：\n{code}")
print(response.text)
```

**实际场景**：
```python
# 批量文档生成
import os
for file in os.listdir('src'):
    if file.endswith('.py'):
        with open(f'src/{file}', 'r') as f:
            code = f.read()
        doc = model.generate_content(f"为这个 Python 模块生成 API 文档：\n{code}")
        with open(f'docs/{file}.md', 'w') as f:
            f.write(doc.text)
```

---

### 3. Codex CLI (Github Copilot CLI)

**官网**：[github.com/features/copilot](https://github.com/features/copilot)

**特点**：
- 专门针对编程任务优化
- 与 Github 深度集成
- 理解 Git 历史和项目上下文
- 支持 Copilot Workspace（实验性）

**安装**：
```bash
gh extension install github/gh-copilot
```

**基本使用**：
```bash
# 解释 git 命令
gh copilot explain "git rebase -i HEAD~3"

# 建议命令
gh copilot suggest "如何查找所有大于 10MB 的文件"

# 代码生成
gh copilot generate "创建一个 Github Action 配置，运行 Jest 测试"
```

**实际场景**：
```bash
# 快速生成 Git 命令
gh copilot suggest "撤销最近的 3 次提交但保留改动"
# 输出：git reset --soft HEAD~3

# 生成部署脚本
gh copilot generate "创建一个 Docker 部署脚本，包含 Node.js 应用和 PostgreSQL"

# 理解复杂命令
gh copilot explain "docker run -d -p 3000:3000 -v $(pwd):/app -e NODE_ENV=production myapp"
```

---

### AI CLI 工具对比

| 特性 | Claude Code CLI | Gemini CLI | Codex CLI |
|------|----------------|-----------|-----------|
| **模型** | Claude 3.5 Sonnet | Gemini Pro | GPT-4 Codex |
| **代码理解** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **代码生成** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **多模态** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Github 集成** | ⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **免费额度** | 中等 | 较大 | 需订阅 |
| **适用场景** | 通用开发、代码审查 | 多模态分析 | Git 操作、Github Actions |

---

## 第三部分：BMAD-METHOD - 系统化方法论

### 什么是 BMAD-METHOD？

BMAD-METHOD (Building Modern Applications with AI-Driven Development) 是一套经过实践验证的 AI 协作软件开发方法论，帮助 Builder 实现高质量、高效率的软件交付。

---

### 核心组成

```
BMAD-METHOD
├── 4 个开发阶段（完整覆盖软件生命周期）
├── 3 条专业轨道（方法论 + 构建工具 + 创意系统）
├── 21 个专业 AI 智能体（分工明确的 AI 协作伙伴）
└── 50+ 引导式工作流（标准化的执行步骤）
```

---

### 4 个开发阶段

#### 阶段 1：头脑风暴与产品定义

**目标**：从想法到清晰的产品定义

**关键活动**：
- 创意生成和评估
- 用户研究和需求分析
- 市场研究和竞品分析
- 产品愿景和 PRD 编写

**关键输出**：Product Brief、PRD 文档

**使用工作流**：
```bash
/bmad:bmm:workflows:product-brief    # 产品定义
/bmad:bmm:workflows:research          # 市场研究
/bmad:cis:workflows:brainstorming     # 创意头脑风暴
```

---

#### 阶段 2：架构设计与技术选型

**目标**：技术可行性和架构设计

**关键活动**：
- 技术栈选型
- 架构模式设计
- 技术债务评估
- API 和数据模型设计

**关键输出**：Architecture Document、Tech Spec

**使用工作流**：
```bash
/bmad:bmm:workflows:architecture     # 架构设计
/bmad:bmm:workflows:tech-spec        # 技术规格
```

---

#### 阶段 3：Epic 分解与 Story 拆分

**目标**：将 PRD 拆解为可执行的开发任务

**关键活动**：
- Epic 定义和优先级
- Story 拆分和验收标准
- Sprint 规划
- Story Context 生成

**关键输出**：Epic 文件、Story 文件、Sprint Status

**使用工作流**：
```bash
/bmad:bmm:workflows:create-epics-and-stories   # Epic 和 Story 生成
/bmad:bmm:workflows:sprint-planning            # Sprint 规划
/bmad:bmm:workflows:story-context              # Story 上下文生成
```

---

#### 阶段 4：迭代开发与质量保障

**目标**：高质量代码交付

**关键活动**：
- AI 结对编程
- 代码审查
- 测试和质量保障
- 持续集成和部署

**关键输出**：可发布的软件产品

**使用工作流**：
```bash
/bmad:bmm:workflows:dev-story          # 开发 Story
/bmad:bmm:workflows:code-review        # 代码审查
/bmad:bmm:workflows:story-done         # Story 完成
```

---

### 3 条专业轨道

#### BMad Method (BMM)
**软件开发方法论轨道**

专注于软件开发全流程的系统化方法论，包含：
- 产品定义工作流
- 架构设计工作流
- 开发实施工作流
- 质量保障工作流

---

#### BMad Builder (BMB)
**智能体和工作流构建轨道**

专注于构建和管理 AI 智能体和工作流，包含：
- 创建新的 AI 智能体
- 设计引导式工作流
- 模块化管理
- 文档自动生成

---

#### Creative Intelligence System (CIS)
**创意智能系统轨道**

专注于创新和创意生成，包含：
- 创意头脑风暴
- 设计思维工作流
- 问题解决方法论
- 故事叙述框架

---

### 21 个专业 AI 智能体

#### 产品和研究类
- Product Manager (PM)
- Business Analyst (BA)
- User Researcher
- Market Researcher

#### 架构和技术类
- Architect
- Technical Evaluator
- Dependency Mapper
- Tech Debt Auditor

#### 开发和质量类
- Developer (Dev)
- Test Architect (TEA)
- Code Reviewer
- Test Coverage Analyzer

#### 设计和文档类
- UX Designer
- Technical Writer
- API Documenter
- Document Reviewer

#### 项目管理类
- Scrum Master (SM)
- Epic Optimizer
- Requirements Analyst

#### 创意和策略类
- Innovation Strategist
- Design Thinking Coach
- Creative Problem Solver

---

### 快速开始

#### 1. 安装 BMAD-METHOD

```bash
# 克隆仓库（示例）
git clone https://github.com/yourusername/bmad-method
cd bmad-method

# 安装依赖
npm install
```

#### 2. 初始化项目

```bash
# 运行项目初始化工作流
/bmad:bmm:workflows:workflow-init
```

#### 3. 开始第一个产品

```bash
# 运行产品定义工作流
/bmad:bmm:workflows:product-brief
```

#### 4. 完整开发流程

```bash
# 阶段 1：产品定义
/bmad:bmm:workflows:product-brief
/bmad:bmm:workflows:prd

# 阶段 2：架构设计
/bmad:bmm:workflows:architecture

# 阶段 3：Epic 和 Story
/bmad:bmm:workflows:create-epics-and-stories
/bmad:bmm:workflows:sprint-planning

# 阶段 4：迭代开发
/bmad:bmm:workflows:story-context
/bmad:bmm:workflows:dev-story
/bmad:bmm:workflows:code-review
/bmad:bmm:workflows:story-done
```

---

### BMAD-METHOD vs 传统方式

| 维度 | 传统碎片化 AI 使用 | BMAD-METHOD |
|------|-------------------|-------------|
| **系统性** | 零散工具使用 | 完整方法论体系 |
| **专业性** | 通用 AI 助手 | 21 个专业 AI 智能体 |
| **标准化** | 无标准流程 | 50+ 引导式工作流 |
| **质量** | 不稳定 | 90-100 分商业标准 |
| **学习曲线** | 需要大量摸索 | 有章可循，快速上手 |

---

### 为什么选择 BMAD-METHOD？

💡 **系统化**：不是零散的 AI 工具使用，而是完整的方法论体系

💡 **专业化**：21 个专业 AI 智能体，各司其职

💡 **标准化**：50+ 引导式工作流，确保每个环节有章可循

💡 **高质量**：通过专业分工和质量检查，达到 90-100 分的商业标准

---

## 工具组合使用建议

### 日常开发流程

**1. 需求阶段**
- 使用 BMAD-METHOD 的 `/bmad:bmm:workflows:product-brief` 定义产品
- 使用 BMAD-METHOD 的 `/bmad:bmm:workflows:research` 进行市场研究

**2. 设计阶段**
- 使用 BMAD-METHOD 的 `/bmad:bmm:workflows:architecture` 设计架构
- 使用 Cursor Chat 讨论技术方案细节

**3. 开发阶段**
- 使用 Cursor Composer 实现多文件功能
- 使用 Claude Code CLI 批量生成测试
- 使用 BMAD-METHOD 的 `/bmad:bmm:workflows:dev-story` 跟踪进度

**4. 审查阶段**
- 使用 BMAD-METHOD 的 `/bmad:bmm:workflows:code-review` 进行代码审查
- 使用 Cursor Inline Edit 优化代码

**5. 部署阶段**
- 使用 Codex CLI 生成部署脚本
- 使用 Claude Code CLI 编写 CI/CD 配置

---

### 工具选择建议

| 场景 | 推荐工具 | 原因 |
|------|---------|------|
| 代码编写 | Cursor | 最佳的 IDE 集成体验 |
| 批量操作 | Claude Code CLI | 命令行效率高 |
| Git 操作 | Codex CLI | Github 深度集成 |
| 多模态分析 | Gemini CLI | 支持图片和复杂文档 |
| 系统化开发 | BMAD-METHOD | 完整方法论保障质量 |

---

_掌握这些工具，你将拥有与顶尖 AI 团队协作的能力。从 Cursor 的智能编辑，到 AI CLI 的自动化能力，再到 BMAD-METHOD 的系统化方法论，它们共同构成了 Builder 的核心工具链。_

_重要的不是工具本身，而是理解如何将它们组合使用，形成高效的工作流。_
