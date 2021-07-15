
const dotenv = require('dotenv'/*$path$*/);

dotenv.config();

module.exports = /**
@param {string} key
@param {string} default
*/
function env(key,default$ = null){
	
	return (process.env[key] != null) ? process.env[key] : default$;
};
