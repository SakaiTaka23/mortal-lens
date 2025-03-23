import { PlayerID } from '@/types/common/PlayerID';
import { Kyoku } from '@/types/input/review/kyokus';
import { DiffLevel } from '@/types/output/DiffLevel';
import { EventKey, NakiEvent, RiichiEvent } from '@/types/output/KyokuEvent';
import { KyokuDiff } from '@/types/output/RoundDiff';
import { Tag } from '@/types/output/Tags';

import { NakiEventTags } from './tags/NakiEvent';
import { NakiRiichiDecisionTags } from './tags/NikiRiichiDecision';
import { RiichiEventTags } from './tags/RiichiEvent';
import { TileSpecTags } from './tags/TileSpec';

export const KyokuFilter = (
  kyokus: Kyoku[],
  playerID: PlayerID,
  riichiEvent: Record<EventKey, RiichiEvent[]>,
  nakiEvent: Record<EventKey, NakiEvent[]>,
): KyokuDiff[] => {
  const result: KyokuDiff[] = [];
  kyokus.forEach((kyoku) => {
    const entries = kyoku.entries;

    entries.forEach((entry) => {
      if (entry.isEqual) {
        return;
      }
      const aiProbability = Number(
        (entry.details[entry.actualIndex].prob * 100).toFixed(2),
      );
      const diffLevel = getDiffLevel(aiProbability);

      console.log('getting for', `${kyoku.kyoku}-${kyoku.honba}`);
      console.log(riichiEvent);

      const tags: Tag[] = [
        ...TileSpecTags(entry),
        ...NakiRiichiDecisionTags(entry),
        ...RiichiEventTags(entry, riichiEvent[`${kyoku.kyoku}-${kyoku.honba}`]),
        ...NakiEventTags(
          entry,
          nakiEvent[`${kyoku.kyoku}-${kyoku.honba}`],
          playerID,
        ),
      ];

      result.push({
        kyoku: kyoku.kyoku,
        honba: kyoku.honba,
        junme: entry.junme,
        shanten: entry.shanten,
        diffLevel,
        aiProbability,
        tags,
      });
    });
  });

  return result;
};

const getDiffLevel = (probability: number): DiffLevel => {
  if (probability === 0) return 'critical';
  if (probability < 5) return 'significant';
  if (probability < 25) return 'moderate';
  return 'optimal';
};
