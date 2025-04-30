import { Stack } from '@mui/material';
import React from 'react';

import { Tiles } from '@/types/common/Tiles';
import { Tehai as TehaiType } from '@/types/input/review/kyokus/entry/State';

import { Tile } from './Tile';

interface Props {
  tehai: TehaiType;
  tsumo?: Tiles | null;
}

export const Tehai: React.FC<Props> = ({ tehai, tsumo = null }) => (
  <Stack direction='row' spacing={2} sx={{ alignItems: 'flex-end' }}>
    <Stack direction='row' spacing={0} sx={{ alignItems: 'flex-end' }}>
      {tehai.map((tile, index) => (
        <Tile key={index} name={tile} naki={false} />
      ))}
    </Stack>
    {tsumo ? <Tile name={tsumo} naki={false} /> : null}
  </Stack>
);
