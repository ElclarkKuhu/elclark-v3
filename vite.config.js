import path from 'path'
import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$components: path.resolve('./src/components'),
			$stores: path.resolve('./src/stores'),
			$data: path.resolve('./src/data')
		}
	},
	preview: {
		port: 3000
	}
}

export default config
