const Mock = require('mockjs');

const Random = Mock.Random;

const gameLibrary = function() {
	let games = [];
	games = [{
			id: 1000,
			title: "FPS Games",
			list: [{
					id: 1001,
					icon: "../../static/images/logo001-001.png",
					title: "Counter-Strlike"
				},
				{
					id: 1002,
					icon: "../../static/images/logo001-001.png",
					title: "Counter-Strlike"
				},
				{
					id: 1003,
					icon: "../../static/images/logo001-001.png",
					title: "Counter-Strlike"
				}
			]
		},
		{
			id: 2000,
			title: "Racing Games",
			list: [{
					id: 2001,
					icon: "../../static/images/logo001-001.png",
					title: "Counter-Strlike"
				},
				{
					id: 2002,
					icon: "../../static/images/logo001-001.png",
					title: "Counter-Strlike"
				}
			]
		},
		{
			id: 3000,
			title: "Other",
			list: [{
				id: 3001,
				icon: "../../static/images/logo001-001.png",
				title: "Counter-Strlike"
			}]
		},
		{
			id: 4000,
			title: "Software",
			list: [{
					id: 4001,
					icon: "../../static/images/logo001-001.png",
					title: "Counter-Strlike"
				},
				{
					id: 4002,
					icon: "../../static/images/logo001-001.png",
					title: "Counter-Strlike"
				},
				{
					id: 4003,
					icon: "../../static/images/logo001-001.png",
					title: "Counter-Strlike"
				},
				{
					id: 4004,
					icon: "../../static/images/logo001-001.png",
					title: "Counter-Strlike"
				},
				{
					id: 4005,
					icon: "../../static/images/logo001-001.png",
					title: "Counter-Strlike"
				}
			]
		}
	]
	return {
		data: games
	}
}

const login = function() {
	let res = {
		data: {
			code: 200,
			msg: '登录成功',
			token: 'ABC123Qwert'
		}
	}
	console.log(res);
	return res
}
Mock.mock('/api/login', 'get', login)
Mock.mock('/api/gameLibrary', 'get', gameLibrary)
