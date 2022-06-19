<script>
	export let featuredImage
	export let href = '#'
	export let title = 'Elclark'
	export let summary = 'A blog about web development'
</script>

<a {href}>
	<div class="img" style:background-image={featuredImage ? `url(${featuredImage})` : 'none'}>
		<div class="overlay" />
	</div>

	<div class="info">
		<h2>{title}</h2>
		<p>{summary}</p>
	</div>
</a>

<style>
	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;

		width: 100%;
		height: auto;

		background: var(--color-surface);
		color: var(--color-on-surface);

		overflow: hidden;
		text-decoration: none;
		border-radius: var(--medium);
		filter: none;

		transition: background 200ms ease;
	}

	a::after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.05;
		background: var(--color-primary);
		transition: opacity 200ms ease;
	}

	a:hover::after {
		opacity: 0.1;
		filter: none;
	}

	.img {
		width: 100%;
		height: auto;
		aspect-ratio: 2/1;

		background-size: cover;
		background-position: center;
	}

	.img .overlay {
		width: 100%;
		height: 100%;

		background: linear-gradient(to top, var(--color-surface) 0%, #201a1a00 25%);
	}

	.info {
		transform: none;
		padding: 0 var(--medium) var(--large) var(--medium);

		transition: none;
	}

	h2 {
		font-family: var(--font);
		font-size: var(--large);
		font-weight: var(--bold);
		margin: 0 0 var(--xsmall) 0;
	}

	p {
		font-family: var(--font);
		font-size: var(--font-size);
		font-weight: var(--normal);
		margin: 0;
	}

	@media (min-width: 768px) {
		a {
			flex-direction: row;
			height: 10rem;
		}

		a:hover .info {
			transform: translateX(calc((var(--medium) * 1.5) * -1));
		}

		.img {
			width: auto;
			height: 100%;
			aspect-ratio: 1.5/1;
		}

		.img .overlay {
			background: linear-gradient(to left, var(--color-surface), #201a1a00);
		}

		.info {
			transform: translateX(calc((var(--medium) * 2) * -1));
			padding: var(--large) var(--medium);

			transition: transform 200ms ease;
		}

		h2 {
			font-family: var(--font);
			font-size: var(--xlarge);
			font-weight: var(--bold);
		}
	}
</style>
