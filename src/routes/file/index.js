import files from '$data/files.json'

export async function GET() {
	return {
		body: {
			files
		}
	}
}
