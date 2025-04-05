import { Entry } from '@/types/input/review/kyokus/Entries';
import { Tag } from '@/types/output/Tags';

const jihai = [
  // Wind
  'E',
  'S',
  'W',
  'N',

  // Dragon
  'P',
  'F',
  'C',
];

export const TileSpecTags = (entry: Entry): Tag[] => {
  if (entry.actual.type != 'dahai' || entry.expected.type != 'dahai') {
    return [];
  }

  const actualIsJihai = jihai.includes(entry.actual.pai);
  const expectedIsJihai = jihai.includes(entry.expected.pai);

  if (actualIsJihai && expectedIsJihai) {
    return ['jihai&jihai'];
  }
  if (actualIsJihai !== expectedIsJihai) {
    return ['jihai&suhai'];
  }
  return [];
};
