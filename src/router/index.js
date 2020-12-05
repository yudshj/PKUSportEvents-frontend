import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Default',
    redirect:'/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home ,
    meta:{
      requireLogin : true
    },
    children: [
    ]
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../components/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
