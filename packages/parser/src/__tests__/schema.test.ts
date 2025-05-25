import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'fs';
import { basename, join, resolve } from 'path';

import { describe, expect, it } from 'vitest';

import { ParseInput } from '../index';

const loadTestJson = (fileName: string): unknown => {
  const filePath = join(__dirname, './fixtures', fileName);
  const jsonData = readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
};

const getFixtureFiles = () => {
  const fixturesPath = join(__dirname, './fixtures');
  return readdirSync(fixturesPath).filter((file) => file.endsWith('.json'));
};

const saveResult = (fileName: string, obj: unknown) => {
  const resultsDir = resolve(__dirname, './results');
  if (!existsSync(resultsDir)) {
    mkdirSync(resultsDir);
  }
  const outPath = join(resultsDir, basename(fileName));
  writeFileSync(outPath, JSON.stringify(obj, null, 2), 'utf-8');
};

describe('Input Schema Validation', () => {
  const fixtureFiles = getFixtureFiles();

  fixtureFiles.forEach((fileName) => {
    it(`should validate ${fileName}`, () => {
      const rawData = loadTestJson(fileName);
      const input = ParseInput(rawData);
      saveResult(fileName, input);
      expect(() => input).not.toThrow();
    });
  });
});
