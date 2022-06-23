import data from '$data/blog.json'

export async function get({ params }) {
	const blog = data.find((post) => post.slug === params.slug)

	if (!blog) {
		return {
			status: 404
		}
	}

	return {
		body: {
			blog,
			more: data.filter((post) => post.slug !== params.slug).slice(0, 5)
		}
	}
}
