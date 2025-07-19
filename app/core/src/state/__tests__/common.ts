import { Output } from '@mortal-lens/types';

import { useGameState } from '../useGameState';
import oneJson from './1.json';

export const resetStore = () => {
  const mockOutput = oneJson as unknown as Output;
  useGameState.getState().setOutput(mockOutput);
};
