import type { Meta, StoryObj } from '@storybook/react';

import {
  AnkanFuuro,
  ChiFuuro,
  DaiminkanFuuro,
  KakanFuuro,
  PonFuuro,
} from '@/types/input/review/kyokus/entry/State';

import { Fuuros } from './Fuuros';

const meta = {
  title: 'Fuuros',
  component: Fuuros,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Fuuros>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SinglePon: Story = {
  args: {
    actor: 0,
    fuuros: [
      {
        type: 'pon',
        pai: '5mr',
        consumed: ['5m', '5m'],
      } as PonFuuro,
    ],
  },
};

export const SingleChi: Story = {
  args: {
    actor: 0,
    fuuros: [
      {
        type: 'chi',
        pai: '7m',
        consumed: ['5m', '6m'],
      } as ChiFuuro,
    ],
  },
};

export const SingleAnkan: Story = {
  args: {
    actor: 0,
    fuuros: [
      {
        type: 'ankan',
        pai: 'P',
        consumed: ['P', 'P', 'P', 'P'],
      } as AnkanFuuro,
    ],
  },
};

export const SingleDaiminkan: Story = {
  args: {
    actor: 0,
    fuuros: [
      {
        type: 'daiminkan',
        pai: '9s',
        consumed: ['9s', '9s', '9s'],
      } as DaiminkanFuuro,
    ],
  },
};

export const SingleKakan: Story = {
  args: {
    actor: 0,
    fuuros: [
      {
        type: 'kakan',
        pai: '1p',
        consumed: ['1p', '1p'],
        previousPonPai: '1p',
        previousPonTarget: 1,
      } as KakanFuuro,
    ],
  },
};

export const MultipleFuuros: Story = {
  args: {
    actor: 0,
    fuuros: [
      {
        type: 'pon',
        pai: '5mr',
        consumed: ['5m', '5m'],
      } as PonFuuro,
      {
        type: 'chi',
        pai: '7m',
        consumed: ['5m', '6m'],
      } as ChiFuuro,
      {
        type: 'daiminkan',
        pai: '9s',
        consumed: ['9s', '9s', '9s'],
      } as DaiminkanFuuro,
    ],
  },
};
