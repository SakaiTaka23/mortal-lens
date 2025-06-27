import { Fuuro } from '@mjai/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Fuuros } from './Fuuros';

const meta = {
  title: 'Fuuros',
  component: Fuuros,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Fuuros>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  fuuros: [
    {
      type: 'pon',
      actor: 0,
      target: 1,
      pai: '5mr',
      consumed: ['5m', '5m'],
    },
    {
      type: 'chi',
      actor: 0,
      target: 1,
      pai: '7m',
      consumed: ['5m', '6m'],
    },
    {
      type: 'daiminkan',
      actor: 0,
      target: 1,
      pai: '9s',
      consumed: ['9s', '9s', '9s'],
    },
  ] as Fuuro[],
};

export const Self: Story = {
  args: {
    ...defaultArgs,
    position: 'self',
  },
};

export const Shimocha: Story = {
  args: {
    ...defaultArgs,
    position: 'shimocha',
  },
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
