import { defineContentScript } from 'wxt/sandbox';

import { processGameData } from '../logic/coreConnector';

export default defineContentScript({
  matches: ['https://mjai.ekyu.moe/*'],
  async main() {
    const currentUrl = window.location.href;

    const result = await browser.storage.local.get('processed_urls');
    const processedUrls = (result.processed_urls as string[]) || [];

    if (processedUrls.includes(currentUrl)) {
      console.log('URL already processed, skipping:', currentUrl);
      return;
    }

    processedUrls.push(currentUrl);
    await browser.storage.local.set({ processed_urls: processedUrls });

    processGameData()
      .then((input) => {
        return browser.runtime.sendMessage({
          type: 'input',
          data: input,
        });
      })
      .catch((error: unknown) => {
        console.error('error processing game data:', error);
      });
  },
});

// @ts-expect-error message and sender types are not defined
browser.runtime.onMessage.addListener((message) => {
  const msg = message as { type: string };
  if (msg.type === 'analyze') {
    processGameData()
      .then((input) => {
        return browser.runtime.sendMessage({
          type: 'input',
          data: input,
        });
      })
      .catch((error: unknown) => {
        console.error('error processing game data:', error);
      });
  }
});
