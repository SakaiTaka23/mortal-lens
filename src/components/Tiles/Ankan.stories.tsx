import type { Meta, StoryObj } from '@storybook/react';

import { AnkanFuuro } from '@/types/input/review/kyokus/entry/State';

import { Ankan } from './Ankan';

const meta = {
  component: Ankan,
  title: 'Ankan',
  tags: ['autodocs'],
} satisfies Meta<typeof Ankan>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  type: 'ankan',
  pai: '1m',
  consumed: ['1m', '1m', '1m', '1m'],
} as AnkanFuuro;

export const Default: Story = {
  args: {
    fuuro: defaultArgs,
  },
};
