import { HoraSchema, RyukyokuSchema } from 'mjai-ts';
import z from 'zod';

import { EntrySchema } from './Entries';

const KyokuSchema = z
  .object({
    kyoku: z.number().min(0).max(11),
    honba: z.number().min(0),
    end_status: z.array(z.union([RyukyokuSchema, HoraSchema])),
    relative_scores: z.tuple([z.number(), z.number(), z.number(), z.number()]),
    entries: z.array(EntrySchema),
  })
  .transform((data) => {
    const { end_status, relative_scores, ...rest } = data;
    return {
      ...rest,
      endStatus: end_status,
      relativeScores: relative_scores,
    };
  });

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
  .transform((data) => {
    const {
      total_reviewed,
      total_matches,
      relative_phi_matrix,
      model_tag,
      ...rest
    } = data;
    return {
      ...rest,
      totalReviewed: total_reviewed,
      totalMatches: total_matches,
      relativePhiMatrix: relative_phi_matrix,
      modelTag: model_tag,
    };
  });
