import type { Meta, StoryObj } from '@storybook/react';
import { Daiminkan as MjaiDaiminkan } from 'mjai-ts';

import { Daiminkan } from './Daiminkan';

const meta = {
  component: Daiminkan,
  title: 'Daiminkan',
  tags: ['autodocs'],
} satisfies Meta<typeof Daiminkan>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  type: 'daiminkan',
  actor: 1,
  target: 0,
  pai: '1m',
  consumed: ['1m', '1m', '1m'],
} as MjaiDaiminkan;

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

export const Kamicha: Story = {
  args: { ...defaultArgs, position: 'kamicha' },
};

export const Toimen: Story = {
  args: { ...defaultArgs, position: 'toimen' },
};

export const Shimocha: Story = {
  args: { ...defaultArgs, position: 'shimocha' },
};
