import { createRouter, createWebHistory } from 'vue-router'
import Quiz from '../components/Quiz.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Quiz
    },
  ]
})

export default router
