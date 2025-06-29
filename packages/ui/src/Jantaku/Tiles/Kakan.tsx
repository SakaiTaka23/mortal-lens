import { KakanFuuro } from '@mjai/core';
import { Stack } from '@mui/material';
import React from 'react';

import { Tile } from '@/common/Tile';

import { CallPosition } from './utils';
import { Position } from '../types';

export interface Props extends KakanFuuro {
  position: Position;
}

const POSITION_CONFIG = {
  self: {
    direction: 'row' as const,
    innerDirection: 'column' as const,
  },
  toimen: {
    direction: 'row' as const,
    innerDirection: 'column' as const,
  },
  kamicha: {
    direction: 'column' as const,
    innerDirection: 'row' as const,
  },
  shimocha: {
    direction: 'column' as const,
    innerDirection: 'row' as const,
  },
};

export const Kakan: React.FC<Props> = ({
  actor,
  pai,
  consumed,
  ponTarget,
  ponPai,
  position,
}) => {
  const config = POSITION_CONFIG[position];
  const callPosition = CallPosition(actor, ponTarget);
  return (
    <Stack
      direction={config.direction}
      spacing={0}
      sx={{ alignItems: 'flex-end' }}
    >
      {[0, 1, 2].map((index) => {
        const tile = consumed[index];
        return (
          <div key={index}>
            {callPosition === index ? (
              <Stack direction={config.innerDirection} spacing={0}>
                <Tile name={ponPai} naki={true} position={position} />
                <Tile name={pai} naki={true} position={position} />
              </Stack>
            ) : (
              <Stack>
                <Tile name={tile} naki={false} position={position} />
              </Stack>
            )}
          </div>
        );
      })}
    </Stack>
  );
};
