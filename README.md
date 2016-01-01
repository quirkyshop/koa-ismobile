# koa-ismobile
根据user-agent判断终端为移动端或pc端的koa中间件
koa-middleware for telling request from mobile or not.

build status

安装 / Intsall

	npm install koa-ismobile

使用 / Usage

	var mobileDetection = require('koa-ismobile')
	app.use(mobileDetection());

	app.use(function*(next) {
		var isMobile = this['is-mobile'];
	});

