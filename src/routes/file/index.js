import globToArray from '$lib/globToArray'
import sort from '$lib/sortArray'

export async function GET() {
	const modules = import.meta.glob('./*.md', { eager: true })
	const array = await globToArray(modules).slice(0, 5)

	let files = []
	array.forEach((item) => {
		files.push({
			path: item.key.replace('./', '/').slice(0, -3),
			...item.metadata
		})
	})

	return {
		body: {
			files: sort(files)
		}
	}
}
