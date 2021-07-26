
module.exports = function is_number(object){
	
	return object !== undefined && object !== null && object.constructor == Number;
};
