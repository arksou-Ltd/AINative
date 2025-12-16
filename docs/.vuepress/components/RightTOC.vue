<template>
  <aside class="right-toc" ref="tocRef">
    <div class="toc-wrapper">
      <div class="toc-header">On this page</div>
      
      <div class="toc-track">
        <ul class="toc-list" v-if="displayHeaders.length > 0">
          <li v-for="header in displayHeaders" :key="header.slug" 
              :class="['toc-item', 'h' + header.level, { active: activeHash === '#' + header.slug }]">
            <a :href="`#${header.slug}`" @click.prevent="scrollTo(header.slug)">
              {{ header.title }}
            </a>
          </li>
        </ul>
        <div v-else class="toc-empty">
          No headers found
        </div>
      </div>

      <div class="toc-actions">
        <PresentationEntry mode="inline" />
      </div>
    </div>
  </aside>
</template>

<script setup>
import { usePageData } from '@vuepress/client'
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import PresentationEntry from './PresentationEntry.vue'

const page = usePageData()
const route = useRoute()
const activeHash = ref('')
const tocRef = ref(null)
const domHeaders = ref([])

const displayHeaders = computed(() => {
  const vuepressHeaders = (page.value.headers || []).filter(h => h.level === 2 || h.level === 3)
  if (vuepressHeaders.length > 0) return vuepressHeaders
  return domHeaders.value
})

const scrollTo = (slug) => {
  const target = document.getElementById(slug)
  if (target) {
    const headerOffset = 80
    window.scrollTo({
      top: target.offsetTop - headerOffset,
      behavior: 'smooth'
    })
    history.pushState(null, null, `#${slug}`)
    activeHash.value = `#${slug}`
  }
}

const extractHeadersFromDOM = () => {
  if (typeof document === 'undefined') return
  
  const selectors = [
    '.theme-default-content',
    '.content__default', 
    'main', 
    'article'
  ]
  
  let content = null
  for (const sel of selectors) {
    content = document.querySelector(sel)
    if (content) break
  }

  if (!content) return

  const headers = Array.from(content.querySelectorAll('h2, h3'))
  
  domHeaders.value = headers.map((h, index) => {
    let slug = h.id
    if (!slug) {
      slug = 'header-' + index
      h.id = slug
    }
    
    return {
      level: parseInt(h.tagName.substring(1)),
      title: h.innerText.replace(/^#+\s+/, ''),
      slug: slug
    }
  })
}

const onScroll = () => {
  const scrollY = window.scrollY + 100
  const currentHeaders = displayHeaders.value
  
  const headings = currentHeaders.map(h => ({ 
    slug: h.slug, 
    el: document.getElementById(h.slug) 
  })).filter(h => h.el)

  for (let i = headings.length - 1; i >= 0; i--) {
    if (headings[i].el.offsetTop <= scrollY) {
      activeHash.value = `#${headings[i].slug}`
      break
    }
  }
}

onMounted(() => {
  extractHeadersFromDOM()
  setTimeout(extractHeadersFromDOM, 500)
  window.addEventListener('scroll', onScroll)
  activeHash.value = route.hash
})

watch(() => route.path, () => {
  setTimeout(extractHeadersFromDOM, 300)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.right-toc {
  position: fixed;
  top: var(--linear-header-height);
  right: 0;
  width: 240px;
  height: calc(100vh - var(--linear-header-height));
  padding: 48px 32px;
  overflow-y: auto;
  display: none;
  z-index: 10;
}

@media (min-width: 1280px) {
  .right-toc {
    display: block;
  }
}

.toc-header {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--linear-text-tertiary);
  margin-bottom: 12px;
  text-transform: uppercase;
}

.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-item {
  position: relative;
  margin-bottom: 4px;
}

.toc-item a {
  display: block;
  color: var(--linear-text-muted);
  text-decoration: none;
  font-size: 13px;
  line-height: 22px;
  padding: 2px 0 2px 12px;
  border-left: 2px solid transparent;
  transition: all 0.15s ease;
}

.toc-item.h3 a {
  padding-left: 24px;
}

.toc-item a:hover {
  color: var(--linear-text-primary);
  border-left-color: var(--linear-border-subtle);
}

.toc-item.active a {
  color: var(--linear-accent);
  border-left-color: var(--linear-accent);
  font-weight: 500;
}

.toc-actions {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--linear-border-sidebar);
}

.toc-empty {
  font-size: 13px;
  color: var(--linear-text-tertiary);
  font-style: italic;
}
</style>
