import { createRouter, createWebHistory } from 'vue-router'

// 懒加载首页组件
const Home = () => import('@/views/Home.vue')
// 懒加载第一章页面
const Chapter1 = () => import('@/chapters/Chapter1/Chapter1.vue')
// 第一章的子示例路由组件（懒加载）
const ReactiveExample = () => import('@/chapters/Chapter1/ReactiveExample.vue')
const RefExample = () => import('@/chapters/Chapter1/RefExample.vue')
const ComputedExample = () => import('@/chapters/Chapter1/ComputedExample.vue')
const ToRefsExample = () => import('@/chapters/Chapter1/ToRefsExample.vue')
const WatchExample = () => import('@/chapters/Chapter1/WatchExample.vue')
const ShallowReactiveExample = () => import('@/chapters/Chapter1/ShallowReactiveExample.vue')

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/chapter-1', name: 'Chapter1', component: Chapter1, children: [
    { path: '', name: 'Chapter1-Default', component: ReactiveExample },
    { path: 'reactive', name: 'Reactive', component: ReactiveExample },
    { path: 'ref', name: 'Ref', component: RefExample },
    { path: 'computed', name: 'Computed', component: ComputedExample },
    { path: 'to-refs', name: 'ToRefs', component: ToRefsExample },
    { path: 'watch', name: 'Watch', component: WatchExample },
    { path: 'shallow-reactive', name: 'ShallowReactive', component: ShallowReactiveExample },
  ]}
  ,
  { path: '/reactive', redirect: '/chapter-1/reactive' }
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
