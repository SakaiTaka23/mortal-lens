import { GameState, HandState } from '@mjai/core';

export const HandStateProcessor = (
  state: GameState,
): [HandState, HandState, HandState, HandState] => state.TehaiState.get();
