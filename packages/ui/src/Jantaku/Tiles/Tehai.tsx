import { EvaluationDetail } from '@mortal-lens/types';
import { Stack } from '@mui/material';
import { Tile as MjaiTile } from 'mjai-ts';
import React from 'react';

import { StatusTile } from '@/common/StatusTile';
import { Tile } from '@/common/Tile';

import { Position } from '../types';

export interface Props {
  tehai: MjaiTile[];
  tsumo: MjaiTile | null;
  position: Position;
  review?: {
    actualIndex: number;
    details: EvaluationDetail[];
  };
  hidden: boolean;
}

const POSITION_CONFIG = {
  self: {
    direction: 'row' as const,
    shouldReverse: false,
    tsumoPosition: 'end' as const,
  },
  toimen: {
    direction: 'row' as const,
    shouldReverse: true,
    tsumoPosition: 'start' as const,
  },
  kamicha: {
    direction: 'column' as const,
    shouldReverse: false,
    tsumoPosition: 'end' as const,
  },
  shimocha: {
    direction: 'column' as const,
    shouldReverse: true,
    tsumoPosition: 'start' as const,
  },
} as const;

const checkProp = (
  tile: MjaiTile | 'back',
  details: EvaluationDetail[],
): number => {
  const match = details.find(
    (
      detail,
    ): detail is EvaluationDetail & {
      action: { type: 'dahai'; pai: MjaiTile };
    } => detail.action.type === 'dahai' && detail.action.pai === tile,
  );

  return (match?.prob ?? 0) * 100;
};

export const Tehai: React.FC<Props> = ({
  tehai,
  tsumo,
  position,
  review = null,
  hidden,
}) => {
  const config = POSITION_CONFIG[position];
  const sortedTehai = config.shouldReverse ? tehai.slice().reverse() : tehai;

  let actualTile: MjaiTile = '?';
  const actualAction = review?.details[review.actualIndex]?.action;
  if (actualAction !== undefined && actualAction.type === 'dahai') {
    actualTile = actualAction.pai;
  }

  let tsumoTile: React.JSX.Element | null;
  if (tsumo != null) {
    if (review == null) {
      tsumoTile = (
        <Tile
          name={tsumo}
          naki={false}
          position={position}
          highlight={actualTile === tsumo}
          hidden={hidden}
        />
      );
    } else {
      const prob = checkProp(tsumo, review.details);
      tsumoTile = (
        <StatusTile
          possibility={prob}
          tileProps={{
            name: tsumo,
            naki: false,
            position: position,
            highlight: actualTile === tsumo,
            hidden: hidden,
          }}
        />
      );
    }
  } else {
    tsumoTile = null;
  }

  return (
    <Stack
      direction={config.direction}
      spacing={2}
      sx={{ alignItems: 'flex-end' }}
    >
      {config.tsumoPosition === 'start' && tsumoTile}
      <Stack
        direction={config.direction}
        spacing={0}
        sx={{ alignItems: 'flex-end' }}
      >
        {sortedTehai.map((tile, index) => {
          if (review == null) {
            return (
              <Tile
                key={index}
                name={tile}
                naki={false}
                position={position}
                highlight={actualTile === tile}
                hidden={hidden}
              />
            );
          } else {
            const prob = checkProp(tile, review.details);
            return (
              <StatusTile
                key={index}
                possibility={prob}
                tileProps={{
                  name: tile,
                  naki: false,
                  position: position,
                  highlight: actualTile === tile,
                  hidden: hidden,
                }}
              />
            );
          }
        })}
      </Stack>
      {config.tsumoPosition === 'end' && tsumoTile}
    </Stack>
  );
};
