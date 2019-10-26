import Vue from 'vue'
import App from './App.vue'
import router from './router'
import seconds from '@/filters/second.filter.js'

Vue.config.productionTip = false
Vue.filter('SecondsFilter', seconds)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
