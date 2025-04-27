import { Box } from '@mui/material';

import { PlayerID } from '@/types/common/PlayerID';
import { doraMarkers } from '@/types/render';

import { DoraMarker } from '../Tiles/DoraMarker';

interface Props {
  bakaze: 'N' | 'S' | 'W';
  kyoku: number;
  honba: number;
  scores: Record<PlayerID, number>;
  doraMarkers: doraMarkers;
  remainingTiles: number;
  oya: PlayerID;
  playerID: PlayerID;
}

const windNames = ['東', '南', '西', '北'];

const getWind = (playerID: PlayerID, oya: PlayerID): string => {
  return windNames[(playerID - oya + 4) % 4];
};

export const JantakuCenter = ({
  bakaze,
  kyoku,
  honba,
  scores,
  doraMarkers,
  remainingTiles,
  oya,
  playerID,
}: Props) => {
  const allPlayerIDs: PlayerID[] = [0, 1, 2, 3];
  const selfIndex = allPlayerIDs.indexOf(playerID);

  const orderedPlayerIDs = [
    allPlayerIDs[selfIndex],
    allPlayerIDs[(selfIndex + 1) % 4],
    allPlayerIDs[(selfIndex + 2) % 4],
    allPlayerIDs[(selfIndex + 3) % 4],
  ];

  return (
    <Box
      sx={{ position: 'relative', width: 200, height: 200, bgcolor: 'green' }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <div>
          {bakaze}
          {kyoku}
          {honba != 0 ? `-${honba}` : ''}
        </div>
        <div>x{remainingTiles}</div>
        <DoraMarker markers={doraMarkers} />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}
      >
        {getWind(orderedPlayerIDs[0], oya)} {scores[orderedPlayerIDs[0]]}点
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%) rotate(90deg)',
          transformOrigin: 'center center',
          textAlign: 'center',
        }}
      >
        {getWind(orderedPlayerIDs[1], oya)} {scores[orderedPlayerIDs[1]]}点
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}
      >
        {getWind(orderedPlayerIDs[2], oya)} {scores[orderedPlayerIDs[2]]}点
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%) rotate(-90deg)',
          transformOrigin: 'center center',
          textAlign: 'center',
        }}
      >
        {getWind(orderedPlayerIDs[3], oya)} {scores[orderedPlayerIDs[3]]}点
      </Box>
    </Box>
  );
};
