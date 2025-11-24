import { EvaluationDetail } from '@mortal-lens/types';
import { Meta, StoryObj } from '@storybook/react';

import { OverviewDetail } from '@/review/OverviewDetail';

const meta = {
  component: OverviewDetail,
  title: 'OverviewDetail',
  tags: ['autodocs'],
} satisfies Meta<typeof OverviewDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData: EvaluationDetail[] = [
  {
    action: { type: 'ankan', actor: 0, consumed: ['1m', '1m', '1m', '1m'] },
    QValue: -0.044795454,
    prob: 0.7110758,
  },
  {
    action: {
      type: 'chi',
      actor: 1,
      target: 3,
      pai: '4m',
      consumed: ['2m', '3m'],
    },
    QValue: -0.2161197,
    prob: 0.12819295,
  },
  {
    action: {
      type: 'pon',
      actor: 2,
      target: 1,
      pai: '5p',
      consumed: ['5p', '5p'],
    },
    QValue: -0.2291053,
    prob: 0.112581864,
  },
  {
    action: { type: 'dahai', actor: 3, pai: '9s', tsumogiri: true },
    QValue: -0.31504124,
    prob: 0.0476709,
  },
  {
    action: {
      type: 'daiminkan',
      actor: 0,
      target: 2,
      pai: '7m',
      consumed: ['7m', '7m', '7m'],
    },
    QValue: -0.80172265,
    prob: 0.00036696362,
  },
  {
    action: {
      type: 'kakan',
      actor: 1,
      pai: '3p',
      consumed: ['3p', '3p', '3p'],
    },
    QValue: -1.0375156,
    prob: 0.00003472058,
  },
  {
    action: { type: 'hora', actor: 2, target: 1 },
    QValue: -1.0922747,
    prob: 0.000020080362,
  },
  {
    action: { type: 'none' },
    QValue: -1.1031547,
    prob: 0.000018010274,
  },
  {
    action: { type: 'reach', actor: 3 },
    QValue: -1.1262641,
    prob: 0.000014294116,
  },
  {
    action: { type: 'ryukyoku', deltas: [25000, 25000, 25000, 25000] },
    QValue: -1.1306174,
    prob: 0.0000136852095,
  },
];

export const Default: Story = {
  args: {
    detail: sampleData.slice(0, 2),
  },
};

export const AllDetail: Story = {
  args: {
    detail: sampleData,
  },
};

export const NoReview: Story = {
  args: {
    detail: null,
  },
};
