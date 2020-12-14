const path = require('path')
const webpack = require('webpack')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  /* ./使用限制：不能使用history.pushState路由、pages构建多页面应用 */
  publicPath: process.env.NODE_ENV === 'production' ? '/my-app/' : './',
  /* 输出文件目录(默认:dist) */
  outputDir: 'dist', 
  /* 放置生成的静态资源(默认:'') */
  assetsDir: '', 
  /* 指定生成首页的输出路径(默认:'index.html') */
  indexPath: 'index.html',
  /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
  filenameHashing: false,
  /* 构建多页时使用 */
  pages: undefined,
  /* eslint-loader是否在保存的时候检查(默认:'default') */
  lintOnSave: false,
  /* 是否使用包含运行时编译器的Vue核心的构建,设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右*/
  runtimeCompiler: false,

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "windows.jQuery":"jquery"
      })
    ]
  },
  
  /* 打包时不生成.map文件（减少打包体积、加快打包速度）*/
  productionSourceMap: false,
  
  /* webpack-dev-server 相关配置 */
  devServer: {
    // disableHostCheck: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: '0.0.0.0',
    port: 9292,
    https: false,
    open: true,
    hotOnly: false,
    proxy: null, // 设置代理
    //before: app => {},
  }
}
