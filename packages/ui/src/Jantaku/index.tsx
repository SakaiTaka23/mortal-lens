import { EvaluationDetail, ScoreOverview } from '@mortal-lens/types';
import { Box } from '@mui/material';
import { HandState, Kawa as MjaiKawa } from 'mjai-ts/core';
import { PlayerID, Tile } from 'mjai-ts/types';

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
  review?: {
    actualIndex: number;
    details: EvaluationDetail[];
  };
  overview: ScoreOverview[];
  jumpKyoku: (kyokuIndex: number) => void;
  hideTiles: boolean;
}

const glassBoxStyle = {
  border: '2px solid rgba(255,255,255,0.5)',
  background:
    'linear-gradient(135deg, rgba(255,255,255,0.18) 60%, rgba(180,220,255,0.12) 100%)',
  boxShadow:
    '0 12px 48px 0 rgba(31, 38, 135, 0.37), 0 1.5px 0 0 rgba(255,255,255,0.3) inset',
  backdropFilter: 'blur(16px) brightness(1.08)',
  WebkitBackdropFilter: 'blur(16px) brightness(1.08)',
};

const JantakuCenterWithKawa = ({
  playerID,
  bakaze,
  kyoku,
  honba,
  oya,
  relativeScores,
  dora,
  kawa,
  tilesLeft,
  orderedPlayerIDs,
  jumpKyoku,
  overview,
}: Omit<Props, 'hand'> & { orderedPlayerIDs: PlayerID[] }) => {
  return (
    <Box
      sx={{
        width: 510,
        height: 510,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        ...glassBoxStyle,
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
          overview={overview}
          jumpKyoku={jumpKyoku}
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
  review,
  hideTiles,
  overview,
  jumpKyoku,
}: Props) => {
  const orderedPlayerIDs: PlayerID[] = [
    playerID,
    ((playerID + 1) % 4) as PlayerID,
    ((playerID + 2) % 4) as PlayerID,
    ((playerID + 3) % 4) as PlayerID,
  ];
  const self = hand[orderedPlayerIDs[0]];
  const shimocha = hand[orderedPlayerIDs[1]];
  const toimen = hand[orderedPlayerIDs[2]];
  const kamicha = hand[orderedPlayerIDs[3]];

  return (
    <Box
      sx={{
        width: 620,
        height: 680,
        display: 'flex',
        flexDirection: 'column',
        ...glassBoxStyle,
      }}
    >
      {/* Toimen */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          flex: 1,
          marginBottom: 1,
        }}
      >
        <State
          tehai={toimen.tehai}
          tsumo={toimen.tsumo}
          fuuros={toimen.fuuros}
          position='toimen'
          hidden={hideTiles}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 510,
        }}
      >
        {/* Kamicha */}
        <Box
          sx={{
            marginRight: 1,
          }}
        >
          <State
            tehai={kamicha.tehai}
            tsumo={kamicha.tsumo}
            fuuros={kamicha.fuuros}
            position='kamicha'
            hidden={hideTiles}
          />
        </Box>

        <JantakuCenterWithKawa
          playerID={playerID}
          bakaze={bakaze}
          kyoku={kyoku}
          honba={honba}
          oya={oya}
          relativeScores={relativeScores}
          dora={dora}
          kawa={kawa}
          tilesLeft={tilesLeft}
          orderedPlayerIDs={orderedPlayerIDs}
          hideTiles={false}
          overview={overview}
          jumpKyoku={jumpKyoku}
        />

        {/* Shimocha */}
        <Box
          sx={{
            marginLeft: 1,
          }}
        >
          <State
            tehai={shimocha.tehai}
            tsumo={shimocha.tsumo}
            fuuros={shimocha.fuuros}
            position='shimocha'
            hidden={hideTiles}
          />
        </Box>
      </Box>

      {/* Self */}
      <Box
        sx={{
          height: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          marginTop: 1,
          marginBottom: 1,
        }}
      >
        <State
          tehai={self.tehai}
          tsumo={self.tsumo}
          fuuros={self.fuuros}
          position='self'
          review={review}
          hidden={false}
        />
      </Box>
    </Box>
  );
};
