import type { Meta, StoryObj } from '@storybook/react';
import { Chi as MjaiChi } from 'mjai-ts';

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

export const FromKamicha: Story = {
  args: {
    ...defaultArgs,
    position: 'self',
  },
};

export const FromToimen: Story = {
  args: {
    ...defaultArgs,
    target: 3,
    position: 'self',
  },
};

export const FromShimocha: Story = {
  args: {
    ...defaultArgs,
    target: 2,
    position: 'self',
  },
};

export const Kamicha: Story = {
  args: {
    ...defaultArgs,
    position: 'kamicha',
  },
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
