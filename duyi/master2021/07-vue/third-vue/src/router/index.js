import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"
import store from "@/store"
import { title } from "@/utils"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes,
  // routes: [
  // { path: '/', component: () => import('@/views/home/index.vue') },
  // { path: '/about', component: () => import('@/views/about/index.vue') },
  // ]
})

router.afterEach((to) => {
  if (to.meta.title) {
    title.setRouteTitle(to.meta.title)
    // if (store.state.setting.data.siteTitle) {
    //   document.title =
    //     to.meta.title + " - " + store.state.setting.data.siteTitle
    // } else {
    //   document.title = to.meta.title
    // }
  }
})

export default router
