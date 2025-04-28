import { create } from 'zustand';

import { Bakaze } from '@/types/input/MjaiLog';
import { Honba, KyokuNumber } from '@/types/input/review/kyokus';

interface KyokuStore {
  kyoku: KyokuNumber;
  honba: Honba;
  bakaze: Bakaze;
  init: (kyoku: KyokuNumber, honba: Honba, bakaze: Bakaze) => void;
}

export const kyokuStore = create<KyokuStore>((set) => ({
  kyoku: 1,
  honba: 0,
  bakaze: 'E',

  init: (kyoku, honba, bakaze) => {
    set({ kyoku, honba, bakaze });
  },
}));
