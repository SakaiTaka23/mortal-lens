import { z } from 'zod';

import { PlayerIDSchema } from '../common/PlayerID';
import { TilesSchema } from '../common/Tiles';
import { HonbaSchema, KyokuNumberSchema } from './review/kyokus';

export const MjaiLogSchema = z
  .discriminatedUnion('type', [
    z.object({
      type: z.literal('ankan'),
      actor: PlayerIDSchema,
      consumed: z.array(TilesSchema).length(4),
    }),
    z.object({
      type: z.literal('chi'),
      actor: PlayerIDSchema,
      target: PlayerIDSchema,
      pai: TilesSchema,
      consumed: z.array(TilesSchema).length(2),
    }),
    z.object({
      type: z.literal('dahai'),
      actor: PlayerIDSchema,
      pai: TilesSchema,
      tsumogiri: z.boolean(),
    }),
    z.object({
      type: z.literal('daiminkan'),
      actor: PlayerIDSchema,
      target: PlayerIDSchema,
      pai: TilesSchema,
      consumed: z.array(TilesSchema).length(3),
    }),
    z.object({
      type: z.literal('dora'),
      dora_marker: TilesSchema,
    }),
    z.object({
      type: z.literal('end_game'),
    }),
    z.object({
      type: z.literal('end_kyoku'),
    }),
    z.object({
      type: z.literal('hora'),
      actor: PlayerIDSchema,
      target: PlayerIDSchema,
      deltas: z.array(z.number()).length(4),
      ura_markers: z.array(TilesSchema).min(0).max(4),
    }),
    z.object({
      type: z.literal('kakan'),
      actor: PlayerIDSchema,
      pai: TilesSchema,
      consumed: z.array(TilesSchema).length(3),
    }),
    z.object({
      type: z.literal('pon'),
      actor: PlayerIDSchema,
      target: PlayerIDSchema,
      pai: TilesSchema,
      consumed: z.array(TilesSchema).length(2),
    }),
    z.object({
      type: z.literal('reach'),
      actor: PlayerIDSchema,
    }),
    z.object({
      type: z.literal('reach_accepted'),
      actor: PlayerIDSchema,
    }),
    z.object({
      type: z.literal('ryukyoku'),
      deltas: z.array(z.number()).length(4),
    }),
    z.object({
      type: z.literal('start_game'),
      names: z.array(z.string()).length(4),
      kyoku_first: PlayerIDSchema,
      aka_flag: z.boolean(),
    }),
    z.object({
      type: z.literal('start_kyoku'),
      bakaze: z.enum(['E', 'S', 'W']),
      dora_marker: TilesSchema,
      kyoku: KyokuNumberSchema,
      honba: HonbaSchema,
      kyotaku: z.number().min(0),
      oya: PlayerIDSchema,
      scores: z.array(z.number()).length(4),
      tehais: z.array(z.array(TilesSchema).length(13)).length(4),
    }),
    z.object({
      type: z.literal('tsumo'),
      actor: PlayerIDSchema,
      pai: TilesSchema,
    }),
  ])
  .transform((data) => {
    if (data.type === 'dora') {
      return {
        ...data,
        doraMarkers: [data.dora_marker],
      };
    } else if (data.type === 'hora') {
      return {
        ...data,
        uraMarkers: data.ura_markers,
      };
    } else if (data.type === 'start_kyoku') {
      return {
        ...data,
        doraMarker: data.dora_marker,
      };
    }
    return data;
  });
export type Bakaze = Extract<
  z.infer<typeof MjaiLogSchema>,
  { type: 'start_kyoku' }
>['bakaze'];
export type MjaiLog = z.infer<typeof MjaiLogSchema>;
