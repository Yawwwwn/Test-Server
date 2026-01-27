import { createRouter, createWebHashHistory, createWebHistory, type RouteRecordRaw } from "vue-router";

//路由表
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component:() => import('../components/Login.vue')
    },
    {
        path: '/reg',
        component:() => import('../components/Register.vue')
    },
    {
        path: '/echarts',
        component:() => import('../components/TestEcharts.vue')
    }
]


const router = createRouter({
    //history模式
    history:createWebHistory(), 
    //hash模式
    // history:createWebHashHistory(),
    routes:routes
})

export default router