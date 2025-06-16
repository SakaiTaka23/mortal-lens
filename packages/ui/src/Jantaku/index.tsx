import { HandState, Kawa as MjaiKawa } from '@mjai/core';
import { PlayerID, Tile } from '@mjai/types';
import { Box } from '@mui/material';

import { JantakuCenter } from './JantakuCenter';
import { Kawa } from './Tiles/Kawa';

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
    <Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateRows: '1fr auto 1fr',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          justifyContent: 'center',
          height: '700px',
          width: '700px',
          margin: '0 auto',
          border: '1px solid #000',
        }}
      >
        {/* Toimen */}
        <Box
          gridColumn='2'
          gridRow='1'
          display='flex'
          justifyContent='start'
          sx={{
            width: 220,
            height: 185,
            transform: 'rotate(180deg) translateX(90%) translateY(-110%)',
            transformOrigin: 'top right',
          }}
        >
          <Kawa {...kawa[orderedPlayerIDs[2]]} />
        </Box>

        {/* Kamicha */}
        <Box
          gridColumn='1'
          gridRow='2'
          display='flex'
          justifyContent='start'
          sx={{
            width: 185,
            height: 220,
            transform: 'rotate(90deg) translateX(-120%) translateY(-1%)',
            transformOrigin: 'bottom left',
          }}
        >
          <Kawa {...kawa[orderedPlayerIDs[3]]} />
        </Box>

        {/* Center */}
        <Box gridColumn='2' gridRow='2'>
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
        </Box>

        {/* Shimocha */}
        <Box
          gridColumn='3'
          gridRow='2'
          display='flex'
          justifyContent='start'
          sx={{
            width: 185,
            height: 220,
            transform: 'rotate(-90deg) translateX(95%) translateY(19%)',
            transformOrigin: 'bottom right',
          }}
        >
          <Kawa {...kawa[orderedPlayerIDs[1]]} />
        </Box>

        {/* Player */}
        <Box
          gridColumn='2'
          gridRow='3'
          display='flex'
          justifyContent='start'
          sx={{
            width: 220,
            height: 185,
            // transform: 'translateY(-10%)',
          }}
        >
          <Kawa {...kawa[orderedPlayerIDs[0]]} />
        </Box>
      </Box>
    </Box>
  );
};
