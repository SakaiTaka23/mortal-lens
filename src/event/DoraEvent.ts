import { PlayerID } from '@/types/common/PlayerID';
import { Tiles } from '@/types/common/Tiles';
import { MjaiLog } from '@/types/input/MjaiLog';
import { DoraEvent, EventKey } from '@/types/output/KyokuEvent';

import { createEventKey } from './Util';

export const DoraEventFilter = (
  logs: MjaiLog[],
  targetPlayer: PlayerID,
): Record<EventKey, DoraEvent[]> => {
  const result: Record<EventKey, DoraEvent[]> = {};
  const filteredLogs = logs.filter(
    (log) =>
      log.type === 'start_kyoku' ||
      log.type === 'dora' ||
      (log.type === 'dahai' && log.actor === targetPlayer),
  );

  let junme = 1;
  let currentKey: EventKey | null = null;
  filteredLogs.forEach((log) => {
    if (log.type === 'start_kyoku') {
      currentKey = createEventKey(log.kyoku, log.honba, log.bakaze);
      result[currentKey] = [
        {
          junme,
          dora: getActualDora(log.doraMarker),
        },
      ];

      junme = 1;
    } else if (log.type === 'dora' && currentKey) {
      result[currentKey].push({
        junme,
        dora: getActualDora(log.doraMarkers),
      });
    } else if (log.type === 'dahai') {
      junme++;
    }
  });

  return result;
};

const getActualDora = (tile: Tiles): Tiles => {
  const suits = ['m', 'p', 's'] as const;

  for (const suit of suits) {
    if (tile.endsWith(suit)) {
      const num = parseInt(tile[0]);
      if (!isNaN(num)) {
        const nextNum = num === 9 ? 1 : num + 1;
        return `${nextNum}${suit}` as Tiles;
      }
    }
  }

  const winds: Tiles[] = ['E', 'S', 'W', 'N'];
  const windIndex = winds.indexOf(tile);
  if (windIndex !== -1) {
    return winds[(windIndex + 1) % 4];
  }

  const dragons: Tiles[] = ['P', 'F', 'C'];
  const dragonIndex = dragons.indexOf(tile);
  if (dragonIndex !== -1) {
    return dragons[(dragonIndex + 1) % 3];
  }

  if (tile === '5mr') return '6m';
  if (tile === '5pr') return '6p';
  if (tile === '5sr') return '6s';

  return tile;
};
