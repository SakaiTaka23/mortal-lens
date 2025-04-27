import { Stack } from '@mui/material';
import React from 'react';

import { AnkanFuuro } from '@/types/input/review/kyokus/entry/State';

import { Tile } from './Tile';

interface Props {
  fuuro: AnkanFuuro;
}

export const Ankan: React.FC<Props> = ({ fuuro: { consumed } }) => (
  <Stack direction='row' spacing={0} sx={{ alignItems: 'flex-end' }}>
    <Tile name={'back'} naki={false} />
    <Tile name={consumed[0]} naki={false} />
    <Tile name={consumed[1]} naki={false} />
    <Tile name={'back'} naki={false} />
  </Stack>
);
