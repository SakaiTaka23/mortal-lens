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
    position: 'self',
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
    position: 'self',
  },
};

export const WithNaki: Story = {
  args: {
    sutehai: ['E', 'S', 'W', 'N', 'P', 'F', 'C', '1m', '2m', '3m', '4m', '5m'],
    reachIndex: null,
    nakiIndex: [3, 7],
    position: 'self',
  },
};

export const InitialState: Story = {
  args: {
    sutehai: [],
    reachIndex: null,
    nakiIndex: [],
    position: 'self',
  },
};

export const MaxLengthSelf: Story = {
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
    ],
    reachIndex: null,
    nakiIndex: [0, 1, 2],
    position: 'self',
  },
};

export const MaxLengthShimocha: Story = {
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
    ],
    reachIndex: null,
    nakiIndex: [0, 1, 2],
    position: 'shimocha',
  },
};

export const MaxLengthToimen: Story = {
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
    ],
    reachIndex: null,
    nakiIndex: [0, 1, 2],
    position: 'toimen',
  },
};

export const MaxLengthKamicha: Story = {
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
    ],
    reachIndex: null,
    nakiIndex: [0, 1, 2],
    position: 'kamicha',
  },
};
