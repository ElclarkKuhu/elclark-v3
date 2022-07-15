import files from '$data/files.json'
import users from '$data/users.json'
import filetype from '$data/filetype.json'

export async function GET({ params }) {
	const file = await files.find((file) => file.slug === params.slug)
	if (!file) {
		return {
			status: 404
		}
	}

	const author = await users.find((user) => user.username === file.owner)
	if (!author) {
		return {
			status: 404
		}
	}

	return {
		body: {
			file,
			author,
			filetype: filetype.find((filetype) => filetype.mime === file.type)
		}
	}
}
