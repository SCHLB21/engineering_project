import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
import router from './router'
import App from './App.vue'

Vue.use(Vuex)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
