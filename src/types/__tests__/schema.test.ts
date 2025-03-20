/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

import { describe, expect, it } from 'vitest';

import { InputSchema } from '../input';

const loadTestJson = (fileName: string) => {
  const filePath = join(__dirname, './fixtures', fileName);
  const jsonData = readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
};

const getFixtureFiles = () => {
  const fixturesPath = join(__dirname, './fixtures');
  return readdirSync(fixturesPath).filter((file) => file.endsWith('.json'));
};

describe('Input Schema Validation', () => {
  const jsonFiles = getFixtureFiles();

  jsonFiles.forEach((fileName) => {
    it(`should validate ${fileName}`, () => {
      const rawData = loadTestJson(fileName);
      expect(() => InputSchema.parse(rawData)).not.toThrow();
    });
  });
});
