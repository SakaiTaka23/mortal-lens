import { GameState } from '@mjai/core';
import { KyokuState } from '@mortal-lens/types';

export const KyokuStateProcessor = (state: GameState): KyokuState => {
  const dora = state.DoraState.get();
  const scores = state.ScoreState.get();
  const tilesLeft = state.KawaState.remaining();

  return {
    dora,
    scores,
    tilesLeft,
  } as KyokuState;
};
