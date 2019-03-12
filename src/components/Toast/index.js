import vue from 'vue'
import ToastComponent from './Toast.vue'

const ToastConstructor = vue.extend(ToastComponent)

function showToast(text, duration = 3000) {
	const toastDom = new ToastConstructor({
		el: document.createElement('div'),
		data() {
			return {
				text: text,
				show: false
			}
		}
	})
	document.body.appendChild(toastDom.$el)
	toastDom.show = true;
	setTimeout(()=>{
		toastDom.show = false
	}, duration)
}

function RegistryToast() {
	vue.prototype.$toast = showToast
}

export default RegistryToast