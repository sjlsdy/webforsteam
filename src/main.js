// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import util from './utils/util.js'
Vue.prototype.$util = util;

import * as StackBlur from 'stackblur-canvas'
Vue.prototype.$StackBlur = StackBlur

import '../static/css/common.less'

require('./mock.js')

import axios from 'axios'
Vue.prototype.$ajax = axios

Vue.config.productionTip = false

import RegistryToast from './components/Toast/index'
Vue.use(RegistryToast)

import RegistryLoading from './components/Loading/index'
Vue.use(RegistryLoading)

const whiteList = ['/']

router.beforeEach((to, from, next) => {
	if (whiteList.indexOf(to.path) > -1) {
		next();
	} else {
		let _token = window.localStorage.getItem('token')
		if (_token) {
			next();
		} else {
			next({
				path: '/',
				replace: true,
				query: {
					noGoBack: true
				}
			})
		}
	}
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})
