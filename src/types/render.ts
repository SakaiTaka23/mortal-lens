import { z } from 'zod';

import { TilesSchema } from './common/Tiles';

export const scoreSchema = z.array(z.number()).length(4);
export type scores = z.infer<typeof scoreSchema>;

export const doraMarkersSchema = z.array(TilesSchema).min(1).max(5);
export type doraMarkers = z.infer<typeof doraMarkersSchema>;

export const tehaiSchema = z.array(z.array(TilesSchema).length(13)).length(4);
export type tehai = z.infer<typeof tehaiSchema>;
