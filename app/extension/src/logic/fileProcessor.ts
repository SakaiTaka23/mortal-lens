import { ParseInputSafe } from '@mortal-lens/parser';
import { Input } from '@mortal-lens/types';

export const processFileData = async (file: File): Promise<Input> => {
  if (!file.name.endsWith('.json')) {
    return Promise.reject(new Error('Please select a JSON file'));
  }
  return await file.text().then((content) => {
    let parsed: unknown;
    try {
      parsed = JSON.parse(content);
    } catch {
      return Promise.reject(new Error('Invalid JSON syntax'));
    }
    const input = ParseInputSafe(parsed);
    if (input.error) {
      return Promise.reject(new Error('Failed to parse game data'));
    }
    return input.data;
  });
};
