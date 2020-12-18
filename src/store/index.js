import Vue from 'vue'
import Vuex from 'vuex'
import { setSession, getSession, delSession } from '@/utils/storage'
// vuex数据绑定session存储，解决vuex数据刷新值清空的问题
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getSession("token"), // 用户唯一标识 token
  },
  getters: {

  },
  mutations: {
    setToken (state, data) {
      state.token = data
      setSession("token", data)
    },
  },
  actions: {
    FedLogout ({commit}) {
      commit("setToken","")
      //commit("setUserInfo","") //退出登陆时报错：计算属性 + 先清空值(顺序问题)再跳转登录页 
    }
  },
  modules: {

  }
})
