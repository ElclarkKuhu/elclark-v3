<script>
	import Header from '$components/header.svelte'
	import Footer from '$components/footer.svelte'
</script>

<div class="container">
	<Header title="Users" />
	<main>
		<div class="coming-soon">
			<h1>Coming Soon</h1>
			<p>This feature is coming soon!</p>
		</div>
	</main>
	<Footer />
</div>

<style>
	.coming-soon {
		background: var(--color-tertiary);
		border-radius: var(--value-radius);
		padding: 1rem 1.5rem;
		color: var(--color-on-tertiary);
	}

	.coming-soon h1 {
		margin: 0;
		margin-bottom: 0.5rem;

		font-size: 1.5rem;
		font-weight: 500;

		color: var(--color-on-tertiary);

		font-weight: bold;
	}

	.coming-soon p {
		margin: 0;
		margin-bottom: 0.5rem;
	}
</style>
