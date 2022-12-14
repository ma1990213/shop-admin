import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/',
    name: 'home',
    component: ()=> import('../views/home/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(), // 忽悠模式
  routes // 路由规则
})

export default router
