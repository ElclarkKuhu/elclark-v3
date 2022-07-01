<script>
	import { page } from '$app/stores'
	import moment from 'moment'

	export let title
	export let author
	export let category
	export let createdAt
	export let updatedAt
	export let description
	export let featuredImage
</script>

<svelte:head>
	<!-- Metadata -->
	<title>{title}</title>
	<link rel="icon" href="/favicon.png" />
	<link rel="canonical" href={$page.url.href} />

	<!-- Basic HTML Meta Tags -->
	<meta
		name="keywords"
		content="Elclark, Code, software engineer, technology, programming, science, music, gaming"
	/>
	<meta name="description" content={description} />
	<meta name="subject" content={title} />
	<meta name="copyright" content="Elclark" />
	<meta name="language" content="EN" />
	<meta name="robots" content="index,follow" />
	<meta name="author" content="Elclark, founder@elclark.my.id" />
	<meta name="designer" content="Elclark, founder@elclark.my.id" />
	<meta name="owner" content="Elclark" />
	<meta name="url" content={$page.url.href} />
	<meta name="identifier-URL" content={$page.url.origin} />
	<meta name="category" content="technology, portfolio, blog, contact" />
	<meta name="coverage" content="Worldwide" />
	<meta name="distribution" content="Global" />
	<meta name="rating" content="General" />

	<!-- OpenGraph Meta Tags -->
	<meta name="og:title" content={title} />
	<meta name="og:type" content="article" />
	<meta name="og:url" content={$page.url.href} />
	<meta name="og:image" content={featuredImage} />
	<meta name="og:site_name" content="Elclark" />
	<meta name="og:description" content={description} />

	<meta name="article:published_time" content={createdAt} />
	<meta name="article:modified_time" content={updatedAt} />
	<meta name="article:author" content="Elclark" />
	<meta name="article:section" content="Technonlgy" />
	<meta name="article:tag" content="Elclark, Technonlgy, Programming" />

	<meta name="og:email" content="mail@elclark.my.id" />
	<meta name="og:region" content="MDO" />
	<meta name="og:country-name" content="ID" />

	<!-- Twitter Metadata -->
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:url" content={featuredImage} />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<div class="container">
	<header>
		<a href="/" class="category">{category}</a>
		<h1>{title}</h1>
		<p><i>{description}</i></p>

		<div class="info">
			By <a href="/">{author}</a> -
			{#if updatedAt === createdAt}
				<div class="date">{moment(createdAt).calendar()}</div>
			{:else}
				Updated <div class="date">{moment(updatedAt).calendar()}</div>
			{/if}
		</div>
		<hr />
	</header>
	<div class="wrapper">
		<article>
			{#if featuredImage}
				<img src={featuredImage} alt={title} />
			{/if}
			<slot />
		</article>
		<div class="sidebar">
			<div class="ad">
				<div class="temp" />
				<p>Advertisement</p>
			</div>
		</div>
	</div>

	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
		rel="stylesheet"
	/>
</div>

<style>
	.container {
		--margin: 0.9375rem;

		font-family: var(--font-blog);
		font-size: var(--xlarge);

		max-width: var(--max-width);
		padding: 0 var(--container-padding);
		margin: 0 auto;
	}

	.wrapper {
		display: grid;
		grid-gap: var(--xlarge);
		grid-template-columns: 1fr;
	}

	header {
		margin-top: var(--xlarge);
	}

	.category {
		font-size: var(--medium);
		font-weight: var(--bold);
		margin-bottom: var(--medium);
		color: var(--color-primary);
		text-transform: uppercase;
	}

	h1 {
		font-family: var(--font);
		font-size: 1.875rem;
		margin: 0;
	}

	p {
		font-size: 1.25rem;
		margin-top: 0.625rem;
		margin-bottom: 0.75rem;
	}

	.info {
		font-size: 0.875rem;
		font-weight: var(--thin);
		word-spacing: 0.1rem;
		color: #848484;
	}

	.info a {
		font-family: var(--font);
		font-weight: var(--xxnormal);
		color: var(--color-primary);
		opacity: 0.8;
	}

	.date {
		display: inline;
	}

	.sidebar {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.ad p {
		font-size: 0.875rem;
		font-weight: var(--thin);
		letter-spacing: 0.075rem;
		color: var(--color-on-background);
		text-align: center;
	}

	.temp {
		width: 18.75rem;
		height: 18.75rem;

		opacity: 0.5;

		background: var(--color-primary);
		border-radius: var(--xxsmall);
	}

	:global(img) {
		width: 100%;
	}

	:global(h2) {
		font-size: var(--xlarge);
		margin: var(--margin) 0;
	}

	:global(h3) {
		font-size: var(--xlarge);
		margin: var(--margin) 0;
	}

	:global(p) {
		font-size: 1.125rem;
		margin: var(--margin) 0;
	}

	:global(hr) {
		color: var(--color-outline);
		border-color: var(--color-outline);
		margin: var(--margin) 0;
	}

	@media (min-width: 1024px) {
		.container {
			--margin: 1.25rem;
		}

		.wrapper {
			display: grid;
			grid-gap: var(--xlarge);
			grid-template-columns: 1fr 18.75rem;
		}

		h1 {
			font-size: 2.75rem;
		}
	}
</style>
