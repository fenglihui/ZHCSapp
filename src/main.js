import Vue from 'vue'
import App from './App'
import WXrequest from './utils/wx-request'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$httpWX=WXrequest


const app = new Vue(App)
app.$mount()

export default {
}
