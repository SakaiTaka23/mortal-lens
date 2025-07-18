import { Output } from '@mortal-lens/types';
import { beforeEach, describe, expect, it } from 'vitest';

import { useGameState } from '../useGameState';
import oneJson from './1.json';
import { resetStore } from './common';

const output = oneJson as unknown as Output;

describe('next', () => {
  beforeEach(() => {
    resetStore();
  });

  it('should navigate to next from non review state', () => {
    const { next } = useGameState.getState();
    next();

    const gameState = useGameState.getState();
    expect(gameState.output).toBe(output);
    expect(gameState.currentKyokuIndex).toBe(0);
    expect(gameState.currentStepIndex).toBe(1);
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
      oneJson.kyokus[0].steps[1],
    );
  });

  it('sould navigate to next from review state', () => {
    const { next } = useGameState.getState();
    next();
    next();

    const gameState = useGameState.getState();
    expect(gameState.output).toBe(output);
    expect(gameState.currentKyokuIndex).toBe(0);
    expect(gameState.currentStepIndex).toBe(2);
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
      oneJson.kyokus[0].steps[2],
    );
  });
});
