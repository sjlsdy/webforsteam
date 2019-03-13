import vue from 'vue'
import LoadingComponent from './Loading.vue'

const LoadingConstructor = vue.extend(LoadingComponent)

function showLoading(text = 'loading...', duration = 3000) {
	const loadingDom = new LoadingConstructor({
		el: document.createElement('div'),
		data() {
			return {
				text: text,
				show: false
			}
		}
	})
	document.body.appendChild(loadingDom.$el)
	loadingDom.show = true;
	return loadingDom
}

function RegistryLoading() {
	vue.prototype.$loading = showLoading
}

export default RegistryLoading