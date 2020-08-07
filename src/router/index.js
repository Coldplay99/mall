import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login.vue'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
    
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
