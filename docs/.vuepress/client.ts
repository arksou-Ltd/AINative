import { defineClientConfig } from '@vuepress/client'
import StoryContext from './components/StoryContext.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('StoryContext', StoryContext)
  },
})
