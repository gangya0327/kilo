import { createRouter, createWebHistory } from "vue-router"
import Layout from "@/layout/index.vue"

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("@/views/Dashboard/index.vue")
      }
    ]
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
