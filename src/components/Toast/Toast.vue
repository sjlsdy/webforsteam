<!--全局提示-->
<template>
	<transition name="toast">
		<div class="toast" v-if="show">
			<div>{{ text }}</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'Toast',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App'
		};
	}
};
</script>

<style lang="less" scoped>
.toast {
	z-index: 99;
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background: rgba(0, 0, 0, 0.75);
	padding: 10px;
	border-radius: 6px;
	box-shadow: 2px 0 4px rgba(0, 0, 0, 0.2);
}
.toast-enter {
	opacity: 1;
  transform: scale(2) translate(-25%, -100%);
}
.toast-enter-active, .toast-leave-active {
  transition: all 0.5s;
}
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, 100px);
}
</style>
