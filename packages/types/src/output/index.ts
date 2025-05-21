import { HandState } from '@mjai/core';
import { PlayerID } from '@mjai/types';

import { KawaState } from './KawaState';
import { KyokuState } from './KyokuState';
import { MetaState } from './MetaState';
import { ReviewMetaState, ReviewState } from './ReviewState';

export type { KawaState, KyokuState, MetaState, ReviewMetaState, ReviewState };

export interface Output {
  meta: MetaState;
  playerID: PlayerID;
  reviewMeta: ReviewMetaState;
  step: StepState[];
}

export interface StepState {
  hand: [HandState, HandState, HandState, HandState];
  kawa: [KawaState, KawaState, KawaState, KawaState];
  kyoku: KyokuState;
  review?: ReviewState;
}
