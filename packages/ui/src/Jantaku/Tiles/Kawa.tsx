import { Kawa as MjaiKawa } from '@mjai/core';
import { Tile as MjaiTile } from '@mjai/types';
import { Stack } from '@mui/material';
import React from 'react';

import { Tile } from './Tile';
import { Position } from '../types';

export interface KawaProps extends MjaiKawa {
  position: Position;
}

export const Kawa: React.FC<KawaProps> = ({
  sutehai,
  nakiIndex,
  reachIndex,
  position,
}) => {
  const rows: MjaiTile[][] = [];
  for (let i = 0; i < sutehai.length; i += 6) {
    if (i < 12) {
      rows.push(sutehai.slice(i, i + 6));
    } else {
      rows.push(sutehai.slice(i, sutehai.length));
      break;
    }
  }

  if (position === 'toimen') {
    rows.reverse();
  }

  let direction: 'row' | 'row-reverse' | 'column' | 'column-reverse' = 'column';
  if (position === 'kamicha') {
    direction = 'row-reverse';
  } else if (position === 'shimocha') {
    direction = 'row';
  }

  return (
    <Stack spacing={0} direction={direction}>
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

interface KawaRowProps {
  tiles: MjaiTile[];
  riichi: number | null;
  naki: number[];
  startIndex: number;
  position: Position;
}

const KawaRow = ({
  tiles,
  riichi,
  startIndex,
  naki,
  position,
}: KawaRowProps) => {
  let direction: 'row' | 'row-reverse' | 'column' | 'column-reverse' = 'row';
  if (position === 'self') {
    direction = 'row';
  } else if (position === 'toimen') {
    direction = 'row-reverse';
  } else if (position === 'kamicha') {
    direction = 'column';
  } else if (position === 'shimocha') {
    direction = 'column-reverse';
  }

  return (
    <Stack spacing={0} direction={direction}>
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
