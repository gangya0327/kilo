const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  runtimeCompiler: true,
  transpileDependencies: true, // 编译所有依赖中的 ES6+ 语法
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
    },
  },
  devServer: {
    proxy: {
      '/go': {
        target: 'https://www.zhihu.com',
        // target: 'https://test.honlife.com.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/go': '',
        },
      },
    },
  },
});
