import { HoraSchema, RyukyokuSchema } from '@mjai/parser';
import z from 'zod/v4';

import { EntrySchema } from './Entries';

const KyokuSchema = z
  .object({
    kyoku: z.number().min(0).max(11),
    honba: z.number().min(0),
    end_status: z.array(z.union([RyukyokuSchema, HoraSchema])),
    relative_scores: z.tuple([z.number(), z.number(), z.number(), z.number()]),
    entries: z.array(EntrySchema),
  })
  .transform((data) => ({
    ...data,
    endStatus: data.end_status,
    relativeScores: data.relative_scores,
  }));

export const ReviewSchema = z
  .object({
    total_reviewed: z.number(),
    total_matches: z.number(),
    rating: z.number(),
    temperature: z.number(),
    kyokus: z.array(KyokuSchema),
    relative_phi_matrix: z.array(
      z.tuple([
        z.tuple([z.number(), z.number(), z.number(), z.number()]),
        z.tuple([z.number(), z.number(), z.number(), z.number()]),
        z.tuple([z.number(), z.number(), z.number(), z.number()]),
        z.tuple([z.number(), z.number(), z.number(), z.number()]),
      ]),
    ),
    model_tag: z.string(),
  })
  .transform((data) => ({
    ...data,
    totalReviewed: data.total_reviewed,
    totalMatches: data.total_matches,
    relativePhiMatrix: data.relative_phi_matrix,
    modelTag: data.model_tag,
  }));
