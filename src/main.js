import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
import router from './router'
import firebase from './firebase'
import App from './App.vue'

Vue.use(Vuex)
const store = new Vuex.Store()
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
