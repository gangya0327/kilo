import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
// import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

// const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  const hasUserinfo = store.getters.userinfo

  if (to.meta.auth) {
    // 页面需要鉴权
    if (hasUserinfo) {
      // 已经登录
      next()
    } else {
      const hasToken = localStorage.getItem('adminToken')
      if (hasToken) {
        // 有 token，尝试获取用户信息
        try {
          await store.dispatch('user/getInfo')
          next()
        } catch (error) {
          // 获取用户信息失败，跳转到登录页
          await store.dispatch('user/resetToken')
          Message.error('登录过期，请重新登录')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      } else {
        // 未登录，跳转到登录页
        next(`/login?redirect=${to.path}`)
      }
    }
  } else {
    // 页面不需要鉴权
    if (to.path === '/login' && hasUserinfo) {
      // 已经登录且要访问登录页，跳转到首页
      next({ path: '/' })
    } else {
      // 其他页面直接跳转
      next()
    }
    NProgress.done()
  }

  // determine whether the user has logged in
  // const hasToken = getToken()

  // if (hasToken) {
  //   if (to.path === '/login') {
  //     // if is logged in, redirect to the home page
  //     next({ path: '/' })
  //     NProgress.done()
  //   } else {
  //     const hasGetUserInfo = store.getters.name
  //     if (hasGetUserInfo) {
  //       next()
  //     } else {
  //       try {
  //         // get user info
  //         await store.dispatch('user/getInfo')

  //         next()
  //       } catch (error) {
  //         // remove token and go to login page to re-login
  //         await store.dispatch('user/resetToken')
  //         Message.error(error || 'Has Error')
  //         next(`/login?redirect=${to.path}`)
  //         NProgress.done()
  //       }
  //     }
  //   }
  // } else {
  //   /* has no token*/

  //   if (whiteList.indexOf(to.path) !== -1) {
  //     // in the free login whitelist, go directly
  //     next()
  //   } else {
  //     // other pages that do not have permission to access are redirected to the login page.
  //     next(`/login?redirect=${to.path}`)
  //     NProgress.done()
  //   }
  // }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
