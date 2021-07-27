
module.exports = function isString(object){
	
	return object !== undefined && object !== null && object.constructor == String;
};
