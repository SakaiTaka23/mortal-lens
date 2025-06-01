import { HandState, Kawa as MjaiKawa } from '@mjai/core';
import { PlayerID, Tile } from '@mjai/types';
import { Box, Paper, Stack } from '@mui/material';

import { JantakuCenter } from './JantakuCenter';
import { Kawa } from './Tiles/Kawa';
import { State } from './Tiles/State';

export interface Props {
  playerID: PlayerID;
  bakaze: 'E' | 'S' | 'W';
  kyoku: number;
  honba: number;
  oya: PlayerID;
  relativeScores: [number, number, number, number];
  dora: Tile[];
  hand: [HandState, HandState, HandState, HandState];
  kawa: [MjaiKawa, MjaiKawa, MjaiKawa, MjaiKawa];
  tilesLeft: number;
}

export const Jantaku = ({
  playerID,
  bakaze,
  kyoku,
  honba,
  oya,
  relativeScores,
  dora,
  hand,
  kawa,
  tilesLeft,
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
        width: '600px',
        height: '600px',
        bgcolor: '#357a38',
        borderRadius: '16px',
        border: '8px solid #795548',
        boxShadow: 8,
        margin: 'auto',
        overflow: 'hidden',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 200,
          height: 200,
          bgcolor: '#f5f5dc',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        <JantakuCenter
          playerID={playerID}
          bakaze={bakaze}
          kyoku={kyoku}
          honba={honba}
          oya={oya}
          relativeScores={relativeScores}
          tilesLeft={tilesLeft}
          dora={dora}
        />
      </Paper>

      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          bottom: 180,
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}
      >
        <Kawa {...kawa[orderedPlayerIDs[0]]} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          right: 180,
          top: '50%',
          transform: 'translateY(-50%) rotate(90deg)',
          zIndex: 1,
          transformOrigin: 'right center',
        }}
      >
        <Kawa {...kawa[orderedPlayerIDs[1]]} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: 180,
          transform: 'translateX(-50%) rotate(180deg)',
          zIndex: 1,
        }}
      >
        <Kawa {...kawa[orderedPlayerIDs[2]]} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: 180,
          top: '50%',
          transform: 'translateY(-50%) rotate(-90deg)',
          zIndex: 1,
          transformOrigin: 'left center',
        }}
      >
        <Kawa {...kawa[orderedPlayerIDs[3]]} />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          bottom: 16,
          transform: 'translateX(-50%)',
          width: 400,
        }}
      >
        <Stack spacing={1} alignItems='center'>
          <State {...hand[orderedPlayerIDs[0]]} />
        </Stack>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%) rotate(90deg)',
          width: 400,
          transformOrigin: 'right center',
        }}
      >
        <Stack spacing={1} alignItems='center'>
          <State {...hand[orderedPlayerIDs[1]]} />
        </Stack>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: 16,
          transform: 'translateX(-50%) rotate(180deg)',
          width: 400,
        }}
      >
        <Stack spacing={1} alignItems='center'>
          <State {...hand[orderedPlayerIDs[2]]} />
        </Stack>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%) rotate(-90deg)',
          width: 400,
          transformOrigin: 'left center',
        }}
      >
        <Stack spacing={1} alignItems='center'>
          <State {...hand[orderedPlayerIDs[3]]} />
        </Stack>
      </Box>
    </Box>
  );
};
