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

export const createReviewState = (
  entries: Entry[],
  evaluatee: PlayerID,
): ReviewState => {
  let index = 0;
  let eventType = '';
  let actor: PlayerID | undefined = undefined;

  const checkMapping = (state: GameState): ReviewOutputState | undefined => {
    let entry: Entry | undefined;
    let diffLevel: DiffLevel = 'None';

    if (entries[index] === undefined) {
      return undefined;
    }
    if (
      ((eventType === 'tsumo' || eventType === 'reach') &&
        actor === evaluatee) ||
      ((eventType === 'dahai' || eventType === 'kakan') &&
        state.KawaState.remaining() === entries[index].tilesLeft &&
        actor !== evaluatee)
    ) {
      entry = entries[index];
      index++;

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
          ...entry,
          diffLevel,
        } satisfies ReviewOutputState);
  };

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
