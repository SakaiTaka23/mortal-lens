import { DiffLevel, EvaluationDetail } from '@mortal-lens/types';
import { Box, Stack, Tooltip } from '@mui/material';
import React from 'react';

import { ReviewMessage } from '@/review/ReviewMessage';
import { ReviewTile } from '@/review/ReviewTile';

export interface Props {
  actualIndex: number;
  details: EvaluationDetail[];
  diffLevel: DiffLevel | undefined;
}

const maxHeight = 50;

export const ReviewWindow: React.FC<Props> = ({
  actualIndex,
  details,
  diffLevel,
}) => {
  const showDiff = !(diffLevel === 'None' || diffLevel === undefined);
  return (
    <Stack
      direction='row'
      alignItems='end'
      spacing={2}
      sx={{ width: 'fit-content', backgroundColor: 'deepskyblue', padding: 2 }}
    >
      {details.map((detail, index) => {
        const scaledHeight = (detail.prob / 100) * maxHeight;
        const height = Math.max(2, Math.round(scaledHeight * 10000) / 10000);
        if (detail.action.type !== 'dahai' || (index === 0 && showDiff)) {
          return (
            <Tooltip
              key={index}
              title={`${detail.prob.toFixed(2)}%`}
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
                    bgcolor: 'green',
                    cursor: 'default',
                  }}
                />
                <Box
                  sx={{
                    border: index == actualIndex ? '2px solid red' : 'none',
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
