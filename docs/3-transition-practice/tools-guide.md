# 常用工具使用指南

## AI 模型

| 模型 | 特点 | 适用场景 | 官网 |
|------|------|----------|------|
| **Claude** | 长上下文理解、代码质量高、推理能力强 | 复杂代码重构、架构设计、文档生成 | [claude.ai](https://claude.ai) |
| **Gemini** | 多模态支持、免费额度大、响应速度快 | 图文分析、快速原型、批量处理 | [ai.google.dev](https://ai.google.dev) |
| **GPT** | 生态丰富、插件系统完善、社区活跃 | 通用开发、集成场景、工具链扩展 | [openai.com](https://openai.com) |

---

## 工具增强

| 工具类型 | 说明 | 典型应用 | 推荐工具 |
|---------|------|----------|----------|
| **MCP** | Model Context Protocol，AI 模型上下文协议扩展 | 文件系统访问、数据库查询、API 调用 | [MCP Servers](https://github.com/modelcontextprotocol) |
| **Skills** | 可复用的 AI 能力模块，封装特定领域知识 | 代码审查、测试生成、文档转换 | 项目自定义 Skills |
| **Plugins** | 第三方扩展插件，增强 AI 工具能力 | Github 集成、Jira 同步、CI/CD 触发 | 各工具生态插件 |

---

## Cursor - AI 代码编辑器

### 基本配置

| 配置项 | 说明 | 配置路径 |
|--------|------|----------|
| **Custom Instructions** | 定义项目编码规范和偏好 | Settings → Cursor Settings → Custom Instructions |
| **AI Rules** | 创建 `.cursorrules` 文件定义 AI 行为规则 | 项目根目录 `.cursorrules` |
| **Codebase Indexing** | 启用代码库索引以支持全局上下文理解 | Settings → Indexing → Enable Codebase Indexing |

### 基本使用

| 功能 | 快捷键 | 使用场景 |
|------|--------|----------|
| **Chat** | `Cmd + L` | 询问代码问题、获取实现建议、调试诊断 |
| **Inline Edit** | `Cmd + K` | 选中代码直接请求修改、重构、优化 |
| **Composer** | `Cmd + I` | 多文件协同编辑、新功能实现、架构调整 |
| **Accept** | `Tab` | 接受 AI 建议 |
| **Reject** | `Esc` | 拒绝 AI 建议 |

---

## Claude Code - AI CLI 工具

### 基本配置

| 步骤 | 命令 | 说明 |
|------|------|------|
| **安装** | `npm install -g @anthropic-ai/claude-cli` | 全局安装 Claude CLI |
| **认证** | `claude auth` | 配置 API 密钥 |
| **验证** | `claude --version` | 检查安装是否成功 |

### 基本使用

| 使用方式 | 命令示例 | 场景 |
|---------|---------|------|
| **直接提问** | `claude "解释这段代码" < file.js` | 快速代码分析 |
| **生成代码** | `claude "生成 Express API" > server.js` | 自动生成脚手架 |
| **批量处理** | `claude "生成测试" < src/*.js` | CI/CD 集成、批量操作 |
| **对话模式** | `claude --chat` | 持续交互式开发 |

---

## BMAD-METHOD - 系统化方法论

### 基本概念

| 组成部分 | 数量 | 说明 |
|---------|------|------|
| **开发阶段** | 4 个 | 产品定义 → 架构设计 → 任务拆分 → 迭代开发 |
| **专业轨道** | 3 条 | BMM (方法论) + BMB (构建工具) + CIS (创意系统) |
| **AI 智能体** | 21 个 | PM、架构师、开发者、测试、设计师等专业角色 |
| **引导式工作流** | 50+ | 标准化的执行步骤和质量检查点 |

### 核心流程演示

```bash
# 阶段 1：产品定义
/bmad:bmm:workflows:product-brief      # 产品简介定义
/bmad:bmm:workflows:prd                 # PRD 文档生成

# 阶段 2：架构设计
/bmad:bmm:workflows:architecture        # 架构设计文档

# 阶段 3：任务拆分
/bmad:bmm:workflows:create-epics-and-stories  # Epic 和 Story 生成
/bmad:bmm:workflows:sprint-planning           # Sprint 规划

# 阶段 4：迭代开发
/bmad:bmm:workflows:story-context       # Story 上下文生成
/bmad:bmm:workflows:dev-story            # 开发 Story
/bmad:bmm:workflows:code-review          # 代码审查
/bmad:bmm:workflows:story-done           # Story 完成
```

---

## 工具组合推荐

| 开发阶段 | 推荐工具组合 | 原因 |
|---------|-------------|------|
| **需求分析** | BMAD-METHOD + Claude | 系统化方法论 + 强推理能力 |
| **架构设计** | BMAD-METHOD + Cursor Chat | 标准化流程 + 交互式讨论 |
| **代码开发** | Cursor Composer + Claude Code | IDE 集成 + CLI 批量处理 |
| **代码审查** | BMAD-METHOD + Cursor Inline | 质量检查点 + 快速优化 |
| **测试部署** | Claude Code CLI + MCP | 自动化能力 + 系统集成 |

---

_工具精简指南：专注核心功能，通过表格快速查阅。深入学习请参考各工具官方文档。_
