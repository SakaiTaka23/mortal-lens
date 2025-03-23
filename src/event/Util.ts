import { Bakaze } from '@/types/input/MjaiLog';
import { Honba, KyokuNumber } from '@/types/input/review/kyokus';
import { EventKey } from '@/types/output/KyokuEvent';

export const createEventKey = (
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
