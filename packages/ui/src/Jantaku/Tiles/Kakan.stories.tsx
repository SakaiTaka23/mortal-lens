import type { Meta, StoryObj } from '@storybook/react';
import { KakanFuuro } from 'mjai-ts/core';

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

export const FromShimocha: Story = {
  args: { ...defaultArgs, position: 'self' },
};

export const FromToimen: Story = {
  args: {
    ...defaultArgs,
    ponTarget: 2,
    position: 'self',
  },
};

export const FromKamicha: Story = {
  args: {
    ...defaultArgs,
    ponTarget: 3,
    position: 'self',
  },
};

export const Shimocha: Story = {
  args: { ...defaultArgs, position: 'shimocha' },
};

export const Toimen: Story = {
  args: {
    ...defaultArgs,
    position: 'toimen',
  },
};

export const Kamicha: Story = {
  args: {
    ...defaultArgs,
    position: 'kamicha',
  },
};
