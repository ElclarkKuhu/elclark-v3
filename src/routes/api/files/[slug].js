import { getEntries } from '$lib/contentful.js'

export async function get({ params }) {
	let entries

	try {
		entries = await getEntries({
			contentType: 'file',
			fields: [
				{
					name: 'slug',
					value: params.slug
				}
			]
		})
	} catch (error) {
		console.error(error)

		return {
			status: 500,
			error: 'An error occurred while loading the file.'
		}
	}

	if (entries.items.length === 0) {
		return {
			status: 404,
			error: 'The file you requested does not exist.'
		}
	}

	let file = entries.items[0].fields
	let date = {
		createdAt: entries.items[0].sys.createdAt,
		updatedAt: entries.items[0].sys.updatedAt
	}

	return {
		status: 200,
		body: {
			file,
			date
		}
	}
}
