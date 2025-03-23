import { PlayerID } from '@/types/common/PlayerID';
import { Entry } from '@/types/input/review/kyokus/Entries';
import { NakiEvent } from '@/types/output/KyokuEvent';
import { Tag } from '@/types/output/Tags';

export const NakiEventTags = (
  entry: Entry,
  nakiEvent: NakiEvent[],
  targetPlayer: PlayerID,
): Tag[] => {
  const junme = entry.junme;
  const tachaNaki = nakiEvent.filter(
    (j) => j.junme < junme && j.actor != targetPlayer,
  );
  const tachaNakiPlayerCount = tachaNaki.reduce(
    (acc, naki) => {
      acc[naki.actor] = (acc[naki.actor] || 0) + 1;
      return acc;
    },
    {} as Record<PlayerID, number>,
  );
  const multipleNakiPlayers = Object.values(tachaNakiPlayerCount).filter(
    (count) => count >= 2,
  ).length;
  const targetNakiCount = nakiEvent.filter(
    (j) => j.junme < junme && j.actor == targetPlayer,
  ).length;

  const tags: Tag[] = [];
  if (targetNakiCount > 0) {
    tags.push('myfuuro');
  }
  if (multipleNakiPlayers > 0) {
    tags.push('2fuuro');
  }

  return tags;
};
