export const findReviewTab = (
  tabs: { url?: string; id?: number }[],
  reviewUrl: string,
): number | undefined => {
  const tab = tabs.find((t) => t.url?.startsWith(reviewUrl));
  return tab?.id;
};
