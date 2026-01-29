import { createRouter, createWebHistory } from 'vue-router'

// 懒加载首页组件
const Home = () => import('@/views/Home.vue')
// 懒加载第一章页面
const Chapter1 = () => import('@/chapters/Chapter1/Chapter1.vue')

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/chapter-1', name: 'Chapter1', component: Chapter1 }
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
