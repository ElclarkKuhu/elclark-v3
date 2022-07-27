<script>
	import Header from '$components/header.svelte'
	import Footer from '$components/footer.svelte'

	import { page } from '$app/stores'
	import { fade } from 'svelte/transition'
</script>

<Header />
{#key $page.url}
	<div in:fade>
		<slot />
	</div>
{/key}
<Footer />

<style>
</style>
