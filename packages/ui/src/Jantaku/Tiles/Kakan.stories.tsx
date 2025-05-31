import { KakanFuuro } from '@mjai/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Kakan } from './Kakan';

const meta = {
  component: Kakan,
  title: 'Kakan',
  tags: ['autodocs'],
} satisfies Meta<typeof Kakan>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  type: 'kakan',
  actor: 0,
  pai: '1m',
  consumed: ['1m', '1m', '1m'],
  ponTarget: 1,
  ponPai: '1m',
  ponConsumed: ['1m', '1m'],
} as KakanFuuro;

export const Shimocha: Story = {
  args: defaultArgs,
};

export const Toimen: Story = {
  args: {
    ...defaultArgs,
    ponTarget: 2,
  },
};

export const Kamicha: Story = {
  args: {
    ...defaultArgs,
    ponTarget: 3,
  },
};
