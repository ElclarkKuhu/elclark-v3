<script>
	import { page } from '$app/stores'
	import moment from 'moment'

	export let title
	export let createdAt
	export let updatedAt
	export let featuredImage

	let description =
		"I'm a software engineer and system administrator from Manado, Indonesia. I also a university student and UI/UX designer. I'm passionate about technology, science, music, and gaming."
	const image = 'https://elclark.my.id/img/brand/elclark.png'
</script>

<svelte:head>
	<!-- Metadata -->
	<title>Elclark - {title}</title>
	<link rel="canonical" href={$page.url.href} />

	<!-- Basic HTML Meta Tags -->
	<meta
		name="keywords"
		content="Elclark, Code, software engineer, technology, programming, science, music, gaming, privacy, policy"
	/>
	<meta name="description" content={description} />
	<meta name="subject" content="Elclark {title}" />
	<meta name="copyright" content="Elclark" />
	<meta name="language" content="EN" />
	<meta name="robots" content="index,follow" />

	<meta name="author" content="Elclark, founder@elclark.my.id" />
	<meta name="designer" content="Elclark, founder@elclark.my.id" />
	<meta name="owner" content="Elclark" />
	<meta name="url" content={$page.url.href} />
	<meta name="identifier-URL" content={$page.url.origin} />
	<meta name="category" content="technology, portfolio, blog" />
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

<div class="container">
	<div class="wrapper">
		{#if featuredImage}
			<img src={featuredImage} alt={title} />
		{:else}
			<div class="nothing">
				<!-- Nothing -->
			</div>
		{/if}

		<header>
			<h1>{title}</h1>

			{#if createdAt || updatedAt}
				<div class="date">
					{#if updatedAt === createdAt}
						<i>Published <time datetime={createdAt}>{moment(createdAt).format('LL')}</time></i>
					{:else}
						<i>Updated at <time datetime={updatedAt}>{moment(updatedAt).format('LL')}</time></i>
					{/if}
				</div>
			{/if}
		</header>
		<article>
			<slot />
		</article>
	</div>

	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
		rel="stylesheet"
	/>
</div>

<style>
	.container {
		--margin: 15px;

		padding: 1.25rem;
	}

	.wrapper {
		max-width: 724px;
	}

	header {
		margin-top: var(--xlarge);
	}

	h1 {
		font-family: var(--font);
		font-size: 2.75rem;
		font-weight: var(--normal);
		margin: 0;
	}

	.date {
		font-size: 1.25rem;
		margin-top: 0.625rem;
		font-weight: var(--thin);
		word-spacing: 0.1rem;
	}

	.nothing {
		padding-top: var(--container-padding);
	}

	:global(img) {
		width: 100%;
	}

	:global(h2) {
		font-size: var(--xxlarge);
		font-weight: var(--thin);
		margin: var(--margin) 0;
	}

	:global(h3) {
		font-size: var(--xlarge);
		font-weight: var(--normal);
		margin: var(--margin) 0;
	}

	:global(p) {
		font-size: 1.125rem;
		font-weight: var(--thin);
		margin: var(--margin) 0;
	}

	:global(li) {
		font-size: 1.125rem;
		font-weight: var(--thin);
		margin: 0.35rem 0;
	}

	:global(hr) {
		opacity: 0.5;
		margin: var(--margin) 0;
		color: var(--color-outline);
		border-color: var(--color-outline);
	}

	@media (min-width: 1024px) {
		.container {
			--margin: 10px;
		}
	}
</style>
