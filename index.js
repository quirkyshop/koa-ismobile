'use strict';

module.exports = function(){

	var mobileDetecion = require('./lib/MobileDetecion.js').MobileDetection; 

	return function *browserDetecion(next) {		
		var ua = this.request.header['user-agent'],
	    	isMobile;

	    isMobile = mobileDetecion.parse(ua);
		
		this['is-mobile'] = isMobile;
		yield* next;
	}	
}