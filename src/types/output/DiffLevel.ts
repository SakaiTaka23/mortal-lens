import { z } from 'zod';

export const DiffLevelSchema = z.enum([
  'optimal',
  'moderate',
  'significant',
  'critical',
]);
export type DiffLevel = z.infer<typeof DiffLevelSchema>;
