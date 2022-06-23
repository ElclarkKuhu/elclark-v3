import data from '$data/blog.json'

export async function get({ params }) {
	const blog = data.find((post) => post.slug === params.slug)

	if (!blog) {
		return {
			status: 404
		}
	}

	let more = []
	data.forEach((post) => {
		if (post.slug !== params.slug) {
			more.push({
				slug: post.slug,
				title: post.title
			})
		}
	})

	more = more.slice(0, 5)

	return {
		body: {
			blog,
			more
		}
	}
}
