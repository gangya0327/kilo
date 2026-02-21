// 注册 svg-icon 组件
import Vue from 'vue'
Vue.component('SvgIcon', () => import('$c/SvgIcon.vue'))

// 自动加载 svg 目录下所有图标
const req = require.context('./svg', false, /\.svg$/)

// 返回数组的名称就是 svg 图标的名称
req.keys().forEach(req)
console.log('icons 下 svg 图标已自动加载')
