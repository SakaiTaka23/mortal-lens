import { test, expect } from '@playwright/test';

/**
 * Error Navigation Test
 *
 * Tests the NEXT ERROR button functionality.
 * This button navigates to the next error scene in the game analysis.
 */

test.describe('LandingPage - Error Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=main--one-json&viewMode=story');
  });

  test('should navigate to next error when NEXT ERROR button is clicked', async ({
    page,
  }) => {
    const component = page.locator('#storybook-root > *').first();

    // Click the NEXT ERROR button
    const nextErrorButton = page.getByRole('button', { name: 'Next Error' });
    await nextErrorButton.click();

    // Wait for the state to update
    await page.waitForTimeout(500);

    // Take a screenshot after error navigation
    await expect(component).toHaveScreenshot('after-next-error-click.png');
  });

  test('should be able to navigate back with PREV ERROR button', async ({
    page,
  }) => {
    // Navigate forward first
    const nextErrorButton = page.getByRole('button', { name: 'Next Error' });
    await nextErrorButton.click();
    await page.waitForTimeout(500);

    // Navigate back
    const prevErrorButton = page.getByRole('button', { name: 'Prev Error' });
    await prevErrorButton.click();
    await page.waitForTimeout(500);

    // Verify we can navigate back without errors (no snapshot needed)
    const component = page.locator('#storybook-root > *').first();
    await expect(component).toBeVisible();
  });
});
