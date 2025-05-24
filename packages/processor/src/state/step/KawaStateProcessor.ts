import { GameState, Kawa } from '@mjai/core';

export const KawaStateProcessor = (
  state: GameState,
): [Kawa, Kawa, Kawa, Kawa] => state.KawaState.get().kawas;
