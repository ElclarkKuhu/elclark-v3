<script>
	export let size = undefined
	export let className = undefined
	export let width = size
	export let height = size
	export let color = 'currentColor'
	export let viewBox = '0 0 48 48'
</script>

<svg {width} {height} {viewBox} class={className}>
	<path
		fill={color}
		d="M24 26.8 13.85 36.95q-.6.6-1.4.6-.8 0-1.4-.6-.6-.6-.6-1.4 0-.8.6-1.4L21.2 24 11.05 13.85q-.6-.6-.6-1.4 0-.8.6-1.4.6-.6 1.4-.6.8 0 1.4.6L24 21.2l10.15-10.15q.6-.6 1.4-.6.8 0 1.4.6.6.6.6 1.4 0 .8-.6 1.4L26.8 24l10.15 10.15q.6.6.6 1.4 0 .8-.6 1.4-.6.6-1.4.6-.8 0-1.4-.6Z"
	/>
</svg>
