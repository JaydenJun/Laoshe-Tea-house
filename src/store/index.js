import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    img:"http://localhost:8080",
    uname: null, //当前登录用户的名字
  },
  getters: {
  },
  mutations: {
    // 参数2: 是触发此方法时传入的值
    updateUname(state, uname) {
      state.uname = uname
    }
  },
  actions: {
  },
  modules: {
  }
})
