import { Tile as MjaiTile } from '@mjai/types';
import React from 'react';
import * as T from 'riichi-mahjong-tiles';

import { Position } from '../types';

const tileComponentMap: Record<
  MjaiTile | 'back' | 'blank',
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  // Manzu
  '1m': T.RegularMan1M as React.FC<React.SVGProps<SVGSVGElement>>,
  '2m': T.RegularMan2M as React.FC<React.SVGProps<SVGSVGElement>>,
  '3m': T.RegularMan3M as React.FC<React.SVGProps<SVGSVGElement>>,
  '4m': T.RegularMan4M as React.FC<React.SVGProps<SVGSVGElement>>,
  '5m': T.RegularMan5M as React.FC<React.SVGProps<SVGSVGElement>>,
  '6m': T.RegularMan6M as React.FC<React.SVGProps<SVGSVGElement>>,
  '7m': T.RegularMan7M as React.FC<React.SVGProps<SVGSVGElement>>,
  '8m': T.RegularMan8M as React.FC<React.SVGProps<SVGSVGElement>>,
  '9m': T.RegularMan9M as React.FC<React.SVGProps<SVGSVGElement>>,
  '5mr': T.RegularMan5DoraM as React.FC<React.SVGProps<SVGSVGElement>>,

  // Pinzu
  '1p': T.RegularPin1M as React.FC<React.SVGProps<SVGSVGElement>>,
  '2p': T.RegularPin2M as React.FC<React.SVGProps<SVGSVGElement>>,
  '3p': T.RegularPin3M as React.FC<React.SVGProps<SVGSVGElement>>,
  '4p': T.RegularPin4M as React.FC<React.SVGProps<SVGSVGElement>>,
  '5p': T.RegularPin5M as React.FC<React.SVGProps<SVGSVGElement>>,
  '6p': T.RegularPin6M as React.FC<React.SVGProps<SVGSVGElement>>,
  '7p': T.RegularPin7M as React.FC<React.SVGProps<SVGSVGElement>>,
  '8p': T.RegularPin8M as React.FC<React.SVGProps<SVGSVGElement>>,
  '9p': T.RegularPin9M as React.FC<React.SVGProps<SVGSVGElement>>,
  '5pr': T.RegularPin5DoraM as React.FC<React.SVGProps<SVGSVGElement>>,

  // Souzu
  '1s': T.RegularSou1M as React.FC<React.SVGProps<SVGSVGElement>>,
  '2s': T.RegularSou2M as React.FC<React.SVGProps<SVGSVGElement>>,
  '3s': T.RegularSou3M as React.FC<React.SVGProps<SVGSVGElement>>,
  '4s': T.RegularSou4M as React.FC<React.SVGProps<SVGSVGElement>>,
  '5s': T.RegularSou5M as React.FC<React.SVGProps<SVGSVGElement>>,
  '6s': T.RegularSou6M as React.FC<React.SVGProps<SVGSVGElement>>,
  '7s': T.RegularSou7M as React.FC<React.SVGProps<SVGSVGElement>>,
  '8s': T.RegularSou8M as React.FC<React.SVGProps<SVGSVGElement>>,
  '9s': T.RegularSou9M as React.FC<React.SVGProps<SVGSVGElement>>,
  '5sr': T.RegularSou5DoraM as React.FC<React.SVGProps<SVGSVGElement>>,

  // Wind
  E: T.RegularTonM as React.FC<React.SVGProps<SVGSVGElement>>,
  S: T.RegularNanM as React.FC<React.SVGProps<SVGSVGElement>>,
  W: T.RegularShaaM as React.FC<React.SVGProps<SVGSVGElement>>,
  N: T.RegularPeiM as React.FC<React.SVGProps<SVGSVGElement>>,

  // Dragon
  P: T.RegularHakuM as React.FC<React.SVGProps<SVGSVGElement>>,
  F: T.RegularHatsuM as React.FC<React.SVGProps<SVGSVGElement>>,
  C: T.RegularChunM as React.FC<React.SVGProps<SVGSVGElement>>,

  // Special
  '?': T.RegularBlankM as React.FC<React.SVGProps<SVGSVGElement>>,

  // Back
  back: T.RegularBackM as React.FC<React.SVGProps<SVGSVGElement>>,

  // Error
  blank: T.RegularBlankM as React.FC<React.SVGProps<SVGSVGElement>>,
};

export interface Props {
  name: MjaiTile | 'back' | 'blank';
  naki: boolean;
  size?: 'tehai' | 'doraMarker';
  dimmed?: boolean;
  position?: Position;
}

export const Tile: React.FC<Props> = ({
  name,
  naki,
  size = 'tehai',
  dimmed = false,
  position = 'self',
}) => {
  const IconComponent = tileComponentMap[name];
  let tileSize = { width: 0, height: 0 };
  let rotation = 0;
  switch (position) {
    case 'self':
      tileSize = { width: 34, height: 44 };
      break;
    case 'toimen':
      tileSize = { width: 34, height: 44 };
      rotation = 180;
      break;
    case 'kamicha':
      tileSize = { width: 34, height: 44 };
      rotation = 90;
      break;
    case 'shimocha':
      tileSize = { width: 34, height: 44 };
      rotation = -90;
      break;
  }

  if (size === 'doraMarker') {
    tileSize.height *= 0.58;
    tileSize.width *= 0.58;
  }

  if (naki) {
    rotation += 90;
  }

  return (
    <IconComponent
      width={tileSize.width}
      height={tileSize.height}
      opacity={dimmed ? 0.5 : 1}
      style={{ transform: `rotate(${rotation}deg)` }}
    />
  );
};
