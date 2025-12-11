import { HoraDetail, KyokuUnit, Output, StepState } from '@mortal-lens/types';
import { PlayerID, Ryukyoku } from 'mjai-ts';
import { create } from 'zustand/react';

import { initialState } from './initialState';

export interface GameState {
  output: Output;
  currentKyokuIndex: number;
  currentStepIndex: number;
  currentKyokuMeta: {
    bakaze: 'E' | 'S' | 'W';
    kyoku: number;
    honba: number;
    oya: PlayerID;
    endStatus: (HoraDetail | Ryukyoku)[];
    relativeScores: [number, number, number, number];
  };
  currentKyokuTilesLeft: number;
  currentKyokuUnit: KyokuUnit;
  currentKyokuStep: StepState;
  isKyokuEnd: boolean;
}

interface GameActions {
  setOutput: (output: Output) => void;
  setKyoku: (kyokuIndex: number) => void;
  prevKyoku: () => void;
  nextKyoku: () => void;
  prevError: () => void;
  nextError: () => void;
  prevChoice: () => void;
  nextChoice: () => void;
  prev: () => void;
  next: () => void;
  closeKyokuEndModal: () => void;
}

export const useGameState = create<GameState & GameActions>((set, get) => {
  const updateMortalState = (stepIndex: number, kyokuUnit: KyokuUnit) => {
    const shouldOpenModal = stepIndex === kyokuUnit.steps.length - 1;
    set({ isKyokuEnd: shouldOpenModal });
  };
  return {
    ...initialState,
    setOutput: (output) => {
      const currentKyokuUnit = output.kyokus[0];

      set({
        output,
        currentKyokuIndex: 0,
        currentStepIndex: 0,
        currentKyokuMeta: {
          bakaze: currentKyokuUnit.bakaze,
          kyoku: currentKyokuUnit.kyoku,
          honba: currentKyokuUnit.honba,
          oya: currentKyokuUnit.oya,
          endStatus: currentKyokuUnit.endStatus,
          relativeScores: currentKyokuUnit.relativeScores,
        },
        currentKyokuTilesLeft: currentKyokuUnit.steps[0].tilesLeft,
        currentKyokuUnit,
        currentKyokuStep: currentKyokuUnit.steps[0],
      });
    },
    setKyoku: (kyokuIndex: number) => {
      const maxKyokuIndex = get().output.kyokus.length - 1;
      if (kyokuIndex > maxKyokuIndex || kyokuIndex < 0) {
        return;
      }
      const currentKyokuUnit = get().output.kyokus[kyokuIndex];
      set({
        currentKyokuIndex: kyokuIndex,
        currentStepIndex: 0,
        currentKyokuMeta: {
          bakaze: currentKyokuUnit.bakaze,
          kyoku: currentKyokuUnit.kyoku,
          honba: currentKyokuUnit.honba,
          oya: currentKyokuUnit.oya,
          endStatus: currentKyokuUnit.endStatus,
          relativeScores: currentKyokuUnit.relativeScores,
        },
        currentKyokuTilesLeft: currentKyokuUnit.steps[0].tilesLeft,
        currentKyokuUnit,
        currentKyokuStep: currentKyokuUnit.steps[0],
      });
    },
    prevKyoku: () => {
      const maxKyokuIndex = get().output.kyokus.length - 1;
      const currentKyokuIndex = get().currentKyokuIndex;
      if (currentKyokuIndex != 0) {
        set({
          currentKyokuIndex: currentKyokuIndex - 1,
        });
      } else {
        set({
          currentKyokuIndex: maxKyokuIndex,
        });
      }
      const currentKyokuUnit = get().output.kyokus[get().currentKyokuIndex];
      const nextStepIndex = currentKyokuUnit.steps.length - 1;
      set({
        currentStepIndex: nextStepIndex,
        currentKyokuMeta: {
          bakaze: currentKyokuUnit.bakaze,
          kyoku: currentKyokuUnit.kyoku,
          honba: currentKyokuUnit.honba,
          oya: currentKyokuUnit.oya,
          endStatus: currentKyokuUnit.endStatus,
          relativeScores: currentKyokuUnit.relativeScores,
        },
        currentKyokuTilesLeft:
          currentKyokuUnit.steps[currentKyokuUnit.steps.length - 1].tilesLeft,
        currentKyokuUnit,
        currentKyokuStep:
          currentKyokuUnit.steps[currentKyokuUnit.steps.length - 1],
      });
    },
    nextKyoku: () => {
      const maxKyokuIndex = get().output.kyokus.length - 1;
      const currentKyokuIndex = get().currentKyokuIndex;
      if (currentKyokuIndex < maxKyokuIndex) {
        set({
          currentKyokuIndex: currentKyokuIndex + 1,
        });
      } else {
        set({
          currentKyokuIndex: 0,
        });
      }
      const currentKyokuUnit = get().output.kyokus[get().currentKyokuIndex];
      set({
        currentStepIndex: 0,
        currentKyokuMeta: {
          bakaze: currentKyokuUnit.bakaze,
          kyoku: currentKyokuUnit.kyoku,
          honba: currentKyokuUnit.honba,
          oya: currentKyokuUnit.oya,
          endStatus: currentKyokuUnit.endStatus,
          relativeScores: currentKyokuUnit.relativeScores,
        },
        currentKyokuTilesLeft: currentKyokuUnit.steps[0].tilesLeft,
        currentKyokuUnit,
        currentKyokuStep: currentKyokuUnit.steps[0],
      });
    },
    prevError: () => {
      const findPrevReviewStep = () => {
        const currentKyokuUnit = get().currentKyokuUnit;
        const currentStepIndex = get().currentStepIndex;

        const prevIndex = currentKyokuUnit.steps
          .slice(0, currentStepIndex)
          .reverse()
          .findIndex(
            (step) => step.review !== undefined && !step.review.isEqual,
          );

        if (prevIndex !== -1) {
          set({
            currentStepIndex: currentStepIndex - prevIndex - 1,
            currentKyokuStep:
              currentKyokuUnit.steps[currentStepIndex - prevIndex - 1],
            currentKyokuTilesLeft:
              currentKyokuUnit.steps[currentStepIndex - prevIndex - 1]
                .tilesLeft,
          });
        } else {
          get().prevKyoku();
        }
      };

      findPrevReviewStep();
    },
    nextError: () => {
      const findNextReviewStep = () => {
        const currentKyokuUnit = get().currentKyokuUnit;
        const currentStepIndex = get().currentStepIndex;

        const nextIndex = currentKyokuUnit.steps.findIndex(
          (step, index) =>
            index > currentStepIndex &&
            step.review !== undefined &&
            !step.review.isEqual,
        );

        if (nextIndex !== -1) {
          set({
            currentStepIndex: nextIndex,
            currentKyokuStep: currentKyokuUnit.steps[nextIndex],
            currentKyokuTilesLeft: currentKyokuUnit.steps[nextIndex].tilesLeft,
          });
        } else {
          get().nextKyoku();
        }
      };

      findNextReviewStep();
    },
    prevChoice: () => {
      const findPrevReviewStep = () => {
        const currentKyokuUnit = get().currentKyokuUnit;
        const currentStepIndex = get().currentStepIndex;

        const prevIndex = currentKyokuUnit.steps
          .slice(0, currentStepIndex)
          .reverse()
          .findIndex((step) => step.review !== undefined);

        if (prevIndex !== -1) {
          set({
            currentStepIndex: currentStepIndex - prevIndex - 1,
            currentKyokuStep:
              currentKyokuUnit.steps[currentStepIndex - prevIndex - 1],
            currentKyokuTilesLeft:
              currentKyokuUnit.steps[currentStepIndex - prevIndex - 1]
                .tilesLeft,
          });
        } else {
          get().prevKyoku();
          set({ isKyokuEnd: true });
        }
      };

      findPrevReviewStep();
    },
    nextChoice: () => {
      const findNextReviewStep = () => {
        const currentKyokuUnit = get().currentKyokuUnit;
        const currentStepIndex = get().currentStepIndex;

        const nextStepIndex = currentKyokuUnit.steps.findIndex(
          (step, index) =>
            index > currentStepIndex && step.review !== undefined,
        );
        if (nextStepIndex !== -1) {
          set({
            currentStepIndex: nextStepIndex,
            currentKyokuStep: currentKyokuUnit.steps[nextStepIndex],
            currentKyokuTilesLeft:
              currentKyokuUnit.steps[nextStepIndex].tilesLeft,
          });
        } else if (currentStepIndex === currentKyokuUnit.steps.length - 1) {
          get().nextKyoku();
        } else {
          set({
            currentStepIndex: currentKyokuUnit.steps.length - 1,
            currentKyokuStep:
              currentKyokuUnit.steps[currentKyokuUnit.steps.length - 1],
            currentKyokuTilesLeft:
              currentKyokuUnit.steps[currentKyokuUnit.steps.length - 1]
                .tilesLeft,
            isKyokuEnd: true,
          });
        }
      };

      findNextReviewStep();
    },
    next: () => {
      const currentKyokuUnit = get().currentKyokuUnit;
      const currentStepIndex = get().currentStepIndex;
      if (currentStepIndex < currentKyokuUnit.steps.length - 1) {
        const nextStepIndex = currentStepIndex + 1;
        set({
          currentStepIndex: nextStepIndex,
          currentKyokuStep: currentKyokuUnit.steps[nextStepIndex],
          currentKyokuTilesLeft:
            currentKyokuUnit.steps[nextStepIndex].tilesLeft,
        });
        updateMortalState(nextStepIndex, currentKyokuUnit);
      } else {
        get().nextKyoku();
      }
    },
    prev: () => {
      const currentKyokuUnit = get().currentKyokuUnit;
      const currentStepIndex = get().currentStepIndex;
      if (currentStepIndex > 0) {
        const prevSetpIndex = currentStepIndex - 1;
        set({
          currentStepIndex: prevSetpIndex,
          currentKyokuStep: currentKyokuUnit.steps[prevSetpIndex],
          currentKyokuTilesLeft:
            currentKyokuUnit.steps[prevSetpIndex].tilesLeft,
        });
        updateMortalState(prevSetpIndex, currentKyokuUnit);
      } else {
        get().prevKyoku();
        set({ isKyokuEnd: true });
      }
    },
    closeKyokuEndModal: () => {
      set({ isKyokuEnd: false });
    },
  };
});
