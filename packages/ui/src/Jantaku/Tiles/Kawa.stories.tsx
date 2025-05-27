import type { Meta, StoryObj } from '@storybook/react';

import { Kawa } from './Kawa';

const meta = {
  title: 'Kawa',
  component: Kawa,
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
