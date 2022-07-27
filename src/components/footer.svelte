<script>
	import YouTube from '$components/icons/youtube.svelte'
	import GitHub from '$components/icons/github.svelte'
	import Twitter from '$components/icons/twitter.svelte'
</script>

<div>
	<footer class="container">
		<div>
			Made and Designed by <a
				sveltekit:prefetch
				href="/about"
				class="font-normal text-primary hover:underline"
			>
				Elclark Kuhu
			</a>
			.
			<br />
			Build using
			<a sveltekit:prefetch href="https://kit.svelte.dev/" class="text-blue-400">SvelteKit</a>
			, Hosted And Protected By
			<a sveltekit:prefetch href="https://cloudflare.com" class="text-blue-400">CloudFlare</a>
			.
		</div>
		<div class="grid w-max grid-cols-3 gap-2 pt-4 md:pt-0">
			<a sveltekit:prefetch href="https://twitter.com/elclark_kuhu/" aria-label="Twitter">
				<Twitter size="2rem" />
			</a>
			<a sveltekit:prefetch href="https://github.com/ElclarkCodes/" aria-label="GitHub">
				<GitHub size="2rem" />
			</a>
			<a
				sveltekit:prefetch
				href="https://youtube.com/channel/UCfPwggPTrPAC3wyOVa7miAg"
				aria-label="YouTube"
			>
				<YouTube size="2rem" />
			</a>
		</div>
	</footer>
</div>

<style>
	footer {
		display: flex;
		font-weight: var(--font-light);
		line-height: 1.2rem;
		flex-direction: column;
		padding: 1rem 1.25rem;
	}

	footer div:first-child {
		padding-bottom: 1rem;
	}

	footer div:last-child {
		display: grid;
		grid-gap: 0.5rem;
		width: max-content;
		grid-template-columns: repeat(3, 1fr);
	}

	footer div:last-child a {
		color: var(--c-on-background);
	}

	@media (min-width: 640px) {
		/* none */
	}

	@media (min-width: 768px) {
		footer {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding: 1rem;
		}
	}

	@media (min-width: 1024px) {
	}
</style>
