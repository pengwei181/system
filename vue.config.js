const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
  // publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  publicPath: './',
  // eslint-loader是否在保存的时候检查 */
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  /* 输出文件目录(默认:dist) */
  outputDir: 'dist', 
  /* 打包时不生成.map文件（减少打包体积、加快打包速度）*/
  productionSourceMap: false,
  /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
  filenameHashing: false,
  /* webpack-dev-server 相关配置 */
  devServer: {
    // disableHostCheck: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: '0.0.0.0',
    port: 9191,
    https: false,
    open: true,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {},
  }
}
