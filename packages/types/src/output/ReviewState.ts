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
} from 'mjai-ts';

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

/**
 * Critical: <=5% difference
 * Optimal: differences more than 5%
 * None: no difference (was same action with AI)
 */
export type DiffLevel = 'Critical' | 'Optimal' | 'None';

export interface ReviewState {
  expected: EvaluationResult;
  actual: EvaluationResult;
  details: EvaluationDetail[];
  isEqual: boolean;
  diffLevel: DiffLevel;
  actualIndex: number;
  shanten: number;
}

export interface ReviewMetaState {
  totalReviewed: number;
  totalMatches: number;
  rating: number;
  temperature: number;
  modelTag: string;
}
