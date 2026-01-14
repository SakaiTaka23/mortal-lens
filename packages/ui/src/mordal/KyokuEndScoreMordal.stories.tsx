import type { HoraDetail } from '@mortal-lens/types';
import type { Meta, StoryObj } from '@storybook/react';
import { CalcResultType, type PlayerID, type Ryukyoku } from 'mjai-ts';

import { KyokuEndScoreModal } from '.';

const meta = {
  component: KyokuEndScoreModal,
  title: 'KyokuEndScoreModal',
  tags: ['autodocs'],
} satisfies Meta<typeof KyokuEndScoreModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

// Base props for all stories
const baseProps = {
  open: true,
  onClose: noop,
  playerID: 0 as PlayerID,
  bakaze: 'E' as const,
  kyoku: 1,
  honba: 0,
  oya: 0 as PlayerID,
};

// 1. Default - Ron (単独和了・ロン)
const defaultHoraDetail: HoraDetail = {
  hora: {
    type: 'hora',
    actor: 0,
    target: 1,
    deltas: [8000, -8000, 0, 0],
    uraMarkers: [],
  },
  agariResult: {
    type: CalcResultType.AGARI,
    isAgari: true,
    error: false,
    yakuman: 0,
    yaku: [
      { name: '立直', value: { type: 'han', count: 1 } },
      { name: '一発', value: { type: 'han', count: 1 } },
      { name: 'ドラ', value: { type: 'han', count: 2 } },
    ],
    han: 4,
    fu: 30,
    ten: 8000,
    name: '満貫',
    scoreInfo: {
      bakaze: 'E',
      jikaze: 'E',
      agariType: 'ron' as const,
    },
    payment: {
      type: 'ron',
      amount: 8000,
    },
  },
};

// 2. Tsumo (ツモ和了)
const tsumoHoraDetail: HoraDetail = {
  hora: {
    type: 'hora',
    actor: 0,
    target: 0,
    deltas: [12000, -4000, -4000, -4000],
    uraMarkers: [],
  },
  agariResult: {
    type: CalcResultType.AGARI,
    isAgari: true,
    error: false,
    yakuman: 0,
    yaku: [
      { name: '立直', value: { type: 'han', count: 1 } },
      { name: '門前清自摸和', value: { type: 'han', count: 1 } },
      { name: '一盃口', value: { type: 'han', count: 1 } },
      { name: 'ドラ', value: { type: 'han', count: 1 } },
    ],
    han: 4,
    fu: 30,
    ten: 12000,
    name: '満貫',
    scoreInfo: {
      bakaze: 'E',
      jikaze: 'E',
      agariType: 'tsumo' as const,
    },
    payment: {
      type: 'tsumo',
      fromOya: 4000,
      fromKo: 4000,
    },
  },
};

// 3. Yakuman (役満)
const yakumanHoraDetail: HoraDetail = {
  hora: {
    type: 'hora',
    actor: 0,
    target: 1,
    deltas: [32000, -32000, 0, 0],
    uraMarkers: [],
  },
  agariResult: {
    type: CalcResultType.AGARI,
    isAgari: true,
    error: false,
    yakuman: 1,
    yaku: [{ name: '国士無双', value: { type: 'yakuman', multiplier: 1 } }],
    han: 13,
    fu: 0,
    ten: 32000,
    name: '役満',
    scoreInfo: {
      bakaze: 'E',
      jikaze: 'E',
      agariType: 'ron' as const,
    },
    payment: {
      type: 'ron',
      amount: 32000,
    },
  },
};

