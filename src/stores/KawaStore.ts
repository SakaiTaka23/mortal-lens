import { create } from 'zustand';

import { PlayerID } from '@/types/common/PlayerID';
import { Tiles } from '@/types/common/Tiles';

interface KawaStore {
  0: Tiles[];
  1: Tiles[];
  2: Tiles[];
  3: Tiles[];
  remaining: number;
}

interface KawaStoreActions {
  init: () => void;
  kan: () => void;
  dahai: (playerId: PlayerID, tile: Tiles) => void;
}

const initialState: KawaStore = {
  0: [],
  1: [],
  2: [],
  3: [],
  remaining: 69,
};

export const useKawaStore = create<KawaStore & KawaStoreActions>((set) => ({
  ...initialState,

  init: () => {
    set(initialState);
  },
  kan: () => {
    set((state) => ({
      ...state,
      remaining: state.remaining - 1,
    }));
  },
  dahai: (playerId: PlayerID, tile: Tiles) => {
    set((state) => ({
      ...state,
      [playerId]: [...state[playerId], tile],
      remaining: state.remaining - 1,
    }));
  },
}));
