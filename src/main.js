import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import './assets/styles/reset.css'

Vue.config.productionTip = false
Vue.use(Mint)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})