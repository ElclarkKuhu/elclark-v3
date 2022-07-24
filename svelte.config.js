import path from 'path'
import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-static'

export default {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: {
				blog: path.resolve('./src/layouts/blog.svelte'),
				page: path.resolve('./src/layouts/page.svelte'),
				files: path.resolve('./src/layouts/files.svelte'),
				profile: path.resolve('./src/layouts/profile.svelte')
			}
		})
	],
	kit: {
		adapter: adapter({
			out: '.svelte-kit/cloudflare'
		}),
		prerender: {
			enabled: true,
			default: true,
			crawl: true,
			onError: 'fail'
		}
	}
}
