import globToArray from '$lib/globToArray'
import sort from '$lib/sortArray'

export async function load() {
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
		files: sort(files)
	}
}
