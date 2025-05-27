import { Chi as MjaiChi } from '@mjai/types';
import type { Meta, StoryObj } from '@storybook/react';

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
  actor: 1,
  target: 0,
  pai: '1m',
  consumed: ['2m', '3m'],
} as MjaiChi;

export const Kamicha: Story = {
  args: defaultArgs,
};

export const Toimen: Story = {
  args: {
    ...defaultArgs,
    actor: 2,
  },
};

export const Shimocha: Story = {
  args: {
    ...defaultArgs,
    actor: 3,
  },
};
