import { PlayerID, Tile } from '@mjai/types';
import { Box } from '@mui/material';

import { DoraMarker } from '../Tiles/DoraMarker';

export interface Props {
  playerID: PlayerID;
  bakaze: 'E' | 'S' | 'W';
  kyoku: number;
  honba: number;
  oya: PlayerID;
  relativeScores: [number, number, number, number];
  tilesLeft: number;
  dora: Tile[];
}

const windNames = ['東', '南', '西', '北'];

const getWind = (playerID: PlayerID, oya: PlayerID): string => {
  return windNames[(playerID - oya + 4) % 4];
};

export const JantakuCenter = ({
  bakaze,
  kyoku,
  honba,
  relativeScores,
  tilesLeft,
  oya,
  playerID,
  dora,
}: Props) => {
  const orderedPlayerIDs: PlayerID[] = [
    playerID,
    ((playerID + 1) % 4) as PlayerID,
    ((playerID + 2) % 4) as PlayerID,
    ((playerID + 3) % 4) as PlayerID,
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
        <div>x{tilesLeft}</div>
        <DoraMarker {...dora} />
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
        {getWind(orderedPlayerIDs[0], oya)}{' '}
        {relativeScores[orderedPlayerIDs[0]]}点
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
        {getWind(orderedPlayerIDs[1], oya)}{' '}
        {relativeScores[orderedPlayerIDs[1]]}点
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
        {getWind(orderedPlayerIDs[2], oya)}{' '}
        {relativeScores[orderedPlayerIDs[2]]}点
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
        {getWind(orderedPlayerIDs[3], oya)}{' '}
        {relativeScores[orderedPlayerIDs[3]]}点
      </Box>
    </Box>
  );
};
