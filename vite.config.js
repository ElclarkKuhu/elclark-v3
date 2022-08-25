import path from 'path'

import { sveltekit } from '@sveltejs/kit/vite'
import { imagetools } from 'vite-imagetools'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), imagetools()],
	build: {
		minify: true
	},
	resolve: {
		alias: {
			$icons: path.resolve('./src/icons'),
			$images: path.resolve('./src/images'),
			$components: path.resolve('./src/components')
		}
	}
}

export default config
