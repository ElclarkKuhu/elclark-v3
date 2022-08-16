<script>
	import Card from '$components/blog/card.svelte'
	import globToArray from '$lib/globToArray'

	const modules = import.meta.globEager('./*.md')
	const blogs = globToArray(modules)
</script>

<main>
	<h1>Blog Posts</h1>
	<div class="posts">
		{#each blogs as blog}
			<Card
				href={blog.key.replace('./', '/blog/').slice(0, -3)}
				featuredImage={blog.metadata.featuredImage}
				title={blog.metadata.title}
				summary={blog.metadata.description}
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
