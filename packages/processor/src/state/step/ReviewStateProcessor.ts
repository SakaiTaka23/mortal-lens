import { GameState } from '@mjai/core';
import { Event, PlayerID } from '@mjai/types';
import {
  DiffLevel,
  Entry,
  ReviewState as ReviewOutputState,
} from '@mortal-lens/types';

export interface ReviewState {
  checkMapping(state: GameState): ReviewOutputState | undefined;

  handle(event: Event): void;
}

/**
 * Create a review state and return the checkMapping and handle functions
 */
export const createReviewState = (
  entries: Entry[],
  evaluatee: PlayerID,
): ReviewState => {
  let index = 0;
  let eventType = '';
  let actor: PlayerID | undefined = undefined;

  /*
   * Check that in the current game state if the review exist or not
   */
  const checkMapping = (state: GameState): ReviewOutputState | undefined => {
    let entry: Entry | undefined;
    let diffLevel: DiffLevel = 'None';

    /**
     * This can happen when it is the end of the kyoku and there is no more reviews
     */
    if (entries[index] === undefined) {
      return undefined;
    }
    /**
     * Check if the current event type is tsumo or reach and the actor is the evaluatee
     * There can be review as well when other player dahai or kakan since player can fuuro
     * This is checked by the remaining tiles since not all dahai or kakan can fuuro
     */
    if (
      ((eventType === 'tsumo' || eventType === 'reach') &&
        actor === evaluatee) ||
      ((eventType === 'dahai' || eventType === 'kakan') &&
        state.KawaState.remaining() === entries[index].tilesLeft &&
        actor !== evaluatee)
    ) {
      /**
       * If there is any match map the entry and add the entry index
       */
      entry = entries[index];
      index++;

      /**
       * Get the current enty and get the pro, calculate the diff level
       */
      const rawActualProb = entry.details[entry.actualIndex].prob;
      const actualProb = (Math.round(rawActualProb * 100000) / 100000) * 100;
      if (actualProb < 1) {
        diffLevel = 'Critical';
      } else if (actualProb < 5) {
        diffLevel = 'Significant';
      } else if (actualProb < 25) {
        diffLevel = 'Moderate';
      } else {
        diffLevel = 'None';
      }
    } else {
      entry = undefined;
    }

    return entry === undefined
      ? undefined
      : ({
          expected: entry.expected,
          actual: entry.actual,
          details: entry.details,
          isEqual: entry.isEqual,
          diffLevel,
          actualIndex: entry.actualIndex,
        } satisfies ReviewOutputState);
  };

  /** Update the current event type
   * Set the actor if it is tsumo or reach event
   * This is because these events are the ones that can be evaluated by type
   */
  const handle = (event: Event): void => {
    eventType = event.type;
    if (event.type === 'tsumo' || event.type === 'reach') {
      actor = event.actor;
    } else {
      actor = undefined;
    }
  };

  return {
    checkMapping,
    handle,
  };
};
