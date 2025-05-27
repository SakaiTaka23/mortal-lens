import { HandState } from '@mjai/core';
import { Stack } from '@mui/material';
import React from 'react';

import { Fuuros } from './Fuuros';
import { Tehai } from './Tehai';

export const State: React.FC<HandState> = ({ tehai, tsumo, fuuros }) => (
  <Stack direction='row' spacing={2} sx={{ alignItems: 'flex-end' }}>
    <Tehai tehai={tehai} tsumo={tsumo} />
    <Fuuros fuuros={fuuros} />
  </Stack>
);
