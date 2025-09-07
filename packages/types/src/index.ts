import {
  Entry,
  EvaluationDetail,
  EvaluationResult,
  Input,
  Kyoku,
  Review,
} from './Input';
import {
  DiffLevel,
  DiffOverview,
  DiffTag,
  DiffTagType,
  KyokuUnit,
  MetaState,
  Output,
  ReviewMetaState,
  ReviewState,
  ScoreOverview,
  StepState,
} from './output';

export type { Entry, EvaluationDetail, EvaluationResult, Input, Kyoku, Review };
export type {
  KyokuUnit,
  MetaState,
  Output,
  ReviewMetaState,
  ReviewState,
  StepState,
  DiffLevel,
  DiffTagType,
  DiffOverview,
  ScoreOverview,
};
export { DiffTag };
