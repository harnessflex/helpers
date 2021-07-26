
module.exports = function is_function(object){
	
	return object !== undefined && object !== null && object.constructor == Function;
};
