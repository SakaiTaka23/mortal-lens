import type { Meta, StoryObj } from '@storybook/react';

import { PonFuuro } from '@/types/input/review/kyokus/entry/State';

import { Pon } from './Pon';

const meta = {
  component: Pon,
  title: 'Pon',
  tags: ['autodocs'],
} satisfies Meta<typeof Pon>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultFuuro = {
  type: 'pon',
  target: 0,
  pai: '1m',
  consumed: ['1m', '1m'],
} as PonFuuro;

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

export const WithRed: Story = {
  args: {
    playerID: 1,
    fuuro: {
      ...defaultFuuro,
      pai: '5m',
      consumed: ['5mr', '5m'],
    },
  },
};
