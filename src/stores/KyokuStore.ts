import { create } from 'zustand';

import { Bakaze } from '@/types/input/MjaiLog';
import { Honba, KyokuNumber } from '@/types/input/review/kyokus';

interface KyokuStore {
  kyoku: KyokuNumber;
  honba: Honba;
  bakaze: Bakaze;
  init: (kyoku: KyokuNumber, honba: Honba, bakaze: Bakaze) => void;
  show: () => string;
}

export const useKyokuStore = create<KyokuStore>((set) => ({
  kyoku: 1,
  honba: 0,
  bakaze: 'E',

  init: (kyoku, honba, bakaze) => {
    set({ kyoku, honba, bakaze });
  },
  show: (): string => {
    const windMap = {
      E: '東',
      S: '南',
      W: '西',
    } as const;
    const wind = windMap[useKyokuStore.getState().bakaze];
    return `${wind}${useKyokuStore.getState().kyoku}-${useKyokuStore.getState().honba}`;
  },
}));
