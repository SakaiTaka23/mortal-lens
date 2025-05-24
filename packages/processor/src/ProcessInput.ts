import { createGameState, GameState } from '@mjai/core';
import { Input, MetaState, Output, StepState } from '@mortal-lens/types';

import { MetaStateProcessor } from './state/MetaStateProcessor';
import { ReviewMetaStateProcessor } from './state/ReviewMetaStateProcessor';
import { HandStateProcessor } from './state/step/HandStateProcessor';
import { KawaStateProcessor } from './state/step/KawaStateProcessor';
import { KyokuStateProcessor } from './state/step/KyokuStateProcessor';
import {
  createReviewState,
  ReviewState,
} from './state/step/ReviewStateProcessor';

export const ProcessInput = (input: Input): Output => {
  const metaState: MetaState = MetaStateProcessor(input);
  const reviewMetaState = ReviewMetaStateProcessor(input);
  const step: StepState[] = [];

  let gameState: GameState;
  let kyokuIndex = 0;
  let reviewState: ReviewState;
  input.mjaiLog.forEach((event) => {
    switch (event.type) {
      case 'start_game':
      case 'end_game':
        return;
      case 'start_kyoku':
        gameState = createGameState(event);
        reviewState = createReviewState(
          input.review.kyokus[kyokuIndex].entries,
          input.playerID,
        );
        kyokuIndex++;
        break;
      default:
        gameState.handle(event);
        reviewState.handle(event);
    }
    const snapShot = {
      hand: HandStateProcessor(gameState),
      kawa: KawaStateProcessor(gameState),
      kyoku: KyokuStateProcessor(gameState),
      review: reviewState.checkMapping(gameState),
    } as StepState;
    step.push(snapShot);
  });

  return {
    meta: metaState,
    playerID: input.playerID,
    reviewMeta: reviewMetaState,
    step,
  } as Output;
};
