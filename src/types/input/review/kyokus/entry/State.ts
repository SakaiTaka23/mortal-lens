import { z } from 'zod';

import { PlayerIDSchema } from '@/types/common/PlayerID';
import { TilesSchema } from '@/types/common/Tiles';

export const Consumed2Schema = z.tuple([TilesSchema, TilesSchema]);
export const Consumed3Schema = z.tuple([TilesSchema, TilesSchema, TilesSchema]);
export const Consumed4Schema = z.tuple([
  TilesSchema,
  TilesSchema,
  TilesSchema,
  TilesSchema,
]);
export const FuuroSchema = z
  .discriminatedUnion('type', [
    z.object({
      type: z.literal('pon'),
      target: PlayerIDSchema,
      pai: TilesSchema,
      consumed: Consumed2Schema,
    }),
    z.object({
      type: z.literal('chi'),
      target: PlayerIDSchema,
      pai: TilesSchema,
      consumed: Consumed2Schema,
    }),
    z.object({
      type: z.literal('kakan'),
      pai: TilesSchema,
      previous_pon_target: PlayerIDSchema,
      previous_pon_pai: TilesSchema,
      consumed: Consumed2Schema,
    }),
    z.object({
      type: z.literal('daiminkan'),
      target: PlayerIDSchema,
      pai: TilesSchema,
      consumed: Consumed3Schema,
    }),
    z.object({ type: z.literal('ankan'), consumed: Consumed4Schema }),
  ])
  .transform((data) => {
    if (data.type === 'kakan') {
      return {
        ...data,
        previousPonTarget: data.previous_pon_target,
        previousPonPai: data.previous_pon_pai,
      };
    }
    return data;
  });
export type Fuuro = z.infer<typeof FuuroSchema>;
export type PonFuuro = z.infer<typeof FuuroSchema> & { type: 'pon' };
export type ChiFuuro = z.infer<typeof FuuroSchema> & { type: 'chi' };
export type KakanFuuro = z.infer<typeof FuuroSchema> & { type: 'kakan' };
export type DaiminkanFuuro = z.infer<typeof FuuroSchema> & {
  type: 'daiminkan';
};
export type AnkanFuuro = z.infer<typeof FuuroSchema> & { type: 'ankan' };

export const StateSchema = z.object({
  tehai: z.array(TilesSchema).min(2).max(14),
  fuuros: z.array(FuuroSchema).min(0).max(4),
});
export type State = z.infer<typeof StateSchema>;
