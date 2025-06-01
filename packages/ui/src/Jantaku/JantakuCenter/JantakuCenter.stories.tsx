import { Meta, StoryObj } from '@storybook/react';

import { JantakuCenter, Props } from '.';

const meta = {
  component: JantakuCenter,
  title: 'JantakuCenter',
  tags: ['autodocs'],
} satisfies Meta<typeof JantakuCenter>;

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
} as Props;

export const Default: Story = {
  args: defaultArgs,
};

export const MultipleDoraMarkers: Story = {
  args: {
    ...defaultArgs,
    dora: ['1m', '2p', '3s'],
  },
};

export const LateGame: Story = {
  args: {
    bakaze: 'W',
    kyoku: 4,
    honba: 2,
    relativeScores: [32000, 28000, 22000, 18000],
    dora: ['1m', '2m', '3m'],
    tilesLeft: 14,
    oya: 3,
    playerID: 2,
  },
};
