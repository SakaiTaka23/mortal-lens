import { Kyoku } from '@/types/input/review/kyokus';
import { RoundDiff } from '@/types/output/RoundDiff';

export const HanchanFilter = (kyokus: Kyoku[]): RoundDiff[] => {
  const result: RoundDiff[] = [];
  kyokus.forEach((kyoku) => {
    const entries = kyoku.entries;
    const decisionCount = entries.length;
    let optimal = 0;
    let moderate = 0;
    let significant = 0;
    let critical = 0;

    entries.forEach((entry) => {
      if (entry.isEqual) {
        return;
      }
      const aiProbability = entry.details[entry.actualIndex].prob;
      if (aiProbability === 0) {
        critical++;
      } else if (aiProbability >= 0.01 && aiProbability < 5) {
        significant++;
      } else if (aiProbability >= 5 && aiProbability < 25) {
        moderate++;
      } else {
        optimal++;
      }
    });

    result.push({
      kyoku: kyoku.kyoku,
      honba: kyoku.honba,
      decisionCount,
      optimal: [optimal, Number(((optimal * 100) / decisionCount).toFixed(2))],
      moderate: [
        moderate,
        Number(((moderate * 100) / decisionCount).toFixed(2)),
      ],
      significant: [
        significant,
        Number(((significant * 100) / decisionCount).toFixed(2)),
      ],
      critical: [
        critical,
        Number(((critical * 100) / decisionCount).toFixed(2)),
      ],
    });
  });

  return result;
};
