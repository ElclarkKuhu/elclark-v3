<script>
	import dayjs from 'dayjs'
	import ripple from '$lib/ripple.js'

	export let href = '/'
	export let type = 'blog'

	export let image = 'https://elclark.my.id/images/elclark.png'
	export let title = 'This Website Is Under Construction!'
	export let author = 'Elclark Kuhu'
	export let date = '2022-08-20T21:27:47Z'

	function formatDate(date) {
		// check if date is longger than a year
		if (dayjs().diff(date, 'year') > 0) {
			return dayjs(date).format('MMMM D, YYYY')
		}

		return dayjs(date).format('MMMM DD')
	}
</script>

<a {href} on:click={ripple}>
	<img src={image} alt={title} />
	<div>
		<h2>{title}</h2>
		<p>
			{author} - {formatDate(date)}
		</p>
	</div>
</a>

<style>
	a {
		display: grid;
		grid-template-columns: auto 1fr;

		overflow: hidden;
		transition: none;
		border-radius: 0.5rem;

		position: relative;
		padding: 0.25rem;
		margin: 0.25rem 0;
		max-width: 25rem;

		color: currentColor;
		background-color: rgba(var(--raw-on-background), 0.1);

		transition: background-color 200ms ease;
	}

	a:hover {
		filter: none;
		background-color: rgba(var(--raw-primary), 0.2);
	}

	img {
		width: 6rem;
		height: 6rem;
		border-radius: 0.5rem;
		object-fit: cover;

		pointer-events: none;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;

		padding: 0 1rem;

		pointer-events: none;
	}

	h2 {
		font-size: 1.25rem;
		font-weight: 500;
		line-height: 1.55rem;
		margin: 0;
	}

	p {
		display: inline-block;
		font-size: 0.875rem;
		font-weight: 300;

		padding: 0.25rem 1rem;
		margin: 0;
		margin-bottom: 0.5rem;

		border-radius: 1rem;

		background-color: rgba(var(--raw-on-background), 0.1);
	}

	@keyframes scale {
		0% {
			width: 0;
			height: 0;
		}
		100% {
			width: 15rem;
			height: 15rem;
			opacity: 0;
		}
	}
</style>
