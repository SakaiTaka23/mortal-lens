import { Input } from '@mortal-lens/types';

import { InputSchema } from './schema';

export const ParseInput = (input: unknown): Input => InputSchema.parse(input);
