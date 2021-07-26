
module.exports = class BooleanCastError extends Error {
	
	
	/**
	@param {string} message
	*/
	constructor(message){
		
		super(message);
		
		this.message = message;
		
		this.name = 'BooleanCastError';
	}
};
