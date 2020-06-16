import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets'
import './mock'

import VueLazyLoad from 'vue-lazyload'
import FastClick from 'fastclick'

Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('@/assets/img/common/placeholder.png')
})

FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')