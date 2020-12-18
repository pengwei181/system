import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '*',
    name: 'error',
    component: () => import('@/views/error/index.vue')
  },
  {
    path: '/',
    name: 'home',
    alias: '/home', // 别名
    redirect: '/about',// 重定向
    component: () => import('@/views/home/index.vue'),
    children: [
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/About.vue') // 页面1
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home.vue') // 页面2
      }
    ]
  }
]
const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
