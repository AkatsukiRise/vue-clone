import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import ToDoList from '@/components/MainSection/TodoList.vue'
import Registration from '@/components/Registration.vue'
import Login from '@/components/Login.vue'


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
  {
    path: '/registration',
    name: 'registration',
    component: Registration,

  },
  {
    path: '/login',
    name: 'login',
    component: Login,

  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
