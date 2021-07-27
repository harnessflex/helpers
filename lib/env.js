
const isString = require('./isString'/*$path$*/);
const dotenv = require('dotenv'/*$path$*/);

dotenv.config();

module.exports = /**
@param {string} key
@param {any} default
*/
function env(key,default$ = null){
	
	if (!(isString(key))) {
		
		throw new TypeError('Expected string');
	};
	
	const output = process.env[key];
	
	if (output === undefined || output === null) {
		
		return default$;
	};
	
	return output;
};
