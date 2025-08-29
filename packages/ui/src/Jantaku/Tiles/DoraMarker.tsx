import { Stack } from '@mui/material';
import { Tile as MjaiTile } from 'mjai-ts/types';
import React from 'react';

import { Tile } from '@/common/Tile';

export const DoraMarker: React.FC<MjaiTile[]> = (tiles) => {
  const displayMarkers = Array(5)
    .fill('back')
    .map((blank, index) => tiles[index] || blank);

  return (
    <Stack direction='row' spacing={0}>
      {displayMarkers.map((marker, index) => (
        <Tile
          key={index}
          name={marker}
          naki={false}
          size='doraMarker'
          position='self'
        />
      ))}
    </Stack>
  );
};
