module.exports = def slug value\string, separator\string = '-'
	if typeof value !== 'string'
		throw new Error "{value} is not a valid string"

	if typeof separator !== 'string'
		throw new Error "{separator} is not a valid string"

	value
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase!
		.trim!
		.replace(/[^a-z0-9 ]/g, '')
		.replace(/\s+/g, separator)
