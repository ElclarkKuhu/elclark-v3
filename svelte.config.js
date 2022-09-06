import adapter from '@sveltejs/adapter-cloudflare'

export default {
	kit: {
		adapter: adapter(),
		// trailingSlash: 'always',
		prerender: {
			enabled: true,
			default: true,
			crawl: true,
			onError: 'fail',
			origin: 'https://elclark.my.id'
		}
	}
}
