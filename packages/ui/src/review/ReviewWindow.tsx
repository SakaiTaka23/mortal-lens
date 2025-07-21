import { DiffLevel, EvaluationDetail } from '@mortal-lens/types';
import { Box, Stack, Tooltip, useTheme } from '@mui/material';
import React from 'react';

import { ReviewMessage } from '@/review/ReviewMessage';
import { ReviewTile } from '@/review/ReviewTile';

export interface Props {
  review: {
    actualIndex: number;
    details: EvaluationDetail[];
    diffLevel: DiffLevel | undefined;
  } | null;
}

const maxHeight = 50;

export const ReviewWindow: React.FC<Props> = ({ review }) => {
  const theme = useTheme();
  const showDiff = !(
    review?.diffLevel === 'None' || review?.diffLevel === undefined
  );
  return (
    <Stack
      direction='row'
      alignItems='end'
      spacing={2}
      sx={{
        height: 150,
        width: 200,
        backgroundColor: theme.palette.primary.main,
        padding: 2,
      }}
    >
      {review?.details.map((detail, index) => {
        const scaledHeight = (detail.prob / 100) * maxHeight;
        const height = Math.max(2, Math.round(scaledHeight * 10000) / 100);
        if (detail.action.type !== 'dahai' || (index === 0 && showDiff)) {
          return (
            <Tooltip
              key={index}
              title={`${(detail.prob * 100).toFixed(2)}%`}
              placement='top'
            >
              <Stack
                direction='column'
                alignContent='center'
                alignItems='center'
              >
                <Box
                  sx={{
                    width: 10,
                    height,
                    bgcolor: theme.palette.info.main,
                    cursor: 'default',
                  }}
                />
                <Box
                  sx={{
                    border:
                      index == review.actualIndex
                        ? `2px solid ${theme.palette.error.main}`
                        : 'none',
                  }}
                >
                  <ReviewMessage result={detail.action} />
                </Box>
                <ReviewTile result={detail.action} />
              </Stack>
            </Tooltip>
          );
        }
      })}
    </Stack>
  );
};
