import { EvaluationResult } from '@mortal-lens/types';
import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';

import { ReviewMessage } from '@/review/ReviewMessage';
import { ReviewTile } from '@/review/ReviewTile';

export interface Props {
  review: {
    actual: EvaluationResult;
    expected: EvaluationResult;
  } | null;
}

export const Overview: React.FC<Props> = ({ review }) => {
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
      {review && (
        <>
          <Stack direction='row' spacing={3}>
            <Typography>Player</Typography>
            <ReviewMessage result={review.actual} />
            <ReviewTile result={review.actual} />
          </Stack>
          <Stack direction='row' spacing={3}>
            <Typography>Mortal</Typography>
            <ReviewMessage result={review.expected} />
            <ReviewTile result={review.expected} />
          </Stack>
        </>
      )}
    </Grid>
  );
};
