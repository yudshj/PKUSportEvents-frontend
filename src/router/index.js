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
    component: () => import('../components/index/IndexPage'),
    meta:{
      requireLogin : true
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../components/Login'),
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../components/Result/Result'),
    meta:{
      requireLogin : true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/Register')
  },
  {
    path: '/publish',
    name: 'Publish',
    component: () => import('../components/publish/publish'),
    meta:{
      requireLogin : true
    }
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../components/Result/Result'),
    meta:{
      requireLogin : true
    }
  },
  {
    path: '/user',
    name: 'User',
    redirect: '/user/info',
    component: () => import('../components/User/User'),
    children:[
      {
        path: '/user/info',
        name: 'Info',
        component: () => import('../components/User/Info'),
        meta:{
          requireLogin : true
        }
      },
      {
        path: '/user/access',
        name: 'Access',
        component: () => import('../components/User/Access'),
        meta:{
          requireLogin : true
        }
      },
    ]
  },
    {
      path: '/view',
      name: 'ArticlePage',
      component: () => import('../components/ArticleDetail/ArticlePage'),
      meta:{
        requireLogin : true
      }
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
