import { ProcessInput } from '@mortal-lens/processor';
import { Input } from '@mortal-lens/types';
import {
  Control,
  Jantaku,
  Overview,
  OverviewDetail,
  ReviewWindow,
} from '@mortal-lens/ui';
import { Box, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { useGameState } from './state/useGameState';

export interface Props {
  input: Input;
}

export const LandingPage: React.FC<Props> = ({ input }) => {
  const [hideTile, setHideTile] = useState(false);
  const toggleHideTile = () => setHideTile(!hideTile);

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
    <Stack direction='row' spacing={2}>
      <Jantaku
        playerID={output.playerID}
        {...currentKyokuMeta}
        {...currentKyokuStep}
        overview={output.scoreOverview}
        hideTiles={hideTile}
      />
      <Stack direction='column'>
        <Box sx={{ marginBottom: 5 }}>
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
            toggleHidden={toggleHideTile}
          />
        </Box>
        <ReviewWindow review={currentKyokuStep.review ?? null} />
      </Stack>
      <Stack direction='column'>
        <Overview review={currentKyokuStep.review ?? null} />
        <OverviewDetail detail={currentKyokuStep.review?.details ?? null} />
      </Stack>
    </Stack>
  );
};
