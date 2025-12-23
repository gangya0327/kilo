import Vue from "vue"
import App from "./App.vue"

import "./styles/global.less"

Vue.config.productionTip = false
// 开发环境强制开启 Devtools
if (process.env.NODE_ENV === "development") {
  Vue.config.devtools = true
  console.info("Vue Devtools 已启用")
}

import router from "./router"

import { showMessage } from "@/utils"
Vue.prototype.$showMessage = showMessage

import "./mock"

import vLoading from "@/directives/loading"
Vue.directive("loading", vLoading)
import vLazy from "@/directives/lazy"
Vue.directive("lazy", vLazy)

import eventBus from "@/bus"
Vue.prototype.$bus = eventBus

import store from "@/store"
store.dispatch("setting/fetchSetting")

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
