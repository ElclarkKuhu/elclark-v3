<script>
	import { page } from '$app/stores'
	import moment from 'moment'

	import Card from '$components/blog/card.svelte'
	import Hero from '$components/hero.svelte'

	const title = "Hi, I'm Elclark!"
	const description =
		"I'm a software engineer and system administrator from Manado, Indonesia. I also a university student and UI/UX designer. I'm passionate about technology, science, music, and gaming."
	const image = 'https://elclark.my.id/img/brand/elclark.png'

	export let blogs

	function formatDate(date) {
		const nowDate = new Date(date).getTime()
		const aYearAgo = nowDate - 365 * 24 * 60 * 60 * 1000

		if (nowDate > aYearAgo) {
			return moment(date).format('DD MMMM')
		} else {
			return moment(date).format('DD MMMM, YYYY')
		}
	}

	function getDate(createdAt, updatedAt) {
		if (updatedAt && createdAt === updatedAt) {
			return formatDate(createdAt)
		} else {
			return 'Updated at ' + formatDate(updatedAt)
		}
	}
</script>

<svelte:head>
	<!-- Metadata -->
	<title>{title}</title>
	<link rel="canonical" href={$page.url.href} />

	<!-- Basic HTML Meta Tags -->
	<meta
		name="keywords"
		content="Elclark, Code, software engineer, technology, programming, science, music, gaming, "
	/>
	<meta name="description" content={description} />
	<meta name="subject" content="Elclark Personal Website" />
	<meta name="copyright" content="Elclark" />
	<meta name="language" content="EN" />
	<meta name="robots" content="index,follow" />

	<meta name="author" content="Elclark, founder@elclark.my.id" />
	<meta name="designer" content="Elclark, founder@elclark.my.id" />
	<meta name="owner" content="Elclark" />
	<meta name="url" content={$page.url.href} />
	<meta name="identifier-URL" content={$page.url.origin} />
	<meta name="category" content="technology, portfolio, blog, landing page, front page" />
	<meta name="coverage" content="Worldwide" />
	<meta name="distribution" content="Global" />
	<meta name="rating" content="General" />

	<!-- OpenGraph Meta Tags -->
	<meta name="og:title" content={title} />
	<meta name="og:type" content="website" />
	<meta name="og:url" content={$page.url.href} />
	<meta name="og:image" content={image} />
	<meta name="og:site_name" content="Elclark" />
	<meta name="og:description" content={description} />

	<meta name="og:email" content="mail@elclark.my.id" />
	<meta name="og:region" content="MDO" />
	<meta name="og:country-name" content="ID" />

	<!-- Twitter Metadata -->
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:url" content={image} />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<Hero />
<main class="container mx-auto p-5">
	<div class="grid gap-2">
		{#each blogs as blog}
			<Card
				href={blog.path}
				featured={blog.featured}
				featuredImage={blog.featuredImage}
				title={blog.title}
				summary={blog.description}
				date={getDate(blog.createdAt, blog.updatedAt)}
			/>
		{/each}
	</div>
</main>

<style>
</style>
