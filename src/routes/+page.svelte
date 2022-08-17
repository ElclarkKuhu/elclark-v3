<script>
	import Meta from '$lib/components/meta.svelte'
	import Elclark from '$lib/icons/elclark.svelte'

	import { onMount } from 'svelte'

	let height = undefined

	onMount(() => {
		height = window.innerHeight + 'px'
		window.onresize = () => {
			height = window.innerHeight + 'px'
		}
	})
</script>

<Meta image="https://elclark.my.id/images/elclark.png" keywords={['landing', 'home', 'homepage']} />

<div class="container">
	<main style:height>
		<div class="logo">
			<Elclark />
		</div>
		<h1>Elclark Kuhu</h1>

		<p class="about">
			I'm a Software Engineer, UI/UX designer and system administration. I love learning and trying
			new things. I'm passionate about technology, science, music, and gaming.
		</p>

		<div class="buttons">
			<a href="/contact/" class="button tertiary">Contact Me</a>
		</div>
		<a href="/links/" class="text-button">Socials</a>
	</main>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
	}

	main {
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.logo {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 15rem;
		height: 15rem;
		padding: 1.25rem;

		filter: drop-shadow(0 0 0.25rem var(--primary));

		background-color: var(--primary);
		color: var(--on-primary);

		border-radius: 5%;
	}

	h1 {
		font-size: 2rem;
		margin: 0;
		margin-top: 1rem;
	}

	p {
		font-size: 1rem;
		margin: 0;
	}

	.text-button {
		font-size: 1.12rem;
		font-weight: 600;

		padding: 0.5rem;
		color: var(--tertiary);
	}

	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-top: 1.5rem;
	}

	.button {
		display: inline-block;

		min-width: 10rem;
		text-align: center;

		margin: 0.15rem;
		padding: 0.75rem 1.75rem;

		border-radius: 2rem;

		font-size: 1.2rem;
		font-weight: 600;

		background-color: transparent;
		color: var(--primary);
	}

	.button:hover {
		filter: drop-shadow(0 0 0.25rem var(--primary));
	}

	.button.tertiary {
		background-color: var(--tertiary);
		color: var(--on-tertiary);
	}

	.button.tertiary:hover {
		filter: drop-shadow(0 0 0.25rem var(--tertiary));
	}

	.about {
		margin-top: 1rem;
		text-align: center;
		font-size: 1.125rem;
		line-height: 1.2rem;
		max-width: 25rem;
	}
</style>
