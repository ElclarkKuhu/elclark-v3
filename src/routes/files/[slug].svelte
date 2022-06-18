<script context="module">
	import { getEntries } from '$lib/contentful.js'

	export async function load({ params, fetch }) {
		let author
		let entries

		try {
			entries = await getEntries(fetch, {
				contentType: 'file',
				fields: [
					{
						name: 'slug',
						value: params.slug
					}
				]
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
				error: 'The file you requested does not exist.'
			}
		}

		let file = entries.items[0].fields
		let date = {
			createdAt: entries.items[0].sys.createdAt,
			updatedAt: entries.items[0].sys.updatedAt
		}

		try {
			author = await getEntries(
				fetch,
				{
					contentType: 'author'
				},
				file.author.sys.id
			)
		} catch (error) {
			console.log(error)

			return {
				status: 500,
				error
			}
		}

		return {
			props: {
				file,
				author,
				date
			}
		}
	}
</script>

<script>
	import moment from 'moment'
	import { onDestroy } from 'svelte'
	import bytesToSize from '$lib/bytesToSize'

	import Link from '$components/link.svelte'
	import Header from '$components/header.svelte'
	import Footer from '$components/footer.svelte'

	export let file
	export let date
	export let author

	file.createdAt = moment(date.createdAt).fromNow()
	let createdAt = setInterval(() => {
		file.createdAt = moment(date.createdAt).fromNow()
	}, 1000)

	// file.updatedAt = moment(date.updatedAt).fromNow()
	// let updatedAt = setInterval(() => {
	// 	file.updatedAt = moment(date.updatedAt).fromNow()
	// }, 500)

	onDestroy(() => {
		clearInterval(createdAt)
		// clearInterval(updatedAt)
	})
</script>

<div class="container">
	<Header title="Files" />
	<main>
		<div class="info">
			<h2 class="filename">{file.name}</h2>
			<a href="/profiles/{author.fields.username}" class="owner"
				>{author.fields.firstName} {author.fields.lastName}</a
			>
			-
			<span class="size">{bytesToSize(file.size)}</span> -
			<span class="date">Uploaded {file.createdAt}</span>
		</div>
		<Link href={file.url} type="tertiary">Download</Link>
	</main>
	<Footer />
</div>

<style>
	.info {
		background: var(--color-tertiary);
		border-radius: var(--value-radius);
		padding: 1rem 1.5rem;
		color: var(--color-on-tertiary);
	}

	.info .filename {
		margin: 0;
		margin-bottom: 0.5rem;

		font-size: 1.5rem;
		font-weight: 500;

		color: var(--color-on-tertiary);

		font-weight: bold;
	}

	.info .owner {
		display: inline-block;
		border-radius: 1rem;
		padding: 0.25rem 0.5rem;
		color: var(--color-on-tertiary-contaner);
		background: var(--color-tertiary-contaner);
		text-decoration: none;
	}

	.info span {
		padding: 0.1rem 0;
	}
</style>
