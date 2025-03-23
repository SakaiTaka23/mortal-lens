import { z } from 'zod';

export const TagSchema = z.enum([
  'jihai&jihai',
  'jihai&suhai',
  'naki',
  'riichi',
  'riichi1',
  'riichi2',
]);
export type Tag = z.infer<typeof TagSchema>;
