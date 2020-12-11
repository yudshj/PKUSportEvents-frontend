import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Default',
    redirect:'/index',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
    ]
  },
  {
    path: '/index',
    name: 'PagePresent',
    component: () => import('../components/PagePresent'),
    meta:{
      requireLogin : true
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../components/Login'),
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
