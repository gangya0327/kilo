import { getProject } from "@/api/project"

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
    async fetchProject({ commit, state }) {
      if (state.data.length > 0) return
      commit("setLoading", true)
      const res = await getProject()
      commit("setData", res)
      commit("setLoading", false)
    },
  },
}
