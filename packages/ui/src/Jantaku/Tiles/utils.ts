import { PlayerID } from '@mjai/types';

type Position = 0 | 1 | 2;

// only returns number 0~2
export const CallPosition = (actor: PlayerID, target: PlayerID): Position => {
  const result = (4 + actor - target - 1) % 4;
  if (result < 0 || result > 2) {
    throw new Error(
      `Invalid position calculated: ${result} actor: ${actor} target: ${target}`,
    );
  }
  return ((4 + actor - target - 1) % 4) as Position;
};
