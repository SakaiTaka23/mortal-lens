import { PlayerID } from '@/types/common/PlayerID';
import { MjaiLog } from '@/types/input/MjaiLog';
import { EventKey, NakiEvent } from '@/types/output/KyokuEvent';

import { createEventKey } from './Util';

export const NakiEventFilter = (
  logs: MjaiLog[],
  targetPlayer: PlayerID,
): Record<EventKey, NakiEvent[]> => {
  const result: Record<EventKey, NakiEvent[]> = {};
  const filteredLogs = logs.filter(
    (log) =>
      log.type === 'start_kyoku' ||
      log.type === 'ankan' ||
      log.type === 'chi' ||
      log.type === 'daiminkan' ||
      log.type === 'kakan' ||
      log.type === 'pon' ||
      (log.type === 'dahai' && log.actor === targetPlayer),
  );

  let junme = 1;
  let currentKey: EventKey | null = null;
  filteredLogs.forEach((log) => {
    if (log.type === 'start_kyoku') {
      currentKey = createEventKey(log.kyoku, log.honba, log.bakaze);
      result[currentKey] = [];
      junme = 1;
    } else if (log.type === 'dahai') {
      junme++;
    } else if (
      (log.type === 'ankan' ||
        log.type === 'chi' ||
        log.type === 'daiminkan' ||
        log.type === 'kakan' ||
        log.type === 'pon') &&
      currentKey
    ) {
      result[currentKey].push({
        actor: log.actor,
        junme,
      });
    }
  });

  return result;
};
