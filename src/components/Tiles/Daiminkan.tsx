import { Stack } from '@mui/material';
import React from 'react';

import { PlayerID } from '@/types/common/PlayerID';
import { DaiminkanFuuro } from '@/types/input/review/kyokus/entry/State';

import { Tile } from './Tile';
import { CallPosition } from './utils';

interface Props {
  playerID: PlayerID;
  fuuro: DaiminkanFuuro;
}

export const Daiminkan: React.FC<Props> = ({
  playerID,
  fuuro: { target, pai, consumed },
}) => {
  const position = CallPosition(playerID, target);
  return (
    <Stack direction='row' spacing={0} sx={{ alignItems: 'flex-end' }}>
      <Tile name={consumed[0]} naki={position === 0} />
      <Tile name={consumed[1]} naki={position === 1} />
      <Tile name={pai} naki={false} />
      <Tile name={consumed[2]} naki={position === 2} />
    </Stack>
  );
};
