import { Event } from '@mjai/types';
import { ScoreOverview } from '@mortal-lens/types';

export interface ScoreOverviewState {
  currentResult(): ScoreOverview[];

  handle(event: Event): void;
}

export const ScoreOverviewProcessor = (): ScoreOverviewState => {
  const result: ScoreOverview[] = [];
  let bakaze: 'E' | 'S' | 'W' = 'E';
  let kyoku = 0;
  let honba = 0;
  let scores: [number, number, number, number] = [25000, 25000, 25000, 25000];
  let deltas: [number, number, number, number] = [0, 0, 0, 0];
  let kyotaku = 0;

  const currentResult = (): ScoreOverview[] => {
    scores = [
      scores[0] + deltas[0],
      scores[1] + deltas[1],
      scores[2] + deltas[2],
      scores[3] + deltas[3],
    ];
    return [
      ...result,
      {
        bakaze,
        kyoku,
        honba,
        scores,
        deltas: [0, 0, 0, 0],
        kyotaku: kyotaku * 1000,
      },
    ];
  };

  const handle = (event: Event): void => {
    if (event.type === 'start_kyoku') {
      bakaze = event.bakaze;
      kyoku = event.kyoku;
      honba = event.honba;
      scores = [
        scores[0] + deltas[0],
        scores[1] + deltas[1],
        scores[2] + deltas[2],
        scores[3] + deltas[3],
      ];
      deltas = [0, 0, 0, 0];
    } else if (event.type === 'reach_accepted') {
      kyotaku++;
      deltas[event.actor] -= 1000;
    } else if (event.type === 'hora') {
      kyotaku = 0;
      deltas = [
        deltas[0] + event.deltas[0],
        deltas[1] + event.deltas[1],
        deltas[2] + event.deltas[2],
        deltas[3] + event.deltas[3],
      ];
    } else if (event.type === 'ryukyoku') {
      deltas = [
        deltas[0] + event.deltas[0],
        deltas[1] + event.deltas[1],
        deltas[2] + event.deltas[2],
        deltas[3] + event.deltas[3],
      ];
    } else if (event.type === 'end_kyoku') {
      result.push({
        bakaze,
        kyoku,
        honba,
        scores,
        deltas,
        kyotaku: kyotaku * 1000,
      });
    }
    return;
  };

  return {
    currentResult,
    handle,
  };
};
