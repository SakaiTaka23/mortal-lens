import {
  Ankan,
  Chi,
  Dahai,
  Daiminkan,
  Hora,
  Kakan,
  PlayerID,
  Pon,
  Reach,
  Ryukyoku,
  Tile,
} from '@mjai/types';

type EvaluationResult =
  | Ankan
  | Chi
  | Dahai
  | Daiminkan
  | {
      type: 'hora';
      actor: PlayerID;
      target: PlayerID;
    }
  | Kakan
  | {
      type: 'none';
    }
  | Pon
  | Reach
  | Ryukyoku;

interface EvaluationDetail {
  action: EvaluationResult;
  QValue: number;
  prob: number;
}

interface Entry {
  junme: number;
  tilesLeft: number;
  lastActor: PlayerID;
  tile: Tile;
  state: {
    tehai: Tile[];
    fuuros: (
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
        }
    )[];
  };
  atSelfChiPon: boolean;
  atSelfRiichi: boolean;
  atOpponentKakan: boolean;
  expected: EvaluationResult;
  actual: EvaluationResult;
  isEqual: boolean;
  details: EvaluationDetail[];
  shanten: number;
  atFuriten: boolean;
  actualIndex: number;
}

interface Kyoku {
  kyoku: number;
  honba: number;
  endStatus: (Ryukyoku | Hora)[];
  relativeScores: [number, number, number, number];
  entries: Entry[];
}

interface Review {
  totalReviewed: number;
  totalMatches: number;
  rating: number;
  temperature: number;
  kyokus: Kyoku[];
  relativePhiMatrix: [
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
  ][];
  modelTag: string;
}

export interface Input {
  engine: string;
  gameLength: string;
  loadingTime: string;
  reviewTime: string;
  showRating: boolean;
  version: string;
  review: Review;
  playerID: PlayerID;
  mjaiLog: Event[];
  lang: string;
}
