import { ProcessInput } from '@mortal-lens/processor';
import { Input } from '@mortal-lens/types';
import {
  Control,
  Jantaku,
  OverviewDetail,
  ReviewWindow,
} from '@mortal-lens/ui';
import { Stack } from '@mui/material';
import React, { useEffect, useMemo } from 'react';

import { useGameState } from './state/useGameState';

export interface Props {
  input: Input;
}

export const LandingPage: React.FC<Props> = ({ input }) => {
  const gameState = useGameState();

  const output = useMemo(() => ProcessInput(input), [input]);
  console.log('setting output:', output);

  useEffect(() => {
    gameState.setOutput(output);
  }, [gameState.setOutput, output]);
  return (
    <Stack direction='row'>
      <Jantaku
        playerID={gameState.output.playerID}
        {...gameState.currentKyokuMeta}
        {...gameState.currentKyokuStep}
      />
      <Stack direction='column'>
        <Control
          prevKyokuOnClick={gameState.prevKyoku}
          nextKyokuOnClick={gameState.nextKyoku}
          prevErrorOnClick={gameState.prevError}
          nextErrorOnClick={gameState.nextError}
          prevChoiceOnClick={gameState.prevChoice}
          nextChoiceOnClick={gameState.nextChoice}
          prevOnClick={gameState.prev}
          nextOnClick={gameState.next}
          optionsOnClick={() => {
            // todo: implement options
          }}
          aboutOnClick={() => {
            // todo: implement about
          }}
        />
        <ReviewWindow review={gameState.currentKyokuStep.review ?? null} />
      </Stack>
      <OverviewDetail
        detail={gameState.currentKyokuStep.review?.details ?? null}
      />
    </Stack>
  );
};
