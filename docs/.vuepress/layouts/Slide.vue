<template>
  <div class="slide-layout" :class="{ 'web-mode': isWebMode, 'ui-hidden': isUIHidden }">
    <!-- Sidebar -->
    <SlideSidebar 
      :slides="slideTitles"
      :current-index="currentIndex"
      :is-open="isWebMode"
      @jump="jumpToSlide"
    />

    <!-- Main Reveal Container -->
    <div class="reveal-wrapper" @mousemove="onWrapperMouseMove">
      <div class="reveal" ref="revealRef">
        <div class="slides"></div>
      </div>
    </div>
    
    <!-- Top Left: Back Button -->
    <button class="icon-btn back-btn" @click="goBack" data-tooltip="返回文档">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
    </button>

    <!-- Top Right: Control Dock (Moved from Bottom) -->
    <div class="control-dock">
      <!-- Layout Toggle (Web Mode) -->
      <button 
        class="icon-btn" 
        :class="{ active: isWebMode }" 
        @click="toggleWebMode" 
        :data-tooltip="isWebMode ? '隐藏侧边栏' : '显示侧边栏'"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="9" x2="9" y1="3" y2="21"/></svg>
      </button>

      <!-- Fullscreen Toggle -->
      <button 
        class="icon-btn" 
        @click="toggleFullscreen" 
        :data-tooltip="isFullscreen ? '退出全屏' : '全屏演示'"
      >
        <svg v-if="!isFullscreen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>
      </button>
    </div>

    <!-- Hidden source content -->
    <div ref="sourceContent" style="display: none;">
      <Content />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// Static import of CSS is fine
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css' 
import SlideSidebar from '../components/SlideSidebar.vue'

const revealRef = ref(null)
const sourceContent = ref(null)
const slideTitles = ref([])
const currentIndex = ref(0)
const isWebMode = ref(false)
const isFullscreen = ref(false)
const deck = ref(null)
const router = useRouter()
const route = useRoute()

// Idle State
const isUIHidden = ref(false)
let idleTimer = null

const resetIdleTimer = () => {
  isUIHidden.value = false
  if (idleTimer) clearTimeout(idleTimer)
  idleTimer = setTimeout(() => {
    // Only hide in Fullscreen or always?
    // User said "support hiding in fullscreen mode"
    // Let's hide in both modes for cleaner look, or just fullscreen.
    // Usually controls are useful in web mode.
    // Let's apply to both for consistency, or just check isFullscreen.
    // "同时在全屏模式下支持隐藏" implies mainly for fullscreen.
    // But Top-Right dock might obscure content in Web Mode too.
    // Let's apply to both.
    isUIHidden.value = true
  }, 3000)
}

const onWrapperMouseMove = () => {
  resetIdleTimer()
}

// Navigation Map
const getDocLink = () => {
  const path = route.path
  if (path.includes('1-introduction')) return '/AINative/1-introduction/'
  if (path.includes('2-comparison')) return '/AINative/2-comparison/'
  if (path.includes('3-definition')) return '/AINative/3-core-definition/'
  if (path.includes('4-practice')) return '/AINative/4-practice-demo/'
  if (path.includes('5-transition')) return '/AINative/5-transition-practice/'
  if (path.includes('6-outlook')) return '/AINative/6-outlook/'
  if (path.includes('cases')) return '/AINative/case-studies/'
  return '/AINative/'
}

const goBack = () => {
  window.location.href = getDocLink()
}

const toggleWebMode = () => {
  isWebMode.value = !isWebMode.value
  setTimeout(() => {
    if (deck.value) deck.value.layout()
  }, 350)
}

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(e => console.error(e))
  } else {
    document.exitFullscreen().catch(e => console.error(e))
  }
}

const jumpToSlide = (index) => {
  if (deck.value) {
    deck.value.slide(index, 0, 0)
  }
}

