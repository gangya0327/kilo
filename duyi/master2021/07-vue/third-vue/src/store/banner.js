import { getBanner } from "@/api/banner"

export default {
  namespaced: true,
  state: {
    isLoading: false,
    data: [],
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
    async fetchBanner({ commit, state }) {
      if (state.data.length > 0) return
      commit("setLoading", true)
      const res = await getBanner()
      commit("setData", res)
      commit("setLoading", false)
    },
  },
}
