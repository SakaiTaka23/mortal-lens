import { KakanFuuro } from '@mjai/core';
import { Stack } from '@mui/material';
import React from 'react';

import { Tile } from './Tile';
import { CallPosition } from './utils';

export const Kakan: React.FC<KakanFuuro> = ({
  actor,
  pai,
  consumed,
  ponTarget,
  ponPai,
}) => {
  const position = CallPosition(actor, ponTarget);
  return (
    <Stack direction='row' spacing={0} sx={{ alignItems: 'flex-end' }}>
      {[0, 1, 2].map((index) => {
        const tile = consumed[index];
        return (
          <div key={index}>
            {position === index ? (
              <Stack direction='column' spacing={0}>
                <Tile name={ponPai} naki={true} />
                <Tile name={pai} naki={true} />
              </Stack>
            ) : (
              <Stack>
                <Tile name={tile} naki={false} />
              </Stack>
            )}
          </div>
        );
      })}
    </Stack>
  );
};
