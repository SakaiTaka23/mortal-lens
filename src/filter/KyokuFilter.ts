import { Kyoku } from '@/types/input/review/kyokus';
import { DiffLevel } from '@/types/output/DiffLevel';
import { KyokuDiff } from '@/types/output/RoundDiff';
import { Tag } from '@/types/output/Tags';

import { TileSpecTags } from './tags/JihaiJihai';
import { NakiRiichiTags } from './tags/NikiRiichi';

export const KyokuFilter = (kyokus: Kyoku[]): KyokuDiff[] => {
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

      const tags: Tag[] = [...TileSpecTags(entry), ...NakiRiichiTags(entry)];

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
