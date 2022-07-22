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
		height = window.innerHeight + 'px'
	}

	onMount(() => {
		height = window.innerHeight + 'px'

		window.addEventListener('resize', () => {
			if (navOpen) {
				height = window.innerHeight + 'px'
			}

			if (window.innerWidth > 768) {
				navOpen = false
				height = '0px'
			}
		})
	})
</script>

<div class="sticky">
	<div class="container header">
		<div class="logo">
			<a href="/">
				<div class="icon">
					<Elclark size="2.25rem" />
				</div>
				<span>Elclark</span>
			</a>
		</div>

		<button aria-label="Menu" type="button" on:click={toggleNav}>
			<Menu size="2.25rem" />
		</button>

		{#if navOpen}
			<div
				class="mobile-wrapper"
				on:click={toggleNav}
				in:slide={{ duration: 400 }}
				out:slide={{ delay: 100, duration: 400 }}
				style:height
			>
				<nav class="container mobile" in:fade={{ delay: 200 }} out:fade={{ duration: 200 }}>
					<div class="close">
						<Close size="2.25rem" />
					</div>
					<a href="/profiles/elclark">About</a>
					<a href="https://paypal.me/elclarkkuhu">Support</a>
					<a href="https://github.com/ElclarkCodes/Elclark#changlogs">Chages</a>
					<a href="/contact">Contact</a>
				</nav>
			</div>
		{:else}
			<nav class="desktop">
				<a href="/profiles/elclark">About</a>
				<a href="https://paypal.me/elclarkkuhu">Support</a>
				<a href="https://github.com/ElclarkCodes/Elclark#changlogs">Chages</a>
				<a href="/contact">Contact</a>
			</nav>
		{/if}
	</div>
</div>

<style>
	.sticky {
		position: sticky;
		top: 0;
		left: 0;

		z-index: 1;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 1rem 1.25rem;

		background: linear-gradient(
			to bottom,
			var(--c-background) 25%,
			rgba(var(--r-background), 0) 100%
		);
		/* backdrop-filter: blur(1rem); */
	}

	.icon {
		display: flex;
		margin-right: 0.75rem;
		filter: drop-shadow(0 0 0.15rem var(--c-primary));

		transition: transform 500ms ease;
	}

	.logo {
		display: flex;
		align-items: center;

		color: var(--c-primary);
	}

	.logo a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: currentColor;
	}

	.logo a:hover {
		filter: none;
	}

	.logo span {
		display: block;
		font-size: 1.5rem;
		font-weight: var(--font-semibold);
		letter-spacing: 0.05rem;
		color: currentColor;

		transition: all 200ms ease;
	}

	a:hover span,
	a:active span {
		padding: 0 0.5rem;

		background: var(--c-primary);
		color: var(--c-on-primary);
	}

	a:hover .icon,
	a:active .icon {
		transform: rotate(180deg);
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;

		border: none;
		background: none;
		border-radius: 0.5rem;
		color: var(--color-primary);

		padding: 0.25rem;

		transition: all 200ms ease;
	}

	button:hover,
	button:active {
		color: var(--c-primary);
		background: rgba(var(--r-on-background), 0.1);
		outline: none;
	}

	nav {
		display: none;
	}

	.mobile-wrapper {
		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;

		z-index: 2;

		background: var(--c-primary);
		color: var(--c-on-primary);
	}

	.mobile {
		position: relative;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: 100%;
	}

	.close {
		position: absolute;
		top: 1rem;
		right: 1.25rem;

		padding: 0.25rem;
	}

	.mobile a {
		font-size: 1.125rem;
		line-height: 1.75rem;

		min-width: 50%;
		padding: 1rem;
		margin: 0.25rem 0;
		border-radius: 0.25rem;
		text-align: center;

		background: rgba(var(--r-on-background), 0.5);
		color: var(--c-on-primary);
	}

	.mobile a:hover {
		background: rgba(var(--r-on-background), 0.75);
		filter: none;
	}

	.desktop {
		display: none;
	}

	@media (min-width: 768px) {
		button {
			display: none;
		}

		.desktop {
			display: flex;
		}

		.desktop a {
			color: var(--c-on-background);
			padding: 0.5rem;
		}

		.desktop a:last-child {
			position: relative;
			overflow: hidden;

			border-radius: 0.25rem;
			margin-left: 0.5rem;
			font-weight: var(--font-semibold);
			background: var(--c-primary);
			color: var(--c-on-primary);

			transition: all 300ms ease;
		}

		.desktop a:last-child:hover {
			position: relative;
			border-radius: 0.75rem;
			filter: none;
		}

		.desktop a:last-child::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: var(--c-background);
			opacity: 0;

			transition: all 200ms ease 350ms;
		}

		.desktop a:last-child:hover::before {
			opacity: 0.1;
		}
	}

	@media (min-width: 1024px) {
	}
</style>
