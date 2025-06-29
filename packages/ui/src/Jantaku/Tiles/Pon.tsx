import { Pon as MjaiPon } from '@mjai/types';
import { Stack } from '@mui/material';
import React from 'react';

import { Tile } from '@/common/Tile';

import { CallPosition } from './utils';
import { Position } from '../types';

export interface Props extends MjaiPon {
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

export const Pon: React.FC<Props> = ({
  actor,
  pai,
  target,
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
      <Tile name={pai} naki={callPosition === 0} position={position} />
      <Tile name={consumed[0]} naki={callPosition === 1} position={position} />
      <Tile name={consumed[1]} naki={callPosition === 2} position={position} />
    </Stack>
  );
};
