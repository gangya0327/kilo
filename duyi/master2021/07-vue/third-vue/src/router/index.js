import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes,
  // routes: [
  // { path: '/', component: () => import('@/views/home/index.vue') },
  // { path: '/about', component: () => import('@/views/about/index.vue') },
  // ]
})

export default router
