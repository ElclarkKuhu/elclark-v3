<script>
	import Button from '$components/button.svelte'
</script>

<div class="container">
	<main>
		<h1>Coming Soon!</h1>
		<p>This page is currently under construction. Please check back later!</p>
		<div class="right-button">
			<Button href="/" color="filled-tonal">Go Back</Button>
		</div>
	</main>
</div>

<style>
	main {
		margin: 2.5rem 0;
	}

	h1 {
		font-size: 2rem;
		font-weight: 500;
		margin: 0.5rem 0;
	}

	p {
		margin: 0.5rem 0;
	}

	.right-button {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin: 1.5rem 0;
	}
</style>
