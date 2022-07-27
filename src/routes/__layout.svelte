<script>
	import Header from '$components/header.svelte'
	import Footer from '$components/footer.svelte'

	import { fade } from 'svelte/transition'
	import { beforeNavigate, afterNavigate } from '$app/navigation'

	let loading = false

	beforeNavigate(() => {
		loading = true
	})

	afterNavigate(() => {
		loading = false
	})
</script>

<Header />
{#if loading}
	<div class="loading">
		<span />
		<span />
		<span />
	</div>
{:else}
	<div in:fade>
		<slot />
	</div>
{/if}
<Footer />

<style>
	.loading {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: calc(100vh - 4.75rem);
	}

	.loading span {
		display: inline-block;
		width: 1.5rem;
		height: 1.5rem;
		margin: 0.25rem;
		transform: scale(0);
		border-radius: 50%;
		background: var(--c-on-background);
	}

	.loading span:nth-child(1) {
		animation: loading 600ms infinite alternate;
	}

	.loading span:nth-child(2) {
		animation: loading 600ms 200ms infinite alternate;
	}

	.loading span:nth-child(3) {
		animation: loading 600ms 400ms infinite alternate;
	}

	@keyframes loading {
		0% {
			transform: scale(0);
		}

		100% {
			transform: scale(1);
		}
	}
</style>
