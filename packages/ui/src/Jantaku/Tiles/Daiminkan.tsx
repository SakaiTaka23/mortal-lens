import { Stack } from '@mui/material';
import { Daiminkan as MjaiDaiminkan } from 'mjai-ts';
import React from 'react';

import { Tile } from '@/common/Tile';

import { CallPosition } from './utils';
import { Position } from '../types';

export interface Props extends MjaiDaiminkan {
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

export const Daiminkan: React.FC<Props> = ({
  actor,
  target,
  pai,
  consumed,
  position,
}) => {
  const config = POSITION_CONFIG[position];
  const callPosition = CallPosition(actor, target);
  return (
    <Stack
      direction={config.direction}
      spacing={0}
      sx={{ alignItems: 'flex-end' }}
    >
      <Tile name={consumed[0]} naki={callPosition === 0} position={position} />
      <Tile name={consumed[1]} naki={callPosition === 1} position={position} />
      <Tile name={pai} naki={false} position={position} />
      <Tile name={consumed[2]} naki={callPosition === 2} position={position} />
    </Stack>
  );
};
