import { Tile as MjaiTile } from '@mjai/types';
import { Stack } from '@mui/material';
import React from 'react';

import { Tile } from './Tile';

export interface Props {
  tehai: MjaiTile[];
  tsumo: MjaiTile | null;
}

export const Tehai: React.FC<Props> = ({ tehai, tsumo }) => (
  <Stack direction='row' spacing={2} sx={{ alignItems: 'flex-end' }}>
    <Stack direction='row' spacing={0} sx={{ alignItems: 'flex-end' }}>
      {tehai.map((tile, index) => (
        <Tile key={index} name={tile} naki={false} />
      ))}
    </Stack>
    {tsumo ? <Tile name={tsumo} naki={false} /> : null}
  </Stack>
);
