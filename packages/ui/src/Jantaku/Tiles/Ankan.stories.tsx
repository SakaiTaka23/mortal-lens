import { Meta, StoryObj } from '@storybook/react';
import { Ankan as MjaiAnkan } from 'mjai-ts/types';

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
  actor: 0,
  consumed: ['1m', '1m', '1m', '1m'],
} as MjaiAnkan;

export const Self: Story = {
  args: { ...defaultArgs, position: 'self' },
};

export const Shimocha: Story = {
  args: { ...defaultArgs, position: 'shimocha' },
};

export const Toimen: Story = {
  args: { ...defaultArgs, position: 'toimen' },
};

export const Kamicha: Story = {
  args: { ...defaultArgs, position: 'kamicha' },
};
