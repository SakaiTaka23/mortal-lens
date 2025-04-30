import type { Meta, StoryObj } from '@storybook/react';

import { State } from './State';

const meta = {
  title: 'State',
  component: State,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof State>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleHand: Story = {
  args: {
    actor: 0,
    state: {
      tehai: [
        '1m',
        '2m',
        '3m',
        '4m',
        '5mr',
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
      fuuros: [],
    },
  },
};

export const WithPon: Story = {
  args: {
    actor: 1,
    state: {
      tehai: ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m', '1p'],
      tsumo: '1p',
      fuuros: [
        {
          type: 'pon',
          pai: '5mr',
          consumed: ['5m', '5m'],
          target: 0,
        },
      ],
    },
  },
};

export const WithMultipleFuuros: Story = {
  args: {
    actor: 2,
    state: {
      tehai: ['1m', '2m', '3m', '4m', '5m', '6m', '7m'],
      tsumo: null,
      fuuros: [
        {
          type: 'chi',
          target: 0,
          pai: '7p',
          consumed: ['5p', '6p'],
        },
        {
          type: 'pon',
          target: 1,
          pai: '9s',
          consumed: ['9s', '9s'],
        },
        {
          type: 'daiminkan',
          target: 3,
          pai: 'P',
          consumed: ['P', 'P', 'P'],
        },
      ],
    },
  },
};

export const ComplexHand: Story = {
  args: {
    actor: 3,
    state: {
      tehai: ['1m', '2m', '3m', '1p', '2p', '3p', '1s'],
      tsumo: null,
      fuuros: [
        {
          type: 'chi',
          target: 0,
          pai: '6m',
          consumed: ['4m', '5mr'],
        },
        {
          type: 'pon',
          target: 1,
          pai: 'W',
          consumed: ['W', 'W'],
        },
      ],
    },
  },
};
