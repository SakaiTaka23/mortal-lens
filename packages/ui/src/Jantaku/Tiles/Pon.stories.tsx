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

export const WithRed: Story = {
  args: {
    ...defaultArgs,
    pai: '5m',
    consumed: ['5mr', '5m'],
  },
};
