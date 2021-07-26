const is_string = require './is_string'
const BooleanCastError = require './Error/BooleanCastError'

module.exports = def toBoolean value
	if typeof value === 'boolean'
		return value

	if typeof value === 'number'
		return Boolean value

	if is_string(value) && (
		value.split!.includes('0') || value.split!.includes('1')
	)
		return Boolean value

	if !is_string value
		throw new BooleanCastError("Can't convert {value} to boolean.")

	JSON.parse value.toLowerCase!
