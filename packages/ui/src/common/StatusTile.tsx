import { Box, Stack, Tooltip } from '@mui/material';
import React from 'react';

import { Props as TileProps, Tile } from './Tile';

export interface Props {
  possibility: number;
  tileProps: TileProps;
}

const maxHeight = 50;

export const StatusTile: React.FC<Props> = ({ possibility, tileProps }) => {
  const scaledHeight = (possibility / 100) * maxHeight;
  const height = Math.max(2, Math.round(scaledHeight * 10000) / 10000);

  return (
    <Tooltip title={`${possibility.toFixed(2)}%`} placement='top'>
      <Stack direction='column' alignContent='center' alignItems='center'>
        <Box
          sx={{
            width: 10,
            height,
            bgcolor: 'green',
            cursor: 'default',
          }}
        />
        <Tile {...tileProps} />
      </Stack>
    </Tooltip>
  );
};
