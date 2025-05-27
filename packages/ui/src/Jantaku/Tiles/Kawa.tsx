import { Kawa as MjaiKawa } from '@mjai/core';
import { Tile as MjaiTile } from '@mjai/types';
import { Stack } from '@mui/material';
import React from 'react';

import { Tile } from './Tile';

export const Kawa: React.FC<MjaiKawa> = ({
  sutehai,
  nakiIndex,
  reachIndex,
}) => {
  const rows: MjaiTile[][] = [];
  for (let i = 0; i < sutehai.length; i += 6) {
    rows.push(sutehai.slice(i, i + 6));
  }

  return (
    <Stack spacing={0}>
      {rows.map((row, rowIndex) => (
        <KawaRow
          key={rowIndex}
          tiles={row}
          riichi={reachIndex}
          naki={nakiIndex}
          startIndex={rowIndex * 6}
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
}

const KawaRow = ({ tiles, riichi, startIndex, naki }: KawaRowProps) => {
  return (
    <Stack spacing={0} direction='row'>
      {tiles.map((tile, index) => {
        const absoluteIndex = startIndex + index;
        return (
          <Tile
            key={index}
            name={tile}
            naki={riichi === absoluteIndex}
            dimmed={naki.includes(absoluteIndex)}
          />
        );
      })}
    </Stack>
  );
};
