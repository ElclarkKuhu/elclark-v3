<div>
	<div>
		<img src="/img/brand/elclark-foreground.svg" alt="Logo" />
	</div>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100vh;
	}
	div div {
		width: 20vh;
		height: 20vh;
		background: var(--color-primary);
		border-radius: 50%;
		animation: spin 1s ease 1.25s, spin 1s ease 250ms infinite;
	}
	div div img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(180deg);
		}
	}
</style>
