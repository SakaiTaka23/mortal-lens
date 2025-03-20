import { z } from 'zod';

import { PlayerIDSchema } from '@/types/common/PlayerID';
import { TilesSchema } from '@/types/common/Tiles';

import { Consumed2Schema, Consumed3Schema, Consumed4Schema } from './State';

export const EvaluationResultSchema = z.discriminatedUnion('type', [
  // Can happen when the player can call
  z.object({ type: z.literal('none') }),
  z.object({ type: z.literal('reach') }),
  z.object({
    type: z.literal('hora'),
    actor: PlayerIDSchema,
    target: PlayerIDSchema,
  }),
  z.object({ type: z.literal('dahai'), pai: TilesSchema }),
  z.object({
    type: z.literal('pon'),
    actor: PlayerIDSchema,
    target: PlayerIDSchema,
    pai: TilesSchema,
    consumed: Consumed2Schema,
  }),
  z.object({
    type: z.literal('chi'),
    actor: PlayerIDSchema,
    target: PlayerIDSchema,
    pai: TilesSchema,
    consumed: Consumed2Schema,
  }),
  z.object({
    type: z.literal('kakan'),
    actor: PlayerIDSchema,
    pai: TilesSchema,
    consumed: Consumed3Schema,
  }),
  z.object({
    type: z.literal('daiminkan'),
    actor: PlayerIDSchema,
    target: PlayerIDSchema,
    pai: TilesSchema,
    consumed: Consumed3Schema,
  }),
  z.object({
    type: z.literal('ankan'),
    actor: PlayerIDSchema,
    consumed: Consumed4Schema,
  }),
]);
