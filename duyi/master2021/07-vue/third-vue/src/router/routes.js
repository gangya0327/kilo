const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
    meta: { title: "首页" },
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("@/views/blog/index.vue"),
    meta: { title: "博客" },
  },
  {
    path: "/blog/category/:categoryId",
    name: "BlogCategory",
    component: () => import("@/views/blog/index.vue"),
    meta: { title: "分类" },
  },
  {
    path: "/blog/:id",
    name: "BlogDetail",
    component: () => import("@/views/blog/detail/index.vue"),
    meta: { title: "文章详情" },
  },
  {
    path: "/project",
    name: "Project",
    component: () => import("@/views/project/index.vue"),
    meta: { title: "项目" },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/about/index.vue"),
    meta: { title: "关于" },
  },
  {
    path: "/message",
    name: "Message",
    component: () => import("@/views/message/index.vue"),
    meta: { title: "留言" },
  },
]

export default routes
