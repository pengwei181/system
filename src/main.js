import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import animated from 'animate.css'
import * as msg from "@/utils/message"

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(animated)
// 自定义封装消息提示框
Object.keys(msg).forEach(key => {
  Vue.prototype[key] = msg[key]
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
