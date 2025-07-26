import { Input } from '@mortal-lens/types';
import { ZodSafeParseResult } from 'zod/v4';

import { InputSchema } from './schema';

export const ParseInput = (input: unknown): Input => InputSchema.parse(input);
export const ParseInputSafe = (input: unknown): ZodSafeParseResult<Input> =>
  InputSchema.safeParse(input);
