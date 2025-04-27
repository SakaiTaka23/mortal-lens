import type { Meta, StoryObj } from '@storybook/react';

import { Tiles } from '@/types/common/Tiles';
import { DaiminkanFuuro } from '@/types/input/review/kyokus/entry/State';

import { Daiminkan } from './Daiminkan';

const meta = {
  component: Daiminkan,
  title: 'Daiminkan',
  tags: ['autodocs'],
} satisfies Meta<typeof Daiminkan>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultFuuro = {
  type: 'daiminkan',
  target: 0,
  pai: '1m',
  consumed: ['1m', '1m', '1m'] as [Tiles, Tiles, Tiles],
} as DaiminkanFuuro;

export const Kamicha: Story = {
  args: {
    playerID: 1,
    fuuro: defaultFuuro,
  },
};

export const Toimen: Story = {
  args: {
    playerID: 2,
    fuuro: defaultFuuro,
  },
};

export const Shimocha: Story = {
  args: {
    playerID: 3,
    fuuro: defaultFuuro,
  },
};
