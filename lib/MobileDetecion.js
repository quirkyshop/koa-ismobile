(function(exports){
	'use strict';

	var mobileRules = [
		/mobile/i,
		/Android/i,
		/samsung/i,
		/windows phone/i	
	];	

	var MobileDetection = function(){
		this.isMobile = false;				
		this.mobileRules = mobileRules;

		this.parse = function parse(ua){
			var _is_mobile_flag = false;
			for(var i = 0, ln =this.mobileRules.length;i<ln;i++){
				if(this.mobileRules[i].test(ua)){
					_is_mobile_flag = true;
					break;
				}
			}

			this.isMobile = _is_mobile_flag;
			return this.isMobile;
		}
		return this;
	}


	exports.MobileDetection = new MobileDetection();	
})(this);