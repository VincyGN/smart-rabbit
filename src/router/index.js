import Layout from '@/views/Layout.vue'
import Home from '@/views/home'
import { createRouter, createWebHashHistory } from 'vue-router'

// 路由规则
const routes = [
  // 一级路由布局容器
  {
    path: '/',
    component: Layout,
    // 二级路由布局容器
    children: [{
      path: '/',
      component: Home
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
