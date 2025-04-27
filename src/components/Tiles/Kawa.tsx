import { Stack } from '@mui/material';

import { Tiles } from '@/types/common/Tiles';

import { Tile } from './Tile';

interface Props {
  tiles: Tiles[];
}

export const Kawa = ({ tiles }: Props) => {
  const rows: Tiles[][] = [];
  for (let i = 0; i < tiles.length; i += 6) {
    rows.push(tiles.slice(i, i + 6));
  }

  return (
    <Stack spacing={0}>
      {rows.map((row, index) => (
        <KawaRow key={index} tiles={row} />
      ))}
    </Stack>
  );
};

interface KawaRowProps {
  tiles: Tiles[];
}

const KawaRow = ({ tiles }: KawaRowProps) => {
  return (
    <Stack spacing={0} direction='row'>
      {tiles.map((tile, index) => (
        <Tile key={index} name={tile} naki={false} />
      ))}
    </Stack>
  );
};
