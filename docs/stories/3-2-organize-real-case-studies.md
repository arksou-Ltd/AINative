# Story 3.2: 整理真实案例内容

Status: ready-for-dev

## Requirements & Context Summary

- 故事目标：整理 8 个案例（4 个成功公司、4 个组织转型）与 `market-data.md` 汇总页，落在 `docs/case-studies/` 目录，并保持统一结构（背景 → AI 应用 → 成果数据 → 启示），每篇 1000-1500 字并标注真实数据来源。 [Source: docs/epics.md#Story-3.2]
- 质量与可信度：所有数据需可追溯且注明更新时间，避免臆造；内容需支撑 PRD 对理解深度、实践落地的成功标准，帮助读者建立可行性认知。 [Source: docs/PRD.md#Success-Criteria]
- 架构与路径约束：案例内容放置于 `docs/case-studies/`，与 PPT/Doc 模式统一的信息架构；资源命名使用 kebab-case，图片（如增长曲线）放在 `/images`、优先 WebP/<200KB，引用相对路径兼容 VuePress base `/AINative/`。 [Source: docs/architecture.md#Project-Structure] [Source: docs/architecture.md#Performance-Considerations]

## Story

As a 内容创作者,
I want 整理8个真实案例与市场数据并形成统一结构的案例库,
so that 读者能够基于可信证据理解AI Native的可行性并复制实践。

## Acceptance Criteria

1. 在 `docs/case-studies/` 下创建 9 个文件：`README.md`、`openai.md`、`cursor-ai.md`、`commonwealth-bank.md`、`bupa.md`、`amazon.md`、`moderna.md`、`bayer.md`、`nvidia.md` 以及 `market-data.md`，目录存在且路径与架构信息结构一致。每篇 1000-1500 字，遵循统一大纲：背景 → AI 应用 → 成果数据 → 启示。 [Source: docs/epics.md#Story-3.2]
2. 所有案例与市场数据引用真实来源并标注更新时间/来源路径，严禁臆造；数值需与 PRD/研究报告一致或保留占位符待填充，并在文内标明引用位置。 [Source: docs/epics.md#Story-3.2] [Source: docs/PRD.md#Success-Criteria]
3. 案例与市场数据内容使用中文表达、英文技术术语保留；图片占位符命名 kebab-case，引用路径兼容 VuePress base `/AINative/`，单图建议 <200KB/WebP。 [Source: docs/architecture.md#Project-Structure] [Source: docs/architecture.md#Performance-Considerations]
4. 产出 `market-data.md` 汇总 PRD 成功指标（理解深度/实践落地/传播触达）所需的关键数据点，标注来源并为缺失数据留占位符。 [Source: docs/PRD.md#Success-Criteria]

## Tasks / Subtasks

- [ ] 建立案例目录骨架 (AC: #1 #3)
  - [ ] 创建 `docs/case-studies/` 及 9 个 Markdown 文件空壳，按架构信息结构命名
  - [ ] 在 `README.md` 写入目录介绍与文件清单，确认相对路径、Doc↔PPT 映射预留
- [ ] 收集与校验数据 (AC: #2 #4)
  - [ ] 汇总 8 个案例的背景、AI 应用、成果数据及来源；为缺失数据留引用占位符
  - [ ] 汇总市场数据关键指标并标注时间/来源，确保与 PRD 成功标准对齐
- [ ] 填写案例内容 (AC: #1 #2)
  - [ ] 逐篇填充结构化内容（背景 → AI 应用 → 成果数据 → 启示），1000-1500 字范围
  - [ ] 为每篇添加数据引用/脚注或占位符，标注更新时间
- [ ] 图片与命名规范 (AC: #3)
  - [ ] 为需要图表的段落添加占位符（kebab-case），路径使用 `/images/...` 相对引用
- [ ] 质量检查 (AC: #2 #3 #4)
  - [ ] 自检目录结构、链接与命名；确保中文主体+英文术语、无臆造数据
  - [ ] 预检与 PRD 成功标准对齐的市场数据覆盖度，确认后续可由校验流程完善

## Dev Notes

- 框架与路径：案例内容统一放在 `docs/case-studies/`，与 Doc/PPT 信息架构对齐；后续需在 VuePress sidebar 和 slides 映射中添加 `/case-studies/` ↔ `/slides/cases.html`。 [Source: docs/architecture.md#Project-Structure]
- 内容约束：中文主体、英文技术术语保留；每篇 1000-1500 字，结构“背景 → AI 应用 → 成果数据 → 启示”；严禁编造数据，缺失处留占位符并标注需补充来源。 [Source: docs/epics.md#Story-3.2]
- 资源与性能：图片占位符命名 kebab-case，放 `/images/`，优先 WebP、单图 <200KB，引用路径兼容 VuePress base `/AINative/`。 [Source: docs/architecture.md#Performance-Considerations]
- 成功标准对齐：市场数据需支撑 PRD 成功指标（理解深度/实践落地/传播触达），`market-data.md` 聚合关键数字并标明时间/来源，便于后续 PPT/Doc 复用。 [Source: docs/PRD.md#Success-Criteria]

### Project Structure Notes

- 前序 3-1 故事仍在进行中（sprint 状态 in-progress，故事文件状态 ready-for-dev），尚未产出新文件；其 Dev Notes 已约束内容放在 `docs/ai-native-intro/`，保持中文主体+英文术语、图片占位符命名 kebab-case。 [Source: docs/stories/3-1-write-ai-native-intro-content.md#Dev-Notes]
- 本故事需新建 `docs/case-studies/` 目录及子文件，遵循架构文档的路径结构和命名规范，引用图片放 `/images`（WebP/<200KB，kebab-case），相对路径兼容 VuePress base `/AINative/`。 [Source: docs/architecture.md#Project-Structure] [Source: docs/architecture.md#Performance-Considerations]
- 与正在进行的 3-1 内容分支无路径冲突；完成后需更新 VuePress sidebar 映射（架构 IA），并预留 Doc↔PPT 映射 `/case-studies/` ↔ `/slides/cases.html`。 [Source: docs/architecture.md#Project-Structure]

### Learnings from Previous Story

- 上一故事 `3-1-write-ai-native-intro-content` 仍在推进（sprint 状态 in-progress，故事文件 ready-for-dev）；需沿用其语言规范（中文主体+英文术语）和图片占位命名约定，避免与 intro 章节路径/命名冲突。 [Source: docs/stories/3-1-write-ai-native-intro-content.md#Dev-Notes]
- 由于尚未完工，暂无新增文件/服务可复用；待其完成后需回访其文件列表以更新案例引用。 [Source: docs/stories/3-1-write-ai-native-intro-content.md#Dev-Agent-Record]

### References

- [Source: docs/epics.md#Story-3.2]
- [Source: docs/PRD.md#Success-Criteria]
- [Source: docs/architecture.md#Project-Structure]
- [Source: docs/architecture.md#Performance-Considerations]
- [Source: docs/stories/3-1-write-ai-native-intro-content.md]

## Dev Agent Record

### Context Reference

- docs/stories/3-2-organize-real-case-studies.context.xml

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List

## Change Log

- Drafted 3-2 故事骨架，补充要求/AC/任务/Dev Notes 与前序学习承接。
