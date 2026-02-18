import { test, expect } from '@playwright/test';

test.describe('Popup', () => {
  test('should show inactive state on non-mjai tab', async ({ page }) => {
    await page.addInitScript(() => {
      Object.assign(globalThis, {
        chrome: { runtime: { id: 'test' } },
        browser: {
          runtime: { id: 'test' },
          tabs: {
            query: () =>
              Promise.resolve([{ id: 1, url: 'https://example.com' }]),
            sendMessage: () => Promise.resolve(),
          },
        },
      });
    });
    await page.goto('/popup.html');
    await page.locator('#root > *').first().waitFor();
    await expect(page.locator('#root')).toHaveScreenshot('popup-inactive.png');
  });

  test('should show active state on mjai tab', async ({ page }) => {
    await page.addInitScript(() => {
      Object.assign(globalThis, {
        chrome: { runtime: { id: 'test' } },
        browser: {
          runtime: { id: 'test' },
          tabs: {
            query: () =>
              Promise.resolve([
                { id: 1, url: 'https://mjai.ekyu.moe/report/xxx' },
              ]),
            sendMessage: () => Promise.resolve(),
          },
        },
      });
    });
    await page.goto('/popup.html');
    await page.locator('#root > *').first().waitFor();
    await expect(page.locator('#root')).toHaveScreenshot('popup-active.png');
  });
});
