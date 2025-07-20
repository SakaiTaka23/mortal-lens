import { ProcessInput } from '@mortal-lens/processor';
import { Input } from '@mortal-lens/types';
import {
  Control,
  Jantaku,
  OverviewDetail,
  ReviewWindow,
} from '@mortal-lens/ui';
import { Stack } from '@mui/material';
import React, { useEffect } from 'react';

import { useGameState } from './state/useGameState';

export interface Props {
  input: Input;
}

export const LandingPage: React.FC<Props> = ({ input }) => {
  const {
    output,
    currentKyokuMeta,
    currentKyokuStep,
    setOutput,
    prevKyoku,
    nextKyoku,
    prevError,
    nextError,
    prevChoice,
    nextChoice,
    prev,
    next,
  } = useGameState();

  useEffect(() => {
    const output = ProcessInput(input);
    setOutput(output);
  }, [input, setOutput]);

  return (
    <Stack direction='row'>
      <Jantaku
        playerID={output.playerID}
        {...currentKyokuMeta}
        {...currentKyokuStep}
      />
      <Stack direction='column'>
        <Control
          meta={output.meta}
          reviewMeta={output.reviewMeta}
          prevKyokuOnClick={prevKyoku}
          nextKyokuOnClick={nextKyoku}
          prevErrorOnClick={prevError}
          nextErrorOnClick={nextError}
          prevChoiceOnClick={prevChoice}
          nextChoiceOnClick={nextChoice}
          prevOnClick={prev}
          nextOnClick={next}
          optionsOnClick={() => {
            // todo: implement options
          }}
          aboutOnClick={() => {
            // todo: implement about
          }}
        />
        <ReviewWindow review={currentKyokuStep.review ?? null} />
      </Stack>
      <OverviewDetail detail={currentKyokuStep.review?.details ?? null} />
    </Stack>
  );
};
