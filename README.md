# Elclark

![Build](https://img.shields.io/github/workflow/status/ElclarkCodes/Elclark/Verify%20CI?style=flat-square)
![Checkly](https://api.checklyhq.com/v1/badges/checks/23234da3-a63e-4c31-ab63-8fc763f67625?style=flat-square&responseTime=false)

This is my personal website build using [SvelteKit](https://kit.svelte.dev/).

## Changlogs

- v0.4.5 - 1/7/2022

  - :new: use [MDsveX](https://mdsvex.com/)
  - :new: redesign blog layout

- v0.4.4 - 25/06/2022

  - :new: feat: make file pages responsive
  - :new: feat: add close button to mobile navigation
  - :new: feat: animate close button
  - :art: style: move `/files/*` to `/file/*`
  - :bug: fix: invaild links in `/file/`

- v0.4.3 - 24/06/2022

  - :new: feat: update file pages
  - :new: feat: only return nesessary data
  - :bug: fix: navigation padding & margin
  - :bug: fix: return 404 when blog not found
  - :rotating_light: test: add test for blog
  - :recycle: chore: update GitHub Link

- v0.4.2 - 19/06/2022

  - :art: style: reformat codes
  - :new: feat: add all blog posts
  - :rotating_light: test: add [@playwright/test](https://github.com/Microsoft/playwright)
  - :rotating_light: test: add tests
  - :recycle: chore: add [GitHub Actions](https://github.com/ElclarkCodes/Elclark/actions)
  - :recycle: chore: update sitemap & robots.txt
  - :recycle: chore: update Terms of conditions
  - :recycle: chore: update Privacy Policy
  - :recycle: chore: update pages metadata
  - :bug: fix: to much margin top when hero not sticky
  - :bug: fix: Mobile navbar height
  - :bug: fix: recommending current post
  - :bug: fix: hide more posts when there is no more posts
  - :bug: fix: mobile navbar reactive to window resize
  - :bug: fix: broken padding for small device
  - :bug: fix: hide ad template

- v0.4.1 - 19/06/2022

  - :new: feat: Update Error Page.
  - :new: feat: Update Blog title Margin.

- v0.4.0 - 19/06/2022

  - :new: feat: UI Overhaul.
  - :new: feat: Add blog.
  - :new: feat: Add about.
  - :new: feat: Add contact.
  - :new: feat: Add changelog.
  - :recycle: chore: Bug fixes & minor changes.
  - :x: Drop Contentful.

- v0.3.0 - 25/05/2022

  - :x: Removed `/admin`
  - :x: Removed `/login`
  - :x: Removed `/logout`
  - :x: Dropped [aws-sdk](https://github.com/aws/aws-sdk-js)
  - :x: Dropped upload file
  - :new: feat: Rewrite the backend code for `/files`
  - :new: feat: Use [Contentful](https://www.contentful.com/) for content management
  - :recycle: chore: Manually Specify [@sveltejs/kit version](https://github.com/sveltejs/kit) (until it's released)
  - :recycle: chore: Manually Specify [@sveltejs/adapter-auto](https://github.com/sveltejs/kit/tree/master/packages/adapter-auto) version (until it's released)
  - :recycle: chore: Bump dependencies to latest versions
  - :recycle: chore: Minor SEO & UX changes

- v0.2.5 - 04/05/2022

  - :recycle: chore: Cleanup & Refactor Code.
  - :recycle: chore: Performance Improvements.
  - :recycle: chore: Move & Rewrite All endpoints to [ElclarkKuhu/Elclark-API](https://github.com/ElclarkKuhu/Elclark-API).
  - :new: feat: Use [@sveltejs/adapter-auto](https://github.com/sveltejs/kit/tree/master/packages/adapter-auto).

- v0.2.4 - 16/04/2022

  - :recycle: chore: Performance Optimization

- v0.2.3 - 16/04/2022

  - :recycle: chore: SEO Optimization

- v0.2.2 - 15/04/2022
  - :new: feat: Add Login with username and password
  - :recycle: chore: Code optimizations
  - :recycle: chore: Minor Bug Fixes
