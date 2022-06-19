import files from '$data/files.json'

export async function get() {
	return {
		body: {
			files
		}
	}
}
