import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'mock') require('../mock')

new Vue({
  render: h => h(App),
}).$mount('#app')
