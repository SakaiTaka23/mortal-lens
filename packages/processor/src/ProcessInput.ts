import {
  Input,
  KyokuUnit,
  MetaState,
  Output,
  StepState,
} from '@mortal-lens/types';
import { Event, StartKyoku } from 'mjai-ts';
import { createGameState } from 'mjai-ts';

import { MetaStateProcessor } from './state/MetaStateProcessor';
import { ReviewMetaStateProcessor } from './state/ReviewMetaStateProcessor';
import { ScoreOverviewProcessor } from './state/ScoreOverviewProcessor';
import { createReviewState } from './state/step/ReviewStateProcessor';

/**
 * Main function to convert the input to the output
 */
export const ProcessInput = (input: Input): Output => {
  const metaState: MetaState = MetaStateProcessor(input);
  const reviewMetaState = ReviewMetaStateProcessor(input);
  const scoreOverviewState = ScoreOverviewProcessor();

  const kyokuLog = splitKyoku(input.mjaiLog);
  const kyokus: KyokuUnit[] = [];
  kyokuLog.forEach((log, i) => {
    const gameState = createGameState(log[0] as StartKyoku);
    const reviewKyoku = input.review.kyokus[i];
    const reviewState = createReviewState(reviewKyoku.entries, input.playerID);
    const steps: StepState[] = [];

    /**
     * Iterate through the events in the kyoku
     * It first updates the game state and review state
     * Then it creates a snapshot of the current state and pushes it to the steps array as a snapshot
     * This snapshot contains all the information needed to render the step in the review
     */
    log.forEach((event) => {
      scoreOverviewState.handle(event);
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

    /**
     * Static information about the kyoku
     */
    const kyoku: KyokuUnit = {
      bakaze: gameState.KyokuState.bakaze(),
      kyoku: reviewKyoku.kyoku,
      honba: reviewKyoku.honba,
      oya: gameState.KyokuState.oya(),
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
    scoreOverview: scoreOverviewState.currentResult(),
  };
};

/**
 * Event is merged to one array regardless of the kyoku
 * It ignores start_game and end_game and splits by start_kyoku
 * Pushes as new array when start_kyoku is found
 */
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
