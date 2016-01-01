var MobileDetecion = require('../lib/MobileDetecion.js').MobileDetection; 

exports['ipad'] = function(test){
	var ua = 'Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46' + ' (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3';

	var isMobile = MobileDetecion.parse(ua);

	test.ok(isMobile,'ipad is mobile');	
	test.done();
};

exports['iphone 4'] = function(test){
	var ua = 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5';

	var isMobile = MobileDetecion.parse(ua);

	test.ok(isMobile,'iphone4 is mobile');	
	test.done();
};

exports['手机qq'] = function(test){
	var ua = 'Mozilla/5.0 (Linux; Android 4.4.2; GT-I9500 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36 V1_AND_SQ_5.7.2_260_YYB_D QQ/5.7.2.2490 NetType/WIFI WebP/0.3.2';

	var isMobile = MobileDetecion.parse(ua);

	test.ok(isMobile,'手机qq is mobile');	
	test.done();
};

exports['微信5.0'] = function(test){
	var ua = 'I9500 Build/KOT49H) AppleWebKit/533.1 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.4 TBS/025438 Mobile Safari/533.1 MicroMessenger/6.2.0.54_r1169949.561 NetType/WIFI Language/en ';

	var isMobile = MobileDetecion.parse(ua);

	test.ok(isMobile,'微信5.0 is mobile');	
	test.done();
};

// chrome monitor
exports['Samsung Galaxy s3'] = function(test){
	var ua = 'Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30';

	var isMobile = MobileDetecion.parse(ua);

	test.ok(isMobile,'Samsung Galaxy s3 is mobile');	
	test.done();
};

exports['Samsung Galaxy s4'] = function(test){
	var ua = 'Mozilla/5.0 (Linux; Android 4.2.2; GT-I9505 Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.59 Mobile Safari/537.36';

	var isMobile = MobileDetecion.parse(ua);

	test.ok(isMobile,'Samsung Galaxy s4 is mobile');	
	test.done();
};