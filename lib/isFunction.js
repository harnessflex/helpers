
module.exports = function isFunction(object){
	
	return object !== undefined && object !== null && object.constructor == Function;
};
