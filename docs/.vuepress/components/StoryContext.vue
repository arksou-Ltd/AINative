<template>
  <div class="story-context-container">
    <!-- Header Section -->
    <div class="mission-header">
      <div class="header-content">
        <div class="ids">
          <span class="epic-badge">EPIC {{ data.metadata.epicId }}</span>
          <span class="story-badge">STORY {{ data.metadata.storyId }}</span>
        </div>
        <h1 class="mission-title">{{ data.metadata.title }}</h1>
        <div class="meta-row">
          <span class="status-badge" :class="data.metadata.status">{{ data.metadata.status }}</span>
          <span class="meta-info">Generated: {{ data.metadata.generatedAt }}</span>
          <a :href="data.metadata.sourceStoryPath" class="source-link" target="_blank">View Source</a>
        </div>
      </div>
    </div>

    <!-- Narrative Card -->
    <div class="narrative-card">
      <div class="narrative-section">
        <div class="icon-box role">👤</div>
        <div class="narrative-content">
          <span class="label">As a</span>
          <span class="text">{{ data.story.asA }}</span>
        </div>
      </div>
      <div class="narrative-connector">↓</div>
      <div class="narrative-section">
        <div class="icon-box goal">🎯</div>
        <div class="narrative-content">
          <span class="label">I want to</span>
          <span class="text">{{ data.story.iWant }}</span>
        </div>
      </div>
      <div class="narrative-connector">↓</div>
      <div class="narrative-section">
        <div class="icon-box value">💎</div>
        <div class="narrative-content">
          <span class="label">So that</span>
          <span class="text">{{ data.story.soThat }}</span>
        </div>
      </div>
    </div>

    <!-- Main Content Tabs -->
    <div class="tabs-container">
      <div class="tabs-header">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          class="tab-btn" 
          :class="{ active: currentTab === tab.id }"
          @click="currentTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Tasks Tab -->
      <div v-if="currentTab === 'tasks'" class="tab-content tasks-view">
        <div class="task-list">
          <div v-for="task in data.story.tasks" :key="task.id" class="task-item">
            <div class="task-header" @click="toggleTask(task.id)">
              <span class="task-id">#{{ task.id }}</span>
              <span class="task-desc">{{ task.description }}</span>
              <span class="toggle-icon">{{ expandedTasks.includes(task.id) ? '−' : '+' }}</span>
            </div>
            <div v-if="expandedTasks.includes(task.id)" class="task-body">
              <div class="subtasks-list">
                <div v-for="sub in task.subtasks" :key="sub.id" class="subtask-row">
                  <input type="checkbox" disabled />
                  <span class="subtask-id">{{ sub.id }}</span>
                  <span class="subtask-text">{{ sub.text }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Acceptance Criteria Tab -->
      <div v-if="currentTab === 'ac'" class="tab-content ac-view">
        <div class="ac-list">
          <div v-for="ac in data.acceptanceCriteria" :key="ac.id" class="ac-card">
            <div class="ac-header">
              <span class="ac-id">AC {{ ac.id }}</span>
            </div>
            <p class="ac-desc">{{ ac.description }}</p>
            <div class="ac-source">Source: {{ ac.source }}</div>
          </div>
        </div>
      </div>

      <!-- Artifacts Tab -->
      <div v-if="currentTab === 'artifacts'" class="tab-content artifacts-view">
        <div class="artifact-section">
          <h3>Documents</h3>
          <div class="doc-grid">
            <div v-for="(doc, idx) in data.artifacts.docs" :key="idx" class="doc-card">
              <div class="doc-icon">📄</div>
              <div class="doc-info">
                <div class="doc-title">{{ doc.title }}</div>
                <div class="doc-path">{{ doc.path }}</div>
                <div class="doc-snippet">{{ doc.snippet }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Constraints Tab -->
      <div v-if="currentTab === 'constraints'" class="tab-content constraints-view">
         <div v-for="(constraint, idx) in data.constraints" :key="idx" class="constraint-alert" :class="constraint.type">
            <div class="constraint-type">{{ constraint.type }}</div>
            <div class="constraint-desc">{{ constraint.description }}</div>
         </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  xmlData?: any // In a real app we might parse XML here, but we'll use a default prop for demo
}>()

// Mock Data based on 1-1-tech-stack-research-and-decision.context.xml
const defaultData = {
  metadata: {
    epicId: "1",
    storyId: "1.1",
    title: "技术选型调研与决策",
    status: "drafted",
    generatedAt: "2025-12-15",
    sourceStoryPath: "docs/stories/1-1-tech-stack-research-and-decision.md"
  },
  story: {
    asA: "技术负责人",
    iWant: "评估并选择最适合AINative项目的静态站点生成器",
    soThat: "后续开发有坚实的技术基础",
    tasks: [
      {
        id: "1",
        description: "调研VuePress方案",
        subtasks: [
          { id: "1.1", text: "调研VuePress 2核心特性（Vue 3、Vite、插件生态）" },
          { id: "1.2", text: "评估reveal.js集成方案（vuepress-plugin-revealjs）" },
          { id: "1.3", text: "验证GitHub Pages部署兼容性" },
          { id: "1.4", text: "评估中文文档支持与社区活跃度" },
          { id: "1.5", text: "测试响应式默认主题表现" }
        ]
      },
      {
        id: "2",
        description: "调研Docusaurus方案",
        subtasks: [
          { id: "2.1", text: "调研Docusaurus核心特性（React、MDX、插件）" },
          { id: "2.2", text: "评估reveal.js集成方案（自定义或MDX组件）" },
          { id: "2.3", text: "验证GitHub Pages部署兼容性" }
        ]
      },
      {
        id: "3",
        description: "综合对比与风险评估",
        subtasks: [
           { id: "3.1", text: "创建功能对比矩阵" },
           { id: "3.2", text: "评估学习曲线" }
        ]
      }
    ]
  },
  acceptanceCriteria: [
    { id: "1", description: "3个方案的对比分析��功能、生态、学习曲线、社区支持）", source: "docs/epics.md" },
    { id: "2", description: "reveal.js集成可行性评估", source: "docs/epics.md" },
    { id: "3", description: "最终推荐方案及理由", source: "docs/epics.md" }
  ],
  artifacts: {
    docs: [
      { path: "docs/architecture.md", title: "Architecture", snippet: "VuePress 2 + Vite 已被选定..." },
      { path: "docs/PRD.md", title: "PRD", snippet: "静态文档网站...双模式呈现..." }
    ]
  },
  constraints: [
    { type: "architecture", description: "必须支持纯静态构建输出，适配GitHub Pages" },
    { type: "performance", description: "首屏加载 < 2秒" }
  ]
}

const data = computed(() => props.xmlData || defaultData)

const tabs = [
  { id: 'tasks', label: 'Tasks & Progress' },
  { id: 'ac', label: 'Acceptance Criteria' },
  { id: 'artifacts', label: 'Artifacts' },
  { id: 'constraints', label: 'Constraints' }
]

const currentTab = ref('tasks')
const expandedTasks = ref<string[]>(['1']) // Default expand first

const toggleTask = (id: string) => {
  const idx = expandedTasks.value.indexOf(id)
  if (idx > -1) {
    expandedTasks.value.splice(idx, 1)
  } else {
    expandedTasks.value.push(id)
  }
}
</script>

<style scoped>
.story-context-container {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  max-width: 800px;
  margin: 2rem auto;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  background-color: #f6f8fa;
  color: #24292e;
  overflow: hidden;
}

/* Header */
.mission-header {
  background: white;
  padding: 1.5rem;
  border-bottom: 1px solid #e1e4e8;
}

.ids {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.epic-badge, .story-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  background: #f1f8ff;
  color: #0366d6;
}

.mission-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.meta-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.85rem;
  color: #586069;
}

