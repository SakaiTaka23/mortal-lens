import { Stack } from '@mui/material';
import React from 'react';

import { PlayerID } from '@/types/common/PlayerID';
import { KakanFuuro } from '@/types/input/review/kyokus/entry/State';

import { Tile } from './Tile';
import { CallPosition } from './utils';

interface Props {
  playerID: PlayerID;
  fuuro: KakanFuuro;
}

export const Kakan: React.FC<Props> = ({
  playerID,
  fuuro: { pai, consumed, previousPonTarget, previousPonPai },
}) => {
  const position = CallPosition(playerID, previousPonTarget);
  const consumedCopy = [...consumed];
  return (
    <Stack direction='row' spacing={0} sx={{ alignItems: 'flex-end' }}>
      {[0, 1, 2].map((index) => (
        <div key={index}>
          {position === index ? (
            <Stack direction='column' spacing={0}>
              <Tile name={previousPonPai} naki={true} />
              <Tile name={pai} naki={true} />
            </Stack>
          ) : (
            <Stack>
              <Tile name={consumedCopy.shift()!} naki={false} />
            </Stack>
          )}
        </div>
      ))}
    </Stack>
  );
};
