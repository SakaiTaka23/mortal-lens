import { Output } from '@mortal-lens/types';

import oneJson from './__fixtures__/1.json';
import { useGameState } from './useGameState';

export const resetStore = () => {
  const mockOutput = oneJson as unknown as Output;
  useGameState.getState().setOutput(mockOutput);
};
