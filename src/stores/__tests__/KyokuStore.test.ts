import { beforeEach, describe, expect, it } from 'vitest';

import { useKyokuStore } from '../KyokuStore';

describe('store kyoku', () => {
  beforeEach(() => {
    useKyokuStore.getState().init(1, 0, 'E');
  });

  it('should init', () => {
    useKyokuStore.getState().init(1, 0, 'E');
    const state = useKyokuStore.getState();
    expect(state.kyoku).toEqual(1);
  });

  it('should show', () => {
    useKyokuStore.getState().init(1, 0, 'E');
    expect(useKyokuStore.getState().show()).toEqual('東1-0');
  });

  it('should show south', () => {
    useKyokuStore.getState().init(3, 2, 'S');
    expect(useKyokuStore.getState().show()).toEqual('南3-2');
  });
});
