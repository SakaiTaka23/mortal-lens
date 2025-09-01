import { EvaluationResult } from '@mortal-lens/types';
import { Stack } from '@mui/material';
import { Tile as MjaiTile } from 'mjai-ts';
import React from 'react';

import { Tile } from '@/common/Tile';

export interface Props {
  result: EvaluationResult;
}

export const ReviewTile: React.FC<Props> = ({ result }) => {
  switch (result.type) {
    case 'ankan':
      return <TileView tiles={[result.consumed[0]]} />;
    case 'chi':
    case 'pon':
      return <TileView tiles={[...result.consumed]} />;
    case 'dahai':
    case 'daiminkan':
    case 'kakan':
      return <TileView tiles={[result.pai]} />;
    case 'hora':
    case 'none':
    case 'reach':
    case 'ryukyoku':
      return;
  }
};

interface ViewProps {
  tiles: MjaiTile[];
}

const TileView: React.FC<ViewProps> = ({ tiles }) => {
  return (
    <Stack direction='row' spacing={0}>
      {tiles.map((marker, index) => (
        <Tile
          key={index}
          name={marker}
          naki={false}
          size='doraMarker'
          position='self'
        />
      ))}
    </Stack>
  );
};
