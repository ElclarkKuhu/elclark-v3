function compare(a, b) {
	const aCreatedAt = new Date(a.createdAt).getTime()
	const aUpdatedAt = new Date(a.updatedAt).getTime()
	const bCreatedAt = new Date(b.createdAt).getTime()
	const bUpdatedAt = new Date(b.updatedAt).getTime()

	if (aCreatedAt || aUpdatedAt < bCreatedAt || bUpdatedAt) {
		return -1
	}
	if (aCreatedAt || aUpdatedAt > bCreatedAt || bUpdatedAt) {
		return 1
	}
	return 0
}

export default function sortArray(array) {
	return array.sort(compare)
}
