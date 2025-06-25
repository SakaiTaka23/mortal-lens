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
    <Box
      sx={{
        width: 510,
        height: 510,
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Toimen */}
      <Box
        sx={{
          width: 220,
          height: 132,
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'end',
        }}
      >
        <Kawa {...kawa[orderedPlayerIDs[2]]} position='toimen' />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Kamicha */}
        <Box
          sx={{
            width: 132,
            height: 220,
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'end',
          }}
        >
          <Kawa {...kawa[orderedPlayerIDs[3]]} position='kamicha' />
        </Box>

        {/* Center */}
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

        {/* Shimocha */}
        <Box
          sx={{
            width: 132,
            height: 220,
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'start',
          }}
        >
          <Kawa {...kawa[orderedPlayerIDs[1]]} position='shimocha' />
        </Box>
      </Box>

      {/* Player */}
      <Box
        sx={{
          width: 220,
          height: 132,
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'start',
        }}
      >
        <Kawa {...kawa[orderedPlayerIDs[0]]} position='self' />
      </Box>
    </Box>
  );
};
