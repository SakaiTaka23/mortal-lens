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
  const actualTileJihai = entry.actual.pai;
  const expectedTile = entry.actual.pai;

  if (jihai.includes(actualTileJihai) && jihai.includes(expectedTile)) {
    return ['jihai&jihai'];
  } else if (
    !jihai.includes(actualTileJihai) &&
    !jihai.includes(expectedTile)
  ) {
    return [];
  } else {
    return ['jihai&suhai'];
  }
};
