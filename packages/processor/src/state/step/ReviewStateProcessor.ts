import {
  DiffLevel,
  Entry,
  ReviewState as ReviewOutputState,
} from '@mortal-lens/types';
import { Event, PlayerID } from 'mjai-ts';
import { GameState } from 'mjai-ts';

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
       * Get the current entry and get the prod, calculate the diff level
       */
      const rawActualProb = entry.details[entry.actualIndex].prob;
      if (entry.isEqual) {
        diffLevel = 'None';
      } else if (rawActualProb <= 0.05) {
        diffLevel = 'Critical';
      } else {
        diffLevel = 'Optimal';
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
