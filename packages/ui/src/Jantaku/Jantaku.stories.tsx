import { HandState } from '@mjai/core';
import { Meta, StoryObj } from '@storybook/react';

import { Jantaku, Props } from '.';

const meta = {
  component: Jantaku,
  title: 'Jantaku',
  tags: ['autodocs'],
} satisfies Meta<typeof Jantaku>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  bakaze: 'E',
  kyoku: 1,
  honba: 0,
  oya: 0,
  relativeScores: [25000, 25000, 25000, 25000],
  tilesLeft: 70,
  playerID: 2,
  dora: ['1m'],
  hand: [
    {
      tehai: [
        '1m',
        '2m',
        '3m',
        '4m',
        '5m',
        '6m',
        '7m',
        '8m',
        '9m',
        '1m',
        '2m',
        '3m',
        '4m',
      ],
      tsumo: '1m',
      fuuros: [],
    },
    {
      tehai: [
        '1p',
        '2p',
        '3p',
        '4p',
        '5p',
        '6p',
        '7p',
        '8p',
        '9p',
        '1p',
        '2p',
        '3p',
        '4p',
      ],
      tsumo: null,
      fuuros: [],
    },
    {
      tehai: [
        '1s',
        '2s',
        '3s',
        '4s',
        '5s',
        '6s',
        '7s',
        '8s',
        '9s',
        '1s',
        '2s',
        '3s',
        '4s',
      ],
      tsumo: null,
      fuuros: [],
    },
    {
      tehai: [
        '1m',
        '2m',
        '3m',
        '4m',
        '5m',
        '6m',
        '7m',
        '8m',
        '9m',
        '1m',
        '2m',
        '3m',
        '4m',
      ],
      tsumo: null,
      fuuros: [],
    },
  ],
  kawa: [
    { sutehai: ['1m', '2m', '3m'], nakiIndex: [], reachIndex: null },
    { sutehai: ['1p', '2p', '3p'], nakiIndex: [], reachIndex: null },
    { sutehai: ['1s', '2s', '3s'], nakiIndex: [], reachIndex: null },
    { sutehai: ['5m', '5p', '5s'], nakiIndex: [], reachIndex: null },
  ],
  overview: [
    {
      bakaze: 'E',
      kyoku: 1,
      honba: 0,
      scores: [25000, 25000, 25000, 25000],
      deltas: [-1500, 500, -1500, 500],
      kyotaku: 2000,
    },
    {
      bakaze: 'E',
      kyoku: 2,
      honba: 1,
      scores: [23500, 25500, 23500, 25500],
      deltas: [4300, 0, -2300, 0],
      kyotaku: 0,
    },
    {
      bakaze: 'E',
      kyoku: 3,
      honba: 0,
      scores: [27800, 25500, 21200, 25500],
      deltas: [0, -5200, 0, 5200],
      kyotaku: 0,
    },
    {
      bakaze: 'E',
      kyoku: 4,
      honba: 0,
      scores: [27800, 20300, 21200, 30700],
      deltas: [-2000, 8000, -2000, -4000],
      kyotaku: 0,
    },
    {
      bakaze: 'S',
      kyoku: 1,
      honba: 0,
      scores: [25800, 28300, 19200, 26700],
      deltas: [-8000, 0, 9000, -1000],
      kyotaku: 0,
    },
    {
      bakaze: 'S',
      kyoku: 2,
      honba: 0,
      scores: [17800, 28300, 28200, 25700],
      deltas: [0, -5200, 5200, 0],
      kyotaku: 0,
    },
    {
      bakaze: 'S',
      kyoku: 3,
      honba: 0,
      scores: [17800, 23100, 33400, 25700],
      deltas: [0, 0, -3900, 3900],
      kyotaku: 0,
    },
    {
      bakaze: 'S',
      kyoku: 4,
      honba: 0,
      scores: [17800, 23100, 29500, 29600],
      deltas: [-700, -1700, -700, 3100],
      kyotaku: 0,
    },
    {
      bakaze: 'S',
      kyoku: 4,
      honba: 0,
      scores: [17100, 21400, 28800, 32700],
      deltas: [0, 0, 0, 0],
      kyotaku: 0,
    },
  ],
  jumpKyoku: (_kyokuIndex: number) => {
    return;
  },
  hideTiles: false,
} as Props;

const fuuroAndTsumo = {
  tehai: ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m', '1p'],
  tsumo: '1p',
  fuuros: [
    {
      type: 'pon',
      actor: 0,
      pai: '5mr',
      consumed: ['5m', '5m'],
      target: 1,
    },
  ],
} as HandState;

export const Default: Story = {
  args: defaultArgs,
};

export const DefaultWithReview: Story = {
  args: {
    ...defaultArgs,
    review: {
      actualIndex: 0,
      details: [
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '1s' },
          prob: 1,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '2s' },
          prob: 0.5,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '3s' },
          prob: 0.5,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '4s' },
          prob: 0.5,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '5s' },
          prob: 0.5,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '6s' },
          prob: 0.5,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '7s' },
          prob: 0.5,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '8s' },
          prob: 0.5,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '9s' },
          prob: 0.5,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '1p' },
          prob: 0.5,
          QValue: 0,
        },
      ],
    },
  },
};

export const HideOpponentTiles: Story = {
  args: {
    ...defaultArgs,
    hideTiles: true,
  },
};

export const WithFuuro: Story = {
  args: {
    ...defaultArgs,
    hand: [fuuroAndTsumo, fuuroAndTsumo, fuuroAndTsumo, fuuroAndTsumo],
  },
};

export const MaxSize: Story = {
  args: {
    ...defaultArgs,
    kawa: [
      {
        sutehai: [
          '1m',
          '2m',
          '3m',
          '4m',
          '5m',
          '6m',
          '7m',
          '8m',
          '9m',
          '1m',
          '2m',
          '3m',
          '4m',
          '5m',
          '6m',
          '7m',
          '8m',
          '9m',
          '1m',
        ],
        nakiIndex: [4],
        reachIndex: 9,
      },
      {
        sutehai: [
          '1m',
          '2m',
          '3m',
          '4m',
          '5m',
          '6m',
          '7m',
          '8m',
          '9m',
          '1m',
          '2m',
          '3m',
          '4m',
          '5m',
          '6m',
          '7m',
          '8m',
          '9m',
          '1m',
        ],
        nakiIndex: [4],
        reachIndex: 9,
      },
      {
        sutehai: [
          '1m',
          '2m',
          '3m',
          '4m',
          '5m',
          '6m',
          '7m',
          '8m',
          '9m',
          '1m',
          '2m',
          '3m',
          '4m',
          '5m',
          '6m',
          '7m',
          '8m',
          '9m',
          '1m',
        ],
        nakiIndex: [4],
        reachIndex: 9,
      },
      {
        sutehai: [
          '1m',
          '2m',
          '3m',
          '4m',
          '5m',
          '6m',
          '7m',
          '8m',
          '9m',
          '1m',
          '2m',
          '3m',
          '4m',
          '5m',
          '6m',
          '7m',
          '8m',
          '9m',
          '1m',
        ],
        nakiIndex: [4],
        reachIndex: 9,
      },
    ],
  },
};
