import { Fuuro } from '@mjai/core';
import { Stack } from '@mui/material';
import React from 'react';

import { Ankan } from './Ankan';
import { Chi } from './Chi';
import { Daiminkan } from './Daiminkan';
import { Kakan } from './Kakan';
import { Pon } from './Pon';

export const Fuuros: React.FC<{ fuuros: Fuuro[] }> = ({ fuuros }) => (
  <Stack direction='row' spacing={1} sx={{ alignItems: 'flex-end' }}>
    {fuuros.map((fuuro) => {
      switch (fuuro.type) {
        case 'ankan':
          return <Ankan key={fuuro.consumed[0]} {...fuuro} />;
        case 'chi':
          return <Chi key={fuuro.pai} {...fuuro} />;
        case 'daiminkan':
          return <Daiminkan key={fuuro.pai} {...fuuro} />;
        case 'kakan':
          return <Kakan key={fuuro.pai} {...fuuro} />;
        case 'pon':
          return <Pon key={fuuro.pai} {...fuuro} />;
      }
    })}
  </Stack>
);
