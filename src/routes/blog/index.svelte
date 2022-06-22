<script>
	import Card from '$components/blog/card.svelte'

	export let blogs
</script>

<main>
	<h1>Blog Posts</h1>
	<div class="posts">
		{#each blogs as blog}
			<Card
				href={`/blog/${blog.slug}`}
				featuredImage={blog.featuredImage}
				title={blog.title}
				summary={blog.summary}
			/>
		{/each}
	</div>
</main>

<style>
	main {
		margin: 0 auto;
		padding: 0 var(--container-padding);
		max-width: var(--max-width);
	}

	.posts {
		display: grid;
		grid-gap: var(--small);
		grid-template-columns: repeat(1, 1fr);
		margin: var(--large) auto 0 auto;
	}
</style>
