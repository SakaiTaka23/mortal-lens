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
  .transform((data) => {
    const {
      game_length,
      loading_time,
      review_time,
      show_rating,
      player_id,
      mjai_log,
      ...rest
    } = data;
    return {
      ...rest,
      gameLength: game_length,
      loadingTime: loading_time,
      reviewTime: review_time,
      showRating: show_rating,
      playerID: player_id,
      mjaiLog: mjai_log,
    };
  });
