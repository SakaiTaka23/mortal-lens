import { Stack } from '@mui/material';
import React from 'react';

import { Tehai as TehaiType } from '@/types/input/review/kyokus/entry/State';

import { Tile } from './Tile';

interface Props {
  tehai: TehaiType;
}

export const Tehai: React.FC<Props> = ({ tehai }) => (
  <Stack direction='row' spacing={0} sx={{ alignItems: 'flex-end' }}>
    {tehai.map((tile, index) => (
      <Tile key={index} name={tile} naki={false} />
    ))}
  </Stack>
);
