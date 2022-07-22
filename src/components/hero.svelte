<script>
	import Elclark from '$components/icons/elclark.svelte'
</script>

<div>
	<div class="container hero">
		<div class="first">
			<h1>
				Hi, I'm <a href="/profiles/elclark/">Elclark</a>, I'm a software engineer and designer.
			</h1>
			<p class="text-lg font-light leading-5 md:text-xl md:leading-6">
				I also do system administration, and designing UI and UX. I'm still learning and trying new
				things. I'm passionate about technology, science, music, and gaming.
			</p>
		</div>
		<div class="second">
			<div>
				<Elclark className="spin glow" />
			</div>
		</div>
	</div>
</div>

<style>
	.hero {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		overflow: hidden;
		padding: 1.25rem;
	}

	.first {
		margin-top: 4rem;
	}

	h1 {
		margin: 0;
		margin-bottom: 0.75rem;
		font-weight: var(--font-semibold);
		color: var(--c-primary);
	}

	p {
		font-size: 1rem;
		line-height: 1.5rem;
		margin: 0;
	}

	.second {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.second div {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		width: 100%;
		height: 100%;
		color: var(--c-primary);
	}

	:global(.spin) {
		animation: spin 15s linear infinite;
	}

	:global(.glow) {
		filter: drop-shadow(0 0 0.75rem var(--c-primary));
	}

	a {
		color: var(--c-primary);
		text-decoration: underline;

		transition: all 200ms ease;
	}

	a:hover {
		background: var(--c-primary);
		color: var(--c-on-primary);
		text-decoration: none;
		padding: 0 0.5rem;
	}

	@media (min-width: 640px) {
		/* Nothing */
	}

	@media (min-width: 768px) {
		.hero {
			flex-direction: row;
			margin-top: 2rem;
			margin-bottom: 2rem;
		}

		.first {
			width: 60%;
			margin: 4rem 0;
		}

		p {
			padding-right: 1rem;
		}

		.second {
			width: 40%;
		}

		.second div {
			padding: 1rem;
		}
	}

	@media (min-width: 1024px) {
		.first {
			width: 66.666667%;
		}

		.second {
			width: 33.333333%;
		}
		h1 {
			font-size: 3rem;
			line-height: 1;
		}

		p {
			font-size: 1.25rem;
			/* font-weight: var(--font-light); */
			line-height: 1.75rem;
		}

		.second div {
			padding: 0.5rem;
		}
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
