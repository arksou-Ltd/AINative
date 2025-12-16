import { defineClientConfig } from '@vuepress/client'
import { defineRevealJsConfig } from "vuepress-plugin-md-enhance/client";
import StoryContext from './components/StoryContext.vue'
import PresentationEntry from './components/PresentationEntry.vue'
import Slide from './layouts/Slide.vue'

defineRevealJsConfig({
  // Minimal config
});

export default defineClientConfig({
  enhance({ app }) {
    app.component('StoryContext', StoryContext)
    app.component('PresentationEntry', PresentationEntry)
  },
  layouts: {
    Slide,
  },
  rootComponents: ['PresentationEntry'],
})
