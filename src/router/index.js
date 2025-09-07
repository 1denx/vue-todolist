import { createRouter, createWebHashHistory } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import TodoListView from '@/views/TodoListView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)vue3-todolist-token\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  )

  if (to.meta.requiresAuth && !token) {
    next('/login') // 未登入導向 login
  } else if ((to.path === '/login' || to.path === '/register') && token) {
    next('/todolist') // 已登入直接到至 todoList
  } else {
    next() // 通過驗證
  }
})

export default router
