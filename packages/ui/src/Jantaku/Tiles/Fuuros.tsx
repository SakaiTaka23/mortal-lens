import { Stack } from '@mui/material';
import { Fuuro } from 'mjai-ts';
import React from 'react';

import { Ankan } from './Ankan';
import { Chi } from './Chi';
import { Daiminkan } from './Daiminkan';
import { Kakan } from './Kakan';
import { Pon } from './Pon';
import { Position } from '../types';

export interface Props {
  fuuros: Fuuro[];
  position: Position;
}

const POSITION_CONFIG = {
  self: {
    direction: 'row' as const,
    shouldReverse: true,
  },
  toimen: {
    direction: 'row' as const,
    shouldReverse: false,
  },
  kamicha: {
    direction: 'column' as const,
    shouldReverse: true,
  },
  shimocha: {
    direction: 'column' as const,
    shouldReverse: false,
  },
};

export const Fuuros: React.FC<Props> = ({ fuuros, position }) => {
  const config = POSITION_CONFIG[position];
  const sortedFuuros = config.shouldReverse ? fuuros.slice().reverse() : fuuros;

  return (
    <Stack
      direction={config.direction}
      spacing={1}
      sx={{ alignItems: 'flex-end' }}
    >
      {sortedFuuros.map((fuuro) => {
        switch (fuuro.type) {
          case 'ankan':
            return (
              <Ankan key={fuuro.consumed[0]} {...fuuro} position={position} />
            );
          case 'chi':
            return <Chi key={fuuro.pai} {...fuuro} position={position} />;
          case 'daiminkan':
            return <Daiminkan key={fuuro.pai} {...fuuro} position={position} />;
          case 'kakan':
            return <Kakan key={fuuro.pai} {...fuuro} position={position} />;
          case 'pon':
            return <Pon key={fuuro.pai} {...fuuro} position={position} />;
        }
      })}
    </Stack>
  );
};
