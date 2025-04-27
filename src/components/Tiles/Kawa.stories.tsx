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
    tiles: [
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
  },
};

export const WithMultipleRows: Story = {
  args: {
    tiles: [
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
  },
};

export const WithHonors: Story = {
  args: {
    tiles: ['E', 'S', 'W', 'N', 'P', 'F', 'C', '1m', '2m', '3m', '4m', '5m'],
  },
};
