import path from 'path'
import adapter from '@sveltejs/adapter-auto'

export default {
	kit: {
		adapter: adapter(),
		prerender: {
			enabled: true,
			default: true,
			crawl: true,
			onError: 'continue'
		},
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components'),
					$stores: path.resolve('./src/stores'),
					$data: path.resolve('./src/data')
				}
			}
		}
	}
}
