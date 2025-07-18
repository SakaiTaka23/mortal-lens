import { Output } from '@mortal-lens/types';
import { beforeEach, describe, expect, it } from 'vitest';

import { useGameState } from '../useGameState';
import oneJson from './1.json';
import { resetStore } from './common';

const output = oneJson as unknown as Output;

describe('prev', () => {
  beforeEach(() => {
    resetStore();
  });

  it('should navigate to prev from non review state', () => {
    const { prev } = useGameState.getState();
    prev();

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
    expect(gameState.currentKyokuTilesLeft).toBe(22);
    expect(gameState.currentKyokuUnit).toBe(oneJson.kyokus[7]);
    expect(gameState.currentKyokuStep).toStrictEqual(
      oneJson.kyokus[7].steps[103],
    );
  });

  it('should navigate to prev from review state', () => {
    const { prev } = useGameState.getState();
    prev();
    prev();

    const gameState = useGameState.getState();
    expect(gameState.output).toBe(output);
    expect(gameState.currentKyokuIndex).toBe(7);
    expect(gameState.currentStepIndex).toBe(102);
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
    expect(gameState.currentKyokuTilesLeft).toBe(22);
    expect(gameState.currentKyokuUnit).toBe(oneJson.kyokus[7]);
    expect(gameState.currentKyokuStep).toStrictEqual(
      oneJson.kyokus[7].steps[102],
    );
  });
});
