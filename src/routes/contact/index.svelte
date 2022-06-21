<script>
	import { page } from '$app/stores'

	const title = 'Elclark - Contact'
	const description =
		"I'm a software engineer and system administrator from Manado, Indonesia. I also a university student and UI/UX designer. I'm passionate about technology, science, music, and gaming."
	const image = 'https://elclark.my.id/img/brand/elclark.png'
</script>

<svelte:head>
	<!-- Metadata -->
	<title>{title}</title>
	<link rel="icon" href="/favicon.png" />
	<link rel="canonical" href={$page.url.href} />

	<!-- Basic HTML Meta Tags -->
	<meta
		name="keywords"
		content="Elclark, Code, software engineer, technology, programming, science, music, gaming, contact, twitter, email"
	/>
	<meta name="description" content={description} />
	<meta name="subject" content="Elclark Contacts" />
	<meta name="copyright" content="Elclark" />
	<meta name="language" content="EN" />
	<meta name="robots" content="index,follow" />
	<meta name="author" content="Elclark, founder@elclark.my.id" />
	<meta name="designer" content="Elclark, founder@elclark.my.id" />
	<meta name="owner" content="Elclark" />
	<meta name="url" content={$page.url.href} />
	<meta name="identifier-URL" content={$page.url.origin} />
	<meta name="category" content="technology, portfolio, blog, contact" />
	<meta name="coverage" content="Worldwide" />
	<meta name="distribution" content="Global" />
	<meta name="rating" content="General" />

	<!-- OpenGraph Meta Tags -->
	<meta name="og:title" content={title} />
	<meta name="og:type" content="website" />
	<meta name="og:url" content={$page.url.href} />
	<meta name="og:image" content={image} />
	<meta name="og:site_name" content="Elclark" />
	<meta name="og:description" content={description} />

	<meta name="og:email" content="mail@elclark.my.id" />
	<meta name="og:region" content="MDO" />
	<meta name="og:country-name" content="ID" />

	<!-- Twitter Metadata -->
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:url" content={image} />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<main>
	<h1>Contact Me</h1>

	<p>
		Fell free to contact me at <a href="mailto:mail@elclark.my.id" target="_blank">
			mail@elclark.my.id
		</a>
		or tweet me at <a href="https://twitter.com/elclark_kuhu">@elclark_kuhu</a> if you have any questions.
	</p>

	<p>
		I'm currently studying. But I'm open to any job opportunities. If you're interested in working
		with me, please contact me.
	</p>
</main>

<style>
	main {
		margin: var(--xxxlarge) auto 0 auto;
		padding: 0 var(--container-padding);
		max-width: var(--max-width);
	}

	h1 {
		font-size: var(--xxlarge);
		font-weight: var(--bold);
		margin: 0 0 var(--large) 0;
	}

	p {
		width: 100%;
		margin: 0 0 var(--large) 0;
	}
</style>
