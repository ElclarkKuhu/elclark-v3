<script>
	import formatDate from '$lib/formatDate'

	import SEO from '$components/seo.svelte'
	import Card from '$components/blog/card.svelte'
	import Hero from '$components/hero.svelte'

	export let blogs

	function getDate(createdAt, updatedAt) {
		if (updatedAt) {
			return `Updated ${formatDate(updatedAt)}`
		}

		if (createdAt) {
			return formatDate(createdAt)
		} else {
			return 'Unknown'
		}
	}
</script>

<SEO image="https://elclark.my.id/images/elclark.png" keywords={['landing', 'home', 'homepage']} />

<Hero />
<main class="container">
	<div>
		{#each blogs as blog}
			<Card
				href={blog.path}
				featured={blog.featured}
				featuredImage={blog.featuredImage}
				title={blog.title}
				description={blog.description}
				date={getDate(blog.createdAt, blog.updatedAt)}
			/>
		{/each}
	</div>
</main>

<style>
	main {
		padding: 1.25rem;
	}

	main div {
		display: grid;
		grid-gap: 0.5rem;
	}
</style>
