const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
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
