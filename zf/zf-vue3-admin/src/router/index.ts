import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue")
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
