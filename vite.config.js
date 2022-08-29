import path from 'path'

import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
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
