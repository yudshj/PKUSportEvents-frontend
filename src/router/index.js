import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

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
    component: Home,
    redirect: '/homepage',
    meta:{
      requireLogin : true
    },
    //Home中有顶部导航栏和router-view；新的页面的路由放在下面的children中，页面显示时上方就会附带导航栏
    children: [
      {
        path: '/homepage',
        name: 'Homepage',
        meta:{
          requireLogin : true
        },
      },
      {
        path: '/t2',
        name: 'T2',
        meta:{
          requireLogin : true
        },
      }
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
