import { Meta, StoryObj } from '@storybook/react';

import { RoundDiff } from '@/types/output/RoundDiff';

import { GameSummary } from './GameSummary';

const meta = {
  component: GameSummary,
  title: 'GameSummary',
  tags: ['autodocs'],
} satisfies Meta<typeof GameSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: RoundDiff = {
  kyoku: 1,
  honba: 1,
  decisionCount: 1,
  optimal: [5, 3],
  moderate: [7, 4],
  significant: [20, 10],
  critical: [20, 10],
};

export const Default: Story = {
  args: {
    roundDiffs: [defaultArgs],
  },
};
