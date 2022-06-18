# Elclark

![Cloudflare Pages](https://img.shields.io/github/deployments/ElclarkKuhu/Elclark/production?label=Pages&logo=cloudflare&logoColor=%23FFF&style=for-the-badge)
![Checkly](https://img.shields.io/github/checks-status/ElclarkKuhu/Elclark/cloudflare?label=Checkly&style=for-the-badge)

This is my personal website build using [SvelteKit](https://kit.svelte.dev/).

## Changlogs

- v0.3.0 - 05/25/2022

  - Removed `/admin`
  - Removed `/login`
  - Removed `/logout`
  - Dropped [aws-sdk](https://github.com/aws/aws-sdk-js)
  - Dropped upload file
  - Use [Contentful](https://www.contentful.com/) for content management
  - Manually Specify [@sveltejs/kit version](https://github.com/sveltejs/kit) (until it's released)
  - Manually Specify [@sveltejs/adapter-auto](https://github.com/sveltejs/kit/tree/master/packages/adapter-auto) version (until it's released)
  - Bump dependencies to latest versions
  - Rewrite the backend code for `/files`
  - Minor SEO & UX changes

- v0.2.5 - 05/04/2022

  - Cleanup & Refactor Code.
  - Performance Improvements.
  - Move & Rewrite All endpoints to [ElclarkKuhu/Elclark-API](https://github.com/ElclarkKuhu/Elclark-API).
  - Use [@sveltejs/adapter-auto](https://github.com/sveltejs/kit/tree/master/packages/adapter-auto).

- v0.2.4 - 04/16/2022

  - Performance Optimization

- v0.2.3 - 04/16/2022

  - SEO Optimization

- v0.2.2 - 04/15/2022
  - Add Login with username and password
  - Code optimizations
  - Minor Bug Fixes
