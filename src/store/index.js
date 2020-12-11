import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 使用localStorage，标签页关闭后仍然能保存；使用sessionStorage，标签页关闭后信息就清空
    logined : (window.localStorage.getItem("longlogined") == "yes"),   // 初始值看localStorage
    token: window.localStorage.getItem("token") == null ? "" : window.localStorage.getItem("token")
  },
  mutations: {
    short_login (state,token) {
      state.logined = true
      state.token = token
    },
    long_login (state,token) {
      state.logined = true
      state.token = token
      window.localStorage.setItem("longlogined","yes")
      window.localStorage.setItem("token",token)
    },
    logout (state) {
      state.logined = false
      state.token = ""
      window.localStorage.removeItem("longlogined")
    }
  },
  actions: {
  },
  modules: {
  }
})
