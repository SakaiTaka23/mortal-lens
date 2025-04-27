import { Stack } from '@mui/material';
import React from 'react';

import { PlayerID } from '@/types/common/PlayerID';
import { Fuuro } from '@/types/input/review/kyokus/entry/State';

import { Ankan } from './Ankan';
import { Chi } from './Chi';
import { Daiminkan } from './Daiminkan';
import { Kakan } from './Kakan';
import { Pon } from './Pon';

interface Props {
  actor: PlayerID;
  fuuros: Fuuro[];
}

export const Fuuros: React.FC<Props> = ({ actor, fuuros }) => (
  <Stack direction='row' spacing={1} sx={{ alignItems: 'flex-end' }}>
    {fuuros.map((fuuro) => {
      switch (fuuro.type) {
        case 'pon':
          return <Pon key={fuuro.pai} playerID={actor} fuuro={fuuro} />;
        case 'chi':
          return <Chi key={fuuro.pai} playerID={actor} fuuro={fuuro} />;
        case 'ankan':
          return <Ankan key={fuuro.consumed[0]} fuuro={fuuro} />;
        case 'daiminkan':
          return <Daiminkan key={fuuro.pai} playerID={actor} fuuro={fuuro} />;
        case 'kakan':
          return <Kakan key={fuuro.pai} playerID={actor} fuuro={fuuro} />;
        default:
          return null;
      }
    })}
  </Stack>
);
