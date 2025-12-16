<template>
  <div class="slide-sidebar" :class="{ open: isOpen }">
    <div class="sidebar-header">
      <h3>目录</h3>
    </div>
    <ul class="slide-list">
      <li 
        v-for="(slide, index) in slides" 
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="$emit('jump', index)"
      >
        <span class="slide-num">{{ index + 1 }}</span>
        <span class="slide-title">{{ slide }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  slides: {
    type: Array,
    default: () => []
  },
  currentIndex: {
    type: Number,
    default: 0
  },
  isOpen: {
    type: Boolean,
    default: true
  }
})

defineEmits(['jump'])
</script>

<style scoped>
.slide-sidebar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 260px;
  background: rgba(2, 6, 23, 0.95);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  transform: translateX(-100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 20;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
}

.slide-sidebar.open {
  transform: translateX(0);
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--c-brand);
}

.sidebar-header h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.slide-list {
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
  overflow-y: auto;
}

.slide-list li {
  padding: 15px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  transition: all 0.2s;
  color: var(--c-text-light);
}

.slide-list li:hover {
  background: rgba(56, 189, 248, 0.05);
  color: var(--c-text);
}

.slide-list li.active {
  background: rgba(56, 189, 248, 0.1);
  border-left: 3px solid var(--c-brand);
  color: var(--c-brand-light);
  padding-left: 17px; /* adjust for border */
}

.slide-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  opacity: 0.6;
  min-width: 20px;
}

.slide-title {
  font-size: 0.95rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
