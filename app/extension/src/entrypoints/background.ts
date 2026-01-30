import { defineBackground } from 'wxt/sandbox';

export default defineBackground(() => {
  // @ts-expect-error message and sender types are not defined
  browser.runtime.onMessage.addListener((message, _sender) => {
    const msg = message as { type: string; data: unknown };
    if (msg.type !== 'input') return;
    void browser.storage.session.set({
      input: msg.data,
    });
    void browser.tabs.create({
      url: browser.runtime.getURL('/review.html'),
    });
  });
});
