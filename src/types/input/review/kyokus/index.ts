import { z } from 'zod';

import { EntrySchema } from './Entries';

export const EndStatusSchema = z.object({
  type: z.string(),
});

export const KyokuNumberSchema = z.number().min(0).max(11);
export type KyokuNumber = z.infer<typeof KyokuNumberSchema>;
export const HonbaSchema = z.number().min(0);
export type Honba = z.infer<typeof HonbaSchema>;

export const KyokuSchema = z
  .object({
    kyoku: KyokuNumberSchema,
    honba: HonbaSchema,
    end_status: z.unknown(),
    relative_scores: z.array(z.number()).length(4),
    entries: z.array(EntrySchema),
  })
  .transform((data) => ({
    ...data,
    endStatus: data.end_status,
    relativeScores: data.relative_scores,
  }));

export type Kyoku = z.infer<typeof KyokuSchema>;
