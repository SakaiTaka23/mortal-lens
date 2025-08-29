import { Stack } from '@mui/material';
import { Tile as MjaiTile } from 'mjai-ts';
import { Kawa as MjaiKawa } from 'mjai-ts';
import React from 'react';

import { Tile } from '@/common/Tile';

import { Position } from '../types';

export interface KawaProps extends MjaiKawa {
  position: Position;
}

const POSITION_CONFIG = {
  self: {
    stackDirection: 'column' as const,
    rowDirection: 'row' as const,
    shouldReverseRows: false,
  },
  toimen: {
    stackDirection: 'column' as const,
    rowDirection: 'row-reverse' as const,
    shouldReverseRows: true,
  },
  kamicha: {
    stackDirection: 'row-reverse' as const,
    rowDirection: 'column' as const,
    shouldReverseRows: false,
  },
  shimocha: {
    stackDirection: 'row' as const,
    rowDirection: 'column-reverse' as const,
    shouldReverseRows: false,
  },
} as const;

interface KawaRowProps {
  tiles: MjaiTile[];
  riichi: number | null;
  naki: number[];
  startIndex: number;
  position: Position;
}

const KawaRow: React.FC<KawaRowProps> = ({
  tiles,
  riichi,
  startIndex,
  naki,
  position,
}) => {
  const config = POSITION_CONFIG[position];

  return (
    <Stack spacing={0} direction={config.rowDirection}>
      {tiles.map((tile, index) => {
        const absoluteIndex = startIndex + index;
        return (
          <Tile
            key={index}
            name={tile}
            naki={riichi === absoluteIndex}
            dimmed={naki.includes(absoluteIndex)}
            position={position}
          />
        );
      })}
    </Stack>
  );
};

export const Kawa: React.FC<KawaProps> = ({
  sutehai,
  nakiIndex,
  reachIndex,
  position,
}) => {
  const config = POSITION_CONFIG[position];

  const rows: MjaiTile[][] = [];
  for (let i = 0; i < sutehai.length; i += 6) {
    if (i < 12) {
      rows.push(sutehai.slice(i, i + 6));
    } else {
      rows.push(sutehai.slice(i, sutehai.length));
      break;
    }
  }

  if (config.shouldReverseRows) {
    rows.reverse();
  }

  return (
    <Stack spacing={0} direction={config.stackDirection}>
      {rows.map((row, rowIndex) => (
        <KawaRow
          key={rowIndex}
          tiles={row}
          riichi={reachIndex}
          naki={nakiIndex}
          startIndex={rowIndex * 6}
          position={position}
        />
      ))}
    </Stack>
  );
};
