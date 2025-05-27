import { Meta, StoryObj } from '@storybook/react';

import { Tehai } from './Tehai';

const meta = {
  component: Tehai,
  title: 'Tehai',
  tags: ['autodocs'],
} satisfies Meta<typeof Tehai>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tehai: [
      '8m',
      '1p',
      '4p',
      '5pr',
      '9p',
      '1s',
      '1s',
      '1s',
      '3s',
      '5s',
      '8s',
      'E',
      'F',
      '7m',
    ],
    tsumo: null,
  },
};

export const WithTsumo: Story = {
  args: {
    tehai: [
      '8m',
      '1p',
      '4p',
      '5pr',
      '9p',
      '1s',
      '1s',
      '1s',
      '3s',
      '5s',
      '8s',
      'E',
      'F',
      '7m',
    ],
    tsumo: '1m',
  },
};
