<script>
	import moment from 'moment'
	import { page } from '$app/stores'
	import { onDestroy } from 'svelte'
	import bytesToSize from '$lib/bytesToSize'

	export let file
	export let author

	let createdAt = moment(file.createdAt).fromNow()
	let Loop = setInterval(() => {
		createdAt = moment(file.createdAt).fromNow()
	}, 1000)

	onDestroy(() => {
		clearInterval(Loop)
	})

	const title = `${file.name} - Elclark`
	const description = file.description
	const image = 'https://elclark.my.id/img/brand/elclark.png'
</script>

<svelte:head>
	<!-- Metadata -->
	<title>{title}</title>
	<link rel="icon" href="/favicon.png" />

	<!-- Basic HTML Meta Tags -->
	<meta name="keywords" content="Elclark, Technonlgy, Programming, Blog" />
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
	<meta name="category" content="Tech, Landing Page, Portfolio, Blog" />
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

<main>
	<div class="info">
		<h2 class="filename">{file.name}</h2>
		<a href="/profiles/{author.username}" class="author">
			{author.firstName}
			{author.lastName}
		</a>
		-
		<span class="size">{bytesToSize(file.size)}</span> -
		<span class="date">Uploaded {createdAt}</span>
	</div>
	<!-- <Button href={file.url} color="tertiary">Download</Button> -->
</main>

<style>
	main {
		margin: var(--xxxlarge) auto;
		padding: 0 var(--container-padding);
		max-width: var(--max-width);
	}

	.info {
		background: var(--color-tertiary);
		border-radius: var(--medium);
		padding: 1rem 1.5rem;
		color: var(--color-on-tertiary);
	}

	.info .filename {
		margin: 0;
		margin-bottom: 0.5rem;

		font-size: 1.5rem;
		font-weight: 500;

		color: var(--color-on-tertiary);

		font-weight: bold;
	}

	.info .author {
		display: inline-block;

		padding: 0.25rem 0.5rem;
		border-radius: 1rem;
		text-decoration: none;

		background: var(--color-tertiary-container);
		color: var(--color-on-tertiary-container);

		position: relative;
	}

	.info .author::after {
		content: '';
		display: block;

		width: 100%;
		height: 100%;

		top: 0;
		left: 0;
		position: absolute;

		opacity: 0;
		background: #fff;
		border-radius: 1rem;

		transition: opacity 200ms ease;
	}

	.info .author:hover::after {
		opacity: 0.2;
	}

	.info span {
		padding: 0.1rem 0;
	}

	main {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: var(--small);
	}
</style>
