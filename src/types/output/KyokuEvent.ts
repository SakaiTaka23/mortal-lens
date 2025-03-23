import { z } from 'zod';

import { PlayerIDSchema } from '../common/PlayerID';
import { TilesSchema } from '../common/Tiles';
import { HonbaSchema, KyokuNumberSchema } from '../input/review/kyokus';
import { JunmeSchema } from '../input/review/kyokus/Entries';

export const EventKeySchema = z
  .object({
    kyoku: KyokuNumberSchema,
    honba: HonbaSchema,
  })
  .transform(({ kyoku, honba }) => `${kyoku}-${honba}`);
export type EventKey = z.infer<typeof EventKeySchema>;

export const RiichiEventSchema = z.object({
  actor: PlayerIDSchema,
  junme: JunmeSchema,
});
export type RiichiEvent = z.infer<typeof RiichiEventSchema>;

export const NakiEventSchema = z.object({
  actor: PlayerIDSchema,
  junme: JunmeSchema,
});
export type NakiEvent = z.infer<typeof NakiEventSchema>;

export const DoraEventSchema = z.object({
  dora: TilesSchema,
  junme: JunmeSchema,
});
export type DoraEvent = z.infer<typeof DoraEventSchema>;
