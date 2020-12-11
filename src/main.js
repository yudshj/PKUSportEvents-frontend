import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false

var axios = require('axios')
axios.defaults.baseURL = 'http://10.128.188.208:8181/api'
// 附带凭证
axios.defaults.withCredentials = true
// 全局注册，在别的地方可以使用$axios来代表axios
Vue.prototype.$axios = axios

router.beforeEach((to, from, next) => {
        if (to.meta.requireLogin) {
            if (store.state.logined) {
                next()
            } else {
                next('/login')
            }
        } else {
            next()
        }
    }
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
