import { Tile as MjaiTile } from '@mjai/types';
import { Stack } from '@mui/material';
import React from 'react';

import { Tile } from './Tile';
import { Position } from '../types';

export interface Props {
  tehai: MjaiTile[];
  tsumo: MjaiTile | null;
  position: Position;
}

const POSITION_CONFIG = {
  self: {
    direction: 'row' as const,
    shouldReverse: false,
    tsumoPosition: 'end' as const,
  },
  toimen: {
    direction: 'row' as const,
    shouldReverse: true,
    tsumoPosition: 'start' as const,
  },
  kamicha: {
    direction: 'column' as const,
    shouldReverse: false,
    tsumoPosition: 'end' as const,
  },
  shimocha: {
    direction: 'column' as const,
    shouldReverse: true,
    tsumoPosition: 'start' as const,
  },
} as const;

export const Tehai: React.FC<Props> = ({ tehai, tsumo, position }) => {
  const config = POSITION_CONFIG[position];
  const sortedTehai = config.shouldReverse ? tehai.slice().reverse() : tehai;

  const tsumoTile = tsumo ? (
    <Tile name={tsumo} naki={false} position={position} />
  ) : null;

  return (
    <Stack
      direction={config.direction}
      spacing={2}
      sx={{ alignItems: 'flex-end' }}
    >
      {config.tsumoPosition === 'start' && tsumoTile}
      <Stack
        direction={config.direction}
        spacing={0}
        sx={{ alignItems: 'flex-end' }}
      >
        {sortedTehai.map((tile, index) => (
          <Tile key={index} name={tile} naki={false} position={position} />
        ))}
      </Stack>
      {config.tsumoPosition === 'end' && tsumoTile}
    </Stack>
  );
};
