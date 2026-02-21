const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/best-practice',
  devServer: {
    port: 8470,
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: { // 设置别名
  //       _c: path.join(__dirname, 'src/components'),
  //     },
  //   },
  // },
  configureWebpack(config) {
    config.resolve.alias.$c = path.join(__dirname, 'src/components')
    config.resolve.alias.$i = path.join(__dirname, 'src/icons')
    if (process.env.NODE_ENV === 'development') {
      config.name = 'my vue project'
    } else {
      config.name = '我的 vue 项目'
    }
  },
  chainWebpack(config) {
    // 添加一个 loader，去 icons 目录加载 svg 图标
    config.module
      .rule('icon')
      .include.add(resolve('src/icons'))
      .end()
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
    // 当前项目中已经有一个加载 svg 的 loader，svg 规则要排除 icons 目录
    config.module.rule('svg').exclude.add(resolve('src/icons'))
  },
})
