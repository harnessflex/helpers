
module.exports = function isBoolean(object){
	
	return object !== undefined && object !== null && object.constructor == Boolean;
};
