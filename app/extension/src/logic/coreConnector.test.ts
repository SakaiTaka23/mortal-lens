import { ParseInputSafe } from '@mortal-lens/parser';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { processGameData } from './coreConnector';

vi.mock('@mortal-lens/parser', () => ({
  ParseInputSafe: vi.fn(),
}));
const stubWindow = (href: string) => {
  vi.stubGlobal('window', { location: { href } });
};

describe('processGameData', () => {
  const validUrl =
    'https://tenhou.net/6/?data=/report/abc123.json&something=else';
  const mockParsedData = { id: 'test-game', rounds: [] };

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should return parsed input on happy path', async () => {
    stubWindow(validUrl);
    vi.mocked(ParseInputSafe).mockReturnValue({
      success: true,
      // @ts-expect-error This is just a mock
      data: mockParsedData,
    });
    const mockJson = { raw: 'data' };
    const mockFetch = vi
      .fn()
      .mockResolvedValue({ json: () => Promise.resolve(mockJson) });
    vi.stubGlobal('fetch', mockFetch);

    const result = await processGameData();

    expect(mockFetch).toHaveBeenCalledWith(
      'https://mjai.ekyu.moe/report/abc123.json',
    );
    expect(ParseInputSafe).toHaveBeenCalledWith(mockJson);
    expect(result).toBe(mockParsedData);
  });

  it('should reject when URL does not match', async () => {
    stubWindow('https://example.com/no-match');

    await expect(processGameData()).rejects.toThrow(
      'No JSON URL found in current page',
    );
  });

  it('should reject when ParseInputSafe returns error', async () => {
    stubWindow(validUrl);
    vi.mocked(ParseInputSafe).mockReturnValue({
      success: false,
      // @ts-expect-error This is just a mock
      error: new Error('zod error'),
    });
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({ json: () => Promise.resolve({}) }),
    );

    await expect(processGameData()).rejects.toThrow(
      'Failed to parse game data',
    );
  });
});
