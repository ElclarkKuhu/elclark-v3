<script>
	let brand = 'Elclark'

	export let title = "Hi, I'm Elclark"
	export let desc = ''
	export let headTitle
	export let showBrand

	if (!headTitle) {
		headTitle = `${brand} - ${title}`
	}

	if (!showBrand) {
		if (desc == '') {
			showBrand = true
		} else {
			showBrand = false
		}
	}
</script>

<svelte:head>
	<title>{headTitle}</title>
</svelte:head>

<header>
	<h1 class={showBrand ? 'h1' : 'h1 bold'}>
		{#if showBrand}
			<a class="brand" href="/">{brand}</a>
		{/if}
		{title}
	</h1>

	{#if desc}
		<p>{desc}</p>
	{/if}

	<slot />
</header>

<style>
	header {
		background: var(--color-primary);
		color: var(--color-on-primary);

		padding: var(--value-padding);
		margin: var(--value-margin);

		border-radius: var(--value-radius);
	}

	.h1 {
		font-size: 2em;
		font-weight: normal;
		margin: 0 0 0 0;
	}

	header p {
		font-size: 1.1em;
		margin: 0.75rem 0 0.75rem 0;
		font-family: var(--value-font-secondary);
	}

	.brand {
		text-decoration: none;
		font-weight: bold;
		color: var(--color-on-primary);
		transition: all 200ms ease;
	}

	.brand:hover,
	.brand:focus,
	.brand:focus-visible {
		padding: 0 0.25em;
		background: var(--color-primary-contaner);
		color: var(--color-on-primary-contaner);
	}

	.bold {
		font-weight: bold;
	}

	/* @media screen and (min-width: 1200px) {
		header {
			border-radius: 0 0 1rem 1rem;
		}
	}

	@media screen and (min-width: 1300px) {
		header {
			border-radius: 4rem;
			margin-top: 1.5rem;
			padding: 1.5rem 3.5rem;
			top: 0.5rem;
		}
	} */
</style>
