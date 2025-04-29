import { beforeEach, describe, expect, it } from 'vitest';

import { Tiles } from '@/types/common/Tiles';
import { MjaiLog } from '@/types/input/MjaiLog';
import { State } from '@/types/input/review/kyokus/entry/State';

import { useHandStore } from '../HandStore';

interface HandStore {
  0: State;
  1: State;
  2: State;
  3: State;
}

describe('store hand', () => {
  beforeEach(() => {
    useHandStore.setState({
      0: { tehai: [], fuuros: [] },
      1: { tehai: [], fuuros: [] },
      2: { tehai: [], fuuros: [] },
      3: { tehai: [], fuuros: [] },
    });
  });

  it('should init', () => {
    const initTehai: Tiles[][] = [
      [
        '1m',
        '2m',
        '3m',
        '4m',
        '5m',
        '6m',
        '7m',
        '8m',
        '9m',
        '1p',
        '2p',
        '3p',
        '4p',
      ],
      [
        '1s',
        '2s',
        '3s',
        '4s',
        '5s',
        '6s',
        '7s',
        '8s',
        '9s',
        '1p',
        '2p',
        '3p',
        '4p',
      ],
      ['E', 'E', 'E', 'W', 'W', 'W', 'N', 'N', 'N', 'P', 'P', 'F', 'F'],
      [
        '1m',
        '2m',
        '3m',
        '4m',
        '5m',
        '6m',
        '7m',
        '8m',
        '9m',
        '1s',
        '2s',
        '3s',
        '4s',
      ],
    ];
    useHandStore.getState().init(initTehai);

    const state = useHandStore.getState();
    expect(state[0].tehai).toEqual(initTehai[0]);
    expect(state[1].tehai).toEqual(initTehai[1]);
    expect(state[2].tehai).toEqual(initTehai[2]);
    expect(state[3].tehai).toEqual(initTehai[3]);
  });

  it('should handle tsumo', () => {
    const initTehai: Tiles[][] = [['1m'], [], [], []];
    useHandStore.getState().init(initTehai);

    const tsumoLog: MjaiLog = {
      type: 'tsumo',
      actor: 0,
      pai: '2m',
    };
    useHandStore.getState().update(tsumoLog);

    expect(useHandStore.getState()[0].tehai).toEqual(['1m', '2m']);
  });

  it('should handle dahai', () => {
    const initTehai: Tiles[][] = [['1m', '2m'], [], [], []];
    useHandStore.getState().init(initTehai);

    const dahaiLog: MjaiLog = {
      type: 'dahai',
      actor: 0,
      pai: '1m',
      tsumogiri: false,
    };
    useHandStore.getState().update(dahaiLog);

    expect(useHandStore.getState()[0].tehai).toEqual(['2m']);
  });

  it('should handle dahai with sort', () => {
    const initTehai: Tiles[][] = [['5m', '6m', '2m'], [], [], []];
    useHandStore.getState().init(initTehai);

    const dahaiLog: MjaiLog = {
      type: 'dahai',
      actor: 0,
      pai: '5m',
      tsumogiri: false,
    };
    useHandStore.getState().update(dahaiLog);

    expect(useHandStore.getState()[0].tehai).toEqual(['2m', '6m']);
  });

  it('should handle chi', () => {
    const initTehai: Tiles[][] = [['2m', '3m'], [], [], []];
    useHandStore.getState().init(initTehai);

    const chiLog: MjaiLog = {
      type: 'chi',
      actor: 0,
      target: 1,
      pai: '1m',
      consumed: ['2m', '3m'],
    };
    useHandStore.getState().update(chiLog);

    expect(useHandStore.getState()[0].tehai).toEqual([]);
    expect(useHandStore.getState()[0].fuuros[0]).toEqual({
      type: 'chi',
      target: 1,
      pai: '1m',
      consumed: ['2m', '3m'],
    });
  });

  it('should handle pon', () => {
    const initTehai: Tiles[][] = [['1m', '1m'], [], [], []];
    useHandStore.getState().init(initTehai);

    const ponLog: MjaiLog = {
      type: 'pon',
      actor: 0,
      target: 1,
      pai: '1m',
      consumed: ['1m', '1m'],
    };
    useHandStore.getState().update(ponLog);

    expect(useHandStore.getState()[0].tehai).toEqual([]);
    expect(useHandStore.getState()[0].fuuros[0]).toEqual({
      type: 'pon',
      target: 1,
      pai: '1m',
      consumed: ['1m', '1m'],
    });
  });

  it('should handle daiminkan', () => {
    const initTehai: Tiles[][] = [['1m', '1m', '1m'], [], [], []];
    useHandStore.getState().init(initTehai);

    const daiminkanLog: MjaiLog = {
      type: 'daiminkan',
      actor: 0,
      target: 1,
      pai: '1m',
      consumed: ['1m', '1m', '1m'],
    };
    useHandStore.getState().update(daiminkanLog);

    expect(useHandStore.getState()[0].tehai).toEqual([]);
    expect(useHandStore.getState()[0].fuuros[0]).toEqual({
      type: 'daiminkan',
      target: 1,
      pai: '1m',
      consumed: ['1m', '1m', '1m'],
    });
  });

  it('should handle ankan', () => {
    const initTehai: Tiles[][] = [['1m', '1m', '1m', '1m'], [], [], []];
    useHandStore.getState().init(initTehai);

    const ankanLog: MjaiLog = {
      type: 'ankan',
      actor: 0,
      consumed: ['1m', '1m', '1m', '1m'],
    };
    useHandStore.getState().update(ankanLog);

    expect(useHandStore.getState()[0].tehai).toEqual([]);
    expect(useHandStore.getState()[0].fuuros[0]).toEqual({
      type: 'ankan',
      consumed: ['1m', '1m', '1m', '1m'],
    });
  });

  it('should handle kakan', () => {
    const initialState: HandStore = {
      0: {
        tehai: ['1m'],
        fuuros: [
          {
            type: 'pon',
            target: 1,
            pai: '1m',
            consumed: ['1m', '1m'],
          },
        ],
      },
      1: { tehai: [], fuuros: [] },
      2: { tehai: [], fuuros: [] },
      3: { tehai: [], fuuros: [] },
    };
    useHandStore.setState(initialState);

    const kakanLog: MjaiLog = {
      type: 'kakan',
      actor: 0,
      pai: '1m',
      consumed: ['1m', '1m', '1m'],
    };
    useHandStore.getState().update(kakanLog);

    expect(useHandStore.getState()[0].tehai).toEqual([]);
    expect(useHandStore.getState()[0].fuuros[1]).toEqual({
      type: 'kakan',
      pai: '1m',
      consumed: ['1m', '1m', '1m'],
    });
  });
});
