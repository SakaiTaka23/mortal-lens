import { describe, expect, it, vi } from 'vitest';

import { processFileData } from './fileProcessor';

vi.mock('@mortal-lens/parser', () => ({
  ParseInputSafe: vi.fn(),
}));

describe('processFileData', () => {
  it('should successfully process valid JSON files', async () => {
    const { ParseInputSafe } = await import('@mortal-lens/parser');
    vi.mocked(ParseInputSafe).mockReturnValueOnce({
      data: { test: 'data' },
    } as never);
    const file = new File(['{}'], 'test.json', {
      type: 'application/json',
    });
    await expect(processFileData(file)).resolves.toEqual({ test: 'data' });
  });

  it('should reject non-JSON files', async () => {
    const file = new File(['test'], 'test.txt', { type: 'text/plain' });
    await expect(processFileData(file)).rejects.toThrow(
      'Please select a JSON file',
    );
  });

  it('should reject invalid JSON syntax', async () => {
    const file = new File(['{invalid syntax}'], 'test.json', {
      type: 'application/json',
    });
    await expect(processFileData(file)).rejects.toThrow('Invalid JSON syntax');
  });

  it('should reject invalid JSON format', async () => {
    const { ParseInputSafe } = await import('@mortal-lens/parser');
    vi.mocked(ParseInputSafe).mockReturnValueOnce({
      error: new Error('invalid'),
    } as never);

    const file = new File(['{}'], 'test.json', {
      type: 'application/json',
    });
    await expect(processFileData(file)).rejects.toThrow(
      'Failed to parse game data',
    );
  });
});
