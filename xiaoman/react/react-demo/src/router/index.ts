import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/404'
import Layout from '../layout'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms)) // 模拟异步请求
const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'home', Component: Home },
      // { path: '/about/:id', Component: About },
      {
        path: '/about/:id',
        // 懒加载
        lazy: async () => {
          await sleep(2000)
          const about = await import('../pages/About')
          return { Component: about.default }
        },
      },
    ],
  },
  { path: '/about', Component: About },
  { path: '*', Component: NotFound },
])

export default router
