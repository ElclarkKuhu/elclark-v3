<script context="module">
	import { getEntries } from '$lib/contentful.js'

	export async function load({ fetch }) {
		let entries

		try {
			entries = await getEntries(fetch, {
				contentType: 'file',
				order: '-sys.createdAt'
			})
		} catch (error) {
			return {
				status: 500,
				error
			}
		}

		if (entries.items.length === 0) {
			return {
				status: 404,
				error: 'No files found'
			}
		}

		return {
			props: {
				files: entries.items
			}
		}
	}
</script>

<script>
	import moment from 'moment'
	import bytesToSize from '$lib/bytesToSize'

	import Header from '$components/header.svelte'
	import Footer from '$components/footer.svelte'

	export let files
</script>

<div class="container">
	<Header title="Files" desc="List of all the shared files" showBrand="true" />
	<main>
		{#each files as file}
			<a href="/files/{file.fields.slug}">
				<h3>
					{file.fields.name}
				</h3>
				<p>
					Uploaded {moment(file.sys.createdAt).fromNow()} -
					{#if file.sys.updatedAt !== file.sys.createdAt}
						Updated {moment(file.sys.updatedAt).fromNow()} -
					{/if}
					{bytesToSize(file.fields.size)}
				</p>
			</a>
		{/each}
	</main>
	<Footer />
</div>

<style>
	a {
		display: block;
		padding: 1.5rem 2.5rem;
		margin-bottom: 0.5rem;

		position: relative;

		background: var(--color-tertiary);
		color: var(--color-on-tertiary);

		border-radius: var(--value-radius);
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
