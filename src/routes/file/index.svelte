<script>
	import moment from 'moment'
	import { page } from '$app/stores'
	import bytesToSize from '$lib/bytesToSize'
	import formatDate from '$lib/formatDate'

	export let files

	const title = 'Elclark Files'
	const description = 'Find all files uploaded by Elclark'
	const image = 'https://elclark.my.id/images/elclark.png'
</script>

<main>
	<div class="container">
		<h1>Files</h1>
		{#each files as file}
			<a sveltekit:prefetch href="/file{file.path}">
				<h3>
					{file.name}
				</h3>
				<p>
					Uploaded <time datetime={file.createdAt}>{formatDate(file.createdAt)}</time>
					-
					{#if file.updatedAt !== file.createdAt}
						Updated <time datetime={file.createdAt}>{formatDate(file.updatedAt)}</time>
						 -
					{/if}
					{bytesToSize(file.size)}
				</p>
			</a>
		{/each}
	</div>
</main>

<style>
	.container {
		padding: 1.25rem;
	}

	a {
		display: block;
		padding: 1.5rem 2.5rem;
		margin-bottom: 0.5rem;

		position: relative;

		background: var(--c-tertiary);
		color: var(--c-on-tertiary);

		border-radius: 0.5rem;
		overflow: hidden;
	}

	a::after {
		content: '';
		display: block;
		width: 100%;
		height: 100%;

		position: absolute;
		top: 0;
		left: 0;

		background: #fff;
		opacity: 0;

		transition: opacity 200ms ease;
	}

	a:hover::after {
		opacity: 0.2;
	}

	h3 {
		margin: 0;
		margin-bottom: 0.25rem;
		font-size: 1.5rem;
	}

	p {
		margin: 0;
		font-size: 1rem;
	}
</style>
