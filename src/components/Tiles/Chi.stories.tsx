import type { Meta, StoryObj } from '@storybook/react';

import { ChiFuuro } from '@/types/input/review/kyokus/entry/State';

import { Chi } from './Chi';

const meta = {
  component: Chi,
  title: 'Chi',
  tags: ['autodocs'],
} satisfies Meta<typeof Chi>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  type: 'chi',
  target: 0,
  pai: '1m',
  consumed: ['2m', '3m'],
} as ChiFuuro;

export const Kamicha: Story = {
  args: {
    playerID: 1,
    fuuro: defaultArgs,
  },
};

export const Toimen: Story = {
  args: {
    playerID: 2,
    fuuro: defaultArgs,
  },
};

export const Shimocha: Story = {
  args: {
    playerID: 3,
    fuuro: defaultArgs,
  },
};
