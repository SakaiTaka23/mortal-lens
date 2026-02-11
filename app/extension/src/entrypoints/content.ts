import { ParseInputSafe } from '@mortal-lens/parser';
import { Input } from '@mortal-lens/types';
import { defineContentScript } from 'wxt/sandbox';

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

export const processGameData = async (): Promise<Input> => {
  const match = /data=\/report\/(.*\.json)/.exec(window.location.href);
  if (!match) {
    return Promise.reject(new Error('No JSON URL found in current page'));
  }
  const jsonUrl = `https://mjai.ekyu.moe/report/${match[1]}`;
  console.log('matched fetching json url:', jsonUrl);
  return fetch(jsonUrl)
    .then((response) => response.json())
    .then((data) => {
      const input = ParseInputSafe(data);
      if (input.error) {
        return Promise.reject(new Error('Failed to parse game data'));
      }
      return input.data;
    });
};
