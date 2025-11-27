import { test, expect } from '@playwright/test';

/**
 * Functional Tests
 *
 * Tests all button functionality without visual snapshots.
 * Ensures all buttons are clickable and don't throw errors.
 * These tests complement the visual regression tests.
 */

test.describe('LandingPage - All Buttons Functional Test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=main--one-json&viewMode=story');

    // Wait for component to be ready
    const component = page.locator('#storybook-root > *').first();
    await component.waitFor();
  });

  test('all PREV buttons should be clickable and not throw errors', async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    // Test PREV button
    const prevButton = page.getByRole('button', { name: 'Prev', exact: true });
    await prevButton.click();
    await page.waitForTimeout(300);

    // Test PREV ROUND button
    const prevRoundButton = page.getByRole('button', { name: 'Prev Round' });
    await prevRoundButton.click();
    await page.waitForTimeout(300);

    // Test PREV ERROR button
    const prevErrorButton = page.getByRole('button', { name: 'Prev Error' });
    await prevErrorButton.click();
    await page.waitForTimeout(300);

    // Test PREV CHOICE button
    const prevChoiceButton = page.getByRole('button', { name: 'Prev Choice' });
    await prevChoiceButton.click();
    await page.waitForTimeout(300);

    // Verify no console errors occurred
    expect(errors).toHaveLength(0);
  });

  test('all NEXT buttons should be clickable and not throw errors', async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    // Test NEXT button
    const nextButton = page.getByRole('button', { name: 'Next', exact: true });
    await nextButton.click();
    await page.waitForTimeout(300);

    // Test NEXT ROUND button
    const nextRoundButton = page.getByRole('button', { name: 'Next Round' });
    await nextRoundButton.click();
    await page.waitForTimeout(300);

    // Test NEXT ERROR button
    const nextErrorButton = page.getByRole('button', { name: 'Next Error' });
    await nextErrorButton.click();
    await page.waitForTimeout(300);

    // Test NEXT CHOICE button
    const nextChoiceButton = page.getByRole('button', { name: 'Next Choice' });
    await nextChoiceButton.click();
    await page.waitForTimeout(300);

    // Verify no console errors occurred
    expect(errors).toHaveLength(0);
  });

  test('all buttons should be enabled and visible', async ({ page }) => {
    // Navigation buttons
    await expect(
      page.getByRole('button', { name: 'Prev', exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Next', exact: true }),
    ).toBeVisible();

    await expect(
      page.getByRole('button', { name: 'Prev Round' }),
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Next Round' }),
    ).toBeVisible();

    await expect(
      page.getByRole('button', { name: 'Prev Error' }),
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Next Error' }),
    ).toBeVisible();

    await expect(
      page.getByRole('button', { name: 'Prev Choice' }),
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Next Choice' }),
    ).toBeVisible();

    // Modal buttons
    await expect(page.getByRole('button', { name: 'Setting' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'About' })).toBeVisible();
  });

  test('navigation buttons should update component state', async ({ page }) => {
    const component = page.locator('#storybook-root > *').first();

    // Get initial state
    const initialContent = await component.textContent();

    // Click NEXT button
    const nextButton = page.getByRole('button', { name: 'Next', exact: true });
    await nextButton.click();
    await page.waitForTimeout(500);

    // Get updated state
    const updatedContent = await component.textContent();

    // State should have changed (content should be different)
    expect(initialContent).not.toBe(updatedContent);
  });
});
