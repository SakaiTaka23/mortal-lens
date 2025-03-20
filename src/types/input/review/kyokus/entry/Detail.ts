import { z } from 'zod';

import { EvaluationResultSchema } from './Evaluation';

export const DetailSchema = z
  .object({
    action: EvaluationResultSchema,
    q_value: z.number(),
    prob: z.number().max(1).min(0),
  })
  .transform((data) => ({
    ...data,
    QValue: data.q_value,
  }));
