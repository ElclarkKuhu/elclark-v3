<script>
	import { page } from '$app/stores'
	import { onDestroy } from 'svelte'

	import formatDate from '$lib/formatDate'
	import bytesToSize from '$lib/bytesToSize'

	import SEO from '$components/seo.svelte'
	import File from '$components/icons/file.svelte'

	export let size
	export let name = 'Unknown'
	export let author = {
		username: 'elclark',
		firstName: 'Elclark',
		lastName: 'Kuhu',
		avatar: 'https://elclark.my.id/images/elclark.png',
		twitter: 'elclark_kuhu'
	}
	export let directLink
	export let description
	export let createdAt
	export let updatedAt
	// export let thumbnail
	// export let filetype

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
	title={name + ' - ' + 'Elclark Files'}
	{description}
	path={$page.url.pathname}
	authorName={`${author.firstName} ${author.lastName}`}
	authorEmail={author.email}
	twitterUsername={`@${author.twitter.username}`}
/>

<div>
	<main class="container">
		<header>
			<div class="left">
				<div class="image">
					<File />
				</div>
				<div class="info">
					<h1>{name}</h1>
					<p>{bytesToSize(size)} - <time datetime={utcDate}>{date}</time></p>
				</div>
			</div>

			<div class="right">
				<a href={directLink}>DOWNLOAD</a>
			</div>
		</header>
		<article>
			<slot />
		</article>
	</main>
</div>

<style>
	main {
		--margin: 15px;
		padding: 1.25rem;
	}

	header {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;

		width: 100%;
		height: max-content;
		padding: 1rem;

		background: rgba(var(--r-on-background), 0.1);
		border-radius: 0.75rem;
	}

	.left {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-bottom: 1rem;
	}

	.image {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 0.25rem;
	}

	.info h1 {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: var(--font-semibold);
		margin: 0;
	}

	.info p {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: var(--font-light);
		margin: 0;
	}

	.right {
		width: 100%;
	}

	a {
		width: 100%;
		text-align: center;
		font-weight: var(--font-semibold);
		padding: 1rem 1.5rem;
		border-radius: 0.25rem;

		background: var(--c-primary);
		color: var(--c-on-primary);
		text-decoration: none;
	}

	a:hover {
		cursor: pointer;
		box-shadow: none;
		filter: none;
	}

	article {
		padding: 0 0.5rem;
	}

	:global(article img) {
		width: 100%;
	}

	:global(article h2) {
		font-size: 1.75rem;
		font-weight: var(--font-semibold);
		line-height: 1rem;
		margin: var(--margin) 0;
	}

	:global(article h3) {
		font-size: 1.25rem;
		font-weight: var(--font-semibold);
		line-height: 1.75rem;
		margin: var(--margin) 0;
	}

	:global(article p) {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: var(--font-light);
		margin: var(--margin) 0;
	}

	:global(article strong) {
		font-weight: var(--font-semibold);
	}

	:global(article li) {
		font-size: 1rem;
		font-weight: var(--font-light);
		margin: 0.25rem 0;
	}

	:global(article hr) {
		opacity: 0.5;
		margin: var(--margin) 0;
		color: rgba(var(--r-on-background), 0.15);
		border-color: rgba(var(--r-on-background), 0.15);
	}

	@media (min-width: 768px) {
		header {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			width: 100%;
		}

		.left {
			height: 100%;
			margin-bottom: 0;
		}

		.right {
			width: auto;
		}
	}

	@media (min-width: 1024px) {
	}
</style>
