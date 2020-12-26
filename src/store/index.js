import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 使用localStorage，标签页关闭后仍然能保存；使用sessionStorage，标签页关闭后信息就清空
    logined : (window.localStorage.getItem("longlogined") == "yes"),   // 初始值看localStorage
    token: window.localStorage.getItem("token") == null ? "" : window.localStorage.getItem("token"),
    username: window.localStorage.getItem("username") == null ? "" : window.localStorage.getItem("username"),
	articleId: window.localStorage.getItem("ID") == null ? 5 : window.localStorage.getItem("ID"),
    userid: window.localStorage.getItem("userid") == null ? -1 : window.localStorage.getItem("userid")
  },
  mutations: {
    login (state,data) {
      state.logined = true
      state.username = data.username
      state.token = data.token
      state.userid = data.userid
      if(data.type == 1) {
        window.localStorage.setItem("longlogined", "yes")
        window.localStorage.setItem("token",data.token)
        window.localStorage.setItem("username",data.username)
        window.localStorage.setItem("userid",data.userid)
      }
    },
    logout (state) {
      state.logined = false
      state.token = ""
      window.localStorage.removeItem("longlogined")
    },
    setID(state, data)
    {
      window.localStorage.setItem("ID", data.ID)
    }
  },
  actions: {
  },
  modules: {
  }
})
