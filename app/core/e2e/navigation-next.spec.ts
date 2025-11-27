import { test, expect } from '@playwright/test';

/**
 * Next Navigation Test
 *
 * Tests the main NEXT button navigation functionality.
 * This is the primary navigation method for moving forward through game states.
 */

test.describe('LandingPage - Next Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=main--one-json&viewMode=story');
  });

  test('should navigate to next step when NEXT button is clicked', async ({
    page,
  }) => {
    const component = page.locator('#storybook-root > *').first();

    // Find and click the main NEXT button (exact match to avoid matching "Next Round", etc.)
    const nextButton = page.getByRole('button', { name: 'Next', exact: true });
    await nextButton.click();

    // Wait for the state to update
    await page.waitForTimeout(500);

    // Take a screenshot after navigation
    await expect(component).toHaveScreenshot('after-next-click.png');
  });

  test('should be able to navigate back with PREV button', async ({ page }) => {
    // Navigate forward first
    const nextButton = page.getByRole('button', { name: 'Next', exact: true });
    await nextButton.click();
    await page.waitForTimeout(500);

    // Navigate back
    const prevButton = page.getByRole('button', { name: 'Prev', exact: true });
    await prevButton.click();
    await page.waitForTimeout(500);

    // Verify we can navigate back without errors (no snapshot needed)
    const component = page.locator('#storybook-root > *').first();
    await expect(component).toBeVisible();
  });
});
