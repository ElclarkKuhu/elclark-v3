<script>
	export let date
	export let href = '#'

	// coming soon
	// export let featured = false

	export let author = 'Elclark Kuhu'
	export let authorImage = 'https://elclark.my.id/img/brand/elclark.svg'

	export let title =
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo provident reiciendis incidunt.'
	export let description =
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere excepturi quo tenetur doloremque cumque aliquid.'
	export let featuredImage
</script>

<a {href}>
	<div class="card">
		{#if featuredImage}
			<img src={featuredImage} alt={title} class="card-image" />
		{/if}

		<div class="card-info">
			<div class="post-info">
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div class="author-info">
				<img src={authorImage} alt="{author}'s Avatar" class="author-image" />
				<div class="author-info-text">
					<p>{author}</p>
					<p>{date}</p>
				</div>
			</div>
		</div>
	</div>
</a>

<style>
	a {
		text-decoration: none;
		color: inherit;
	}

	a:hover {
		filter: none;
	}

	.card {
		display: flex;
		flex-direction: column;

		padding: 0.5rem;
		border-radius: 1rem;

		background: rgba(var(--r-on-background), 0.05);
		transition: background 200ms ease;
	}

	.card:hover {
		background: rgba(var(--r-on-background), 0.1);
	}

	.card-image {
		width: 100%;
		aspect-ratio: 2/1;
		object-fit: cover;
		border-radius: 0.75rem;
	}

	.card-info {
		padding: 1rem;
	}

	.post-info h2 {
		display: inline;

		font-size: 1.875rem;
		line-height: 1.75rem;
		font-weight: var(--font-semibold);

		margin: 0;

		background: linear-gradient(to right, var(--c-primary), var(--c-secondary), var(--c-tertiary));
		background-position: 0% 100%;
		background-size: 0% 0.2rem;
		background-repeat: no-repeat;

		transition: background-size 300ms ease, background-position 0ms linear 300ms;
	}

	a:hover .post-info h2 {
		background-size: 100% 0.2rem;
		background-position: 100% 100%;
	}

	.post-info p {
		font-size: 1.125rem;
		line-height: 1.5rem;
		font-weight: var(--font-light);

		margin: 0;
		margin-top: 0.75rem;
	}

	.author-info {
		display: none;
	}

	.author-image {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		margin-right: 0.5rem;
	}

	.author-info-text {
		display: flex;
		flex-direction: column;
	}

	.author-info-text p {
		font-size: 0.875rem;
		line-height: 1.1rem;
		font-weight: var(--font-light);
		margin: 0;
	}

	.author-info-text p:first-child {
		font-weight: var(--font-semibold);
	}

	@media (min-width: 640px) {
		/* nothing */
	}

	@media (min-width: 768px) {
		.card {
			flex-direction: row;
		}

		.card-image {
			width: 15rem;
			aspect-ratio: 1;
		}

		.card-info {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		.post-info h2 {
			font-size: 2.25rem;
			line-height: 2.5rem;
		}

		.author-info {
			display: flex;
			flex-direction: row;
			align-items: center;
		}
	}
</style>
