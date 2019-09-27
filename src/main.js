// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Obutton from './components/Obutton.vue'
import Oicon from './components/oicon.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('o-button',Obutton)
Vue.component('o-icon',Oicon)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
