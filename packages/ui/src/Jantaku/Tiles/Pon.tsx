import { Pon as MjaiPon } from '@mjai/types';
import { Stack } from '@mui/material';
import React from 'react';

import { Tile } from './Tile';
import { CallPosition } from './utils';

export const Pon: React.FC<MjaiPon> = ({ actor, pai, target, consumed }) => {
  const position = CallPosition(actor, target);
  return (
    <Stack direction='row' spacing={0} sx={{ alignItems: 'flex-end' }}>
      <Tile name={pai} naki={position === 0} />
      <Tile name={consumed[0]} naki={position === 1} />
      <Tile name={consumed[1]} naki={position === 2} />
    </Stack>
  );
};
