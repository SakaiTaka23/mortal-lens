import { z } from 'zod';

export const PlayerIDSchema = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
]);
export type PlayerID = z.infer<typeof PlayerIDSchema>;
