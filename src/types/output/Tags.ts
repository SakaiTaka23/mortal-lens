import { z } from 'zod';

export const TagSchema = z.enum([
  'suhai&suhai',
  'jihai&jihai',
  'jihai&suhai',
  'naki',
  'riichi',
  'riichi1',
  'riichi2',
  '2fuuro',
  'myfuuro',
  'dora',
]);
export type Tag = z.infer<typeof TagSchema>;
