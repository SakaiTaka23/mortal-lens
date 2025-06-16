import type { Meta, StoryObj } from '@storybook/react';

import { Kawa } from './Kawa';

const meta = {
  title: 'Kawa',
  component: Kawa,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Kawa>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sutehai: [
      '1m',
      '2m',
      '3m',
      '4m',
      '5m',
      '6m',
      '7m',
      '8m',
      '9m',
      '1p',
      '2p',
      '3p',
    ],
    reachIndex: null,
    nakiIndex: [],
  },
};

export const WithRiichi: Story = {
  args: {
    sutehai: [
      '1m',
      '2m',
      '3m',
      '4m',
      '5m',
      '6m',
      '7m',
      '8m',
      '9m',
      '1p',
      '2p',
      '3p',
      '4p',
      '5p',
      '6p',
      '7p',
      '8p',
      '9p',
    ],
    reachIndex: 4,
    nakiIndex: [],
  },
};

export const WithNaki: Story = {
  args: {
    sutehai: ['E', 'S', 'W', 'N', 'P', 'F', 'C', '1m', '2m', '3m', '4m', '5m'],
    reachIndex: null,
    nakiIndex: [3, 7],
  },
};

export const InitialState: Story = {
  args: {
    sutehai: [],
    reachIndex: null,
    nakiIndex: [],
  },
};

export const MaxLength: Story = {
  args: {
    sutehai: [
      '1m',
      '2m',
      '3m',
      '4m',
      '5m',
      '6m',
      '7m',
      '8m',
      '9m',
      '1p',
      '2p',
      '3p',
      '4p',
      '5p',
      '6p',
      '7p',
      '8p',
      '9p',
      '1s',
      '2s',
      '3s',
      '4s',
      '5s',
      '6s',
      '7s',
      '8s',
      '9s',
    ],
    reachIndex: null,
    nakiIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
};
