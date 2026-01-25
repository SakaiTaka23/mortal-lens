import { ScoreOverview as ScoreOverviewType } from '@mortal-lens/types';
import { Box, Button, Modal, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { PlayerID, Tile } from 'mjai-ts';
import { useState } from 'react';

import { convertKyokuFormat } from '@/common/kyokuFormat';
import { ScoreOverview } from '@/Jantaku/JantakuCenter/ScoreOverview';

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
  overview: ScoreOverviewType[];
  jumpKyoku: (kyokuIndex: number) => void;
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
  overview,
  jumpKyoku,
}: Props) => {
  const [openScores, setOpenScores] = useState(false);
  const handleOpenScores = () => setOpenScores(true);
  const handleCloseScores = () => setOpenScores(false);

  const orderedPlayerIDs: PlayerID[] = [
    playerID,
    ((playerID + 1) % 4) as PlayerID,
    ((playerID + 2) % 4) as PlayerID,
    ((playerID + 3) % 4) as PlayerID,
  ];

  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        position: 'relative',
        width: 240,
        height: 240,
        backgroundColor: 'background.paper',
        border: 2,
        borderColor: 'primary.main',
        borderRadius: 2,
        margin: '2px 2px',
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
          color: 'primary.main',
          px: 2,
          py: 1,
          borderRadius: 2,
          backgroundColor: (theme) =>
            alpha(theme.palette.background.paper, 0.95),
          border: '1px solid',
          borderColor: 'primary.light',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        }}
      >
        <Button variant='contained' onClick={handleOpenScores} fullWidth>
          <Typography>{convertKyokuFormat(bakaze, kyoku, honba)}</Typography>
        </Button>
        <Modal open={openScores} onClose={handleCloseScores}>
          <ScoreOverview
            overview={overview}
            jumpKyoku={jumpKyoku}
            playerID={playerID}
          />
        </Modal>
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
          color: 'primary.contrastText',
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
        {getWind(orderedPlayerIDs[3], oya)} {relativeScores[3]}点
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
          color: 'primary.contrastText',
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
        {getWind(orderedPlayerIDs[2], oya)} {relativeScores[2]}点
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
          color: 'primary.contrastText',
          backgroundColor: 'primary.main',
          borderRadius: '6px',
          fontWeight: 'bold',
          fontSize: '1rem',
          bottom: 0,
          left: 0,
        }}
      >
        {getWind(orderedPlayerIDs[0], oya)} {relativeScores[0]}点
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
          color: 'primary.contrastText',
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
        {getWind(orderedPlayerIDs[1], oya)} {relativeScores[1]}点
      </Typography>
    </Box>
  );
};
