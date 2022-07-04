import globToArray from '$lib/globToArray'
import sort from '$lib/sortArray'

export async function get() {
	const modules = import.meta.globEager('./blog/*.md')
	const array = await globToArray(modules).slice(0, 5)

	let blogs = []
	array.forEach((item) => {
		blogs.push({
			path: item.key.replace('./', '/').slice(0, -3),
			...item.metadata
		})
	})

	return {
		body: {
			blogs: sort(blogs)
		}
	}
}
