const path = require 'path'
const object_dot = require './object_dot'
const ConfigNotCachedError = require './Error/ConfigNotCachedError'

module.exports = def config notation\string, default\string = null
	const location = path.join process.cwd!, 'bootstrap', 'cache', 'config.json'

	try
		const config = require location

		object_dot(config, notation) ?? default
	catch e
		throw new ConfigNotCachedError
