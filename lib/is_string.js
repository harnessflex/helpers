
module.exports = function is_string(object){
	
	return object !== undefined && object !== null && object.constructor == String;
};
