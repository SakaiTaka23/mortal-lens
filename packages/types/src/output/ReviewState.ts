import {
  Ankan,
  Chi,
  Dahai,
  Daiminkan,
  Kakan,
  PlayerID,
  Pon,
  Reach,
  Ryukyoku,
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

export type DiffLevel =
  | 'Critical'
  | 'Significant'
  | 'Moderate'
  | 'Optimal'
  | 'None';

export interface ReviewState {
  expected: EvaluationResult;
  actual: EvaluationResult;
  details: EvaluationDetail[];
  isEqual: boolean;
  diffLevel: DiffLevel;
  actualIndex: number;
}

export interface ReviewMetaState {
  totalReviewed: number;
  totalMatches: number;
  rating: number;
  temperature: number;
  modelTag: string;
}
