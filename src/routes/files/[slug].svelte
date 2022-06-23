<script>
	import moment from 'moment'
	import { page } from '$app/stores'
	import { onDestroy } from 'svelte'
	import bytesToSize from '$lib/bytesToSize'

	import File from '$components/icons/file.svelte'

	export let file
	// export let author
	export let filetype

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
	<link rel="canonical" href={$page.url.href} />

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

<!-- https://www.behance.net/gallery/117082073/Say-Hello-Filetypes-%28FREE-icon-set%29 -->

<main>
	<div class="content">
		<div class="card">
			<div>
				<div class="image">
					<File />
				</div>
				<div class="info">
					<h1>{file.name}</h1>
					<p>{bytesToSize(file.size)}</p>
				</div>
			</div>

			<div>
				<a href={file.download}>DOWNLOAD</a>
			</div>
		</div>

		<div class="about-format">
			<h2>{filetype.about.title}</h2>
			<p>{filetype.about.description}</p>
		</div>
	</div>
	<div class="sidebar">
		<div class="ad">Advertisement</div>
	</div>
</main>

<style>
	main {
		display: grid;
		grid-gap: var(--medium);
		grid-template-columns: 1fr 20rem;

		margin: var(--xxxlarge) auto;
		padding: 0 var(--container-padding);
		max-width: var(--max-width);
	}

	.card {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		width: 100%;
		height: max-content;

		background: var(--color-on-surface-a10);
		border-radius: var(--small);
	}

	.card div:nth-child(1) {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 100%;
		margin: 0 var(--small);
	}

	.image {
		margin: var(--small);
	}

	.info h1 {
		font-size: var(--large);
		font-weight: var(--bold);
		margin: 0 0 var(--xxsmall) 0;
	}

	.info p {
		font-size: var(--medium);
		font-weight: var(--normal);
		margin: 0;
	}

	a {
		font-weight: var(--bold);
		margin: 1.5rem;
		padding: 1rem 2rem;
		border-radius: var(--xxsmall);

		background: var(--color-primary);
		color: var(--color-on-primary);
		text-decoration: none;
	}

	a:hover {
		background: var(--color-primary-container);
		color: var(--color-on-primary-container);

		cursor: pointer;
		box-shadow: none;
		filter: none;
	}

	.about-format {
		padding: var(--large);
	}

	.about-format h2 {
		font-size: var(--large);
		font-weight: var(--bold);
		margin: 0 0 var(--small) 0;
	}

	.about-format p {
		font-size: 0.9rem;
		font-weight: var(--normal);
		line-height: var(--large);
		margin: 0;
	}

	.ad {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;
		aspect-ratio: 1;
		background: var(--color-primary);
		color: var(--color-on-primary);
		border-radius: var(--small);
	}
</style>
