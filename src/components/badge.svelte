<script>
	import Elclark from '$icons/elclark.svelte'
</script>

<a href="/">
	<div class="logo">
		<Elclark />
	</div>
</a>

<style>
	a {
		display: block;
	}

	.logo {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 10rem;
		height: 10rem;
		padding: 1.25rem;
		margin: 0;
		margin-top: 3.5rem;
		margin-bottom: 0.5rem;

		filter: drop-shadow(0 0 0.25rem var(--primary));

		background-color: var(--primary);
		color: var(--on-primary);

		border-radius: 2rem;
	}

	:global(.logo svg) {
		filter: drop-shadow(0 0 0.2rem var(--on-primary));
		animation: spin 15s infinite linear;
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
