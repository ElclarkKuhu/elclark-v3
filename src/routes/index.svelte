<script>
	import { page } from '$app/stores'

	import Card from '$components/blog/card.svelte'
	import Hero from '$components/hero.svelte'

	const title = "Hi, I'm Elclark!"
	const description =
		"I'm a software engineer and system administrator from Manado, Indonesia. I also a university student and UI/UX designer. I'm passionate about technology, science, music, and gaming."
	const image = 'https://elclark.my.id/img/brand/elclark.png'

	export let blogs
</script>

<svelte:head>
	<!-- Metadata -->
	<title>{title}</title>
	<link rel="icon" href="/favicon.png" />
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
<main>
	<span class="top-edge" />
	<div class="posts">
		{#each blogs as blog}
			<Card
				href={`/blog/${blog.slug}`}
				featuredImage={blog.featuredImage}
				title={blog.title}
				summary={blog.summary}
			/>
		{/each}
	</div>
</main>

<style>
	main {
		position: relative;

		margin: 0 auto 0 auto;
		padding: 0 var(--container-padding);
		max-width: var(--max-width);

		background: var(--color-background);
	}

	.posts {
		display: grid;
		grid-gap: var(--small);
		grid-template-columns: repeat(1, 1fr);
		margin: var(--large) auto 0 auto;
	}

	.top-edge {
		display: block;

		--width: 100%;
		--height: calc(var(--xxlarge) * 2);

		position: absolute;
		top: calc(var(--height) * -1);
		left: 0;

		width: var(--width);
		height: var(--height);

		background: linear-gradient(to top, var(--color-background) 25%, transparent 100%);
	}
</style>
