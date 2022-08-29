import { expect, test } from '@playwright/test'

test('Checking Landing Page', async ({ page }) => {
	await page.goto('/')
	expect(await page.textContent('h1')).toBe('Elclark Kuhu')
})

test('Checking Contact Page', async ({ page }) => {
	await page.goto('/contact')
	expect(await page.textContent('h1')).toBe('Contact Me')
})

test('Checking Socials Page', async ({ page }) => {
	await page.goto('/socials')
	expect(await page.textContent('h1')).toBe('Social Media')
})
