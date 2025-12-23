import { getSetting } from "@/api/setting"
import { title } from "@/utils"

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
      if (!link) return
      const favicon = document.createElement("link")
      favicon.rel = "shortcut icon"
      favicon.href = res.favicon
      document.head.appendChild(favicon)

      if (res.siteTitle) {
        title.setSiteTitle(res.siteTitle)
      }
    },
  },
}
