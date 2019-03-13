<template>
	<transition name="toast">
		<div class="gp-frame" v-if="show">
			<div class="exit-btn" @click="closegame">退出游戏</div>
			<video
				src="../../../static/video/godofwariv.mp4"
				type="video/mp4"
				autoplay="autoplay"
				loop="loop"
			></video>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'Home',
	props: {
		value: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			show: false
		};
	},
	watch: {
		value(e) {
			let _this = this;
			_this.show = e;
		}
	},
	methods: {
		closegame() {
			let _this = this;
			_this.$emit('input', false)
		},
	}
};
</script>

<style lang="less" scoped>
.gp-frame {
	z-index: 11;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.75);
	opacity: 1;
	.exit-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
		width: 160px;
		height: 50px;
		border-radius: 12px;
		border: rgba(255, 255, 255, 1) 1px solid;
		opacity: 0.25;
		z-index: 1;
		position: absolute;
		right: 20px;
		top: 20px;
		&:hover {
			opacity: 1;
		}
	}
	video {
		width: 100%;
		height: 100%;
	}
}
.toast-enter {
	opacity: 0;
}
.toast-enter-active,
.toast-leave-active {
	transition: all 2s;
}
.toast-leave-to {
	opacity: 0;
}
</style>
