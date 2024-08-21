import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Vue3VideoPlayer from '@cloudgeek/vue3-video-player'
import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css'
import vue3videoPlay from "vue3-video-play"; // 引入组件
import "vue3-video-play/dist/style.css"; // 引入css

loadFonts()

createApp(App)
  .use(vue3videoPlay)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(Vue3VideoPlayer, {
    lang: 'zh-CN'
  })
  .mount('#app')
