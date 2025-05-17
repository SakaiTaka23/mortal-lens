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
  | {
      type: 'none';
    }
  | Reach
  | Ryukyoku
  | Hora
  | Dahai
  | Pon
  | Chi
  | Kakan
  | Daiminkan
  | Ankan;

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
    fuuros: (Ankan | Daiminkan | Chi | Kakan | Pon)[];
  };
  atSelfChiPon: boolean;
  atSelfRiichi: boolean;
  atOpponentKakan: boolean;
  expected: EvaluationDetail;
  actual: EvaluationDetail;
  isEqual: boolean;
  details: EvaluationDetail[];
  shanten: number;
  atFuriten: boolean;
  actualIndex: number;
}

interface Kyoku {
  kyoku: number;
  honba: number;
  end_status: (Ryukyoku | Hora)[];
  relativeScores: [number, number, number, number];
  entries: Entry[];
}

export interface Review {
  totalReviewed: number;
  totalMatches: number;
  rating: number;
  temperature: number;
  kyokus: Kyoku[];
  relativePhiMatrix: [number, number, number, number][][];
  modelTag: string;
}
