import { Entry } from '@/types/input/review/kyokus/Entries';
import { RiichiEvent } from '@/types/output/KyokuEvent';
import { Tag } from '@/types/output/Tags';

export const RiichiEventTags = (
  entry: Entry,
  riichiEvent: RiichiEvent[],
): Tag[] => {
  const junme = entry.junme;
  const riichiCount = riichiEvent.filter((j) => j.junme < junme).length;

  if (riichiCount === 0) {
    return [];
  } else if (riichiCount === 1) {
    return ['riichi1'];
  } else {
    return ['riichi2'];
  }
};
