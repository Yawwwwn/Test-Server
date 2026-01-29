import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

const app = createApp(App)

// 初始化 Pinia
app.use(createPinia())
// 初始化路由
app.use(router)

// 挂载 Vue 实例
app.mount('#app')
