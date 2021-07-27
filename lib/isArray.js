
module.exports = function isArray(object){
	
	return object !== undefined && object !== null && object.constructor == Array;
};
