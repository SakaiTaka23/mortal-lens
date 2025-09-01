import { Stack } from '@mui/material';
import { Ankan as MjaiAnkan } from 'mjai-ts';
import React from 'react';

import { Tile } from '@/common/Tile';

import { Position } from '../types';

export interface Props extends MjaiAnkan {
  position: Position;
}

const POSITION_CONFIG = {
  self: {
    direction: 'row' as const,
  },
  toimen: {
    direction: 'row' as const,
  },
  kamicha: {
    direction: 'column' as const,
  },
  shimocha: {
    direction: 'column' as const,
  },
};

export const Ankan: React.FC<Props> = ({ consumed, position }) => {
  const config = POSITION_CONFIG[position];
  return (
    <Stack
      direction={config.direction}
      spacing={0}
      sx={{ alignItems: 'flex-end' }}
    >
      <Tile name={'back'} naki={false} position={position} />
      <Tile name={consumed[0]} naki={false} position={position} />
      <Tile name={consumed[1]} naki={false} position={position} />
      <Tile name={'back'} naki={false} position={position} />
    </Stack>
  );
};
