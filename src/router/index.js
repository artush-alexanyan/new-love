import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: () => import('@/pages/home/AppHome.vue')
    },
    {
      path: '/test',
      name: 'AppTest',
      component: () => import('@/pages/home/AppTest.vue')
    }
  ]
})

export default router
