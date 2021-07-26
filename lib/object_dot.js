
const is_object = require('./is_object'/*$path$*/);
const is_string = require('./is_string'/*$path$*/);

module.exports = /**
@param {Object} object
@param {string} key
*/
function object_dot(object,key){
	
	if (!(is_object(object))) {
		
		throw new TypeError('Expected object');
	};
	
	if (!(is_string(key))) {
		
		throw new TypeError('Expected string');
	};
	
	const results = key.split('.').reduce(function(o,i) {
		
		return o ? ((o[i] != null) ? o[i] : null) : null;
	},object);
	
	return results;
};
