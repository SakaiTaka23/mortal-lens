import { PlayerID, Tile } from '@mjai/types';
import { Box, Typography } from '@mui/material';

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
      sx={{
        position: 'relative',
        width: 240,
        height: 240,
        backgroundColor: 'background.paper',
        border: 2,
        borderColor: 'primary.main',
        borderRadius: 2,
        margin: '40px auto',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 20,
          fontWeight: 'bold',
          color: '#2196f3',
          background: 'rgba(255,255,255,0.8)',
          px: 2,
          py: 1,
          borderRadius: 2,
          boxShadow: 1,
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
      {/* Kamicha */}
      <Typography
        sx={{
          position: 'absolute',
          width: 100,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'common.white',
          backgroundColor: 'primary.main',
          borderRadius: '6px',
          fontWeight: 'bold',
          fontSize: '1rem',
          top: 0,
          left: 0,
          transform: 'rotate(90deg) translateY(-100%)',
          transformOrigin: 'top left',
        }}
      >
        {getWind(orderedPlayerIDs[3], oya)}{' '}
        {relativeScores[orderedPlayerIDs[3]]}点
      </Typography>
      {/* Toimen */}
      <Typography
        sx={{
          position: 'absolute',
          width: 100,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'common.white',
          backgroundColor: 'primary.main',
          borderRadius: '6px',
          fontWeight: 'bold',
          fontSize: '1rem',
          top: 0,
          right: 0,
          transform: 'rotate(180deg) translateX(100%) translateY(-100%)',
          transformOrigin: 'top right',
        }}
      >
        {getWind(orderedPlayerIDs[2], oya)}{' '}
        {relativeScores[orderedPlayerIDs[2]]}点
      </Typography>
      {/* Player */}
      <Typography
        sx={{
          position: 'absolute',
          width: 100,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'common.white',
          backgroundColor: 'primary.main',
          borderRadius: '6px',
          fontWeight: 'bold',
          fontSize: '1rem',
          bottom: 0,
          left: 0,
        }}
      >
        {getWind(orderedPlayerIDs[0], oya)}{' '}
        {relativeScores[orderedPlayerIDs[0]]}点
      </Typography>
      {/* Shimocha */}
      <Typography
        sx={{
          position: 'absolute',
          width: 100,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'common.white',
          backgroundColor: 'primary.main',
          borderRadius: '6px',
          fontWeight: 'bold',
          fontSize: '1rem',
          bottom: 0,
          right: 0,
          transform: 'rotate(-90deg) translateX(100%)',
          transformOrigin: 'bottom right',
        }}
      >
        {getWind(orderedPlayerIDs[1], oya)}{' '}
        {relativeScores[orderedPlayerIDs[1]]}点
      </Typography>
    </Box>
  );
};
