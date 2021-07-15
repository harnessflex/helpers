module.exports = def toBoolean value
	if typeof value === 'boolean'
		return value

	if typeof value === 'number'
		return Boolean value

	if typeof value === 'string' && (
		value.split!.includes('0') || value.split!.includes('1')
	)
		return Boolean value

	if typeof value !== 'string'
		throw new Error "Can't convert {value} to boolean."

	JSON.parse value.toLowerCase!
