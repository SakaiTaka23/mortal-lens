import { test, expect } from '@playwright/test';

/**
 * Round Navigation Test
 *
 * Tests the NEXT ROUND button functionality.
 * This button navigates to the next round (kyoku) in the game.
 */

test.describe('LandingPage - Round Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=main--one-json&viewMode=story');
  });

  test('should navigate to next round when NEXT ROUND button is clicked', async ({
    page,
  }) => {
    const component = page.locator('#storybook-root > *').first();

    // Click the NEXT ROUND button
    const nextRoundButton = page.getByRole('button', { name: 'Next Round' });
    await nextRoundButton.click();

    // Wait for the state to update
    await page.waitForTimeout(500);

    // Take a screenshot after round navigation
    await expect(component).toHaveScreenshot('after-next-round-click.png');
  });

  test('should be able to navigate back with PREV ROUND button', async ({
    page,
  }) => {
    // Navigate forward first
    const nextRoundButton = page.getByRole('button', { name: 'Next Round' });
    await nextRoundButton.click();
    await page.waitForTimeout(500);

    // Navigate back
    const prevRoundButton = page.getByRole('button', { name: 'Prev Round' });
    await prevRoundButton.click();
    await page.waitForTimeout(500);

    // Verify we can navigate back without errors (no snapshot needed)
    const component = page.locator('#storybook-root > *').first();
    await expect(component).toBeVisible();
  });
});