// 4. Double Ron (ダブロン)
const doubleRonEndStatus: HoraDetail[] = [
  {
    hora: {
      type: 'hora',
      actor: 0,
      target: 2,
      deltas: [8000, 0, -8000, 0],
      uraMarkers: [],
    },
    agariResult: {
      type: CalcResultType.AGARI,
      isAgari: true,
      error: false,
      yakuman: 0,
      yaku: [
        { name: '立直', value: { type: 'han', count: 1 } },
        { name: 'ドラ', value: { type: 'han', count: 3 } },
      ],
      han: 4,
      fu: 30,
      ten: 8000,
      name: '満貫',
      scoreInfo: {
        bakaze: 'E',
        jikaze: 'E',
        agariType: 'ron' as const,
      },
      payment: {
        type: 'ron',
        amount: 8000,
      },
    },
  },
  {
    hora: {
      type: 'hora',
      actor: 3,
      target: 2,
      deltas: [0, 0, -8000, 8000],
      uraMarkers: [],
    },
    agariResult: {
      type: CalcResultType.AGARI,
      isAgari: true,
      error: false,
      yakuman: 0,
      yaku: [
        { name: '立直', value: { type: 'han', count: 1 } },
        { name: '一発', value: { type: 'han', count: 1 } },
        { name: 'ドラ', value: { type: 'han', count: 2 } },
      ],
      han: 4,
      fu: 30,
      ten: 8000,
      name: '満貫',
      scoreInfo: {
        bakaze: 'E',
        jikaze: 'N',
        agariType: 'ron' as const,
      },
      payment: {
        type: 'ron',
        amount: 8000,
      },
    },
  },
];

// 5. Triple Ron (トリプルロン)
const tripleRonEndStatus: HoraDetail[] = [
  {
    hora: {
      type: 'hora',
      actor: 0,
      target: 1,
      deltas: [3900, -11700, 3900, 3900],
      uraMarkers: [],
    },
    agariResult: {
      type: CalcResultType.AGARI,
      isAgari: true,
      error: false,
      yakuman: 0,
      yaku: [
        { name: '断么九', value: { type: 'han', count: 1 } },
        { name: '三色同順', value: { type: 'han', count: 2 } },
      ],
      han: 3,
      fu: 30,
      ten: 3900,
      name: '',
      scoreInfo: {
        bakaze: 'E',
        jikaze: 'E',
        agariType: 'ron' as const,
      },
      payment: {
        type: 'ron',
        amount: 3900,
      },
    },
  },
  {
    hora: {
      type: 'hora',
      actor: 2,
      target: 1,
      deltas: [3900, -11700, 3900, 3900],
      uraMarkers: [],
    },
    agariResult: {
      type: CalcResultType.AGARI,
      isAgari: true,
      error: false,
      yakuman: 0,
      yaku: [
        { name: '平和', value: { type: 'han', count: 1 } },
        { name: 'ドラ', value: { type: 'han', count: 2 } },
      ],
      han: 3,
      fu: 30,
      ten: 3900,
      name: '',
      scoreInfo: {
        bakaze: 'E',
        jikaze: 'W',
        agariType: 'ron' as const,
      },
      payment: {
        type: 'ron',
        amount: 3900,
      },
    },
  },
  {
    hora: {
      type: 'hora',
      actor: 3,
      target: 1,
      deltas: [3900, -11700, 3900, 3900],
      uraMarkers: [],
    },
    agariResult: {
      type: CalcResultType.AGARI,
      isAgari: true,
      error: false,
      yakuman: 0,
      yaku: [
        { name: '立直', value: { type: 'han', count: 1 } },
        { name: '門前清自摸和', value: { type: 'han', count: 1 } },
        { name: '断么九', value: { type: 'han', count: 1 } },
      ],
      han: 3,
      fu: 30,
      ten: 3900,
      name: '',
      scoreInfo: {
        bakaze: 'E',
        jikaze: 'N',
        agariType: 'ron' as const,
      },
      payment: {
        type: 'ron',
        amount: 3900,
      },
    },
  },
];

// 6. Ryukyoku (流局)
const ryukyokuEndStatus: Ryukyoku[] = [
  {
    type: 'ryukyoku',
    deltas: [3000, -1000, -1000, -1000],
  },
];

// Stories
export const Default: Story = {
  args: {
    ...baseProps,
    endStatus: [defaultHoraDetail],
  },
};

export const Tsumo: Story = {
  args: {
    ...baseProps,
    endStatus: [tsumoHoraDetail],
  },
};

export const Yakuman: Story = {
  args: {
    ...baseProps,
    endStatus: [yakumanHoraDetail],
  },
};

export const DoubleRon: Story = {
  args: {
    ...baseProps,
    endStatus: doubleRonEndStatus,
  },
};

export const TripleRon: Story = {
  args: {
    ...baseProps,
    endStatus: tripleRonEndStatus,
  },
};

export const RyukyokuStory: Story = {
  args: {
    ...baseProps,
    endStatus: ryukyokuEndStatus,
  },
};
