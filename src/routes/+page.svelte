<script>
	import Meta from '$lib/components/meta.svelte'
	import Elclark from '$lib/icons/elclark.svelte'

	import Button from '$lib/components/button.svelte'
	import Separator from '$lib/components/separator.svelte'

	import Card from '$lib/components/card.svelte'
</script>

<Meta image="https://elclark.my.id/images/elclark.png" keywords={['landing', 'home', 'homepage']} />

<div class="container">
	<main>
		<div class="logo">
			<Elclark />
		</div>
		<h1>Elclark Kuhu</h1>

		<p class="about">
			I'm a Software Engineer, UI/UX designer and system administration. I love learning and trying
			new things. I'm passionate about technology, science, music, and gaming.
		</p>

		<Separator />

		<div class="buttons">
			<Button href="/contact/">Contact</Button>
			<Button href="/socials/" color="filled-tonal">Socials</Button>
		</div>

		<div class="cards">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	</main>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;

		padding: 1rem;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 15rem;
		height: 15rem;
		padding: 1.25rem;
		margin: 1.25rem 0;

		filter: drop-shadow(0 0 0.25rem var(--primary));

		background-color: var(--primary);
		color: var(--on-primary);

		border-radius: 50%;
	}

	:global(.logo svg) {
		filter: drop-shadow(0 0 0.2rem var(--on-primary));
		animation: spin 15s infinite linear;
	}

	h1 {
		font-size: 2rem;
		margin: 0.5rem 0;
	}

	.about {
		margin: 0.5rem 0;
		text-align: center;
		font-size: 1.125rem;
		line-height: 1.2rem;
		max-width: 25rem;
	}

	p {
		font-size: 1rem;
		margin: 0;
	}

	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 0.5rem 0;
	}

	.cards {
		margin: 1rem 0;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
