<script>
	import Elclark from '$components/icons/elclark.svelte'
</script>

<div class="container">
	<div class="hero">
		<div class="wrapper">
			<h1>I'm Elclark, Student and software engineer.</h1>
			<p>
				I'm a software engineer and system administrator from Manado, Indonesia. I also a university
				student and UI/UX designer. I'm passionate about technology, science, music, and gaming.
			</p>
		</div>
		<div class="icon">
			<Elclark size="100%" />
		</div>
	</div>
</div>

<style>
	.container {
		margin: 0 auto;
		padding: 0 var(--container-padding);
		max-width: var(--max-width);

		overflow: hidden;
	}

	.hero {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		justify-content: center;

		margin: 0;
		padding: var(--medium) 0;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-size: var(--xxlarge);
		font-weight: var(--bold);
		letter-spacing: var(--xxxsmall);
		color: var(--color-primary);
		margin: 0;
		margin-bottom: var(--medium);
		padding: 0;
	}

	p {
		font-size: var(--medium);
		line-height: var(--xlarge);
		font-weight: var(--normal);
		margin: 0;
		margin-bottom: var(--xxlarge);
	}

	.icon {
		display: flex;
		width: 75%;
		aspect-ratio: 1;
		border-radius: 50%;
		color: var(--color-primary);
		filter: drop-shadow(0 0 0.5rem currentColor);
		margin-bottom: var(--header-height);

		animation: rotate 12s infinite linear;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@media (min-height: 768px), (min-width: 1024px) {
		.container {
			position: sticky;
			top: calc(var(--header-height) + var(--xxxlarge));
			z-index: -1;
			left: 0;
		}
	}

	@media (min-width: 768px) {
		.hero {
			display: grid;
			grid-template-columns: 70% 30%;

			margin: var(--xxlarge) 0;
			padding: var(--xxxlarge) 0;
		}

		.icon {
			margin: 0;
			width: 100%;
		}

		h1 {
			font-size: var(--xxlarge);
			letter-spacing: var(--xxxsmall);
		}

		p {
			font-size: var(--medium);
			line-height: var(--xlarge);
			padding: 0 calc(var(--xxlarge) * 2) 0 0;
		}
	}

	@media (min-width: 1024px) {
		h1 {
			font-size: var(--xxxlarge);
			letter-spacing: var(--xxxsmall);
		}

		p {
			font-size: var(--large);
			line-height: var(--xxlarge);
			padding: 0 calc(var(--xxlarge) * 2) 0 0;
		}
	}

	@media (min-width: 1280px) {
		.hero {
			padding: var(--xxlarge) 0;
		}

		h1 {
			font-size: var(--xxxlarge);
			font-weight: var(--bold);
			letter-spacing: var(--xxsmall);
			color: var(--color-primary);
			margin: 0;
			margin-bottom: var(--medium);
			padding: 0;
		}

		p {
			font-size: var(--xlarge);
			line-height: var(--xxlarge);
			font-weight: var(--normal);
			margin: 0;
			padding: 0 calc(var(--xxlarge) * 3) 0 0;
		}
	}
</style>
