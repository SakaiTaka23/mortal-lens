import { createGameState } from '@mjai/core';
import { Event, StartKyoku } from '@mjai/types';
import {
  Input,
  KyokuUnit,
  MetaState,
  Output,
  StepState,
} from '@mortal-lens/types';

import { MetaStateProcessor } from './state/MetaStateProcessor';
import { ReviewMetaStateProcessor } from './state/ReviewMetaStateProcessor';
import { createReviewState } from './state/step/ReviewStateProcessor';

export const ProcessInput = (input: Input): Output => {
  const metaState: MetaState = MetaStateProcessor(input);
  const reviewMetaState = ReviewMetaStateProcessor(input);

  const kyokuLog = splitKyoku(input.mjaiLog);
  const kyokus: KyokuUnit[] = [];
  kyokuLog.forEach((log, i) => {
    const gameState = createGameState(log[0] as StartKyoku);
    const reviewKyoku = input.review.kyokus[i];
    const reviewState = createReviewState(reviewKyoku.entries, input.playerID);
    const steps: StepState[] = [];

    log.forEach((event) => {
      gameState.handle(event);
      reviewState.handle(event);

      const snapShot: StepState = {
        dora: gameState.DoraState.get(),
        hand: gameState.TehaiState.get(),
        kawa: gameState.KawaState.get().kawas,
        review: reviewState.checkMapping(gameState),
        tilesLeft: gameState.KawaState.remaining(),
      };
      steps.push(snapShot);
    });

    const kyoku: KyokuUnit = {
      kyoku: reviewKyoku.kyoku,
      honba: reviewKyoku.honba,
      endStatus: reviewKyoku.endStatus,
      relativeScores: reviewKyoku.relativeScores,
      steps,
    };
    kyokus.push(kyoku);
  });

  return {
    meta: metaState,
    playerID: input.playerID,
    reviewMeta: reviewMetaState,
    kyokus,
  };
};

const splitKyoku = (event: Event[]): Event[][] => {
  checkEvent(event);
  const groupedKyoku: Event[][] = [];
  let currentKyoku: Event[] = [];

  event.forEach((event) => {
    if (event.type === 'start_game' || event.type === 'end_game') {
      return;
    }

    if (event.type === 'start_kyoku' && currentKyoku.length > 0) {
      groupedKyoku.push([...currentKyoku]);
      currentKyoku = [];
    }
    currentKyoku.push(event);
  });

  groupedKyoku.push(currentKyoku);

  return groupedKyoku;
};

const checkEvent = (event: Event[]) => {
  if (event[0].type !== 'start_game') {
    throw new Error('Invalid input: first entry must be start_game');
  }
  if (event[event.length - 1].type !== 'end_game') {
    throw new Error('Invalid input: last entry must be end_game');
  }
};
