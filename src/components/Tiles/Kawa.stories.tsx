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
    kawa: {
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
      riichi: null,
      naki: [],
    },
  },
};

export const WithRiichi: Story = {
  args: {
    kawa: {
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
      riichi: 4,
      naki: [],
    },
  },
};

export const WithNaki: Story = {
  args: {
    kawa: {
      sutehai: [
        'E',
        'S',
        'W',
        'N',
        'P',
        'F',
        'C',
        '1m',
        '2m',
        '3m',
        '4m',
        '5m',
      ],
      riichi: null,
      naki: [3, 7],
    },
  },
};
