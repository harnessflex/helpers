const isObject = require './isObject'
const isString = require './isString'

module.exports = def dotNotation object\Object, key\string
	if !isObject object
		throw new TypeError 'Expected object'

	if !isString key
		throw new TypeError 'Expected string'

	const results = key.split('.').reduce(&, object) do(o, i)
		o ? o[i] ?? null : null

	results
