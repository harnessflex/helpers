module.exports = def object_dot object\Object, key\string
	const results = key.split('.').reduce(&, object) do(o, i)
		o ? o[i] : null

	results
