import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

import { describe, expect, it } from 'vitest';

import { ParseInput } from '../index';

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
  const fixtureFiles = getFixtureFiles();

  fixtureFiles.forEach((fileName) => {
    it(`should validate ${fileName}`, () => {
      const rawData = loadTestJson(fileName);
      expect(() => ParseInput(rawData)).not.toThrow();
    });
  });
});
