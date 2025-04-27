import { Stack } from '@mui/material';

import { doraMarkers } from '@/types/render';

import { Tile } from './Tile';

interface Props {
  markers: doraMarkers;
}

export const DoraMarker = ({ markers }: Props) => {
  const displayMarkers = Array(5)
    .fill('back')
    .map((blank, index) => markers[index] || blank);

  return (
    <Stack direction='row' spacing={0}>
      {displayMarkers.map((marker, index) => (
        <Tile key={index} name={marker} naki={false} size='doraMarker' />
      ))}
    </Stack>
  );
};
