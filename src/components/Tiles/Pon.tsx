import { Stack } from '@mui/material';
import React from 'react';

import { PlayerID } from '@/types/common/PlayerID';
import { PonFuuro } from '@/types/input/review/kyokus/entry/State';

import { Tile } from './Tile';
import { CallPosition } from './utils';

interface Props {
  playerID: PlayerID;
  fuuro: PonFuuro;
}

export const Pon: React.FC<Props> = ({
  playerID,
  fuuro: { target, pai, consumed },
}) => {
  const position = CallPosition(playerID, target);
  return (
    <Stack direction='row' spacing={0} sx={{ alignItems: 'flex-end' }}>
      <Tile name={pai} naki={position === 0} />
      <Tile name={consumed[0]} naki={position === 1} />
      <Tile name={consumed[1]} naki={position === 2} />
    </Stack>
  );
};
