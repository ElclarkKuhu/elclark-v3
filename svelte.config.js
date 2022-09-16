import adapter from '@sveltejs/adapter-cloudflare'

export default {
	kit: {
		adapter: adapter(),
		// trailingSlash: 'always',
		prerender: {
			concurrency: 1,
			crawl: true,
			enabled: true,
			origin: 'https://elclark.my.id'
		}
	}
}
