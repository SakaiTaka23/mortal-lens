import { z } from 'zod';

export const TagSchema = z.enum([
  'jihai&jihai',
  'jihai&suhai',
  'naki',
  'riichi',
]);
export type Tag = z.infer<typeof TagSchema>;
