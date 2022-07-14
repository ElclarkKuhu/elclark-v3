<script>
	import formatDate from '$lib/formatDate'

	import Card from '$components/blog/card.svelte'
	import Hero from '$components/hero.svelte'

	export let blogs

	function getDate(createdAt, updatedAt) {
		if (createdAt) {
			if (updatedAt) {
				if (createdAt === updatedAt) {
					return formatDate(createdAt)
				} else {
					return 'Updated ' + formatDate(updatedAt)
				}
			} else {
				return formatDate(createdAt)
			}
		} else {
			return 'Unknown'
		}
	}
</script>

<svelte:head>
	<!-- Metadata -->
	<title>Hi, I'm Elclark!</title>
	<link rel="canonical" href="https://elclark.my.id/" />

	<!-- Basic HTML Meta Tags -->
	<meta
		name="keywords"
		content="Elclark, Code, software engineer, technology, programming, science, music, gaming, "
	/>
	<meta
		name="description"
		content="I'm a software engineer and system administrator from Manado, Indonesia. I also a university student and UI/UX designer. I'm passionate about technology, science, music, and gaming."
	/>
	<meta name="subject" content="Elclark Personal Website" />
	<meta name="copyright" content="Elclark" />
	<meta name="language" content="EN" />
	<meta name="robots" content="index,follow" />

	<meta name="author" content="Elclark, founder@elclark.my.id" />
	<meta name="designer" content="Elclark, founder@elclark.my.id" />
	<meta name="owner" content="Elclark" />
	<!-- <meta name="url" content={$page.url.href} /> -->
	<!-- <meta name="identifier-URL" content={$page.url.origin} /> -->
	<meta name="category" content="technology, portfolio, blog, landing page, front page" />
	<meta name="coverage" content="Worldwide" />
	<meta name="distribution" content="Global" />
	<meta name="rating" content="General" />

	<!-- OpenGraph Meta Tags -->
	<meta name="og:title" content="Hi, I'm Elclark!" />
	<meta name="og:type" content="website" />
	<!-- <meta name="og:url" content={$page.url.href} /> -->
	<meta name="og:image" content="https://elclark.my.id/img/brand/elclark.png" />
	<meta name="og:site_name" content="Elclark" />
	<meta
		name="og:description"
		content="I'm a software engineer and system administrator from Manado, Indonesia. I also a university student and UI/UX designer. I'm passionate about technology, science, music, and gaming."
	/>

	<meta name="og:email" content="mail@elclark.my.id" />
	<meta name="og:region" content="MDO" />
	<meta name="og:country-name" content="ID" />

	<!-- Twitter Metadata -->
	<meta name="twitter:title" content="Hi, I'm Elclark!" />
	<meta
		name="twitter:description"
		content="I'm a software engineer and system administrator from Manado, Indonesia. I also a university student and UI/UX designer. I'm passionate about technology, science, music, and gaming."
	/>
	<meta name="twitter:url" content="https://elclark.my.id/img/brand/elclark.png" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<Hero />
<main class="container">
	<div>
		{#each blogs as blog}
			<Card
				href={blog.path}
				featured={blog.featured}
				featuredImage={blog.featuredImage}
				title={blog.title}
				description={blog.description}
				date={getDate(blog.createdAt, blog.updatedAt)}
			/>
		{/each}
	</div>
</main>

<style>
	main {
		padding: 1.25rem;
	}

	main div {
		display: grid;
		grid-gap: 0.5rem;
	}
</style>
