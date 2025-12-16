<template>
  <div v-if="showEntry" class="presentation-entry">
    <a :href="pptLink" class="entry-btn">
      <span class="icon">📊</span> 演示模式
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showEntry = ref(false)

const pptLink = computed(() => {
  const path = route.path
  // Assuming base is /AINative/
  if (path.includes('/1-introduction/')) return '/AINative/slides/1-introduction.html'
  if (path.includes('/2-comparison/')) return '/AINative/slides/2-comparison.html'
  if (path.includes('/3-core-definition/')) return '/AINative/slides/3-definition.html'
  if (path.includes('/4-practice-demo/')) return '/AINative/slides/4-practice.html'
  if (path.includes('/5-transition-practice/')) return '/AINative/slides/5-transition.html'
  if (path.includes('/6-outlook/')) return '/AINative/slides/6-outlook.html'
  if (path.includes('/case-studies/')) return '/AINative/slides/cases.html'
  return '#'
})

const checkRoute = () => {
  const path = route.path
  if (
    path.includes('/1-introduction/') ||
    path.includes('/2-comparison/') ||
    path.includes('/3-core-definition/') ||
    path.includes('/4-practice-demo/') ||
    path.includes('/5-transition-practice/') ||
    path.includes('/6-outlook/') ||
    path.includes('/case-studies/')
  ) {
    showEntry.value = true
  } else {
    showEntry.value = false
  }
}

watch(
  () => route.path,
  () => {
    checkRoute()
  }
)

onMounted(() => {
  checkRoute()
})
</script>

<style scoped>
.presentation-entry {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 10;
}

.entry-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: var(--c-brand);
  color: #020617;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 4px 20px rgba(56, 189, 248, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--c-brand);
}

.entry-btn:hover {
  background: #ffffff;
  color: var(--c-brand);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(56, 189, 248, 0.6);
}

.icon {
  font-size: 1.2rem;
}
</style>
