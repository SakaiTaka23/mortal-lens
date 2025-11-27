import { test, expect } from '@playwright/test';

/**
 * Initial Display Test
 *
 * Tests the initial rendering of the LandingPage component.
 * Captures a baseline visual snapshot for regression testing.
 */

test.describe('LandingPage - Initial Display', () => {
  test('should render the initial state correctly', async ({ page }) => {
    // Navigate directly to the iframe URL to avoid Storybook UI
    await page.goto('/iframe.html?id=main--one-json&viewMode=story');

    // Wait for the component to be loaded
    const component = page.locator('#storybook-root > *').first();
    await component.waitFor();

    // Take a screenshot for visual regression testing
    await expect(component).toHaveScreenshot('initial-display.png');
  });

  test('should not have any console errors on initial load', async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/iframe.html?id=main--one-json&viewMode=story');

    const component = page.locator('#storybook-root > *').first();
    await component.waitFor();
    await page.waitForTimeout(1000);

    expect(errors).toHaveLength(0);
  });
});
