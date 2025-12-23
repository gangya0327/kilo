import { getSetting } from "@/api/setting"

export default {
  namespaced: true,
  state: {
    isLoading: false,
    data: {},
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
    async fetchSetting({ commit, state }) {
      commit("setLoading", true)
      const res = await getSetting()
      commit("setData", res)
      commit("setLoading", false)
      const link = document.querySelector("link[rel*='icon']")
      console.log("link :>> ", link)
      // if (link) return
      const favicon = document.createElement("link")
      favicon.rel = "shortcut icon"
      favicon.href = res.favicon
      document.head.appendChild(favicon)
    },
  },
}
