<script>
	import { onMount } from 'svelte'
	import { slide } from 'svelte/transition'

	import toast, { Toaster } from 'svelte-french-toast'

	import Badge from '$components/badge.svelte'

	let slug
	let files
	let images = []
	let isPublic = true

	let API_KEY

	let showImages = false

	const imageTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/webp']
	const imageExtensions = {
		'image/png': 'png',
		'image/jpeg': 'jpg',
		'image/gif': 'gif',
		'image/webp': 'webp'
	}

	function upload(event) {
		event.preventDefault()

		if (API_KEY) {
			// save API_KEY to localStorage
			localStorage.setItem('API_KEY', API_KEY)
		}

		if (files) {
			if (imageTypes.includes(files[0].type)) {
				toast.promise(
					fetch('https://image.elclark.my.id/', {
						method: 'PUT',
						body: files[0],
						headers: {
							Authorization: `Bearer ${API_KEY}`,
							'Content-Type': files[0].type,
							'Content-Length': files[0].size,
							'X-Object-Key': slug || '',
							'X-Object-Public': isPublic ? 'true' : 'false'
						}
					}).then((res) => {
						if (res.ok) {
							res.json().then((data) => {
								images = [...images, data.key]
								localStorage.setItem('images', JSON.stringify(images))
							})
						} else {
							throw new Error('Upload failed')
						}
					}),
					{
						style: 'border-radius: 200px; background: #333; color: #fff;',
						loading: 'Uploading...',
						success: 'Upload Successfull!',
						error: 'Could Not Upload!'
					}
				)
			} else {
				toast.error('File type not supported', {
					style: 'border-radius: 200px; background: #333; color: #fff;'
				})
			}
		}
	}

	function checkFile() {
		let file = files[0]

		if (file) {
			if (!imageTypes.includes(file.type)) {
				toast.error('File type not supported', {
					style: 'border-radius: 200px; background: #333; color: #fff;'
				})
			}
		}
	}

	function getImages() {
		fetch('https://image.elclark.my.id/', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${API_KEY}`
			}
		}).then((res) => {
			if (res.ok) {
				res.json().then((data) => {
					images = [...data]
					localStorage.setItem('images', JSON.stringify(images))
				})
			} else {
				toast.error('Failed to get images!', {
					style: 'border-radius: 200px; background: #333; color: #fff;'
				})
			}
		})
	}

	function deleteImage(image) {
		// fetch(`https://image.elclark.my.id/${image}`, {
		// 	method: 'DELETE',
		// 	headers: {
		// 		Authorization: `Bearer ${API_KEY}`
		// 	}
		// }).then((res) => {
		// 	if (res.ok) {
		// 		alert('Image deleted')
		// 		images = images.filter((i) => i !== image)
		// 		localStorage.setItem('images', JSON.stringify(images))
		// 	} else {
		// 		alert('Failed to delete image')
		// 	}
		// })
		toast.promise(
			fetch(`https://image.elclark.my.id/${image}`, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${API_KEY}`
				}
			}).then((res) => {
				if (res.ok) {
					images = images.filter((i) => i !== image)
					localStorage.setItem('images', JSON.stringify(images))
				} else {
					throw new Error('Failed to delete image')
				}
			}),
			{
				style: 'border-radius: 200px; background: #333; color: #fff;',
				loading: 'Deleting...',
				success: 'Image deleted!',
				error: 'Could Not Delete!'
			}
		)
	}

	onMount(() => {
		API_KEY = localStorage.getItem('API_KEY')
		images = JSON.parse(localStorage.getItem('images') || '[]')

		if (API_KEY) {
			if (images.length === 0) {
				getImages()
			}
		}
	})
</script>

<div class="container">
	<main>
		<Badge />
		<h1>Elclark Images</h1>
		<p class="about">
			Free image Sharing & Hosting service. You can upload your images here and get a link to share
			it with your friends.
		</p>
		<form on:submit={upload}>
			<input
				bind:value={slug}
				type="text"
				pattern="^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$"
				placeholder="Image slug"
			/>
			<input type="text" bind:value={API_KEY} placeholder="API Key" required />
			<input type="file" bind:files on:change={checkFile} required />
			<label for="public">
				<input type="checkbox" id="public" bind:checked={isPublic} />
				Public Image
			</label>
			<button type="submit">Upload Image</button>
		</form>
		<button
			on:click={() => {
				getImages()
				showImages = !showImages
			}}>Images</button
		>
		{#if showImages}
			<div class="images">
				{#each images as image}
					<div class="image" transition:slide>
						<img src={`https://image.elclark.my.id/${image}`} alt={image} />
						<div>
							<a href={`https://image.elclark.my.id/${image}`} target="_blank">{image}</a>
							<button
								on:click={() => {
									deleteImage(image)
								}}
							>
								X
							</button>
						</div>
					</div>
				{/each}
			</div>
		{/if}
		<button>Edit Token</button>
		<p>THIS IS NOT FOR PUBLIC USE!</p>
	</main>
	<Toaster />
</div>

<style>
	main {
		text-align: center;
	}

	h1 {
		margin: 1rem 0;
	}

	.about {
		margin: 0.5rem 0;
		text-align: center;
		font-size: 1.125rem;
		line-height: 1.2rem;

		padding: 0 1.5rem;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;

		margin: 1rem auto;
		width: 100%;
	}

	input {
		margin: 0.5rem 0;
		padding: 0.75rem;
		border-radius: 0.25rem;
	}

	input[type='text'] {
		font-family: inherit;
		font-size: 1rem;

		margin: 0;
		margin-bottom: 0.25rem;

		background-color: transparent;
		border: 1px solid rgba(var(--raw-on-background), 0.5);
	}

	input[type='text']:focus {
		outline: none;
		box-shadow: var(--primary) 0 0 0.2rem 0.1rem;
	}

	input[type='file'] {
		font-family: inherit;
		font-size: 1rem;

		margin: 0;
		padding: 0.75rem;
		margin-bottom: 0.25rem;

		cursor: pointer;

		background-color: rgba(var(--raw-on-background), 0.2);
	}

	input[type='file']:focus {
		outline: none;
		cursor: pointer;
		box-shadow: var(--primary) 0 0 0.2rem 0.1rem;
	}

	input[type='checkbox'] {
		width: 1rem;
		height: 1rem;
	}

	label {
		display: grid;
		text-align: left;
		align-items: center;

		cursor: pointer;
		grid-gap: 0.5rem;
		grid-template-columns: auto 100%;

		margin: 0;
		margin-bottom: 0.25rem;
		padding: 0.5rem 1rem;
		border-radius: 0.25rem;

		background-color: rgba(var(--raw-on-background), 0.2);
	}

	button {
		font-family: inherit;
		font-size: 1rem;
		font-weight: 500;

		width: 100%;
		padding: 0.75rem 1rem;
		margin-bottom: 0.25rem;

		cursor: pointer;
		color: inherit;
		filter: none;

		border: none;
		border-radius: 0.25rem;
		background-color: rgba(var(--raw-on-background), 0.2);

		transition: all 200ms ease;
	}

	button:hover {
		background-color: rgba(var(--raw-on-background), 0.3);
	}

	form button {
		color: var(--on-primary);
		background-color: var(--primary);
	}

	form button:hover {
		background-color: rgba(var(--raw-primary), 0.8);
	}

	.images {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-gap: 1rem;
	}

	.image {
		display: flex;
		flex-direction: column;
		align-items: center;

		padding: 0.25rem;
	}

	.image img {
		max-width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		border-radius: 0.75rem;
	}

	.image div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 100%;
		margin-top: 0.5rem;
	}

	.image div a {
		text-decoration: none;
		color: inherit;
	}

	.image div button {
		font-family: inherit;
		font-size: 1rem;
		font-weight: 500;

		width: max-content;
		padding: 0.5rem 1rem;

		cursor: pointer;
		color: inherit;
		filter: none;

		border: none;
		border-radius: 0.25rem;
		background-color: rgba(var(--raw-on-background), 0.2);

		transition: all 200ms ease;
	}
</style>
