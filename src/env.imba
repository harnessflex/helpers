const dotenv = require 'dotenv'

dotenv.config!

module.exports = def env key\string, default\string = null
	process.env[key] ?? default
