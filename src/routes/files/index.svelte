<script>
	import moment from 'moment'
	import { page } from '$app/stores'
	import bytesToSize from '$lib/bytesToSize'

	export let files

	const title = 'Elclark Files'
	const description = 'Find all files uploaded by Elclark'
	const image = 'https://elclark.my.id/img/brand/elclark.png'
</script>

<svelte:head>
	<!-- Metadata -->
	<title>{title}</title>
	<link rel="icon" href="/favicon.png" />

	<!-- Basic HTML Meta Tags -->
	<meta
		name="keywords"
		content="Elclark, Code, software engineer, technology, programming, science, music, gaming, files"
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
	<meta name="category" content="technology, portfolio, files" />
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
	{#each files as file}
		<a href="/files/{file.slug}">
			<h3>
				{file.name}
			</h3>
			<p>
				Uploaded {moment(file.createdAt).fromNow()} -
				{#if file.updatedAt !== file.createdAt}
					Updated {moment(file.updatedAt).fromNow()} -
				{/if}
				{bytesToSize(file.size)}
			</p>
		</a>
	{/each}
</main>

<style>
	main {
		margin: var(--xxxlarge) auto;
		padding: 0 var(--container-padding);
		max-width: var(--max-width);
	}

	a {
		display: block;
		padding: 1.5rem 2.5rem;
		margin-bottom: 0.5rem;

		position: relative;

		background: var(--color-tertiary);
		color: var(--color-on-tertiary);

		border-radius: var(--medium);
		overflow: hidden;
	}

	a::after {
		content: '';
		display: block;
		width: 100%;
		height: 100%;

		position: absolute;
		top: 0;
		left: 0;

		background: #fff;
		opacity: 0;

		transition: opacity 200ms ease;
	}

	a:hover::after {
		opacity: 0.2;
	}

	h3 {
		margin: 0;
		margin-bottom: 0.25rem;
		font-size: 1.5rem;
	}

	p {
		margin: 0;
		font-size: 1rem;
	}
</style>
