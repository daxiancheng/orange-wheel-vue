// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Obutton from './components/Obutton.vue'
import Oicon from './components/oicon.vue'
import Obtngroup from './components/Obtngroup.vue'
import OpageButton from './components/OpageButton.vue'
import Oinput from './components/Oinput.vue'
import Orow from './components/Orow.vue'
import Ocol from './components/Ocol.vue'
import chai from 'chai'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('o-col',Ocol)
Vue.component('o-row',Orow)
Vue.component('o-input',Oinput)
Vue.component('o-page-button',OpageButton)
Vue.component('o-button-group',Obtngroup)
Vue.component('o-button',Obutton)
Vue.component('o-icon',Oicon)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

const expect = chai.expect

{
  const Constructor = Vue.extend(Obutton)
  const vm  = new Constructor({
    propsData:{
      iconName:'setting'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#icon-setting')
  vm.$el.remove()
  vm.$destroy()
}