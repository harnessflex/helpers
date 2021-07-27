
const path = require('path'/*$path$*/);
const dotNotation = require('./dotNotation'/*$path$*/);
const ConfigNotCachedError = require('./Error/ConfigNotCachedError'/*$path$*/);

module.exports = /**
@param {string} notation
@param {string} default
*/
function config(notation,default$ = null){
	var φ;
	
	const location = path.join(process.cwd(),'bootstrap','cache','config.json');
	
	try {
		
		const config = require(location);
		
		return ((φ = dotNotation(config,notation)) != null) ? (φ) : default$;
	} catch (e) {
		
		throw new ConfigNotCachedError;
	};
};
