import { EvaluationResult } from '@mortal-lens/types';
import { Grid, Stack, Typography, useTheme } from '@mui/material';
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
  const theme = useTheme();
  return (
    <Grid
      container
      direction='column'
      spacing={3}
      sx={{
        justifyContent: 'center',
        alignItems: 'start',
        width: 310,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: 2,
      }}
    >
      <>
        <Stack direction='row' spacing={3}>
          <Typography>Player</Typography>
          {review && (
            <>
              <ReviewMessage result={review.actual} />
              <ReviewTile result={review.actual} />
            </>
          )}
        </Stack>
        <Stack direction='row' spacing={3}>
          <Typography>Mortal</Typography>
          {review && (
            <>
              <ReviewMessage result={review.expected} />
              <ReviewTile result={review.expected} />
            </>
          )}
        </Stack>
      </>
    </Grid>
  );
};
