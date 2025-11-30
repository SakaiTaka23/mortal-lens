import { readdirSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import { format } from 'prettier';
import { describe, expect, it } from 'vitest';

import { ParseInput } from './index';

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

describe('Input Schema Validation', () => {
  const fixtureFiles = getFixtureFiles();

  fixtureFiles.forEach((fileName) => {
    it(`should validate ${fileName}`, async () => {
      const rawData = loadTestJson(fileName);

      const input = ParseInput(rawData);
      const formatted = await format(JSON.stringify(input), {
        parser: 'json',
      });
      await expect(formatted).toMatchFileSnapshot(`__snapshots__/${fileName}`);
    });
  });
});
