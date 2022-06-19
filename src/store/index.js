import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    img:"http://localhost:8080",
    loginname: sessionStorage.getItem('name'), // 存储登录用户信息
    loginid: sessionStorage.getItem('user_id'), // 存储登录用户id
  },
  getters: {
  },
  mutations: {
    updateLoginState(state, payload){ // 修改登录状态
      // 将调用当前方法传过来的参数(用户名) 赋值给 state.loginname
      state.loginname = payload  
      // 将用户名存入sessionStorage, 刷新网页依然存在
      sessionStorage.setItem('name', payload)
    },
    updateLoginStates(state, payloads){ // 修改登录状态
      // 将调用当前方法传过来的参数(用户名) 赋值给 state.loginid
      state.loginid = payloads  
      // 将用户名存入sessionStorage, 刷新网页依然存在
      sessionStorage.setItem('user_id', payloads)
    }
  },
  actions: {
  },
  modules: {
  }
})
