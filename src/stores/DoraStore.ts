import { create } from 'zustand';

import { Tiles } from '@/types/common/Tiles';

interface DoraStore {
  doraList: Tiles[];
  shinDora: (newDora: Tiles) => void;
  init: (initDora: Tiles) => void;
}

export const useDoraState = create<DoraStore>((set) => ({
  doraList: [],

  shinDora: (newDora: Tiles) => {
    set((state) => ({
      doraList: [...state.doraList, newDora],
    }));
  },

  init: (initDora: Tiles) => {
    set({ doraList: [initDora] });
  },
}));
