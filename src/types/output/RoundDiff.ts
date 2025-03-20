import { z } from 'zod';

import { HonbaSchema, KyokuNumberSchema } from '../input/review/kyokus';

const DiffLevelCountSchema = z.number().min(0);
const DiffLevelPercentageSchema = z.number().min(0).max(100);
const DiffInfoSchema = z.tuple([
  DiffLevelCountSchema,
  DiffLevelPercentageSchema,
]);
export const RoundDiffSchema = z.object({
  kyoku: KyokuNumberSchema,
  honba: HonbaSchema,
  decisionCount: z.number().min(0),
  optimal: DiffInfoSchema,
  moderate: DiffInfoSchema,
  significant: DiffInfoSchema,
  critical: DiffInfoSchema,
});

export type RoundDiff = z.infer<typeof RoundDiffSchema>;
