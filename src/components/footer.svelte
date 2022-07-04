<script>
	import YouTube from '$components/icons/youtube.svelte'
	import GitHub from '$components/icons/github.svelte'
	import Twitter from '$components/icons/twitter.svelte'
</script>

<footer
	class="container m-auto flex flex-col px-5 py-8 md:flex-row md:items-center md:justify-between"
>
	<div class="font-light leading-5">
		Made and Designed by <a href="/about" class="font-normal text-primary hover:underline"
			>Elclark Kuhu</a
		>.
		<br />
		Build using <a href="https://kit.svelte.dev/" class="text-blue-400">SvelteKit</a>, Hosted And
		Protected By
		<a href="https://cloudflare.com" class="text-blue-400">CloudFlare</a>.
	</div>
	<div class="grid w-max grid-cols-3 gap-2 pt-4 md:pt-0">
		<a href="https://twitter.com/elclark_kuhu/" aria-label="Twitter">
			<Twitter size="2rem" />
		</a>
		<a href="https://github.com/ElclarkCodes/" aria-label="GitHub">
			<GitHub size="2rem" />
		</a>
		<a href="https://youtube.com/channel/UCfPwggPTrPAC3wyOVa7miAg" aria-label="YouTube">
			<YouTube size="2rem" />
		</a>
	</div>
</footer>

<style>
</style>
