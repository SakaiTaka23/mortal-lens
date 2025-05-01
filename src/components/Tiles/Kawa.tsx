import { Stack } from '@mui/material';

import { Tiles } from '@/types/common/Tiles';
import { kawa } from '@/types/render';

import { Tile } from './Tile';

interface Props {
  kawa: kawa;
}

export const Kawa = ({ kawa }: Props) => {
  const { sutehai, riichi, naki } = kawa;
  const rows: Tiles[][] = [];
  for (let i = 0; i < sutehai.length; i += 6) {
    rows.push(sutehai.slice(i, i + 6));
  }

  return (
    <Stack spacing={0}>
      {rows.map((row, rowIndex) => (
        <KawaRow
          key={rowIndex}
          tiles={row}
          riichi={riichi}
          naki={naki}
          startIndex={rowIndex * 6}
        />
      ))}
    </Stack>
  );
};

interface KawaRowProps {
  tiles: Tiles[];
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
