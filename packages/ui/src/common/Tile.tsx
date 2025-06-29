import React from 'react';

import { Tile as MjaiTile } from '../../../../../mjai-ts/packages/types/src';
import * as T from '../../../../../riichi-mahjong-tiles';
import { Position } from '../Jantaku/types';

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

const rotatedTileComponent: Record<
  MjaiTile | 'back' | 'blank',
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  // Manzu
  '1m': T.RegularMan1Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '2m': T.RegularMan2Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '3m': T.RegularMan3Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '4m': T.RegularMan4Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '5m': T.RegularMan5Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '6m': T.RegularMan6Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '7m': T.RegularMan7Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '8m': T.RegularMan8Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '9m': T.RegularMan9Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '5mr': T.RegularMan5DoraRm as React.FC<React.SVGProps<SVGSVGElement>>,

  // Pinzu
  '1p': T.RegularPin1Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '2p': T.RegularPin2Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '3p': T.RegularPin3Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '4p': T.RegularPin4Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '5p': T.RegularPin5Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '6p': T.RegularPin6Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '7p': T.RegularPin7Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '8p': T.RegularPin8Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '9p': T.RegularPin9Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '5pr': T.RegularPin5Rm as React.FC<React.SVGProps<SVGSVGElement>>,

  // Souzu
  '1s': T.RegularSou1Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '2s': T.RegularSou2Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '3s': T.RegularSou3Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '4s': T.RegularSou4Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '5s': T.RegularSou5Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '6s': T.RegularSou6Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '7s': T.RegularSou7Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '8s': T.RegularSou8Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '9s': T.RegularSou9Rm as React.FC<React.SVGProps<SVGSVGElement>>,
  '5sr': T.RegularSou5Rm as React.FC<React.SVGProps<SVGSVGElement>>,

  // Wind
  E: T.RegularTonRm as React.FC<React.SVGProps<SVGSVGElement>>,
  S: T.RegularNanRm as React.FC<React.SVGProps<SVGSVGElement>>,
  W: T.RegularShaaRm as React.FC<React.SVGProps<SVGSVGElement>>,
  N: T.RegularPeiRm as React.FC<React.SVGProps<SVGSVGElement>>,

  // Dragon
  P: T.RegularHakuRm as React.FC<React.SVGProps<SVGSVGElement>>,
  F: T.RegularHatsuRm as React.FC<React.SVGProps<SVGSVGElement>>,
  C: T.RegularChunRm as React.FC<React.SVGProps<SVGSVGElement>>,

  // Special
  '?': T.RegularBlankRm as React.FC<React.SVGProps<SVGSVGElement>>,

  // Back
  back: T.RegularBackRm as React.FC<React.SVGProps<SVGSVGElement>>,

  // Error
  blank: T.RegularBlankRm as React.FC<React.SVGProps<SVGSVGElement>>,
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
  switch (position) {
    case 'self':
      return (
        <SelfPositionTile name={name} naki={naki} size={size} dimmed={dimmed} />
      );
    case 'shimocha':
      return (
        <ShimochaPositionTile
          name={name}
          naki={naki}
          size={size}
          dimmed={dimmed}
        />
      );
    case 'toimen':
      return (
        <ToimenPositionTile
          name={name}
          naki={naki}
          size={size}
          dimmed={dimmed}
        />
      );
    case 'kamicha':
      return (
        <KamichaPositionTile
          name={name}
          naki={naki}
          size={size}
          dimmed={dimmed}
        />
      );
  }
};

interface PositionProps {
  name: MjaiTile | 'back' | 'blank';
  naki: boolean;
  size?: 'tehai' | 'doraMarker';
  dimmed?: boolean;
}

const SelfPositionTile: React.FC<PositionProps> = ({
  name,
  naki,
  size,
  dimmed,
}) => {
  const IconComponent = naki
    ? rotatedTileComponent[name]
    : tileComponentMap[name];
  const baseSize =
    size === 'tehai' ? { width: 34, height: 44 } : { width: 22, height: 28 };
  const tileSize = naki
    ? { width: baseSize.height, height: baseSize.width }
    : baseSize;

  return (
    <IconComponent
      width={tileSize.width}
      height={tileSize.height}
      opacity={dimmed ? 0.5 : 1}
    />
  );
};

const ShimochaPositionTile: React.FC<PositionProps> = ({
  name,
  naki,
  size,
  dimmed,
}) => {
  const IconComponent = naki
    ? tileComponentMap[name]
    : rotatedTileComponent[name];
  const baseSize =
    size === 'tehai' ? { width: 44, height: 34 } : { width: 28, height: 22 };
  const tileSize = naki
    ? { width: baseSize.height, height: baseSize.width }
    : baseSize;

  return (
    <IconComponent
      width={tileSize.width}
      height={tileSize.height}
      opacity={dimmed ? 0.5 : 1}
      style={{ transform: `rotate(${naki ? 0 : 180}deg)` }}
    />
  );
};

const ToimenPositionTile: React.FC<PositionProps> = ({
  name,
  naki,
  size,
  dimmed,
}) => {
  const IconComponent = naki
    ? rotatedTileComponent[name]
    : tileComponentMap[name];
  const baseSize =
    size === 'tehai' ? { width: 34, height: 44 } : { width: 22, height: 28 };
  const tileSize = naki
    ? { width: baseSize.height, height: baseSize.width }
    : baseSize;

  return (
    <IconComponent
      width={tileSize.width}
      height={tileSize.height}
      opacity={dimmed ? 0.5 : 1}
      style={{ transform: `rotate(${naki ? 180 : 180}deg)` }}
    />
  );
};

const KamichaPositionTile: React.FC<PositionProps> = ({
  name,
  naki,
  size,
  dimmed,
}) => {
  const IconComponent = naki
    ? tileComponentMap[name]
    : rotatedTileComponent[name];
  const baseSize =
    size === 'tehai' ? { width: 44, height: 34 } : { width: 28, height: 22 };
  const tileSize = naki
    ? { width: baseSize.height, height: baseSize.width }
    : baseSize;

  return (
    <IconComponent
      width={tileSize.width}
      height={tileSize.height}
      opacity={dimmed ? 0.5 : 1}
      style={{ transform: `rotate(${naki ? 180 : 0}deg)` }}
    />
  );
};
