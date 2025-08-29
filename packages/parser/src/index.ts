import { Input } from '@mortal-lens/types';
import { ZodSafeParseResult } from 'zod';

import { InputSchema } from './schema';

export const ParseInput = (input: unknown): Input => InputSchema.parse(input);
export const ParseInputSafe = (input: unknown): ZodSafeParseResult<Input> =>
  InputSchema.safeParse(input);
