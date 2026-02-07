import { defineBackground } from 'wxt/sandbox';

export default defineBackground(() => {
  // @ts-expect-error message and sender types are not defined
  browser.runtime.onMessage.addListener(async (message, _sender) => {
    const msg = message as { type: string; data: unknown };
    if (msg.type !== 'input') return;

    await browser.storage.session.set({
      input: msg.data,
    });

    const tabs = await browser.tabs.query({});
    const reviewTab = tabs.find((tab) =>
      tab.url?.startsWith(browser.runtime.getURL('/review.html')),
    );

    if (reviewTab?.id) {
      await browser.tabs.update(reviewTab.id, { active: true });
      await browser.tabs.reload(reviewTab.id);
      console.log('Reusing existing review tab:', reviewTab.id);
    } else {
      await browser.tabs.create({
        url: browser.runtime.getURL('/review.html'),
      });
      console.log('Created new review tab');
    }
  });
});
