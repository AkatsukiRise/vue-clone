import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import ToDoList from '@/components/MainSection/TodoList.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/api',
    name: 'ToDo',
    component: ToDoList,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
