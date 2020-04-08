import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets'
import './mock'

import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('@/assets/img/common/placeholder.png')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')