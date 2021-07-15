
module.exports = class ConfigNotCachedError extends Error {
	
	
	/**
	@param {string} message
	*/
	constructor(message = 'Config is not cached'){
		
		super(message);
		
		this.name = 'ConfigNotCachedError';
	}
};
