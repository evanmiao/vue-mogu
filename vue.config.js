const path = require('path')
const cssPath = path.resolve(__dirname, './src/assets/css')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-shop/'
    : '/',
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'base': 'components/base',
        'layout': 'components/layout',
        'assets': '@/assets',
        'utils': '@/utils',
        'api': '@/api',
        'views': '@/views'
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        // 全局引入 stylus 变量、混合
        import: [
          cssPath + '/variables.styl',
          cssPath + '/mixins.styl'
        ]
      }
    }
  }
}