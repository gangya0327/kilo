import { getAbout } from "@/api/about"

export default {
  namespaced: true,
  state: {
    isLoading: false,
    data: "",
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload
    },
    setData(state, payload) {
      state.data = payload
    },
  },
  actions: {
    async fetchAbout({ commit }) {
      commit("setLoading", true)
      const res = await getAbout()
      commit("setData", res)
      commit("setLoading", false)
    },
  },
}
