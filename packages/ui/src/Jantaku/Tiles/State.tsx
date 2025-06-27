import { HandState } from '@mjai/core';
import { Stack } from '@mui/material';
import React from 'react';

import { Fuuros } from './Fuuros';
import { Tehai } from './Tehai';
import { Position } from '../types';

export interface Props extends HandState {
  position: Position;
}

const POSITION_CONFIG = {
  self: {
    direction: 'row' as const,
    fuuroPosition: 'end' as const,
  },
  toimen: {
    direction: 'row' as const,
    fuuroPosition: 'start' as const,
  },
  kamicha: {
    direction: 'column' as const,
    fuuroPosition: 'end' as const,
  },
  shimocha: {
    direction: 'column' as const,
    fuuroPosition: 'start' as const,
  },
};

export const State: React.FC<Props> = ({ tehai, tsumo, fuuros, position }) => {
  const config = POSITION_CONFIG[position];
  const fuurosComponent = <Fuuros fuuros={fuuros} position={position} />;

  return (
    <Stack
      direction={config.direction}
      spacing={2}
      sx={{ alignItems: 'flex-end' }}
    >
      {config.fuuroPosition === 'start' && fuurosComponent}
      <Tehai tehai={tehai} tsumo={tsumo} position={position} />
      {config.fuuroPosition === 'end' && fuurosComponent}
    </Stack>
  );
};
