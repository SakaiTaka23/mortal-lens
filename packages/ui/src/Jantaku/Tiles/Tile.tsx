import { Tile as MjaiTile } from '@mjai/types';
import React from 'react';

import * as TileIcons from './icons';
import SvgFront from './icons/Front';

const tileComponentMap: Record<
  MjaiTile | 'back' | 'blank',
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  // Manzu
  '1m': TileIcons.Svg1M,
  '2m': TileIcons.Svg2M,
  '3m': TileIcons.Svg3M,
  '4m': TileIcons.Svg4M,
  '5m': TileIcons.Svg5M,
  '6m': TileIcons.Svg6M,
  '7m': TileIcons.Svg7M,
  '8m': TileIcons.Svg8M,
  '9m': TileIcons.Svg9M,
  '5mr': TileIcons.Svg5Mr,

  // Pinzu
  '1p': TileIcons.Svg1P,
  '2p': TileIcons.Svg2P,
  '3p': TileIcons.Svg3P,
  '4p': TileIcons.Svg4P,
  '5p': TileIcons.Svg5P,
  '6p': TileIcons.Svg6P,
  '7p': TileIcons.Svg7P,
  '8p': TileIcons.Svg8P,
  '9p': TileIcons.Svg9P,
  '5pr': TileIcons.Svg5Pr,

  // Souzu
  '1s': TileIcons.Svg1S,
  '2s': TileIcons.Svg2S,
  '3s': TileIcons.Svg3S,
  '4s': TileIcons.Svg4S,
  '5s': TileIcons.Svg5S,
  '6s': TileIcons.Svg6S,
  '7s': TileIcons.Svg7S,
  '8s': TileIcons.Svg8S,
  '9s': TileIcons.Svg9S,
  '5sr': TileIcons.Svg5Sr,

  // Wind
  E: TileIcons.E,
  S: TileIcons.S,
  W: TileIcons.W,
  N: TileIcons.N,

  // Dragon
  P: TileIcons.P,
  F: TileIcons.F,
  C: TileIcons.C,

  // Special
  '?': TileIcons.Blank,

  // Back
  back: TileIcons.Back,

  // Error
  blank: TileIcons.Blank,
};

interface Props {
  name: MjaiTile | 'back' | 'blank';
  naki: boolean;
  size?: 'tehai' | 'doraMarker';
  dimmed?: boolean;
}

export const Tile: React.FC<Props> = ({
  name,
  naki,
  size = 'tehai',
  dimmed = false,
}) => {
  const IconComponent = tileComponentMap[name];

  const tileSize =
    size === 'tehai' ? { width: 34, height: 44 } : { width: 17, height: 23 };

  return (
    <div
      style={{
        transform: naki ? 'rotate(90deg)' : 'none',
        position: 'relative',
        opacity: dimmed ? 0.5 : 1,
        ...tileSize,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        <SvgFront style={{ width: '100%', height: '100%' }} />
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
        }}
      >
        <IconComponent style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};
