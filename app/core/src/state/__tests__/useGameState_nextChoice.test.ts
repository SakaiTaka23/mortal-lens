import { Output } from '@mortal-lens/types';
import { beforeEach, describe, expect, it } from 'vitest';

import { useGameState } from '../useGameState';
import oneJson from './1.json';
import { resetStore } from './common';

const output = oneJson as unknown as Output;

describe('nextChoice', () => {
  beforeEach(() => {
    resetStore();
  });

  it('should navigate to next choice from non review state', () => {
    const { nextChoice } = useGameState.getState();
    nextChoice();

    const gameState = useGameState.getState();
    expect(gameState.output).toBe(output);
    expect(gameState.currentKyokuIndex).toBe(0);
    expect(gameState.currentStepIndex).toBe(3);
    expect(gameState.currentKyokuMeta).toStrictEqual({
      bakaze: 'E',
      kyoku: 0,
      honba: 0,
      oya: 0,
      endStatus: [
        {
          type: 'ryukyoku',
          deltas: [-1500, 1500, -1500, 1500],
        },
      ],
      relativeScores: [25000, 25000, 25000, 25000],
    });
    expect(gameState.currentKyokuTilesLeft).toBe(68);
    expect(gameState.currentKyokuUnit).toBe(oneJson.kyokus[0]);
    expect(gameState.currentKyokuStep).toStrictEqual(
      oneJson.kyokus[0].steps[3],
    );
  });

  it('should navigate to next choice from review state', () => {
    const { nextChoice } = useGameState.getState();
    nextChoice();
    nextChoice();

    const gameState = useGameState.getState();
    expect(gameState.output).toBe(output);
    expect(gameState.currentKyokuIndex).toBe(0);
    expect(gameState.currentStepIndex).toBe(11);
    expect(gameState.currentKyokuMeta).toStrictEqual({
      bakaze: 'E',
      kyoku: 0,
      honba: 0,
      oya: 0,
      endStatus: [
        {
          type: 'ryukyoku',
          deltas: [-1500, 1500, -1500, 1500],
        },
      ],
      relativeScores: [25000, 25000, 25000, 25000],
    });
    expect(gameState.currentKyokuTilesLeft).toBe(64);
    expect(gameState.currentKyokuUnit).toBe(oneJson.kyokus[0]);
    expect(gameState.currentKyokuStep).toStrictEqual(
      oneJson.kyokus[0].steps[11],
    );
  });
});
