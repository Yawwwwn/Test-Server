import { createRouter, createWebHistory } from 'vue-router'

// 懒加载首页组件
const Home = () => import('@/views/Home.vue')

const routes = [
  { path: '/', name: 'Home', component: Home }
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
