import { Input, ReviewMetaState } from '@mortal-lens/types';

export const ReviewMetaStateProcessor = (
  input: Input,
  totalCritical: number,
  totalOptimal: number,
): ReviewMetaState => {
  return {
    totalReviewed: input.review.totalReviewed,
    totalMatches: input.review.totalMatches,
    totalCritical,
    totalOptimal,
    rating: input.review.rating,
    temperature: input.review.temperature,
    modelTag: input.review.modelTag,
  } as ReviewMetaState;
};
