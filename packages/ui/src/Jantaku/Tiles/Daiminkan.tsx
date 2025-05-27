import { Daiminkan as MjaiDaiminkan } from '@mjai/types';
import { Stack } from '@mui/material';
import React from 'react';

import { Tile } from './Tile';
import { CallPosition } from './utils';

export const Daiminkan: React.FC<MjaiDaiminkan> = ({
  actor,
  target,
  pai,
  consumed,
}) => {
  const position = CallPosition(actor, target);
  return (
    <Stack direction='row' spacing={0} sx={{ alignItems: 'flex-end' }}>
      <Tile name={consumed[0]} naki={position === 0} />
      <Tile name={consumed[1]} naki={position === 1} />
      <Tile name={pai} naki={false} />
      <Tile name={consumed[2]} naki={position === 2} />
    </Stack>
  );
};
