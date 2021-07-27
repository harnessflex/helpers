
module.exports = function isObject(object){
	
	return object !== undefined && object !== null && object.constructor == Object;
};
