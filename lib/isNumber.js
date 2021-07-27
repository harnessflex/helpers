
module.exports = function isNumber(object){
	
	return object !== undefined && object !== null && object.constructor == Number;
};
