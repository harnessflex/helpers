const isString = require './isString'
const dotenv = require 'dotenv'

dotenv.config!

module.exports = def env key\string, default\any = null
	if !isString(key)
		throw new TypeError 'Expected string'

	const output = process.env[key]

	if output === undefined || output === null
		return default

	output
