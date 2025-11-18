import { Output } from '@mortal-lens/types';
import { beforeEach, describe, expect, it } from 'vitest';

import oneJson from './__fixtures__/1.json';
import { resetStore } from './common';
import { useGameState } from './useGameState';

const output = oneJson as unknown as Output;

describe('nextKyoku', () => {
  beforeEach(() => {
    resetStore();
  });

  it('should navigate to next state from the first kyoku', () => {
    const { nextKyoku } = useGameState.getState();
    nextKyoku();

    const gameState = useGameState.getState();
    expect(gameState.output).toBe(output);
    expect(gameState.currentKyokuIndex).toBe(1);
    expect(gameState.currentStepIndex).toBe(0);
    expect(gameState.currentKyokuMeta).toStrictEqual({
      bakaze: 'E',
      kyoku: 1,
      honba: 1,
      oya: 1,
      endStatus: [
        {
          type: 'hora',
          actor: 0,
          target: 2,
          deltas: [4300, 0, -2300, 0],
          uraMarkers: [],
        },
      ],
      relativeScores: [25500, 23500, 25500, 23500],
    });
    expect(gameState.currentKyokuTilesLeft).toBe(70);
    expect(gameState.currentKyokuUnit).toBe(oneJson.kyokus[1]);
    expect(gameState.currentKyokuStep).toStrictEqual(
      oneJson.kyokus[1].steps[0],
    );
  });

  it('should navigate to the next kyoku', () => {
    const { nextKyoku } = useGameState.getState();
    nextKyoku();
    nextKyoku();

    const gameState = useGameState.getState();
    expect(gameState.output).toBe(output);
    expect(gameState.currentKyokuIndex).toBe(2);
    expect(gameState.currentStepIndex).toBe(0);
    expect(gameState.currentKyokuMeta).toStrictEqual({
      bakaze: 'E',
      kyoku: 2,
      honba: 0,
      oya: 2,
      endStatus: [
        {
          type: 'hora',
          actor: 3,
          target: 1,
          deltas: [0, -5200, 0, 5200],
          uraMarkers: [],
        },
      ],
      relativeScores: [25500, 21200, 25500, 27800],
    });
    expect(gameState.currentKyokuTilesLeft).toBe(70);
    expect(gameState.currentKyokuUnit).toBe(oneJson.kyokus[2]);
    expect(gameState.currentKyokuStep).toStrictEqual(
      oneJson.kyokus[2].steps[0],
    );
  });
});
