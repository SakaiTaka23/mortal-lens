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
      tehai: ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m'],
      tsumo: '1p',
      fuuros: [],
    },
    {
      tehai: ['1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p'],
      tsumo: null,
      fuuros: [],
    },
    {
      tehai: ['1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s'],
      tsumo: null,
      fuuros: [],
    },
    {
      tehai: ['1m', '2m', '3m', '1p', '2p', '3p', '1s', '2s', '3s'],
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
} as Props;

export const Default: Story = {
  args: defaultArgs,
};
