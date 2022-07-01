import { expect, test } from '@playwright/test'

test('Checking Index', async ({ page }) => {
	await page.goto('/')
	expect(await page.textContent('h1')).toBe("I'm Elclark, Student and software engineer.")
})

test('Checking About', async ({ page }) => {
	await page.goto('/about')
	expect(await page.textContent('h1')).toBe('About Me')
})

test('Checking Contact', async ({ page }) => {
	await page.goto('/contact')
	expect(await page.textContent('h1')).toBe('Contact Me')
})

test('Checking Blog', async ({ page }) => {
	await page.goto('/blog')
	expect(await page.textContent('h1')).toBe('Blog Posts')
})

test('Checking Blog Post', async ({ page }) => {
	await page.goto('/blog/welcome')
	expect(await page.textContent('h1')).toBe('Welcome to my blog!')
})
