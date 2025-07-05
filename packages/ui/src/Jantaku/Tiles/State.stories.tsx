import { HandState } from '@mjai/core';
import type { Meta, StoryObj } from '@storybook/react';

import { State } from './State';

const meta = {
  title: 'State',
  component: State,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof State>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleHand: Story = {
  args: {
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
    position: 'self',
  },
};

export const WithPon: Story = {
  args: {
    tehai: ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m', '1p'],
    tsumo: '1p',
    fuuros: [
      {
        type: 'pon',
        actor: 0,
        pai: '5mr',
        consumed: ['5m', '5m'],
        target: 1,
      },
    ],
    position: 'self',
  },
};

export const WithMultipleFuuros: Story = {
  args: {
    tehai: ['1m', '2m', '3m', '4m', '5m', '6m', '7m'],
    tsumo: null,
    fuuros: [
      {
        type: 'chi',
        target: 1,
        actor: 0,
        pai: '7p',
        consumed: ['5p', '6p'],
      },
      {
        type: 'pon',
        target: 1,
        actor: 0,
        pai: '9s',
        consumed: ['9s', '9s'],
      },
      {
        type: 'daiminkan',
        actor: 0,
        target: 3,
        pai: 'P',
        consumed: ['P', 'P', 'P'],
      },
    ],
    position: 'self',
  },
};

export const MaxSize: Story = {
  args: {
    tehai: ['7m'],
    tsumo: '7m',
    fuuros: [
      {
        type: 'chi',
        target: 1,
        actor: 0,
        pai: '7p',
        consumed: ['5p', '6p'],
      },
      {
        type: 'pon',
        target: 1,
        actor: 0,
        pai: '9s',
        consumed: ['9s', '9s'],
      },
      {
        type: 'daiminkan',
        actor: 0,
        target: 3,
        pai: 'P',
        consumed: ['P', 'P', 'P'],
      },
      {
        type: 'chi',
        target: 1,
        actor: 0,
        pai: '2m',
        consumed: ['1m', '3m'],
      },
      {
        type: 'chi',
        target: 1,
        actor: 0,
        pai: '4m',
        consumed: ['5m', '6m'],
      },
    ],
    position: 'self',
  },
};

export const ComplexHand: Story = {
  args: {
    tehai: ['1m', '2m', '3m', '1p', '2p', '3p', '1s'],
    tsumo: null,
    fuuros: [
      {
        type: 'chi',
        target: 1,
        actor: 0,
        pai: '6m',
        consumed: ['4m', '5mr'],
      },
      {
        type: 'pon',
        target: 1,
        actor: 0,
        pai: 'W',
        consumed: ['W', 'W'],
      },
    ],
    position: 'self',
  },
};

const defaultArgs = {
  tehai: ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m', '1p'],
  tsumo: '1p',
  fuuros: [
    {
      type: 'pon',
      actor: 0,
      pai: '5mr',
      consumed: ['5m', '5m'],
      target: 1,
    },
  ],
} as HandState;

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

export const WithPonAndReview: Story = {
  args: {
    tehai: ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m', '1p'],
    tsumo: '1p',
    fuuros: [
      {
        type: 'pon',
        actor: 0,
        pai: '5mr',
        consumed: ['5m', '5m'],
        target: 1,
      },
    ],
    position: 'self',
    review: {
      actualIndex: 0,
      details: [
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '1m' },
          prob: 100,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '2m' },
          prob: 50,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '3m' },
          prob: 50,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '4m' },
          prob: 50,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '5m' },
          prob: 50,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '6m' },
          prob: 50,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '7m' },
          prob: 50,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '8m' },
          prob: 50,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '9m' },
          prob: 50,
          QValue: 0,
        },
        {
          action: { type: 'dahai', actor: 0, tsumogiri: true, pai: '1p' },
          prob: 50,
          QValue: 0,
        },
      ],
    },
  },
};
