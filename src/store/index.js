import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 使用localStorage，标签页关闭后仍然能保存；使用sessionStorage，标签页关闭后信息就清空
    logined : (window.localStorage.getItem("longlogined") == "yes")   // 初始值看localStorage
  },
  mutations: {
    short_login (state) {
      state.logined = true
    },
    long_login (state) {
      state.logined = true
      window.localStorage.setItem("longlogined","yes")
    },
    logout (state) {
      state.logined = false
      window.localStorage.removeItem("longlogined")
    }
  },
  actions: {
  },
  modules: {
  }
})
