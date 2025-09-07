import { createRouter, createWebHashHistory } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import TodoListView from '@/views/TodoListView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: TodoListView,
    },
  ],
})

export default router
