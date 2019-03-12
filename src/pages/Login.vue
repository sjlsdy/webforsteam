<template>
	<div class="login-frame">
		<div class="login-box">
			<div class="login-item">
				<div class="logo">
					<img class="img" src="/static/images/steam-logo.png" />
				</div>
			</div>
			<div class="login-item">
				<div class="login-item-lable">账户名称</div>
				<div class="login-item-content"><input class="inp" /></div>
			</div>
			<div class="login-item">
				<div class="login-item-lable">密码</div>
				<div class="login-item-content"><input class="inp" /></div>
			</div>
			<div class="login-item">
				<div class="login-item-content">
					<button class="btn" @click="loginsub">登录</button>
				</div>
				<div class="login-item-content cannelbtn">
					<button class="btn" @click="loginsub">取消</button>
				</div>
			</div>
		</div>
		<div class="login-box">
			<div class="login-item long-lable">
				<div class="login-item-lable">还没有steam帐户？</div>
				<div class="login-item-content">
					<button class="btn" @click="loginsub">创建一个新的帐户...</button>
				</div>
			</div>
			<div class="login-item long-lable">
				<div class="login-item-lable">PlayStation&copy;Network玩家</div>
				<div class="login-item-content">
					<button class="btn" @click="loginsub">PS3首次登录？</button>
				</div>
			</div>
			<div class="login-item long-lable">
				<div class="login-item-lable">忘记您的登录信息？</div>
				<div class="login-item-content">
					<button class="btn" @click="loginsub">获取丢失的帐户...</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		// 登录
		loginsub() {
			this.$toast('我是弹出消息');
		}
	},
	mounted() {}
};
</script>

<style lang="less" scoped>
.login-frame {
	z-index: 1;
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 400px;
	margin: 0 auto;
	.login-box {
		margin-top: 20px;
		&:first-child {
			margin-top: 0;
			border-bottom: #333 1px solid;
		}
		.login-item {
			display: flex;
			align-items: center;
			margin: 0 0 10px 0;
			position: relative;
			.login-item-lable {
				width: 100px;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				display: flex;
				align-items: center;
				justify-content: flex-end;
			}
			.login-item-content {
				flex: 1;
				margin-left: 110px;
				.inp {
					width: 100%;
					padding: 0 8px;
					box-sizing: border-box;
					border: #444 1px solid;
					background: #333;
					line-height: 24px;
					color: #fff;
					border-radius: 3px;
				}
				.btn {
					width: 100%;
					padding: 0 8px;
					box-sizing: border-box;
					border: none;
					line-height: 24px;
					color: #fff;
					border-radius: 3px;
					text-align: left;
					background: linear-gradient(#555, #333);
				}
				&.cannelbtn {
					margin-left: 10px;
				}
			}
			.logo {
				width: 100px;
				margin-left: 70px;
				.img {
					display: block;
					width: 100%;
					height: auto;
				}
			}
			&.long-lable {
				.login-item-lable {
					width: 200px;
					color: #eee;
				}
				.login-item-content {
					flex: 1;
					margin-left: 210px;
				}
			}
		}
	}
}
</style>
