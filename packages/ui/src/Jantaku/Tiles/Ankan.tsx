import { Ankan as MjaiAnkan } from '@mjai/types';
import { Stack } from '@mui/material';
import React from 'react';

import { Tile } from './Tile';

export const Ankan: React.FC<MjaiAnkan> = ({ consumed }) => (
  <Stack direction='row' spacing={0} sx={{ alignItems: 'flex-end' }}>
    <Tile name={'back'} naki={false} />
    <Tile name={consumed[0]} naki={false} />
    <Tile name={consumed[1]} naki={false} />
    <Tile name={'back'} naki={false} />
  </Stack>
);
