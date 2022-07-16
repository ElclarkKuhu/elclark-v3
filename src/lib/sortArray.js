function compare(a, b) {
	if (a.updatedAt) {
		return new Date(b.updatedAt) - new Date(a.updatedAt)
	}

	return new Date(b.createdAt) - new Date(a.createdAt)
}

export default function sortArray(array) {
	return array.sort(compare)
}
