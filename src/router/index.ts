import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import ApiPage from '@/components/MainSection/Api-page.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/api',
    name: 'ToDo',
    component: ApiPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
