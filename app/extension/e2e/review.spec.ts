import fs from 'fs';
import path from 'path';

import { test, expect } from '@playwright/test';

const gameData = JSON.parse(
  fs.readFileSync(
    path.resolve(process.cwd(), '../core/src/mock/1.json'),
    'utf-8',
  ),
);

test.describe('Review Page', () => {
  test('should display game data', async ({ page }) => {
    await page.addInitScript((data) => {
      (globalThis as any).chrome = { runtime: { id: 'test' } };
      (globalThis as any).browser = {
        runtime: { id: 'test' },
        storage: { session: { get: async () => ({ input: data }) } },
      };
    }, gameData);
    await page.goto('/review.html');
    await page.waitForTimeout(2000);
    await expect(page.locator('#root')).toHaveScreenshot('review-display.png');
  });
});