.status-badge {
  text-transform: uppercase;
  font-weight: 600;
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
  font-size: 0.7rem;
}
.status-badge.drafted { background: #e1e4e8; color: #586069; }
.status-badge.in-progress { background: #dbedff; color: #0366d6; }
.status-badge.completed { background: #dcffe4; color: #22863a; }

.source-link {
  margin-left: auto;
  color: #0366d6;
  text-decoration: none;
}

/* Narrative Card */
.narrative-card {
  margin: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.narrative-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon-box {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f8ff;
  border-radius: 50%;
  font-size: 1.1rem;
}

.narrative-content {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 0.7rem;
  text-transform: uppercase;
  color: #6a737d;
  font-weight: 600;
}

.text {
  font-weight: 500;
}

.narrative-connector {
  padding-left: 15px; /* center with icon */
  color: #d1d5da;
  font-size: 0.8rem;
  line-height: 0.8rem;
}

/* Tabs */
.tabs-container {
  background: white;
  margin-top: 1px; /* border overlap trick */
}

.tabs-header {
  display: flex;
  border-bottom: 1px solid #e1e4e8;
  padding: 0 1.5rem;
}

.tab-btn {
  background: none;
  border: none;
  padding: 1rem 1rem;
  font-size: 0.9rem;
  color: #586069;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.tab-btn:hover {
  color: #24292e;
}

.tab-btn.active {
  color: #0366d6;
  border-bottom-color: #0366d6;
  font-weight: 600;
}

.tab-content {
  padding: 1.5rem;
  min-height: 200px;
}

/* Tasks */
.task-item {
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  margin-bottom: 0.75rem;
  overflow: hidden;
}

.task-header {
  padding: 0.75rem 1rem;
  background: #fcfcfc;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  user-select: none;
}
.task-header:hover {
  background: #f6f8fa;
}

.task-id {
  font-family: monospace;
  background: #e1e4e8;
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
  font-size: 0.8rem;
}

.task-desc {
  flex: 1;
  font-weight: 500;
}

.toggle-icon {
  font-weight: bold;
  color: #959da5;
}

.task-body {
  border-top: 1px solid #e1e4e8;
  padding: 0.75rem 1rem 0.75rem 2.5rem; /* Indent for subtasks */
  background: white;
}

.subtask-row {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  align-items: baseline;
}

.subtask-id {
  font-family: monospace;
  color: #6a737d;
  font-size: 0.8rem;
}

/* AC & Artifacts */
.ac-card, .doc-card, .constraint-alert {
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
  background: white;
}

.ac-header {
  margin-bottom: 0.5rem;
}
.ac-id {
  background: #d1d5da;
  padding: 0.1rem 0.4rem;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 600;
}
.ac-source {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #6a737d;
}

.doc-card {
  display: flex;
  gap: 1rem;
}
.doc-icon {
  font-size: 1.5rem;
}
.doc-title {
  font-weight: 600;
  color: #0366d6;
}
.doc-snippet {
  margin-top: 0.3rem;
  font-size: 0.85rem;
  color: #586069;
}

.constraint-alert {
  border-left: 4px solid #0366d6;
}
.constraint-alert.architecture { border-left-color: #6f42c1; }
.constraint-alert.performance { border-left-color: #d73a49; }
.constraint-type {
  font-size: 0.7rem;
  text-transform: uppercase;
  color: #6a737d;
  margin-bottom: 0.3rem;
  font-weight: 700;
}
</style>
