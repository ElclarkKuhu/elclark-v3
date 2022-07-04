<script>
	import Elclark from '$components/icons/elclark.svelte'
</script>

<div class="my-8">
	<div
		class="container mx-auto flex w-full flex-col-reverse items-center overflow-hidden p-5 md:flex-row"
	>
		<div class="my-16 md:mr-auto md:w-4/6">
			<h1 class="mb-3 text-4xl font-semibold text-primary lg:mb-4 lg:text-5xl">
				Hi, I'm <a
					href="/about/"
					class="rounded-sm underline transition-all duration-200 hover:bg-primary hover:px-2 hover:text-onPrimary hover:no-underline"
					>Elclark</a
				>, I'm a software engineer and designer.
			</h1>
			<p class="text-lg font-light leading-5 md:text-xl md:leading-6">
				I also do system administration, and designing UI and UX. I'm still learning and trying new
				things. I'm passionate about technology, science, music, and gaming.
			</p>
		</div>
		<div class="flex h-full w-full items-center justify-center px-16 md:w-2/6 md:px-0 lg:p-6">
			<div class="w-full text-primary">
				<Elclark className="e-spin" />
			</div>
		</div>
	</div>
</div>

<style>
	:global(.e-spin) {
		filter: drop-shadow(0 0 0.5rem currentColor);
		animation: rotate 12s infinite linear;
	}

	@media (min-width: 1024px) {
		:global(.e-spin) {
			filter: drop-shadow(0 0 0.75rem currentColor);
		}
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
