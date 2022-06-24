<script>
	import { onMount } from 'svelte'
	import { fade, slide } from 'svelte/transition'

	import Elclark from '$components/icons/elclark.svelte'
	import Menu from '$components/icons/menu.svelte'
	import Close from '$components/icons/close.svelte'

	let height = '0px'
	let navOpen = false

	function toggleNav() {
		navOpen = !navOpen
	}

	onMount(() => {
		height = window.innerHeight + 'px'

		window.addEventListener('resize', () => {
			if (navOpen) {
				height = window.innerHeight + 'px'
			}
		})
	})
</script>

<div class="container">
	<div class="header">
		<div class="left">
			<a href="/">
				<div class="icon">
					<Elclark size="2rem" />
				</div>
				<span>Elclark</span>
			</a>
		</div>

		{#if navOpen}
			<nav class="mobile" on:click={toggleNav} transition:slide style:height>
				<div class="close" transition:fade>
					<Close size="2rem" />
				</div>
				<a href="/about">About</a>
				<a href="https://paypal.me/elclarkkuhu">Support</a>
				<a href="https://github.com/ElclarkCodes/Elclark#changlogs">Chages</a>
				<a href="/contact">Contact</a>
			</nav>
		{:else}
			<nav>
				<a href="/about">About</a>
				<a href="https://paypal.me/elclarkkuhu">Support</a>
				<a href="https://github.com/ElclarkCodes/Elclark#changlogs">Chages</a>
				<a href="/contact">Contact</a>
			</nav>
		{/if}

		<button aria-label="Menu" on:click={toggleNav}>
			<Menu size="2rem" />
		</button>
	</div>
</div>

<style>
	.container {
		position: sticky;
		top: 0;
		left: 0;

		z-index: 1;

		width: 100%;
		height: var(--header-height);
		background: linear-gradient(to bottom, var(--color-background) 25%, transparent 100%);
		/* backdrop-filter: blur(1rem); */
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin: 0 auto;
		padding: 0 var(--container-padding);
		max-width: var(--max-width);
		height: 100%;
	}

	.left {
		display: flex;
		align-items: center;

		color: var(--color-primary);
	}

	.icon {
		display: none;
	}

	.left a {
		display: flex;
		align-items: center;
		text-decoration: none;
		padding: var(--xxsmall);
		color: currentColor;
	}

	.left span {
		display: block;
		height: 100%;

		font: var(--font);
		font-size: var(--xlarge);
		font-weight: var(--xnormal);
		letter-spacing: 0.05rem;
		color: currentColor;

		transition: all 200ms ease;
	}

	a:focus span,
	a:hover span {
		padding: 0 var(--xsmall);

		background: var(--color-primary);
		color: var(--color-on-primary);
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;

		border: none;
		background: none;
		color: var(--color-primary);
	}

	nav {
		display: none;
	}

	.mobile {
		position: absolute;
		top: 0;
		left: 0;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;

		background: var(--color-primary-container);
		color: var(--color-on-primary-container);
	}

	nav a {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 75%;
		height: var(--xxxlarge);

		text-decoration: none;
		color: currentColor;

		padding: var(--xsmall) var(--xxxsmall);
		margin: var(--xsmall) 0;
	}

	a {
		transition: all 300ms ease;
		border-radius: var(--xxsmall);
	}

	a:focus,
	a:focus-visible {
		outline: none;
		box-shadow: var(--color-primary) 0 0 0 0.1rem;
	}

	.close {
		position: absolute;
		top: var(--large);
		right: var(--large);
	}

	@media (min-width: 768px) {
		.icon {
			display: flex;
			align-items: center;
			filter: drop-shadow(0 0 0.15rem currentColor);
		}

		nav {
			display: grid;
			grid-template-columns: repeat(4, auto);
			grid-gap: var(--small);
			color: var(--color-on-background);
		}

		nav a {
			width: auto;
			height: auto;
			padding: var(--xsmall) var(--xxsmall);
		}

		.left a {
			padding: var(--xxsmall) var(--xsmall);
			border-radius: 2rem 0.25rem 0.25rem 2rem;
		}

		.left span {
			margin-left: var(--medium);
		}

		button {
			display: none;
		}

		nav a:last-child {
			padding: var(--xsmall) var(--small);
			box-shadow: currentColor 0 0 0 0.1rem;

			transition: all 200ms ease;
		}

		nav a:last-child:hover,
		nav a:last-child:focus {
			box-shadow: var(--color-primary) 0 0 0 0.1rem;
			color: var(--color-primary);
		}
	}

	/* @media (min-width: 1024px) {
	}

	@media (min-width: 1280px) {
	} */
</style>
