const routes = [
  { path: '/', component: () => import('@/views/home/index.vue') },
  { path: '/blog', component: () => import('@/views/blog/index.vue') },
  { path: '/project', component: () => import('@/views/project/index.vue') },
  { path: '/about', component: () => import('@/views/about/index.vue') },
  { path: '/message', component: () => import('@/views/message/index.vue') },
]

export default routes