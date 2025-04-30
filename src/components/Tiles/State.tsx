import { Stack } from '@mui/material';
import React from 'react';

import { PlayerID } from '@/types/common/PlayerID';
import { State as StateType } from '@/types/input/review/kyokus/entry/State';

import { Fuuros } from './Fuuros';
import { Tehai } from './Tehai';

interface Prop {
  actor: PlayerID;
  state: StateType;
}

export const State: React.FC<Prop> = ({ actor, state }) => (
  <Stack direction='row' spacing={2} sx={{ alignItems: 'flex-end' }}>
    <Tehai tehai={state.tehai} tsumo={state.tsumo} />
    <Fuuros actor={actor} fuuros={state.fuuros} />
  </Stack>
);
