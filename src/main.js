import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/mavonEditor.js'
import md5 from 'js-md5'

Vue.config.productionTip = false

var axios = require('axios')
axios.defaults.baseURL = "http://47.92.233.174/api"
// 附带凭证
axios.defaults.withCredentials = true
// 全局注册，在别的地方可以使用$axios来代表axios
Vue.prototype.$axios = axios
// MD5
Vue.prototype.$md5 = md5

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

