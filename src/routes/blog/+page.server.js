import globToArray from '$lib/globToArray'
import sort from '$lib/sortArray'

export async function load() {
	const modules = import.meta.glob('./*.md', { eager: true })
	const array = await globToArray(modules)

	let blogs = []
	array.forEach((item) => {
		blogs.push({
			path: item.key.replace('./', '/blog/').slice(0, -3),
			...item.metadata
		})
	})

	return {
		blogs: sort(blogs)
	}
}
