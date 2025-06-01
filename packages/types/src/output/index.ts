import { HandState, Kawa } from '@mjai/core';
import { Hora, PlayerID, Ryukyoku, Tile } from '@mjai/types';

import { MetaState } from './MetaState';
import { ReviewMetaState, ReviewState } from './ReviewState';

export type { MetaState, ReviewMetaState, ReviewState };

export interface Output {
  meta: MetaState;
  playerID: PlayerID;
  reviewMeta: ReviewMetaState;
  kyokus: KyokuUnit[];
}

export interface KyokuUnit {
  bakaze: 'E' | 'S' | 'W';
  kyoku: number;
  honba: number;
  oya: PlayerID;
  endStatus: (Hora | Ryukyoku)[];
  relativeScores: [number, number, number, number];
  steps: StepState[];
}

export interface StepState {
  dora: Tile[];
  hand: [HandState, HandState, HandState, HandState];
  kawa: [Kawa, Kawa, Kawa, Kawa];
  review?: ReviewState;
  tilesLeft: number;
}
