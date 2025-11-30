import {
  TileInput,
  AnkanSchema,
  ChiSchema,
  DahaiSchema,
  DaiminkanSchema,
  KakanSchema,
  PlayerIDInput,
  PonSchema,
  ReachSchema,
  RyukyokuSchema,
} from 'mjai-ts';
import z from 'zod';

// Type is different from the original mjai schema
// The actor is missing since it is always the player who is evaluated
export const FuuroSchema = z
  .union([
    z.object({
      type: z.literal('ankan'),
      consumed: z.tuple([TileInput, TileInput, TileInput, TileInput]),
    }),
    z.object({
      type: z.literal('chi'),
      target: PlayerIDInput,
      pai: TileInput,
      consumed: z.tuple([TileInput, TileInput]),
    }),
    z.object({
      type: z.literal('daiminkan'),
      target: PlayerIDInput,
      pai: TileInput,
      consumed: z.tuple([TileInput, TileInput, TileInput]),
    }),
    z.object({
      type: z.literal('pon'),
      target: PlayerIDInput,
      pai: TileInput,
      consumed: z.tuple([TileInput, TileInput]),
    }),
    z.object({
      type: z.literal('kakan'),
      pai: TileInput,
      previous_pon_target: PlayerIDInput,
      previous_pon_pai: TileInput,
      consumed: z.tuple([TileInput, TileInput]),
    }),
  ])
  .transform((data) => {
    if (data.type === 'kakan') {
      const { previous_pon_target, previous_pon_pai, ...rest } = data;
      return {
        ...rest,
        previousPonTarget: previous_pon_target,
        previousPonPai: previous_pon_pai,
      };
    }
    return data;
  });

const EvaluationResultSchema = z.union([
  AnkanSchema,
  ChiSchema,
  DahaiSchema,
  DaiminkanSchema,
  // hora does not have deltas or ura markers
  z.object({
    type: z.literal('hora'),
    actor: PlayerIDInput,
    target: PlayerIDInput,
  }),
  KakanSchema,
  // Can happen when the player can call. This is to represent no calling
  z.object({
    type: z.literal('none'),
  }),
  PonSchema,
  ReachSchema,
  RyukyokuSchema,
]);

export const DetailSchema = z
  .object({
    action: EvaluationResultSchema,
    q_value: z.number(),
    prob: z.number().max(1).min(0),
  })
  .transform((data) => {
    const { q_value, ...rest } = data;
    return {
      ...rest,
      QValue: q_value,
    };
  });

export const EntrySchema = z
  .object({
    junme: z.number().min(0),
    tiles_left: z.number().min(0).max(69),
    last_actor: PlayerIDInput,
    tile: TileInput,
    state: z.object({
      tehai: z.array(TileInput).min(2).max(14),
      fuuros: z.array(FuuroSchema).min(0).max(4),
    }),
    at_self_chi_pon: z.boolean(),
    at_self_riichi: z.boolean(),
    at_opponent_kakan: z.boolean(),
    expected: EvaluationResultSchema,
    actual: EvaluationResultSchema,
    is_equal: z.boolean(),
    details: z.array(DetailSchema),
    shanten: z.number().min(0).max(6),
    at_furiten: z.boolean(),
    actual_index: z.number().min(0),
  })
  .transform((data) => {
    const {
      tiles_left,
      last_actor,
      at_self_chi_pon,
      at_self_riichi,
      at_opponent_kakan,
      is_equal,
      at_furiten,
      actual_index,
      ...rest
    } = data;
    return {
      ...rest,
      tilesLeft: tiles_left,
      lastActor: last_actor,
      atSelfChiPon: at_self_chi_pon,
      atSelfRiichi: at_self_riichi,
      atOpponentKakan: at_opponent_kakan,
      isEqual: is_equal,
      atFuriten: at_furiten,
      actualIndex: actual_index,
    };
  });
