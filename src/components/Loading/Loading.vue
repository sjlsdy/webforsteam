<!--全局提示-->
<template>
	<transition name="loading">
	<div class="loading-frame" v-if="show">
		<div class="loading-box">
			<div class="loading-item"></div>
			<div class="loading-item"></div>
			<div class="loading-item"></div>
		</div>
		<div v-if="text" class="loading-text">{{text}}</div>
	</div>
	</transition>
</template>

<script>
export default {
	name: 'Loading',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
		};
	}
};
</script>

<style lang="less" scoped>
.loading-frame {
	z-index: 99;
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.loading-box {
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 30px;
	height: 40px;
	opacity: 1;
}
.loading-text {
	background: rgba(0,0,0,0.85);
	padding: 10px;
	margin-top: 10px;
}
.loading-item {
	background: lightgreen;
	width: 6px;
	height: 50%;
	border-radius: 4px;
	animation: spin 1s ease infinite;
}
.loading-item:nth-child(2) {
	-webkit-animation-delay: 0.2s;
}
.loading-item:nth-child(3) {
	-webkit-animation-delay: 0.4s;
}

.loading-enter {
	opacity: 0;
}
.loading-enter-active,
.loading-leave-active {
	transition: all 0.5s;
}
.loading-leave-to {
	opacity: 0;
}

@keyframes spin {
	0%,100% {
		height: 50%;
		background: lightgreen;
	}
	50% {
		height: 100%;
		background: lightblue;
	}
}
</style>
