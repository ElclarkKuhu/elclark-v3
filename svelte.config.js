import path from 'path'
import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-auto'

export default {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: {
				blog: path.resolve('./src/routes/blog/layout.svelte'),
				page: path.resolve('./src/layouts/page.svelte')
			}
		})
	],
	kit: {
		adapter: adapter(),
		prerender: {
			enabled: true,
			default: true,
			crawl: true,
			onError: 'fail'
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
