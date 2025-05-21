import { Tile } from '@mjai/types';

export interface Kawa {
  sutehai: Tile[];
  nakiIndex: number[];
  reachIndex: number | null;
}

export interface KawaState {
  kawas: [Kawa, Kawa, Kawa, Kawa];
  remaining: number;
}
