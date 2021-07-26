const is_object = require './is_object'
const is_string = require './is_string'

module.exports = def object_dot object\Object, key\string
	if !is_object object
		throw new TypeError 'Expected object'

	if !is_string key
		throw new TypeError 'Expected string'

	const results = key.split('.').reduce(&, object) do(o, i)
		o ? o[i] ?? null : null

	results
