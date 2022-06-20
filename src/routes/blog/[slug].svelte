<script>
	import { page } from '$app/stores'
	import { fade } from 'svelte/transition'

	export let more
	export let blog

	const title = `${blog.title} - Elclark`
	const description = blog.summary
	const image = blog.featureImage
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
	<!-- <meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm" /> -->
	<!-- <meta name="abstract" content="" /> -->
	<!-- <meta name="topic" content="" /> -->
	<!-- <meta name="summary" content="" /> -->
	<!-- <meta name="Classification" content="Business" /> -->
	<meta name="author" content="Elclark, founder@elclark.my.id" />
	<meta name="designer" content="Elclark, founder@elclark.my.id" />
	<meta name="owner" content="Elclark" />
	<meta name="url" content={$page.url.href} />
	<meta name="identifier-URL" content={$page.url.origin} />
	<!-- <meta name="directory" content="submission" /> -->
	<meta name="category" content="Tech, Landing Page, Portfolio, Blog" />
	<meta name="coverage" content="Worldwide" />
	<meta name="distribution" content="Global" />
	<meta name="rating" content="General" />
	<!-- <meta name="revisit-after" content="7 days" /> -->
	<!-- <meta http-equiv="Expires" content="0" /> -->
	<!-- <meta http-equiv="Pragma" content="no-cache" /> -->
	<!-- <meta http-equiv="Cache-Control" content="no-cache" /> -->

	<!-- OpenGraph Meta Tags -->
	<meta name="og:title" content={title} />
	<meta name="og:type" content="article" />
	<meta name="og:url" content={$page.url.href} />
	<meta name="og:image" content={image} />
	<meta name="og:site_name" content="Elclark" />
	<meta name="og:description" content={description} />

	<meta name="article:published_time" content={blog.createdAt} />
	<meta name="article:modified_time" content={blog.updatedAt} />
	<!-- <meta name="article:expiration_time" content={blog.expiredAt} /> -->
	<meta name="article:author" content="Elclark" />
	<meta name="article:section" content="Technonlgy" />
	<meta name="article:tag" content="Elclark, Technonlgy, Programming" />

	<!-- <meta name="fb:page_id" content="43929265776" /> -->

	<meta name="og:email" content="mail@elclark.my.id" />
	<!-- <meta name="og:phone_number" content="650-123-4567" /> -->
	<!-- <meta name="og:fax_number" content="+1-415-123-4567" /> -->

	<!-- <meta name="og:latitude" content="37.416343" /> -->
	<!-- <meta name="og:longitude" content="-122.153013" /> -->
	<!-- <meta name="og:street-address" content="1601 S California Ave" /> -->
	<!-- <meta name="og:locality" content="Palo Alto" /> -->
	<meta name="og:region" content="MDO" />
	<!-- <meta name="og:blogal-code" content="94304" /> -->
	<meta name="og:country-name" content="ID" />

	<!-- <meta property="og:type" content="game.achievement" /> -->
	<!-- <meta property="og:points" content="POINTS_FOR_ACHIEVEMENT" /> -->

	<!-- <meta property="og:video" content="http://example.com/awesome.swf" /> -->
	<!-- <meta property="og:video:height" content="640" /> -->
	<!-- <meta property="og:video:width" content="385" /> -->
	<!-- <meta property="og:video:type" content="application/x-shockwave-flash" /> -->
	<!-- <meta property="og:video" content="http://example.com/html5.mp4" /> -->
	<!-- <meta property="og:video:type" content="video/mp4" /> -->
	<!-- <meta property="og:video" content="http://example.com/fallback.vid" /> -->
	<!-- <meta property="og:video:type" content="text/html" /> -->

	<!-- <meta property="og:audio" content="http://example.com/amazing.mp3" /> -->
	<!-- <meta property="og:audio:title" content="Amazing Song" /> -->
	<!-- <meta property="og:audio:artist" content="Amazing Band" /> -->
	<!-- <meta property="og:audio:album" content="Amazing Album" /> -->
	<!-- <meta property="og:audio:type" content="application/mp3" /> -->

	<!-- Twitter Metadata -->
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:url" content={image} />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<article>
	<div class="info">
		<h1>{blog.title}</h1>
		<p>{blog.summary}</p>
	</div>
	<div class="content">
		<img class="main-img" src={blog.featuredImage} alt={blog.title} />
		{@html blog.content}
	</div>
	<div class="sidebar">
		<div class="ads">
			<!-- Temporary -->
			Advertisement
		</div>
		{#if more}
			{#if more.length > 0}
				<div class="more" in:fade>
					<h4>More posts</h4>
					<div>
						{#each more as post}
							<a href="/blog/{post.slug}">{post.title}</a>
						{/each}
					</div>
				</div>
			{/if}
		{/if}
	</div>
</article>

<style>
	article {
		display: grid;
		grid-gap: 1rem;
		grid-template-rows: repeat(3, max-content);

		margin: auto;
		padding: 0 var(--container-padding);
		max-width: var(--max-width);
	}

	.info h1 {
		font-size: var(--xxlarge);
		font-weight: var(--bold);
		margin: var(--medium) 0;
	}

	.info p {
		font-size: var(--medium);
		font-style: italic;
		margin: 0;
	}

	.main-img {
		width: 100%;
		aspect-ratio: 1.75/1;
		object-fit: cover;
		margin: var(--medium) 0;
		border-radius: var(--xsmall);
	}

	.sidebar {
		position: relative;
	}

	.ads {
		width: 100%;
		aspect-ratio: 1;
		margin-top: var(--medium);
		border-radius: var(--xsmall);

		/* Temporary */
		display: flex;
		justify-content: center;
		align-items: center;

		opacity: 0.75;
		background: var(--color-primary);
		color: var(--color-on-primary);
	}

	.more {
		position: sticky;
		top: var(--header-height);

		font-size: var(--medium);
		font-weight: var(--bold);
		margin-top: var(--medium);

		width: 100%;
		min-height: 5rem;
		padding: var(--medium);
		border-radius: var(--xsmall);
		background: var(--color-on-surface-a10);
	}

	.more div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}

	.more h4 {
		font-size: var(--medium);
		font-weight: var(--bold);
		margin: 0 0 var(--medium) 0;
	}

	.more a {
		font-size: var(--medium);
		font-weight: var(--normal);
		margin: 0 0 var(--xxsmall) 0;
	}

	.more a:hover {
		cursor: pointer;
		text-decoration: underline;
	}

	.content :global(h1) {
		font-size: var(--xlarge);
		font-weight: var(--bold);
		margin: 0 0 var(--large) 0;
	}

	.content :global(h2) {
		font-size: var(--large);
		font-weight: var(--bold);
		margin: 0 0 var(--large) 0;
	}

	.content :global(h3) {
		font-size: var(--medium);
		font-weight: var(--bold);
		margin: 0 0 var(--large) 0;
	}

	.content :global(p) {
		width: 100%;
		margin: 0 0 var(--large) 0;
	}

	.content :global(img) {
		width: 100%;
		border-radius: var(--xsmall);
	}

	@media (min-width: 1024px) {
		article {
			grid-template-columns: 70% auto;
		}

		.info {
			grid-column: span 2;
			margin: var(--medium) 0;
		}

		.content :global(h1) {
			font-size: var(--xxlarge);
			font-weight: var(--bold);
		}

		.content :global(h2) {
			font-size: var(--xlarge);
			font-weight: var(--bold);
		}

		.content :global(h3) {
			font-size: var(--large);
			font-weight: var(--normal);
		}
	}
</style>
