const contentfulURL = import.meta.env.VITE_CONTENTFUL_URL || 'https://cdn.contentful.com'
const contentfulSpaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID
const contentfulAccessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN

export const getEntries = async (fetch, options, id) => {
	let requestURL = `${contentfulURL}/spaces/${contentfulSpaceId}/entries`

	if (id) {
		requestURL += `/${id}`
	}

	requestURL += `?access_token=${contentfulAccessToken}`

	if (options.contentType) {
		requestURL += `&content_type=${options.contentType}`
	}

	if (options.order) {
		requestURL += `&order=${options.order}`
	}

	if (options.limit) {
		requestURL += `&limit=${options.limit}`
	}

	if (options.skip) {
		requestURL += `&skip=${options.skip}`
	}

	if (options.fields) {
		if (options.fields.length > 0) {
			options.fields.forEach((field) => {
				if (field.name && field.value) {
					if (field.selector) {
						requestURL += `&fields.${field.name}[${field.selector}]=${field.value}`
					} else {
						requestURL += `&fields.${field.name}=${field.value}`
					}
				}
			})
		}
	}

	const response = await fetch(requestURL)
	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`)
	}

	return await response.json()
}
