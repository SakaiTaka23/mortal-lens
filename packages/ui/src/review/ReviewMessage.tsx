import { EvaluationResult } from '@mortal-lens/types';
import { Typography } from '@mui/material';
import React from 'react';

export interface Props {
  result: EvaluationResult;
}

export const ReviewMessage: React.FC<Props> = ({ result }) => {
  return (
    <Typography>
      {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
    </Typography>
  );
};
