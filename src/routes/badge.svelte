<script>
	import Elclark from '$icons/elclark.svelte'
</script>

<div class="logo">
	<Elclark />
</div>
<h1>Elclark Kuhu</h1>

<style>
	.logo {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 15rem;
		height: 15rem;
		padding: 1.25rem;
		margin: 1.25rem 0;
		margin-top: 2.5rem;

		filter: drop-shadow(0 0 0.25rem var(--primary));

		background-color: var(--primary);
		color: var(--on-primary);

		border-radius: 50%;
	}

	:global(.logo svg) {
		filter: drop-shadow(0 0 0.2rem var(--on-primary));
		animation: spin 15s infinite linear;
	}

	h1 {
		font-size: 2rem;
		margin: 0.5rem 0;
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
