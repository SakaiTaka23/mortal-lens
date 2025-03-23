import { PlayerID } from '@/types/common/PlayerID';
import { Bakaze, MjaiLog } from '@/types/input/MjaiLog';
import { Honba, KyokuNumber } from '@/types/input/review/kyokus';
import { EventKey, RiichiEvent } from '@/types/output/KyokuEvent';

export const RiichiEventFilter = (
  logs: MjaiLog[],
  targetPlayer: PlayerID,
): Record<EventKey, RiichiEvent[]> => {
  const result: Record<EventKey, RiichiEvent[]> = {};
  const filteredLogs = logs.filter(
    (log) =>
      log.type === 'start_kyoku' ||
      log.type === 'reach' ||
      (log.type === 'dahai' && log.actor === targetPlayer),
  );

  let junme = 1;
  let currentKey: EventKey | null = null;
  filteredLogs.forEach((log) => {
    if (log.type === 'start_kyoku') {
      currentKey = createEventKey(log.kyoku, log.honba, log.bakaze);
      result[currentKey] = [];
      junme = 1;
    } else if (log.type === 'reach' && currentKey) {
      result[currentKey].push({
        actor: log.actor,
        junme,
      });
    } else if (log.type === 'dahai') {
      junme++;
    }
  });

  return result;
};

const createEventKey = (
  kyoku: KyokuNumber,
  honba: Honba,
  bakaze: Bakaze,
): EventKey => {
  if (bakaze === 'E') {
    return `${kyoku - 1}-${honba}`;
  } else if (bakaze === 'S') {
    return `${kyoku + 3}-${honba}`;
  } else if (bakaze === 'W') {
    return `${kyoku + 7}-${honba}`;
  }

  throw new Error('Invalid bakaze');
};
