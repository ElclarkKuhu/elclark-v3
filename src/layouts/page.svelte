<script>
	import { page } from '$app/stores'
	import moment from 'moment'

	import SEO from '$components/seo.svelte'

	export let title
	export let description
	export let createdAt
	export let updatedAt
	export let featuredImage
</script>

<SEO
	{title}
	image="https://elclark.my.id/images/elclark.png"
	{description}
	path={$page.url.pathname}
/>

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

	@media (min-width: 1024px) {
		.container {
			--margin: 10px;
		}
	}
</style>
