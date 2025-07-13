import { Output } from '@mortal-lens/types';
import { beforeEach, describe, expect, it } from 'vitest';

import { useGameState } from '../useGameState';
import oneJson from './1.json';

const resetStore = () => {
  const mockOutput = oneJson as unknown as Output;
  useGameState.getState().setOutput(mockOutput);
};

describe('useGameState', () => {
  beforeEach(() => {
    resetStore();
  });

  it('should initialize state with setOutput', () => {
    const gameState = useGameState.getState();
    expect(gameState.currentKyokuIndex).toBe(0);
    expect(gameState.currentStepIndex).toBe(0);
    expect(gameState.currentKyokuTilesLeft).toBe(69);
  });

  it('should navigate to previous kyoku with prevKyoku', () => {
    const { prevKyoku } = useGameState.getState();
    prevKyoku();
    const { currentKyokuMeta } = useGameState.getState();
    expect(currentKyokuMeta.bakaze).toBe('S');
    expect(currentKyokuMeta.kyoku).toBe(7);
  });
  //
  //   it('should navigate to next kyoku with nextKyoku', () => {
  //     const { setOutput, nextKyoku, currentKyokuMeta } = useGameState.getState();
  //     setOutput(mockOutput);
  //     nextKyoku();
  //     expect(currentKyokuMeta.bakaze).toBe('S');
  //     expect(currentKyokuMeta.kyoku).toBe(2);
  //   });
  //
  //   it('should navigate to previous step with prev', () => {
  //     const { setOutput, prev, currentKyokuTilesLeft } = useGameState.getState();
  //     setOutput(mockOutput);
  //     prev();
  //     expect(currentKyokuTilesLeft).toBe(69);
  //   });
  //
  //   it('should navigate to next step with next', () => {
  //     const { setOutput, next, currentKyokuTilesLeft } = useGameState.getState();
  //     setOutput(mockOutput);
  //     next();
  //     expect(currentKyokuTilesLeft).toBe(69);
  //   });
  //
  //   it('should navigate to previous error step with prevError', () => {
  //     const { setOutput, prevError, currentKyokuTilesLeft } =
  //       useGameState.getState();
  //     setOutput(mockOutput);
  //     prevError();
  //     expect(currentKyokuTilesLeft).toBe(69);
  //   });
  //
  //   it('should navigate to next error step with nextError', () => {
  //     const { setOutput, nextError, currentKyokuTilesLeft } =
  //       useGameState.getState();
  //     setOutput(mockOutput);
  //     nextError();
  //     expect(currentKyokuTilesLeft).toBe(69);
  //   });
  //
  //   it('should navigate to previous choice step with prevChoice', () => {
  //     const { setOutput, prevChoice, currentKyokuTilesLeft } =
  //       useGameState.getState();
  //     setOutput(mockOutput);
  //     prevChoice();
  //     expect(currentKyokuTilesLeft).toBe(69);
  //   });
  //
  //   it('should navigate to next choice step with nextChoice', () => {
  //     const { setOutput, nextChoice, currentKyokuTilesLeft } =
  //       useGameState.getState();
  //     setOutput(mockOutput);
  //     nextChoice();
  //     expect(currentKyokuTilesLeft).toBe(69);
  //   });
});
