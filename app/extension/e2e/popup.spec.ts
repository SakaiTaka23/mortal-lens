import { test, expect } from '@playwright/test';

test.describe('Popup', () => {
  test('should show inactive state on non-mjai tab', async ({ page }) => {
    await page.addInitScript(() => {
      (globalThis as any).chrome = { runtime: { id: 'test' } };
      (globalThis as any).browser = {
        runtime: { id: 'test' },
        tabs: {
          query: async () => [{ id: 1, url: 'https://example.com' }],
          sendMessage: async () => {},
        },
      };
    });
    await page.goto('/popup.html');
    await page.locator('#root > *').first().waitFor();
    await expect(page.locator('#root')).toHaveScreenshot('popup-inactive.png');
  });

  test('should show active state on mjai tab', async ({ page }) => {
    await page.addInitScript(() => {
      (globalThis as any).chrome = { runtime: { id: 'test' } };
      (globalThis as any).browser = {
        runtime: { id: 'test' },
        tabs: {
          query: async () => [
            { id: 1, url: 'https://mjai.ekyu.moe/report/xxx' },
          ],
          sendMessage: async () => {},
        },
      };
    });
    await page.goto('/popup.html');
    await page.locator('#root > *').first().waitFor();
    await expect(page.locator('#root')).toHaveScreenshot('popup-active.png');
  });
});
