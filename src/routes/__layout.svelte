<script>
	import Header from '$components/header.svelte'
	import Footer from '$components/footer.svelte'
</script>

<Header />
<slot />
<Footer />

<style>
	:root {
		--font-sans: 'Outfit', ui-sans-serif, system-ui, sans-serif;
		--font-serif: 'Roboto Serif', ui-serif, Georgia, 'Cambria', 'Times New Roman', Times, serif;
		--font-mono: 'Roboto Mono', ui-monospace, 'Menlo', 'Consolas', monospace;
		--font-size: 16px;

		--font-thin: 100;
		--font-extralight: 200;
		--font-light: 300;
		--font-normal: 400;
		--font-medium: 500;
		--font-semibold: 600;
		--font-bold: 700;
		--font-extrabold: 800;
		--font-black: 900;

		font-family: var(--font-sans);
		font-size: var(--font-size);
		font-weight: var(--font-normal);

		--color-primary: #ffb3b3;
		--color-on-primary: #60131a;
		--color-on-primary-a10: #60131a50;

		--color-primary-container: #7d2a2e;
		--color-on-primary-container: #ffd9d9;

		--color-secondary: #e6bdbc;
		--color-on-secondary: #442929;

		--color-secondary-container: #5d3f3f;
		--color-on-secondary-container: #ffdad9;

		--color-tertiary: #e4c18d;
		--color-on-tertiary: #422c05;

		--color-tertiary-container: #5b431a;
		--color-on-tertiary-container: #ffddaa;

		--color-error: #ffb4a9;
		--color-on-error: #680003;

		--color-error-container: #930006;
		--color-on-error-container: #ffdad4;

		--color-outline: #a08c8b;
		--color-background: #201a1a;
		--color-on-background: #ede0df;

		--color-surface: #201a1a;
		--color-on-surface: #ede0df;
		--color-on-surface-a10: #ede0df10;

		--color-surface-variant: #524343;
		--color-on-surface-variant: #d8c2c1;

		--color-inverse-surface: #ede0df;
		--color-inverse-on-surface: #201a1a;

		color-scheme: dark;
		background: var(--color-background);
		color: var(--color-on-background);
	}

	@media (prefers-color-scheme: light) {
		:root {
			--color-primary: #9c4043;
			--color-on-primary: #ffffff;
			--color-on-primary-a10: #ffffff50;

			--color-primary-container: #ffd9d9;
			--color-on-primary-container: #400007;

			--color-secondary: #765655;
			--color-on-secondary: #ffffff;

			--color-secondary-container: #ffdad9;
			--color-on-secondary-container: #2c1515;

			--color-tertiary: #745a2f;
			--color-on-tertiary: #ffffff;

			--color-tertiary-container: #ffddaa;
			--color-on-tertiary-container: #281800;

			--color-error: #ba1b1b;
			--color-on-error: #ffffff;

			--color-error-container: #ffdad4;
			--color-on-error-container: #410001;

			--color-outline: #857372;
			--color-background: #fcfcfc;
			--color-on-background: #201a1a;

			--color-surface: #fcfcfc;
			--color-on-surface: #201a1a;
			--color-on-surface-a10: #201a1a10;

			--color-surface-variant: #f4dddc;
			--color-on-surface-variant: #524343;

			--color-inverse-surface: #362f2f;
			--color-inverse-on-surface: #fbeeed;

			color-scheme: light;
			background: var(--color-background);
			color: var(--color-on-background);
		}
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(html) {
		margin: 0;
		padding: 0;
	}

	:global(body) {
		margin: 0;
		padding: 0;
	}

	:global(a) {
		display: inline-block;
		color: #8ab4f8;
		text-decoration: none;
		transition: all 200ms ease;
	}

	:global(.container) {
		max-width: auto;
		margin: 0 auto;
		padding: 0 var(--container-padding);
	}

	@media (min-width: 640px) {
		:global(.container) {
			max-width: 640px;
		}
	}

	@media (min-width: 768px) {
		:global(.container) {
			max-width: 768px;
		}
	}

	@media (min-width: 1024px) {
		:global(.container) {
			max-width: 1024px;
		}
	}
</style>
