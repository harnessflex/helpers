
const isString = require('./isString'/*$path$*/);

module.exports = /**
@param {string} value
@param {string} separator
*/
function slug(value,separator = '-'){
	
	if (!(isString(value))) {
		
		throw new TypeError('value must be a string');
	};
	
	if (!(isString(separator))) {
		
		throw new TypeError('separator must be a string');
	};
	
	return value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim().replace(/[^a-z0-9 ]/g,'').replace(/\s+/g,separator);
};
