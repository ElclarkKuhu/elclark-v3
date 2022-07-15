import globToArray from '$lib/globToArray'
import sort from '$lib/sortArray'

export async function GET() {
	const modules = import.meta.glob('./blog/*.md', { eager: true })
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
