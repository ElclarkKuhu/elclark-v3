<script>
	export let href = ''
	export let type = 'primary'
</script>

<a {href} class={type}>
	<slot />
</a>

<style>
	a {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		width: 100%;
		padding: 1rem;
		margin: 0.5rem 0;

		text-align: center;
		text-decoration: none;
		font-weight: bold;
		border-radius: var(--value-radius);
		transition: all 200ms ease;
	}

	a:disabled {
		opacity: 0.5;
	}

	.primary {
		background: var(--color-primary);
		color: var(--color-on-primary);
	}

	.primary:hover,
	.primary:focus,
	.primary:focus-visible {
		background: var(--color-on-primary-contaner);
	}

	.tertiary {
		background: var(--color-tertiary);
		color: var(--color-on-tertiary);
	}

	.tertiary:hover,
	.tertiary:focus,
	.tertiary:focus-visible {
		background: var(--color-tertiary-contaner);
		color: var(--color-on-tertiary-contaner);
	}

	.red {
		background: var(--color-error-contaner);
		color: var(--color-on-error-contaner);
	}

	.red:hover,
	.red:focus,
	.red:focus-visible {
		background: var(--color-error);
		color: var(--color-on-error);
	}
</style>
