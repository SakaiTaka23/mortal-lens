import { Daiminkan as MjaiDaiminkan } from '@mjai/types';
import type { Meta, StoryObj } from '@storybook/react';

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
