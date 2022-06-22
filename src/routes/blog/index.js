import data from '$data/blog.json'

export async function get() {
	return {
		body: {
			blogs: data
		}
	}
}
