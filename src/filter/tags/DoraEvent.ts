import { Entry } from '@/types/input/review/kyokus/Entries';
import { DoraEvent } from '@/types/output/KyokuEvent';
import { Tag } from '@/types/output/Tags';

export const DoraEventTags = (entry: Entry, doraEvent: DoraEvent[]): Tag[] => {
  if (entry.actual.type != 'dahai' || entry.expected.type != 'dahai') {
    return [];
  }

  const actualTileJihai = entry.actual.pai;
  const expectedTile = entry.actual.pai;
  const doraEventJunme = doraEvent
    .filter((j) => j.junme < entry.junme)
    .map((event) => event.dora);

  if (
    doraEventJunme.includes(actualTileJihai) ||
    doraEventJunme.includes(expectedTile)
  ) {
    return ['dora'];
  }

  return [];
};
