
module.exports = function is_array(object){
	
	return object !== undefined && object !== null && object.constructor == Array;
};
