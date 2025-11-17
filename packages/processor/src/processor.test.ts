import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'fs';
import { basename, join, resolve } from 'path';

import { ParseInput } from '@mortal-lens/parser';
import { describe, expect, it } from 'vitest';

import { ProcessInput } from './ProcessInput';

const loadTestJson = (fileName: string): unknown => {
  const filePath = join(__dirname, './__fixtures__', fileName);
  const jsonData = readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
};

const getFixtureFiles = () => {
  const fixturesPath = join(__dirname, './__fixtures__');
  return readdirSync(fixturesPath).filter((file) => file.endsWith('.json'));
};

const saveResult = (fileName: string, obj: unknown) => {
  const resultsDir = resolve(__dirname, './__snapshots__');
  if (!existsSync(resultsDir)) {
    mkdirSync(resultsDir);
  }
  const outPath = join(resultsDir, basename(fileName));
  writeFileSync(outPath, JSON.stringify(obj, null, 2), 'utf-8');
};

describe('ProcessInput', () => {
  const fixtureFiles = getFixtureFiles();

  fixtureFiles.forEach((fileName) => {
    it('should process input without throwing', () => {
      const rawData = loadTestJson(fileName);
      const input = ParseInput(rawData);
      const result = ProcessInput(input);
      saveResult(fileName, result);
      expect(() => result).not.toThrow();
    });
  });
});
