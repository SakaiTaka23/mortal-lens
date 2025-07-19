import { beforeEach, describe, expect, it } from 'vitest';

import oneJson from './1.json';
import { resetStore } from './common';
import { useGameState } from '../useGameState';

describe('setOutput', () => {
  beforeEach(() => {
    resetStore();
  });

  it('should initialize state with setOutput', () => {
    const gameState = useGameState.getState();
    expect(gameState.output).toBe(oneJson);
    expect(gameState.currentKyokuIndex).toBe(0);
    expect(gameState.currentStepIndex).toBe(0);
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
    expect(gameState.currentKyokuTilesLeft).toBe(69);
    expect(gameState.currentKyokuUnit).toBe(oneJson.kyokus[0]);
    expect(gameState.currentKyokuStep).toBe(oneJson.kyokus[0].steps[0]);
  });
});
