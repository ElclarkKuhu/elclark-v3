<script>
	import { page } from '$app/stores'
	import { onDestroy } from 'svelte'
	import formatDate from '$lib/formatDate'

	import SEO from '$components/seo.svelte'

	export let title = 'Untitled'
	export let author = {
		username: 'elclark',
		firstName: 'Elclark',
		lastName: 'Kuhu',
		avatar: 'https://elclark.my.id/images/elclark.png',
		twitter: 'elclark_kuhu'
	}
	export let createdAt
	export let updatedAt
	export let description
	export let featuredImage

	let date = 'Unknown'
	let utcDate = updatedAt || createdAt
	let dateLoop

	if (updatedAt) {
		date = 'Updated ' + formatDate(updatedAt)
		dateLoop = setInterval(() => {
			date = 'Updated ' + formatDate(updatedAt)
		}, 1000)
	} else if (createdAt) {
		date = formatDate(createdAt)
		dateLoop = setInterval(() => {
			date = formatDate(createdAt)
		}, 1000)
	}

	onDestroy(() => {
		clearInterval(dateLoop)
	})
</script>

<SEO
	type="article"
	{title}
	image={featuredImage}
	{description}
	path={$page.url.pathname}
	publishedTime={createdAt}
	modifiedTime={updatedAt}
	authorName={`${author.name}`}
	authorEmail={author.email}
	twitterUsername={`@${author.twitter}`}
/>

<div>
	<main class="container">
		<header>
			<h1>{title}</h1>
			<p class="description"><i>{description}</i></p>

			<div class="info">
				<p>
					By <a sveltekit:prefetch href="/profiles/{author.slug}">{author.name}</a>,
					<time datetime={utcDate}>{date}</time>
				</p>
			</div>

			<div class="line">
				<!-- Line -->
			</div>
		</header>
		<article>
			{#if featuredImage}
				<img src={featuredImage} alt={title} />
			{/if}
			<slot />
		</article>
	</main>
</div>

<style>
	main {
		--margin: 15px;
		padding: 1.25rem;
	}

	h1 {
		font-size: 2.25rem;
		font-weight: var(--font-semibold);
		line-height: 2.5rem;

		margin: 0;
	}

	.description {
		font-size: 1.125rem;
		font-weight: var(--font-light);
		line-height: 1.75rem;

		margin: 0;
		margin-top: 10px;
	}

	.info {
		font-weight: var(--font-light);
		margin: 12px 0;
	}

	.info p a {
		color: currentColor;

		font-weight: var(--font-semibold);
		margin: 0;
	}

	.info p a:hover {
		filter: none;
		text-decoration: underline;
	}

	.line {
		width: 100%;
		height: 2px;
		opacity: 0.1;
		margin: 12px 0;
		background-color: var(--c-on-background);
	}

	:global(article img) {
		width: 100%;
	}

	:global(article h2) {
		font-size: 1.875rem;
		font-weight: var(--font-semibold);
		line-height: 2.25rem;
		margin: var(--margin) 0;
	}

	:global(article h3) {
		font-size: 1.5rem;
		font-weight: var(--font-semibold);
		line-height: 2rem;
		margin: var(--margin) 0;
	}

	:global(article p) {
		font-size: 1.125rem;
		font-weight: var(--font-light);
		margin: var(--margin) 0;
	}

	:global(article strong) {
		font-weight: var(--font-semibold);
	}

	:global(article li) {
		font-size: 1.125rem;
		font-weight: var(--font-light);
		margin: 0.35rem 0;
	}

	:global(article hr) {
		opacity: 0.5;
		margin: var(--margin) 0;
		color: rgba(var(--r-on-background), 0.15);
		border-color: rgba(var(--r-on-background), 0.15);
	}

	@media (min-width: 768px) {
		/* Maybe */
	}

	@media (min-width: 1024px) {
		h1 {
			font-size: 2.75rem;
		}
	}
</style>
