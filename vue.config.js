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
  /* 默认:[]情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来 */
  transpileDependencies: [],
  /* 打包时不生成.map文件（减少打包体积、加快打包速度）*/
  productionSourceMap: false,
  /* 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。*/
  crossorigin: undefined,
  /* 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用(SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。 启用 SRI 时，preload resource hints 会被禁用，因为 Chrome 的一个 bug 会导致文件被下载两次。*/
  integrity: false,
  /* 
  * Type: Object | Function 配置作为参数
  * 对象：合并到最终的配置
  * 函数：既可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
  */
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "windows.jQuery":"jquery"
      })
    ]
  },
  /* 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。*/
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  /*默认{}, 向预处理器 Loader 传递选项*/
  // css: {
  //   loaderOptions: {
  //     css: {
  //       // 这里的选项会传递给 css-loader
  //     },
  //     postcss: {
  //       // 这里的选项会传递给 postcss-loader
  //     }
  //   }
  // }
  /* webpack-dev-server 相关配置 */
  devServer: {
    // disableHostCheck: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: '0.0.0.0',
    port: 9293,
    https: false,
    open: true,
    hotOnly: false,
    proxy: null, // 设置代理
    //before: app => {},
  }
}
