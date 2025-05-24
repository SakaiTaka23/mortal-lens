import { Input, ReviewMetaState } from '@mortal-lens/types';

export const ReviewMetaStateProcessor = (input: Input): ReviewMetaState => {
  return {
    totalReviewed: input.review.totalReviewed,
    totalMatches: input.review.totalMatches,
    rating: input.review.rating,
    temperature: input.review.temperature,
    modelTag: input.review.modelTag,
  } as ReviewMetaState;
};
