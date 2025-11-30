import { test, expect } from '@playwright/test';

/**
 * Choice Navigation Test
 *
 * Tests the NEXT CHOICE button functionality.
 * This button navigates to the next choice point in the game analysis.
 */

test.describe('LandingPage - Choice Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=main--one-json&viewMode=story');
  });

  test('should navigate to next choice when NEXT CHOICE button is clicked', async ({
    page,
  }) => {
    const component = page.locator('#storybook-root > *').first();

    // Click the NEXT CHOICE button
    const nextChoiceButton = page.getByRole('button', { name: 'Next Choice' });
    await nextChoiceButton.click();

    // Wait for the state to update
    await page.waitForTimeout(500);

    // Take a screenshot after choice navigation
    await expect(component).toHaveScreenshot('after-next-choice-click.png');
  });

  test('should be able to navigate back with PREV CHOICE button', async ({
    page,
  }) => {
    // Navigate forward first
    const nextChoiceButton = page.getByRole('button', { name: 'Next Choice' });
    await nextChoiceButton.click();
    await page.waitForTimeout(500);

    // Navigate back
    const prevChoiceButton = page.getByRole('button', { name: 'Prev Choice' });
    await prevChoiceButton.click();
    await page.waitForTimeout(500);

    // Verify we can navigate back without errors (no snapshot needed)
    const component = page.locator('#storybook-root > *').first();
    await expect(component).toBeVisible();
  });
});
