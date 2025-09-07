import { GameState } from '@/state/useGameState';

export const initialState: GameState = {
  output: {
    meta: {
      engine: '',
      gameLength: '',
      loadingTime: '',
      reviewTime: '',
      showRating: false,
      version: '',
      lang: '',
    },
    playerID: 0,
    reviewMeta: {
      totalReviewed: 0,
      totalMatches: 0,
      rating: 0,
      temperature: 0,
      modelTag: '',
    },
    kyokus: [],
    diffs: [],
    scoreOverview: [],
  },
  currentKyokuIndex: 0,
  currentStepIndex: 0,
  currentKyokuMeta: {
    bakaze: 'E',
    kyoku: 0,
    honba: 0,
    oya: 0,
    endStatus: [],
    relativeScores: [0, 0, 0, 0],
  },
  currentKyokuTilesLeft: 0,
  currentKyokuUnit: {
    bakaze: 'E',
    kyoku: 0,
    honba: 0,
    oya: 0,
    endStatus: [],
    relativeScores: [0, 0, 0, 0],
    steps: [],
  },
  currentKyokuStep: {
    dora: [],
    hand: [
      { tehai: [], tsumo: null, fuuros: [] },
      { tehai: [], tsumo: null, fuuros: [] },
      { tehai: [], tsumo: null, fuuros: [] },
      { tehai: [], tsumo: null, fuuros: [] },
    ],
    kawa: [
      { sutehai: [], nakiIndex: [], reachIndex: null },
      { sutehai: [], nakiIndex: [], reachIndex: null },
      { sutehai: [], nakiIndex: [], reachIndex: null },
      { sutehai: [], nakiIndex: [], reachIndex: null },
    ],
    tilesLeft: 0,
  },
};
