import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

const app = createApp(App)

//初始化pinia
const store = createPinia()
app.use(store)

//初始化路由
app.use(router)

//挂载vue实例
app.mount('#app')
