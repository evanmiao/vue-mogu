module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-echo/'
    : '/',
  css: {
    sourceMap: false,
    modules: false,
    loaderOptions: {
      stylus: {
        // 全局引入 index.styl 文件
        import: [path.resolve(__dirname, './src/assets/styles') + '/index.styl']
      }
    }
  }
}