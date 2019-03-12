// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import * as StackBlur from 'stackblur-canvas'
Vue.prototype.$StackBlur = StackBlur

import '../static/css/common.less'

require('./mock.js')

import axios from 'axios'
Vue.prototype.$ajax= axios

Vue.config.productionTip = false

import RegistryToast from './components/Toast/index'
Vue.use(RegistryToast)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
