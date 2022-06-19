import data from '$data/blog.json'

export async function get({ params }) {
	return {
		body: {
			blog: data.find((post) => post.slug === params.slug),
			more: data.slice(0, 5)
		}
	}
}
