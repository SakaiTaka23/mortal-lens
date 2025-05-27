import { Kakan as MjaiKakan } from '@mjai/types';
import { Stack } from '@mui/material';
import React from 'react';

import { Tile } from './Tile';

export const Kakan: React.FC<MjaiKakan> = ({ pai, consumed }) => {
  // Need more information to determine the position of the call
  const position = 0;
  return (
    <Stack direction='row' spacing={0} sx={{ alignItems: 'flex-end' }}>
      {[0, 1, 2].map((index) => (
        <div key={index}>
          {position === index ? (
            <Stack direction='column' spacing={0}>
              <Tile name={pai} naki={true} />
              <Tile name={pai} naki={true} />
            </Stack>
          ) : (
            <Stack>
              <Tile name={consumed[0]} naki={false} />
            </Stack>
          )}
        </div>
      ))}
    </Stack>
  );
};
