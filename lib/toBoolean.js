
const isString = require('./isString'/*$path$*/);
const BooleanCastError = require('./Error/BooleanCastError'/*$path$*/);

module.exports = function toBoolean(value){
	
	if (typeof value === 'boolean') {
		
		return value;
	};
	
	if (typeof value === 'number') {
		
		return Boolean(value);
	};
	
	if (isString(value) && (
		
		value.split().includes('0') || value.split().includes('1')
	)) {
		
		return Boolean(value);
	};
	
	if (!(isString(value))) {
		
		throw new BooleanCastError(("Can't convert " + value + " to boolean."));
	};
	
	return JSON.parse(value.toLowerCase());
};
