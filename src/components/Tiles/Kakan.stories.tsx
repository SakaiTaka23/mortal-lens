import type { Meta, StoryObj } from '@storybook/react';

import { KakanFuuro } from '@/types/input/review/kyokus/entry/State';

import { Kakan } from './Kakan';

const meta = {
  component: Kakan,
  title: 'Kakan',
  tags: ['autodocs'],
} satisfies Meta<typeof Kakan>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultFuuro = {
  type: 'kakan',
  pai: '1m',
  consumed: ['1m', '1m'],
  previousPonPai: '1m',
  previousPonTarget: 0,
} as KakanFuuro;

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
