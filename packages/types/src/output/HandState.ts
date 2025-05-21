import { PlayerID, Tile } from '@mjai/types';

export interface HandState {
  tehai: Tehai;
  fuuros: Fuuro[];
}

export type Tehai = Tile[];
export type Fuuro =
  | {
      type: 'ankan';
      consumed: [Tile, Tile, Tile, Tile];
    }
  | {
      type: 'chi';
      target: PlayerID;
      pai: Tile;
      consumed: [Tile, Tile];
    }
  | {
      type: 'daiminkan';
      target: PlayerID;
      pai: Tile;
      consumed: [Tile, Tile, Tile];
    }
  | {
      type: 'pon';
      target: PlayerID;
      pai: Tile;
      consumed: [Tile, Tile];
    }
  | {
      type: 'kakan';
      pai: Tile;
      previousPonTarget: PlayerID;
      previousPonPai: Tile;
      consumed: [Tile, Tile];
    };
