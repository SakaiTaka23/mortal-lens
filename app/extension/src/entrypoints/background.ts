import { defineBackground } from 'wxt/sandbox';

import { findReviewTab } from '../logic/tabManager';

export default defineBackground(() => {
  // @ts-expect-error message and sender types are not defined
  browser.runtime.onMessage.addListener(async (message, _sender) => {
    const msg = message as { type: string; data: unknown };
    if (msg.type !== 'input') return;

    await browser.storage.session.set({
      input: msg.data,
    });

    const tabs = await browser.tabs.query({});
    const reviewUrl = browser.runtime.getURL('/review.html');
    const reviewTabId = findReviewTab(tabs, reviewUrl);

    if (reviewTabId) {
      await browser.tabs.update(reviewTabId, { active: true });
      await browser.tabs.reload(reviewTabId);
      console.log('Reusing existing review tab:', reviewTabId);
    } else {
      await browser.tabs.create({ url: reviewUrl });
      console.log('Created new review tab');
    }
  });
});
