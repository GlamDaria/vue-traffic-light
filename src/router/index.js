import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/red',
    name: 'red',
    component: () => import('../views/RedPage.vue')
  },
  {
    path: '/yellow',
    name: 'yellow',
    component: () => import('../views/YellowPage.vue')
  },
  {
    path: '/green',
    name: 'green',
    component: () => import('../views/GreenPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
