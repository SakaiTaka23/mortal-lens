import { HandState, Kawa } from '@mjai/core';
import { PlayerID } from '@mjai/types';

import { KyokuState } from './KyokuState';
import { MetaState } from './MetaState';
import { ReviewMetaState, ReviewState } from './ReviewState';

export type { KyokuState, MetaState, ReviewMetaState, ReviewState };

export interface Output {
  meta: MetaState;
  playerID: PlayerID;
  reviewMeta: ReviewMetaState;
  step: StepState[];
}

export interface StepState {
  hand: [HandState, HandState, HandState, HandState];
  kawa: [Kawa, Kawa, Kawa, Kawa];
  kyoku: KyokuState;
  review?: ReviewState;
}
