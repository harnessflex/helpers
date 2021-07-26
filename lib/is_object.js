
module.exports = function is_object(object){
	
	return object !== undefined && object !== null && object.constructor == Object;
};
