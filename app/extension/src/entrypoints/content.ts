import { ParseInputSafe } from '@mortal-lens/parser';
import { Input } from '@mortal-lens/types';
import { defineContentScript } from 'wxt/sandbox';

export default defineContentScript({
  matches: ['https://mjai.ekyu.moe/*'],
  main() {
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
