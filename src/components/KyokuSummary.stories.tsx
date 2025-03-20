import { Meta, StoryObj } from '@storybook/react';

import { KyokuDiff } from '@/types/output/RoundDiff';

import { KyokuSummary } from './KyokuSummary';

const meta = {
  component: KyokuSummary,
  title: 'KyokuSummary',
  tags: ['autodocs'],
} satisfies Meta<typeof KyokuSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: KyokuDiff = {
  diffLevel: 'critical',
  kyoku: 0,
  honba: 0,
  junme: 12,
  aiProbability: 20,
  tags: ['jihai&jihai'],
  shanten: 2,
};

export const Default: Story = {
  args: {
    kyokuDiffs: [defaultArgs],
  },
};
