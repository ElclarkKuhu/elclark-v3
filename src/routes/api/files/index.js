import { getEntries } from '$lib/contentful.js'

export async function get() {
	let entries

	try {
		entries = await getEntries({
			contentType: 'file',
			order: '-sys.createdAt'
		})
	} catch (error) {
		return {
			status: 500,
			error
		}
	}

	if (entries.items.length === 0) {
		return {
			status: 404,
			error: 'No files found'
		}
	}

	return {
		status: 200,
		body: entries
	}
}
