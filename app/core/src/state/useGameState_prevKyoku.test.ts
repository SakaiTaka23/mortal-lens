import { Output } from '@mortal-lens/types';
import { beforeEach, describe, expect, it } from 'vitest';

import oneJson from './__fixtures__/1.json';
import { resetStore } from './common';
import { useGameState } from './useGameState';

const output = oneJson as unknown as Output;

describe('prevKyoku', () => {
  beforeEach(() => {
    resetStore();
  });

  it('should navigate to last state from the first kyoku', () => {
    const { prevKyoku } = useGameState.getState();
    prevKyoku();

    const gameState = useGameState.getState();
    expect(gameState.output).toBe(output);
    expect(gameState.currentKyokuIndex).toBe(7);
    expect(gameState.currentStepIndex).toBe(103);
    expect(gameState.currentKyokuMeta).toStrictEqual({
      bakaze: 'S',
      kyoku: 7,
      honba: 0,
      oya: 3,
      endStatus: [
        {
          type: 'hora',
          actor: 3,
          target: 3,
          deltas: [-700, -700, -700, 3100],
          uraMarkers: [],
        },
      ],
      relativeScores: [23100, 29500, 29600, 17800],
    });
    expect(gameState.currentKyokuTilesLeft).toBe(23);
    expect(gameState.currentKyokuUnit).toBe(oneJson.kyokus[7]);
    expect(gameState.currentKyokuStep).toStrictEqual(
      oneJson.kyokus[7].steps[103],
    );
  });

  it('should navigate to the last kyoku before the last kyoku', () => {
    const { prevKyoku } = useGameState.getState();
    prevKyoku();
    prevKyoku();

    const gameState = useGameState.getState();
    expect(gameState.output).toBe(output);
    expect(gameState.currentKyokuIndex).toBe(6);
    expect(gameState.currentStepIndex).toBe(110);
    expect(gameState.currentKyokuMeta).toStrictEqual({
      bakaze: 'S',
      kyoku: 6,
      honba: 0,
      oya: 2,
      endStatus: [
        {
          type: 'hora',
          actor: 3,
          target: 2,
          deltas: [0, 0, -3900, 4900],
          uraMarkers: ['1s'],
        },
      ],
      relativeScores: [23100, 33400, 25700, 17800],
    });
    expect(gameState.currentKyokuTilesLeft).toBe(17);
    expect(gameState.currentKyokuUnit).toBe(oneJson.kyokus[6]);
    expect(gameState.currentKyokuStep).toStrictEqual(
      oneJson.kyokus[6].steps[110],
    );
  });
});
