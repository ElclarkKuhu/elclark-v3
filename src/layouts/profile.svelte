<script>
	import SEO from '$components/seo.svelte'

	import At from '$components/icons/at.svelte'
	import Public from '$components/icons/public.svelte'
	import Twitter from '$components/icons/twitter.svelte'
	import GitHub from '$components/icons/github.svelte'
	import Instagram from '$components/icons/instagram.svelte'
	import LinkedIn from '$components/icons/linkedin.svelte'
	import YouTube from '$components/icons/youtube.svelte'
	import Verified from '$components/icons/verified.svelte'

	export let layout = 'profile'
	export let username = undefined
	export let firstName = undefined
	export let lastName = undefined
	export let title = undefined
	export let verified = undefined
	export let avatar = undefined
	export let banner = undefined
	export let website = undefined
	export let email = undefined
	export let twitter = undefined
	export let github = undefined
	export let instagram = undefined
	export let linkedin = undefined
	export let youtube = undefined
	export let createdAt = undefined

	if (layout !== 'profile') {
		console.error(`Invalid layout: ${layout}`, '\n', 'Expected Layout: profile')
		console.log(createdAt)
	}
</script>

<SEO
	title={`${firstName} ${lastName}'s Profile`}
	description={`${firstName} ${lastName}'s Profile on elclark.my.id`}
	path={`/profiles/${username}`}
	authorName={`${firstName} ${lastName}`}
	authorEmail={email}
	twitterUsername={twitter ? `@${twitter}` : undefined}
	keywords={[
		username,
		firstName,
		lastName,
		`${firstName} ${lastName}`,
		`${firstName} ${lastName}'s Profile`
	]}
	categorys={['profile']}
/>

<main>
	<div class="container">
		<div class="banner" style:background-image={banner ? `url(${banner})` : undefined}>
			<div class="links lg">
				{#if verified}
					<div class="verified">
						<Verified />
					</div>
				{/if}
				{#if email}
					<a href={`mailto:${email}`}>
						<At />
					</a>
				{/if}
				{#if website}
					<a href={website}>
						<Public />
					</a>
				{/if}
				{#if twitter}
					<a href={`https://twitter.com/${twitter}`}>
						<Twitter />
					</a>
				{/if}
				{#if github}
					<a href={`https://github.com/${github}`}>
						<GitHub />
					</a>
				{/if}
				{#if instagram}
					<a href={`https://instagram.com/${instagram}`}>
						<Instagram />
					</a>
				{/if}
				{#if linkedin}
					<a href={`https://linkedin.com/in/${linkedin}`}>
						<LinkedIn />
					</a>
				{/if}
				{#if youtube}
					<a href={`https://www.youtube.com/channel/${youtube}`}>
						<YouTube />
					</a>
				{/if}
			</div>
		</div>

		<div class="grid">
			<div class="profile">
				<img src={avatar} alt={`${firstName} ${lastName}'s Profile`} />

				<div class="user-info">
					<h1>{firstName} {lastName}</h1>
					<p>{title}</p>
				</div>
			</div>

			<article>
				<slot />
			</article>
			<div class="links md">
				{#if email}
					<a href={`mailto:${email}`}>
						<At />
					</a>
				{/if}
				{#if website}
					<a href={website}>
						<Public />
					</a>
				{/if}
				{#if twitter}
					<a href={`https://twitter.com/${twitter}`}>
						<Twitter />
					</a>
				{/if}
				{#if github}
					<a href={`https://github.com/${github}`}>
						<GitHub />
					</a>
				{/if}
				{#if instagram}
					<a href={`https://instagram.com/${instagram}`}>
						<Instagram />
					</a>
				{/if}
				{#if linkedin}
					<a href={`https://linkedin.com/in/${linkedin}`}>
						<LinkedIn />
					</a>
				{/if}
				{#if youtube}
					<a href={`https://www.youtube.com/channel/${youtube}`}>
						<YouTube />
					</a>
				{/if}
			</div>
		</div>
	</div>
</main>

<style>
	.container {
		--banner-height: 16rem;
		--margin: 15px;

		padding: 1.25rem;
	}

	.banner {
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;

		width: 100%;
		border-radius: 0.5rem;
		height: var(--banner-height);

		background-color: var(--c-on-secondary);
		background-size: cover;
		background-position: center;
	}

	.grid {
		display: grid;
	}

	.profile {
		--width: 14rem;
		width: var(--width);

		margin: 0 auto;
		margin-top: -6rem;
	}

	img {
		display: block;
		width: var(--width);
		height: var(--width);
		border-radius: 5%;

		margin: 0;

		box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.25);
	}

	.user-info {
		text-align: center;
		margin: 1.5rem 0;
	}

	.user-info h1 {
		font-size: 2.25rem;
		line-height: 2.5rem;
		margin: 0;
	}

	.user-info p {
		font-size: 1.125rem;
		line-height: 1.5rem;
		margin: 0;
	}

	article {
		text-align: center;
		margin: 0 1rem;
		margin-bottom: 1rem;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;

		width: 100%;
		padding: 0.5rem 0.75rem;
	}

	.md {
		display: flex;
	}

	.lg {
		display: none;
	}

	.links a {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 3rem;
		height: 3rem;

		margin: 0.25rem;
		padding: 0.5rem;

		background-color: var(--c-on-primary);
		color: var(--c-primary);

		border-radius: 100%;
		box-shadow: 0 0 0.75rem 0 rgba(var(--r-on-primary), 0.5);
	}

	.links a:hover {
		filter: none;

		background-color: var(--c-primary);
		color: var(--c-on-primary);

		box-shadow: 0 0 0.75rem 0 rgba(var(--r-primary), 0.5);
	}

	.verified {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 3rem;
		height: 3rem;

		margin: 0.25rem;
		padding: 0.5rem;

		background-color: #bec2ff;
		color: #0001ac;

		border-radius: 100%;
	}

	:global(article img) {
		width: 100%;
	}

	:global(article h2) {
		font-size: 1.875rem;
		font-weight: var(--font-semibold);
		line-height: 2.25rem;
		margin: var(--margin) 0;
	}

	:global(article h3) {
		font-size: 1.5rem;
		font-weight: var(--font-semibold);
		line-height: 2rem;
		margin: var(--margin) 0;
	}

	:global(article p) {
		font-size: 1.125rem;
		font-weight: var(--font-light);
		margin: var(--margin) 0;
	}

	:global(article strong) {
		font-weight: var(--font-semibold);
	}

	:global(article li) {
		font-size: 1.125rem;
		font-weight: var(--font-light);
		margin: 0.35rem 0;
	}

	:global(article hr) {
		opacity: 0.5;
		margin: var(--margin) 0;
		color: rgba(var(--r-on-background), 0.15);
		border-color: rgba(var(--r-on-background), 0.15);
	}

	@media (min-width: 640px) {
	}

	@media (min-width: 768px) {
		.grid {
			grid-template-columns: auto auto;
		}

		.profile {
			--width: 16rem;
			margin-right: 2rem;
			margin-bottom: 2rem;
			margin-left: 2rem;
		}

		article {
			margin: 0;
			margin-top: 1rem;
			margin-right: 2rem;

			text-align: left;
		}

		.links {
			width: max-content;
		}

		.md {
			display: none;
		}

		.lg {
			display: flex;
		}

		:global(article p) {
			font-weight: var(--font-normal);
		}

		:global(article li) {
			font-weight: var(--font-normal);
		}
	}

	@media (min-width: 1024px) {
	}
</style>
