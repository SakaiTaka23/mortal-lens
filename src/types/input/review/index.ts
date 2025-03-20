import { z } from 'zod';

import { KyokuSchema } from './kyokus';

export const ReviewSchema = z
  .object({
    total_reviewed: z.number(),
    total_matches: z.number(),
    rating: z.number(),
    temperature: z.number(),
    kyokus: z.array(KyokuSchema),
    relative_phi_matrix: z.array(
      z.array(z.array(z.number()).length(4)).length(4),
    ),
    model_tag: z.string(),
  })
  .transform((data) => ({
    ...data,
    totalReviewed: data.total_reviewed,
    totalMatches: data.total_matches,
    relativePhiMatrix: data.relative_phi_matrix,
  }));

export type Review = z.infer<typeof ReviewSchema>;
