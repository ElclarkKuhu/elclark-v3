<script>
	import { onMount } from 'svelte'
	import { onDestroy } from 'svelte'
	import { fly } from 'svelte/transition'

	import Header from '$components/header.svelte'
	import Footer from '$components/footer.svelte'

	const API = import.meta.env.VITE_API

	let link
	let title
	let artist
	let albumPicture = '/img/brand/elclark.svg'

	let getAccessTokenLoop
	let currentlyPlayingLoop

	let is_playing = false
	let access_token = false
	let playerLogo = '/img/spotify/spotify-icon.svg'

	onMount(async () => {
		preloadImage(albumPicture)
		preloadImage(playerLogo)

		async function getAccessToken() {
			const response = await fetch(`${API}/spotify/token.json`)
			const data = await response.json()
			access_token = data.access_token
		}

		await getAccessToken()
		getAccessTokenLoop = setInterval(getAccessToken, 3600000)

		async function currentlyPlaying() {
			let response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
				method: 'GET',
				headers: {
					Authorization: 'Bearer ' + access_token,
					accept: 'application/json',
					'content-type': 'application/json'
				}
			})

			if (response.status === 200) {
				let data = await response.json()

				is_playing = data.is_playing
				updateCurrentlyPlaying(data)
			} else {
				is_playing = false
			}
		}

		currentlyPlaying()
		currentlyPlayingLoop = setInterval(currentlyPlaying, 3000)

		// TODO: update this function, this is a mess
		function updateCurrentlyPlaying(data) {
			let item = data.item

			title = item.name
			albumPicture = item.album.images[1].url
			link = item.external_urls.spotify

			if (item.artists.length == 1) {
				artist = item.artists[0].name
			} else if (item.artists.length == 2) {
				artist = item.artists[0].name + ' & ' + item.artists[1].name
			} else {
				let artists = ''

				item.artists.forEach((artist) => {
					artists = artists + artist.name + ', '
				})

				artist = artists.substring(0, artists.length - 2)
			}
		}
	})

	onDestroy(() => {
		clearInterval(getAccessTokenLoop)
		clearInterval(currentlyPlayingLoop)
	})

	function preloadImage(src) {
		return new Promise(function (resolve) {
			let img = new Image()
			img.onload = resolve
			img.src = src
		})
	}
</script>

<div class="container">
	<Header
		title="Hi, I'm Elclark!"
		desc="I'm a Student & Self-taught Full Stack Developer and software engineer based in Manado, Indonesia."
		headTitle="Hi, I'm Elclark!"
	/>

	<main>
		{#if is_playing}
			<a in:fly class="now-playing" href={link}>
				<div class="picture">
					<img src={albumPicture} alt={title} class="album-picture" />
					<img in:fly src={playerLogo} alt="Spotify" class="player-logo" />
				</div>
				<div class="info">
					<p class="now-playing-label">Currently Listening To</p>
					<h2>{title}</h2>
					<p>{artist}</p>
				</div>
			</a>
		{/if}

		<a class="support" href="https://paypal.me/elclarkkuhu">
			<img src="./img/love.svg" class="love" alt="support" /> Buy Me A Coffee
		</a>
	</main>
	<Footer />
</div>

<style>
	.now-playing {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;

		background: var(--color-tertiary);
		color: var(--color-on-tertiary);

		margin: 0.5rem 0;
		padding: 0.75rem;
		border-radius: var(--value-radius);

		overflow: hidden;
		display: 100%;

		transition: all 200ms ease;
	}

	.now-playing:hover,
	.now-playing:focus,
	.now-playing:focus-visible {
		background: var(--color-on-tertiary-contaner);
	}

	.now-playing .picture {
		position: relative;
		margin-right: 0.75rem;
	}

	.now-playing .picture .album-picture {
		width: 7.5rem;
		height: 7.5rem;

		border-radius: var(--value-radius);
	}

	.now-playing .picture .player-logo {
		position: absolute;
		right: -0.45rem;
		bottom: -0.45rem;

		width: 2.25rem;
		height: 2.25rem;
		padding: 0.3rem;

		border-radius: 50%;
		background: var(--color-tertiary-contaner);
	}

	.now-playing .info {
		width: 100%;
		overflow: hidden;
	}

	.now-playing .info .now-playing-label {
		font-size: 0.8em;
		font-weight: bold;
		margin: 0 0 0.1rem 0;
		color: var(--color-on-primary);
		font-family: var(--value-font-secondary);
	}

	.now-playing .info h2 {
		font-size: 1.5em;
		margin: 0 0 0.25rem 0;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: pre;
	}

	.now-playing .info p {
		font-size: 1em;
		margin: 0;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: pre;
	}

	.support {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		width: 100%;
		padding: 1rem;
		margin: 0.5rem 0;

		background: var(--color-primary);
		color: var(--color-on-primary);

		text-align: center;
		text-decoration: none;
		font-weight: bold;
		border-radius: var(--value-radius);
		transition: all 200ms ease;
	}

	.support:hover,
	.support:focus,
	.support:focus-visible {
		background: var(--color-on-primary-contaner);
	}

	.support .love {
		width: 1rem;
		height: 100%;
		margin: 0 0.5rem 0 0;
		aspect-ratio: 1/1;
	}

	/* @media screen and (min-width: 650px) {
		header {
			padding: 2.5rem;
		}

		header h1 {
			font-size: 2.5em;
		}

		header p {
			font-size: 1.25em;
			margin: 0.75rem 0 0.75rem 0;
		}

		.now-playing {
			align-items: flex-end;
		}

		.now-playing .picture {
			margin-right: 1rem;
		}

		.now-playing .picture .album-picture {
			width: 10rem;
			height: 10rem;
		}

		.now-playing .picture .player-logo {
			right: -0.25rem;
			bottom: -0.25rem;

			width: 2.5rem;
			height: 2.5rem;
			padding: 0.5rem;
		}

		.now-playing .info {
			margin-bottom: 1.5rem;
		}
	} */
</style>
