import { MjaiLogSchema, PlayerIDInput } from 'mjai-ts';
import z from 'zod';

import { ReviewSchema } from './Review';

export const InputSchema = z
  .object({
    engine: z.string(),
    game_length: z.string(),
    loading_time: z.string(),
    review_time: z.string(),
    show_rating: z.boolean(),
    version: z.string(),
    review: ReviewSchema,
    player_id: PlayerIDInput,
    mjai_log: z.array(MjaiLogSchema),
    lang: z.string(),
  })
  .transform((data) => ({
    ...data,
    gameLength: data.game_length,
    loadingTime: data.loading_time,
    reviewTime: data.review_time,
    showRating: data.show_rating,
    playerID: data.player_id,
    mjaiLog: data.mjai_log,
  }));
