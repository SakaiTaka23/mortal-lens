import { Pon as MjaiPon } from '@mjai/types';
import type { Meta, StoryObj } from '@storybook/react';

import { Pon } from './Pon';

const meta = {
  component: Pon,
  title: 'Pon',
  tags: ['autodocs'],
} satisfies Meta<typeof Pon>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  type: 'pon',
  actor: 1,
  target: 0,
  pai: '1m',
  consumed: ['1m', '1m'],
} as MjaiPon;

export const FromKamicha: Story = {
  args: { ...defaultArgs, position: 'self' },
};

export const FromToimen: Story = {
  args: {
    ...defaultArgs,
    actor: 2,
    position: 'self',
  },
};

export const FromShimocha: Story = {
  args: {
    ...defaultArgs,
    actor: 3,
    position: 'self',
  },
};

export const WithRed: Story = {
  args: {
    ...defaultArgs,
    pai: '5m',
    consumed: ['5mr', '5m'],
    position: 'self',
  },
};

export const Kamicha: Story = {
  args: { ...defaultArgs, position: 'kamicha' },
};

export const Toimen: Story = {
  args: {
    ...defaultArgs,
    position: 'toimen',
  },
};

export const Shimocha: Story = {
  args: {
    ...defaultArgs,
    position: 'shimocha',
  },
};
