import globToArray from '$lib/globToArray'
import sort from '$lib/sortArray'

export async function get() {
	const modules = import.meta.globEager('./*.md')
	const array = await globToArray(modules)

	let blogs = []
	array.forEach((item) => {
		blogs.push({
			path: item.key.replace('./', '/blog/').slice(0, -3),
			...item.metadata
		})
	})

	return {
		body: {
			blogs: sort(blogs)
		}
	}
}
