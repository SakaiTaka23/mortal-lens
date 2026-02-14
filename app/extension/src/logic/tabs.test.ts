import { describe, expect, it } from 'vitest';

import { findReviewTab } from './tabManager';

describe('findReviewTab', () => {
  const reviewUrl = 'chrome-extension://abc123/review.html';

  it('should return tab id when matching tab exists', () => {
    const tabs = [
      { url: 'https://google.com', id: 1 },
      { url: 'chrome-extension://abc123/review.html', id: 2 },
      { url: 'https://github.com', id: 3 },
    ];

    expect(findReviewTab(tabs, reviewUrl)).toBe(2);
  });

  it('should return undefined when no matching tab exists', () => {
    const tabs = [
      { url: 'https://google.com', id: 1 },
      { url: 'https://github.com', id: 2 },
    ];

    expect(findReviewTab(tabs, reviewUrl)).toBeUndefined();
  });

  it('should return undefined for empty tabs array', () => {
    expect(findReviewTab([], reviewUrl)).toBeUndefined();
  });
});
