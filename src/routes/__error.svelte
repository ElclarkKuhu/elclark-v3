<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				status: status,
				error: error.message
			}
		}
	}
</script>

<script>
	export let status
	export let error
</script>

<main>
	<h1>Something went wrong!</h1>
	<p><code>{error} ({status})</code></p>
	<a href="/">Go Home</a>
</main>

<style>
	main {
		margin: var(--xxxlarge) auto 0 auto;
		padding: 0 var(--container-padding);
		max-width: var(--max-width);
	}
</style>
