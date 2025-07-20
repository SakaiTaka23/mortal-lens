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
    hidden: false,
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
    hidden: false,
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
    hidden: false,
  },
};

export const ShimochaHidden: Story = {
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
    hidden: true,
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
    hidden: false,
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
    hidden: false,
  },
};

export const SelfWithReview: Story = {
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
      '1m',
      '2m',
      '3m',
      '4m',
    ],
    tsumo: '5m',
    position: 'self',
    review: {
      actualIndex: 0,
      details: [
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '1m' },
          prob: 1,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '2m' },
          prob: 0.5,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '3m' },
          prob: 0.5,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '4m' },
          prob: 0.5,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '5m' },
          prob: 0.5,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '6m' },
          prob: 0.5,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '7m' },
          prob: 0.5,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '8m' },
          prob: 0.5,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '9m' },
          prob: 0.5,
          QValue: 0,
        },
      ],
    },
    hidden: false,
  },
};
