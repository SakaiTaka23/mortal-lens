import { Meta, StoryObj } from '@storybook/react';

import { Tehai } from './Tehai';

const meta = {
  component: Tehai,
  title: 'Tehai',
  tags: ['autodocs'],
} satisfies Meta<typeof Tehai>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelfDefault: Story = {
  args: {
    tehai: [
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
    ],
    tsumo: null,
    position: 'self',
  },
};

export const SelfWithTsumo: Story = {
  args: {
    tehai: [
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
    ],
    tsumo: '5p',
    position: 'self',
  },
};

export const ShimochaDefault: Story = {
  args: {
    tehai: [
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
    ],
    tsumo: '5p',
    position: 'shimocha',
  },
};

export const ToimenDefault: Story = {
  args: {
    tehai: [
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
    ],
    tsumo: '5p',
    position: 'toimen',
  },
};

export const KamichaDefault: Story = {
  args: {
    tehai: [
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
    ],
    tsumo: '5p',
    position: 'kamicha',
  },
};
