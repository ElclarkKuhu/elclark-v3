<script>
	import Meta from '$components/meta.svelte'
	import Badge from './../contact/badge.svelte'

	import { page } from '$app/stores'
</script>

<Meta
	path={$page.url.pathname}
	title="Elclark - Social Media"
	image="https://elclark.my.id/images/elclark.png"
	keywords={['social', 'media', 'socials', 'instagram', 'facebook', 'twitter', 'youtube', 'twitch']}
/>

<div class="container">
	<main>
		<Badge />
		<h1>Social Media</h1>
	</main>
</div>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	h1 {
		font-size: 2rem;
		font-weight: 500;
		margin: 0.5rem 0;
	}
</style>
