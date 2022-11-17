<script>
	import ripple from '$lib/ripple.js'

	export let icon = undefined
	export let href = undefined
	export let color = 'filled' // filled, filled-tonal, outlined, and text buttons

	export let type = undefined
	export let width = undefined
	export let target = undefined
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	{type}
	{target}
	rel={target === '_blank' ? 'noopener noreferrer' : undefined}
	style:width
	on:click
	on:mousedown={ripple}
	class="button {color}"
>
	{#if icon}
		<span>
			<svelte:component this={icon} />
		</span>
	{/if}
	<slot />
</svelte:element>

<style>
	.button {
		--bg: var(--primary);
		--on-bg: var(--on-primary);

		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;

		font: inherit;
		border: none;

		width: max-content;
		min-width: 10rem;
		text-align: center;

		margin: 0.25rem;
		padding: 0.75rem 1.75rem;

		border-radius: 2rem;

		font-size: 1.1rem;
		font-weight: 500;

		color: var(--on-bg);
		background-color: var(--bg);

		overflow: hidden;

		transition: opacity 100ms ease-out;
	}

	span {
		display: inline-block;
		width: 1.3rem;
		height: 1.3rem;

		margin-right: 0.4rem;
	}

	.button:hover {
		/* filter: drop-shadow(0 0 0.25rem var(--bg)); */
		filter: none;
	}

	.button.filled-tonal {
		--bg: rgba(var(--raw-primary), 0.2);
		--on-bg: var(--primary);
	}

	.button.outlined {
		--bg: transparent;
		--on-bg: var(--primary);

		border: 1px solid var(--on-bg);
		transition: opacity 100ms ease-out, background-color 100ms ease-out;
	}

	.button.outlined:hover {
		--bg: rgba(var(--raw-primary), 0.2);
	}

	.button.text {
		background-color: transparent;
		color: var(--primary);

		transition: opacity 100ms ease-out, background-color 100ms ease-out;
	}

	.button.text:hover {
		background-color: rgba(var(--raw-primary), 0.2);
	}
</style>
