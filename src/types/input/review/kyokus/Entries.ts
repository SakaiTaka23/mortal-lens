import { z } from 'zod';

import { DetailSchema } from './entry/Detail';
import { EvaluationResultSchema } from './entry/Evaluation';
import { StateSchema } from './entry/State';
import { PlayerIDSchema } from '@/types/common/PlayerID';
import { TilesSchema } from '@/types/common/Tiles';

export const JunmeSchema = z.number().min(0);

export const EntrySchema = z
  .object({
    junme: JunmeSchema,
    tiles_left: z.number().min(0).max(69),
    last_actor: PlayerIDSchema,
    tile: TilesSchema,
    state: StateSchema,
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
  .transform((data) => ({
    ...data,
    tilesLeft: data.tiles_left,
    lastActor: data.last_actor,
    atSelfChiPon: data.at_self_chi_pon,
    atSelfRiichi: data.at_self_riichi,
    atOpponentKakan: data.at_opponent_kakan,
    isEqual: data.is_equal,
    atFuriten: data.at_furiten,
    actualIndex: data.actual_index,
  }));
