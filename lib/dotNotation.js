
const isObject = require('./isObject'/*$path$*/);
const isString = require('./isString'/*$path$*/);

module.exports = /**
@param {Object} object
@param {string} key
*/
function dotNotation(object,key){
	
	if (!(isObject(object))) {
		
		throw new TypeError('Expected object');
	};
	
	if (!(isString(key))) {
		
		throw new TypeError('Expected string');
	};
	
	const results = key.split('.').reduce(function(o,i) {
		
		return o ? ((o[i] != null) ? o[i] : null) : null;
	},object);
	
	return results;
};
