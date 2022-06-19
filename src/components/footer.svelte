<script>
	import YouTube from '$components/icons/youtube.svelte'
	import GitHub from '$components/icons/github.svelte'
	import Twitter from '$components/icons/twitter.svelte'
</script>

<footer>
	<div class="wrapper">
		<p>Made and Designed by Elclark Kuhu.</p>
		<p>
			Build using <a href="https://kit.svelte.dev/">SvelteKit</a>. Hosted And Protected By
			<a href="https://cloudflare.com">CloudFlare</a>.
		</p>
	</div>
	<div class="socials">
		<a href="https://twitter.com/elclark_kuhu/" aria-label="Twitter">
			<Twitter size="2rem" />
		</a>
		<a href="https://github.com/ElclarkKuhu/" aria-label="GitHub">
			<GitHub size="2rem" />
		</a>
		<a href="https://youtube.com/channel/UCfPwggPTrPAC3wyOVa7miAg" aria-label="YouTube">
			<YouTube size="2rem" />
		</a>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;

		margin: 0 auto;
		max-width: var(--max-width);
		padding: var(--header-height) var(--container-padding) var(--container-padding)
			var(--container-padding);
		background-color: var(--color-background);
	}

	.wrapper {
		padding: var(--xxsmall);
		margin-bottom: var(--large);
	}

	.socials {
		display: flex;
		align-items: center;
	}

	.socials a {
		display: flex;
		padding: var(--xsmall);
		color: var(--color-on-background);
		text-decoration: none;

		transition: all 200ms ease-in-out;
	}

	.socials a:hover {
		color: var(--color-primary);
		filter: drop-shadow(0 0 0.15rem currentColor);
	}

	p {
		font-size: 0.9rem;
		margin: var(--xxsmall) 0;
		opacity: 0.9;
	}

	@media (min-width: 768px) {
		footer {
			flex-direction: row;
			justify-content: space-between;
		}

		p {
			font-size: 0.95rem;
		}
	}
</style>
