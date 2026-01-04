import Vue from 'vue'
import Vuex from './yvuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
  },
  mutations: {
    add(state) {
      state.count++
    }
  },
  actions: {
    add({ commit }) {
      commit('add')
    }
  },
  modules: {
  }
})
