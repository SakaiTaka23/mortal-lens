import { beforeEach, describe, expect, it } from 'vitest';

import { useDoraState } from '../DoraStore';

describe('store dora', () => {
  beforeEach(() => {
    useDoraState.getState().init('1m');
  });

  it('should init', () => {
    const { doraList, init } = useDoraState.getState();
    init('1m');
    expect(doraList).toEqual(['1m']);
  });

  it('should add dora', () => {
    useDoraState.getState().shinDora('3m');
    const { doraList } = useDoraState.getState();
    expect(doraList).toEqual(['1m', '3m']);
  });
});
