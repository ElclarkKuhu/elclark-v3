<script>
	import { page } from '$app/stores'

	const title = 'Elclark - About'
	const description =
		"I'm a software engineer and system administrator from Manado, Indonesia. I also a university student and UI/UX designer. I'm passionate about technology, science, music, and gaming."
	const image = 'https://elclark.my.id/img/brand/elclark.png'
</script>

<svelte:head>
	<!-- Metadata -->
	<title>{title}</title>
	<link rel="canonical" href={$page.url.href} />

	<!-- Basic HTML Meta Tags -->
	<meta
		name="keywords"
		content="Elclark, Code, software engineer, technology, programming, science, music, gaming, about"
	/>
	<meta name="description" content={description} />
	<meta name="subject" content="About Elclark" />
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
	<h1>About Me</h1>

	<p>
		I'm a software engineer and system administrator from Manado, Indonesia. I also a university
		student and UI/UX designer. I'm passionate about technology, science, music, and gaming.
	</p>

	<p>
		I am a driven and motivated individual who is always looking for new challenges. I am always
		willing to learn new things and I am very adaptable. I am a team player and I work well under
		pressure. I am also very organized and I have a strong attention to detail.
	</p>

	<p>
		I am an excellent problem solver and I have a strong technical background. I am always looking
		for new ways to improve my skills and I am always willing to help others. I am a quick learner
		and I am always willing to take on new challenges.
	</p>

	<p>
		I am a friendly and outgoing person who is always willing to help others. I am also a very hard
		worker and I am always looking for new ways to improve my skills. I am a quick learner and I am
		always willing to take on new challenges.
	</p>

	<p>
		I am a reliable and responsible person who is always willing to help others. I am also a very
		hard worker and I am always looking for new ways to improve my skills. I am a quick learner and
		I am always willing to take on new challenges.
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
