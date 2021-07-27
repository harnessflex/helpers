const path = require 'path'
const dotNotation = require './dotNotation'
const ConfigNotCachedError = require './Error/ConfigNotCachedError'

module.exports = def config notation\string, default\string = null
	const location = path.join process.cwd!, 'bootstrap', 'cache', 'config.json'

	try
		const config = require location

		dotNotation(config, notation) ?? default
	catch e
		throw new ConfigNotCachedError
