import { EvaluationResult } from '@mortal-lens/types';
import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';

import { ReviewMessage } from '@/review/ReviewMessage';
import { ReviewTile } from '@/review/ReviewTile';

export interface Props {
  actual: EvaluationResult;
  expected: EvaluationResult;
}

export const Overview: React.FC<Props> = ({ actual, expected }) => {
  return (
    <Grid
      container
      direction='column'
      spacing={3}
      sx={{
        justifyContent: 'center',
        alignItems: 'start',
        width: 'fit-content',
        backgroundColor: 'deepskyblue',
        padding: 2,
      }}
    >
      <Stack direction='row' spacing={3}>
        <Typography>Player</Typography>
        <ReviewMessage result={actual} />
        <ReviewTile result={actual} />
      </Stack>
      <Stack direction='row' spacing={3}>
        <Typography>Mortal</Typography>
        <ReviewMessage result={expected} />
        <ReviewTile result={expected} />
      </Stack>
    </Grid>
  );
};
