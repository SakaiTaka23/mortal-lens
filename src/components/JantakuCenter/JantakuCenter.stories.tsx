import { Meta, StoryObj } from '@storybook/react';

import { JantakuCenter } from '.';

const meta = {
  component: JantakuCenter,
  title: 'JantakuCenter',
  tags: ['autodocs'],
} satisfies Meta<typeof JantakuCenter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bakaze: 'N',
    kyoku: 1,
    honba: 0,
    scores: [25000, 25000, 25000, 25000],
    doraMarkers: ['1m'],
    remainingTiles: 70,
    oya: 0,
    playerID: 2,
  },
};

export const MultipleDoraMarkers: Story = {
  args: {
    bakaze: 'S',
    kyoku: 2,
    honba: 1,
    scores: [25000, 25000, 25000, 25000],
    doraMarkers: ['1m', '2p', '3s'],
    remainingTiles: 50,
    oya: 1,
    playerID: 3,
  },
};

export const LateGame: Story = {
  args: {
    bakaze: 'W',
    kyoku: 4,
    honba: 2,
    scores: [32000, 28000, 22000, 18000],
    doraMarkers: ['1m', '2m', '3m', '4m', '5m'],
    remainingTiles: 14,
    oya: 3,
    playerID: 2,
  },
};
