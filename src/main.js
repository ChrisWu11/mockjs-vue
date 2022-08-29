import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

//引入mockServe.js数据
import '@/mock/mockServe'
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
