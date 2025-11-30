import { readdirSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { ParseInput } from '@mortal-lens/parser';
import { format } from 'prettier';
import { describe, expect, it } from 'vitest';

import { ProcessInput } from './ProcessInput';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const loadTestJson = (fileName: string): unknown => {
  const filePath = join(__dirname, './__fixtures__', fileName);
  const jsonData = readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
};

const getFixtureFiles = () => {
  const fixturesPath = join(__dirname, './__fixtures__');
  return readdirSync(fixturesPath).filter((file) => file.endsWith('.json'));
};

describe('ProcessInput', () => {
  const fixtureFiles = getFixtureFiles();

  fixtureFiles.forEach((fileName) => {
    it('should process input without throwing', async () => {
      const rawData = loadTestJson(fileName);
      const input = ParseInput(rawData);
      const result = ProcessInput(input);
      const formatted = await format(JSON.stringify(result), {
        parser: 'json',
      });
      await expect(formatted).toMatchFileSnapshot(`__snapshots__/${fileName}`);
    });
  });
});
