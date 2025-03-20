import { z } from 'zod';

export const TagSchema = z.enum(['jihai&jihai', 'jihai&suhai']);
export type Tag = z.infer<typeof TagSchema>;
