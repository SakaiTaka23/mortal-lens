import { Tile } from '@mjai/types';

export interface KyokuState {
  dora: Tile[];
  scores: [number, number, number, number];
  junme: number;
  tilesLeft: number;
}
