const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/home/index.vue') },
  { path: '/blog', name: 'Blog', component: () => import('@/views/blog/index.vue') },
  { path: '/project', name: 'Project', component: () => import('@/views/project/index.vue') },
  { path: '/about', name: 'About', component: () => import('@/views/about/index.vue') },
  { path: '/message', name: 'Message', component: () => import('@/views/message/index.vue') },
]

export default routes