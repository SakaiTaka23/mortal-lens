import { beforeEach, describe, expect, it } from 'vitest';

import { useKawaStore } from '../KawaStore';

describe('store kawa', () => {
  beforeEach(() => {
    useKawaStore.getState().init();
  });

  it('should init', () => {
    useKawaStore.getState().init();
    const state = useKawaStore.getState();
    expect(state[0]).toEqual([]);
    expect(state[1]).toEqual([]);
    expect(state[2]).toEqual([]);
    expect(state[3]).toEqual([]);
    expect(state.remaining).toEqual(69);
  });

  it('should kan', () => {
    useKawaStore.getState().kan();
    const state = useKawaStore.getState();
    expect(state.remaining).toEqual(68);
  });

  it('should dahai', () => {
    useKawaStore.getState().dahai(1, '1m');
    const state = useKawaStore.getState();
    expect(state[0]).toEqual([]);
    expect(state[1]).toEqual(['1m']);
    expect(state[2]).toEqual([]);
    expect(state[3]).toEqual([]);
    expect(state.remaining).toEqual(68);
  });

  it('should handle multiple dahai', () => {
    const state = useKawaStore.getState();
    state.dahai(0, '1m');
    state.dahai(0, '2m');
    state.dahai(1, '3m');
    const updatedState = useKawaStore.getState();

    expect(updatedState[0]).toEqual(['1m', '2m']);
    expect(updatedState[1]).toEqual(['3m']);
    expect(updatedState.remaining).toEqual(66);
  });

  it('should handle multiple kan', () => {
    const state = useKawaStore.getState();
    state.kan();
    state.kan();

    expect(useKawaStore.getState().remaining).toEqual(67);
  });
});
