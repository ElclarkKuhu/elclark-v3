const globToArray = (glob) => {
	const array = Object.keys(glob).map((key) => {
		const post = glob[key]
		return {
			key,
			...post
		}
	})

	return array
}

export default globToArray
