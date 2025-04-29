import { create } from 'zustand';

import { Tiles } from '@/types/common/Tiles';
import { MjaiLog, Tehais } from '@/types/input/MjaiLog';
import { State } from '@/types/input/review/kyokus/entry/State';

interface HandStore {
  0: State;
  1: State;
  2: State;
  3: State;
}

interface HandStoreAction {
  init: (initTehai: Tehais) => void;
  update: (log: MjaiLog) => void;
}

export const useHandStore = create<HandStore & HandStoreAction>((set) => ({
  0: { tehai: [], fuuros: [] },
  1: { tehai: [], fuuros: [] },
  2: { tehai: [], fuuros: [] },
  3: { tehai: [], fuuros: [] },

  init: (initTehai: Tehais) => {
    set({
      0: { tehai: initTehai[0], fuuros: [] },
      1: { tehai: initTehai[1], fuuros: [] },
      2: { tehai: initTehai[2], fuuros: [] },
      3: { tehai: initTehai[3], fuuros: [] },
    });
  },
  update: (log: MjaiLog) => {
    set((state) => {
      if (!('actor' in log)) return state;
      const actor = log.actor;

      switch (log.type) {
        case 'tsumo':
          return {
            ...state,
            [actor]: {
              tehai: [...state[actor].tehai, log.pai],
              fuuros: state[actor].fuuros,
            },
          };

        case 'dahai': {
          const tehaiIndex = state[actor].tehai.indexOf(log.pai);
          if (tehaiIndex === -1) return state;

          const newTehai = [...state[actor].tehai];
          newTehai.splice(tehaiIndex, 1);

          return {
            ...state,
            [actor]: {
              tehai: sortTiles(newTehai),
              fuuros: state[actor].fuuros,
            },
          };
        }

        case 'chi':
          return {
            ...state,
            [actor]: {
              tehai: state[actor].tehai.filter(
                (tile) => !log.consumed.includes(tile),
              ),
              fuuros: [
                ...state[actor].fuuros,
                {
                  type: 'chi',
                  target: log.target,
                  pai: log.pai,
                  consumed: log.consumed,
                },
              ],
            },
          };

        case 'pon':
          return {
            ...state,
            [actor]: {
              tehai: state[actor].tehai.filter(
                (tile) => !log.consumed.includes(tile),
              ),
              fuuros: [
                ...state[actor].fuuros,
                {
                  type: 'pon',
                  target: log.target,
                  pai: log.pai,
                  consumed: log.consumed,
                },
              ],
            },
          };

        case 'daiminkan':
          return {
            ...state,
            [actor]: {
              tehai: state[actor].tehai.filter(
                (tile) => !log.consumed.includes(tile),
              ),
              fuuros: [
                ...state[actor].fuuros,
                {
                  type: 'daiminkan',
                  target: log.target,
                  pai: log.pai,
                  consumed: log.consumed,
                },
              ],
            },
          };

        case 'ankan':
          return {
            ...state,
            [actor]: {
              tehai: state[actor].tehai.filter(
                (tile) => !log.consumed.includes(tile),
              ),
              fuuros: [
                ...state[actor].fuuros,
                {
                  type: 'ankan',
                  consumed: log.consumed,
                },
              ],
            },
          };

        case 'kakan':
          return {
            ...state,
            [actor]: {
              tehai: state[actor].tehai.filter((tile) => tile !== log.pai),
              fuuros: [
                ...state[actor].fuuros,
                {
                  type: 'kakan',
                  pai: log.pai,
                  consumed: log.consumed,
                },
              ],
            },
          };

        default:
          return state;
      }
    });
  },
}));

const tileOrder: Record<Tiles, number> = {
  // 萬子
  '1m': 0,
  '2m': 1,
  '3m': 2,
  '4m': 3,
  '5m': 4,
  '5mr': 5,
  '6m': 6,
  '7m': 7,
  '8m': 8,
  '9m': 9,

  // 筒子
  '1p': 10,
  '2p': 11,
  '3p': 12,
  '4p': 13,
  '5p': 14,
  '5pr': 15,
  '6p': 16,
  '7p': 17,
  '8p': 18,
  '9p': 19,

  // 索子
  '1s': 20,
  '2s': 21,
  '3s': 22,
  '4s': 23,
  '5s': 24,
  '5sr': 25,
  '6s': 26,
  '7s': 27,
  '8s': 28,
  '9s': 29,

  // 風牌
  E: 30,
  S: 31,
  W: 32,
  N: 33,

  // 三元牌
  P: 34,
  F: 35,
  C: 36,

  // その他
  back: 37,
  blank: 38,
};
const sortTiles = (tiles: Tiles[]): Tiles[] => {
  return [...tiles].sort((a, b) => tileOrder[a] - tileOrder[b]);
};
