import { Input, MetaState } from '@mortal-lens/types';

export const MetaStateProcessor = (input: Input): MetaState => {
  return {
    engine: input.engine,
    gameLength: input.gameLength,
    loadingTime: input.loadingTime,
    reviewTime: input.reviewTime,
    showRating: input.showRating,
    version: input.version,
    lang: input.lang,
  } as MetaState;
};
