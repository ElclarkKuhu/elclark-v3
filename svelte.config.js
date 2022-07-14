import path from 'path'
import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-auto'

export default {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: {
				blog: path.resolve('./src/layouts/blog.svelte'),
				page: path.resolve('./src/layouts/page.svelte')
			}
		})
	],
	kit: {
		adapter: adapter(),
		prerender: {
			enabled: false,
			default: false
			// crawl: true,
			// onError: 'fail'
		}
	}
}
