import { Entry } from '@/types/input/review/kyokus/Entries';
import { Tag } from '@/types/output/Tags';

const riichiType = ['reach', 'hora'];

export const NakiRiichiDecisionTags = (entry: Entry): Tag[] => {
  if (entry.actual.type == 'dahai' || entry.expected.type == 'dahai') {
    return [];
  }
  if (
    riichiType.includes(entry.actual.type) ||
    riichiType.includes(entry.expected.type)
  ) {
    return ['riichi'];
  } else {
    return ['naki'];
  }
};
