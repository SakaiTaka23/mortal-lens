import { GameState } from '@mjai/core';
import { Event, PlayerID } from '@mjai/types';
import { Entry } from '@mortal-lens/types';

export interface ReviewState {
  checkMapping(state: GameState): Entry | undefined;

  handle(event: Event): void;
}

export const createReviewState = (
  entries: Entry[],
  evaluatee: PlayerID,
): ReviewState => {
  let index = 0;
  let eventType = '';
  let actor: PlayerID | undefined = undefined;

  const checkMapping = (state: GameState): Entry | undefined => {
    let entry: Entry | undefined;
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
    } else {
      entry = undefined;
    }
    return entry;
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
