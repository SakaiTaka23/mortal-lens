import { z } from 'zod';

import { MjaiLogSchema } from './MjaiLog';
import { ReviewSchema } from './review';
import { PlayerIDSchema } from '../common/PlayerID';

export const InputSchema = z
  .object({
    engine: z.string(),
    game_length: z.string(),
    loading_time: z.string(),
    review_time: z.string(),
    show_rating: z.boolean(),
    version: z.string(),
    review: ReviewSchema,
    player_id: PlayerIDSchema,
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
  }));

export type Input = z.infer<typeof InputSchema>;
