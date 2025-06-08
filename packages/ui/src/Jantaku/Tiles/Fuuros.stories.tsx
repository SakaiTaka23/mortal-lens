import { KakanFuuro } from '@mjai/core';
import {
  Ankan as MjaiAnkan,
  Chi as MjaiChi,
  Daiminkan as MjaiDaiminkan,
  Pon as MjaiPon,
} from '@mjai/types';
import type { Meta, StoryObj } from '@storybook/react';

import { Fuuros } from './Fuuros';

const meta = {
  title: 'Fuuros',
  component: Fuuros,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Fuuros>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SinglePon: Story = {
  args: {
    fuuros: [
      {
        type: 'pon',
        actor: 0,
        target: 1,
        pai: '5mr',
        consumed: ['5m', '5m'],
      } as MjaiPon,
    ],
  },
};

export const SingleChi: Story = {
  args: {
    fuuros: [
      {
        type: 'chi',
        actor: 0,
        target: 1,
        pai: '7m',
        consumed: ['5m', '6m'],
      } as MjaiChi,
    ],
  },
};

export const SingleAnkan: Story = {
  args: {
    fuuros: [
      {
        type: 'ankan',
        actor: 0,
        consumed: ['P', 'P', 'P', 'P'],
      } as MjaiAnkan,
    ],
  },
};

export const SingleDaiminkan: Story = {
  args: {
    fuuros: [
      {
        type: 'daiminkan',
        actor: 0,
        target: 1,
        pai: '9s',
        consumed: ['9s', '9s', '9s'],
      } as MjaiDaiminkan,
    ],
  },
};

export const SingleKakan: Story = {
  args: {
    fuuros: [
      {
        type: 'kakan',
        actor: 0,
        pai: '1p',
        consumed: ['1p', '1p', '1p'],
        ponTarget: 1,
        ponPai: '1p',
        ponConsumed: ['1p', '1p'],
      } as KakanFuuro,
    ],
  },
};

export const MultipleFuuros: Story = {
  args: {
    fuuros: [
      {
        type: 'pon',
        actor: 0,
        target: 1,
        pai: '5mr',
        consumed: ['5m', '5m'],
      },
      {
        type: 'chi',
        actor: 0,
        target: 1,
        pai: '7m',
        consumed: ['5m', '6m'],
      },
      {
        type: 'daiminkan',
        actor: 0,
        target: 1,
        pai: '9s',
        consumed: ['9s', '9s', '9s'],
      },
    ],
  },
};
