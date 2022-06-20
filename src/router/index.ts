import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import productRoutes from './modules/products'
import orderRoutes from './modules/order'
import permissionRoutes from './modules/permission'
import mediaRoutes from './modules/media'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/index.vue')
      },
      productRoutes,
      permissionRoutes,
      orderRoutes,
      mediaRoutes
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
