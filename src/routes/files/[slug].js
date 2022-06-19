import files from '$data/files.json'
import users from '$data/users.json'

export async function get({ params }) {
	const file = await files.find((file) => file.slug === params.slug)
	const author = await users.find((user) => user.username === file.owner)

	return {
		body: {
			file,
			author
		}
	}
}