onMounted(async () => {
  if (typeof window === 'undefined') return

  await nextTick()
  
  // Listeners
  document.addEventListener('fullscreenchange', () => {
    isFullscreen.value = !!document.fullscreenElement
  })
  document.addEventListener('mousemove', resetIdleTimer)
  document.addEventListener('keydown', resetIdleTimer)
  resetIdleTimer()
  
  if (!sourceContent.value || !revealRef.value) return

  const slidesContainer = revealRef.value.querySelector('.slides')
  
  // Unwrap content
  let contentNodes = Array.from(sourceContent.value.children)
  if (contentNodes.length === 1 && contentNodes[0].tagName === 'DIV') {
     contentNodes = Array.from(contentNodes[0].children)
  }
  
  // Build Slides
  let currentSection = document.createElement('section')
  slidesContainer.appendChild(currentSection)
  
  // Title extraction logic
  const titles = []
  let currentTitle = "封面" 
  let hasTitle = false
  
  const extractTitle = (node) => {
    if (node.tagName === 'H1' || node.tagName === 'H2') return node.innerText
    return null
  }

  contentNodes.forEach(node => {
    if (node.tagName === 'HR') {
      titles.push(currentTitle)
      currentSection = document.createElement('section')
      slidesContainer.appendChild(currentSection)
      currentTitle = "Slide " + (titles.length + 1)
      hasTitle = false
    } else {
      currentSection.appendChild(node.cloneNode(true))
      if (!hasTitle) {
        const t = extractTitle(node)
        if (t) {
          currentTitle = t
          hasTitle = true
        }
      }
    }
  })
  titles.push(currentTitle)
  slideTitles.value = titles

  // Dynamic Import of Reveal.js to avoid SSR errors
  const Reveal = (await import('reveal.js')).default
  
  // Initialize Reveal
  deck.value = new Reveal(revealRef.value, {
    embedded: true,
    hash: true,
    margin: 0.1,
    width: 1200,
    height: 750,
    minScale: 0.2,
    maxScale: 2.0,
    backgroundTransition: 'slide',
    transition: 'slide',
    controls: true,
    progress: true,
    center: true,
    responsive: true
  })
  
  deck.value.on('slidechanged', event => {
    currentIndex.value = event.indexh
  })
  
  deck.value.initialize().then(() => {
    deck.value.layout()
  })
})

onUnmounted(() => {
  if (deck.value) deck.value.destroy()
  document.removeEventListener('mousemove', resetIdleTimer)
  document.removeEventListener('keydown', resetIdleTimer)
})
</script>

<style scoped>
.slide-layout {
  position: fixed;
  inset: 0;
  background: #020617;
  display: flex;
  overflow: hidden;
}

.reveal-wrapper {
  flex: 1;
  position: relative;
  height: 100%;
  width: 100%;
  transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 0;
}

.slide-layout.web-mode .reveal-wrapper {
  margin-left: 260px; /* Match Sidebar Width */
}

.reveal {
  width: 100%;
  height: 100%;
}

/* Icon Buttons */
.icon-btn {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(15, 23, 42, 0.6);
  color: var(--c-text-light);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(12px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  outline: none;
}

.icon-btn:hover {
  background: rgba(56, 189, 248, 0.15);
  border-color: var(--c-brand);
  color: var(--c-brand);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(56, 189, 248, 0.2);
}

.icon-btn.active {
  background: var(--c-brand);
  color: #020617;
  border-color: var(--c-brand);
  box-shadow: 0 0 15px rgba(56, 189, 248, 0.4);
}

/* Top Left */
.back-btn {
  position: fixed;
  top: 24px;
  left: 24px;
  z-index: 100;
}

/* Top Right (Moved) */
.control-dock {
  position: fixed;
  top: 24px; /* Changed from bottom to top */
  right: 24px;
  display: flex;
  gap: 12px;
  z-index: 100;
  padding: 6px;
  background: rgba(2, 6, 23, 0.4);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
}

/* Hide on Idle State */
.ui-hidden .control-dock,
.ui-hidden .back-btn {
  opacity: 0;
  transform: translateY(-20px); /* Slide up to hide */
  pointer-events: none;
}

/* Transitions */
.control-dock, .back-btn {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

/* Tooltips */
.icon-btn::after {
  content: attr(data-tooltip);
  position: absolute;
  top: 100%; /* Below the button now since dock is at top */
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  background: #0f172a;
  color: #fff;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s, transform 0.2s;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.icon-btn:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(12px);
}
</style>
