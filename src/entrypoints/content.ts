import { defineContentScript } from 'wxt/sandbox';

import { Input, InputSchema } from '@/types/input';

export default defineContentScript({
  matches: ['https://mjai.ekyu.moe/killerducky/*'],
  main() {
    // Disable going to next in the page
    document.addEventListener(
      'wheel',
      (event) => {
        event.stopPropagation();
      },
      true,
    );

    processGameData()
      .then((input) => {
        window.dispatchEvent(new CustomEvent('input', { detail: input }));
      })
      .catch((error: unknown) => {
        console.error('error processing game data:', error);
      });
  },
});

export const processGameData = async (): Promise<Input> => {
  const match = /data=\/report\/(.*\.json)/.exec(window.location.href);
  if (!match) {
    return Promise.reject(new Error('No JSON URL found in current page'));
  }

  const jsonUrl = `https://mjai.ekyu.moe/report/${match[1]}`;
  return fetch(jsonUrl)
    .then((response) => response.json())
    .then((rawResponse) => InputSchema.parse(rawResponse));
};
