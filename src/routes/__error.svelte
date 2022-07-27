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

<svelte:head>
	<title>{status} {error}</title>
</svelte:head>

<div class="container">
	<main>
		<h1>Something went wrong!</h1>
		<p><code>{error} ({status})</code></p>
		<a sveltekit:prefetch href="/">Go Home</a>
	</main>
</div>

<style>
	main {
		padding: 1.25rem;
	}
</style>
