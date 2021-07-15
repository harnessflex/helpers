
module.exports = /**
@param {Object} object
@param {string} key
*/
function object_dot(object,key){
	
	const results = key.split('.').reduce(function(o,i) {
		
		return o ? o[i] : null;
	},object);
	
	return results;
};
