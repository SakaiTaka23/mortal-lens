import { AgariResult, Hora, PlayerID, Ryukyoku, Tile } from 'mjai-ts';
import { HandState, Kawa } from 'mjai-ts';

import { MetaState } from './MetaState';
import { DiffLevel, ReviewMetaState, ReviewState } from './ReviewState';

export type { MetaState, ReviewMetaState, ReviewState, DiffLevel };

export interface Output {
  meta: MetaState;
  playerID: PlayerID;
  reviewMeta: ReviewMetaState;
  kyokus: KyokuUnit[];
  diffs: DiffOverview[];
  scoreOverview: ScoreOverview[];
}

export interface ScoreOverview {
  bakaze: 'E' | 'S' | 'W';
  kyoku: number;
  honba: number;
  scores: [number, number, number, number];
  deltas: [number, number, number, number];
  kyotaku: number;
}

export interface HoraDetail {
  hora: Hora;
  agariResult: AgariResult;
}

export interface KyokuUnit {
  bakaze: 'E' | 'S' | 'W';
  kyoku: number;
  honba: number;
  oya: PlayerID;
  endStatus: (HoraDetail | Ryukyoku)[];
  relativeScores: [number, number, number, number];
  steps: StepState[];
}

export interface StepState {
  dora: Tile[];
  hand: [HandState, HandState, HandState, HandState];
  kawa: [Kawa, Kawa, Kawa, Kawa];
  review?: ReviewState;
  tilesLeft: number;
}

export interface DiffOverview {
  bakaze: 'E' | 'S' | 'W';
  kyoku: number;
  honba: number;
  diffLevel: DiffLevel;
  junme: number;
  aiProbability: number;
  tags: DiffTagType[];
  shanten: number;
}

/**
 * - suhai&suhai: expected and actual are both suhai
 * - jihai&jihai: expected and actual are both jihai
 * - jihai&suhai: expected is jihai, actual is suhai
 * - naki: naki decision
 * - riichi: riichi or hora decision
 * - riichi_op: there is riichi from opponent
 * - fuuro_op: there is a opponent with more than 2 fuuro
 * - myfuuro: the player has at least 1 fuuro
 */
export const DiffTag = {
  SuhaiSuhai: 'suhai&suhai',
  JihaiJihai: 'jihai&jihai',
  JihaiSuhai: 'jihai&suhai',
  Naki: 'naki',
  Riichi: 'riichi',
  RiichiOp: 'riichi_op',
  FuuroOp: 'fuuro_op',
  MyFuuro: 'myfuuro',
} as const;

export type DiffTagType = (typeof DiffTag)[keyof typeof DiffTag];
