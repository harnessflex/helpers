const is_string = require './is_string'
const dotenv = require 'dotenv'

dotenv.config!

module.exports = def env key\string, default\any = null
	if !is_string(key)
		throw new TypeError 'Expected string'

	const output = process.env[key]

	if output === undefined || output === null
		return default

	output
