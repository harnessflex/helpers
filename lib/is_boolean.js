
module.exports = function is_boolean(object){
	
	return object !== undefined && object !== null && object.constructor == Boolean;
};
