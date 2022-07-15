<script>
	import { page } from '$app/stores'
	import { onDestroy } from 'svelte'
	import formatDate from '$lib/formatDate'

	import SEO from '$components/seo.svelte'

	export let title = 'Untitled'
	export let author = 'elclark'
	export let createdAt
	export let updatedAt
	export let description
	export let featuredImage

	// Until Author Profiles are implemented, this is the default author profile
	author = {
		username: 'elclark',
		firstName: 'Elclark',
		lastName: 'Kuhu',
		avatar: 'https://elclark.my.id/images/elclark.png',
		bio: 'I\'m a software engineer and a writer. I\'m currently working at <a href="https://elclark.my.id">elclark.my.id</a>.',
		website: 'https://elclark.my.id',
		email: 'founder@elclark.my.id',
		twitter: {
			username: 'elclark_kuhu',
			url: 'https://twitter.com/elclark_kuhu'
		},
		github: {
			username: 'ElclarkKuhu',
			url: 'https://github.com/ElclarkKuhu'
		},
		instagram: {
			username: 'elclark__',
			url: 'https://instagram.com/elclark__'
		},
		linkedin: {
			username: 'Elclark Kuhu',
			url: 'https://www.linkedin.com/in/elclark-kuhu/'
		},
		youtube: {
			username: 'Elclark',
			url: 'https://www.youtube.com/c/ElclarkOfficial'
		}
	}

	let date = 'Unknown'
	let utcDate = updatedAt || createdAt
	let dateLoop

	if (createdAt) {
		if (updatedAt) {
			if (createdAt === updatedAt) {
				date = formatDate(createdAt)
				dateLoop = setInterval(() => {
					date = formatDate(createdAt)
				}, 1000)
			} else {
				date = 'Updated ' + formatDate(updatedAt)
				dateLoop = setInterval(() => {
					date = 'Updated ' + formatDate(updatedAt)
				}, 1000)
			}
		} else {
			date = formatDate(createdAt)
			dateLoop = setInterval(() => {
				date = formatDate(createdAt)
			}, 1000)
		}
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
	authorName={`${author.firstName} ${author.lastName}`}
	authorEmail={author.email}
	twitterUsername={`@${author.twitter.username}`}
/>

<div>
	<main class="container">
		<header>
			<h1>{title}</h1>
			<p class="description"><i>{description}</i></p>

			<div class="author">
				<img src={author.avatar} alt="{author.firstName}'s Avatar" class="author-image" />
				<div class="author-info">
					<p>{author.firstName} {author.lastName}</p>
					<time datetime={utcDate}>{date}</time>
				</div>
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

	.author {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 12px 0;
	}

	.author-image {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		margin-right: 0.5rem;
	}

	.author-info {
		display: flex;
		flex-direction: column;
	}

	.author-info p {
		font-size: 0.875rem;
		line-height: 1.1rem;
		font-weight: var(--font-light);
		margin: 0;
	}

	.author-info p:first-child {
		font-weight: var(--font-semibold);
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
