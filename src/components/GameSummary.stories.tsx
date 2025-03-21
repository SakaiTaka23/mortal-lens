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

const defaultArgs: RoundDiff[] = [
  {
    kyoku: 0,
    honba: 0,
    decisionCount: 16,
    optimal: [1, 6.25],
    moderate: [2, 12.5],
    significant: [2, 12.5],
    critical: [0, 0],
  },
  {
    kyoku: 1,
    honba: 1,
    decisionCount: 13,
    optimal: [1, 7.69],
    moderate: [4, 30.77],
    significant: [1, 7.69],
    critical: [0, 0],
  },
  {
    kyoku: 2,
    honba: 0,
    decisionCount: 20,
    optimal: [1, 5],
    moderate: [0, 0],
    significant: [4, 20],
    critical: [1, 5],
  },
  {
    kyoku: 3,
    honba: 0,
    decisionCount: 17,
    optimal: [1, 5.88],
    moderate: [1, 5.88],
    significant: [2, 11.76],
    critical: [0, 0],
  },
  {
    kyoku: 4,
    honba: 0,
    decisionCount: 12,
    optimal: [3, 25],
    moderate: [0, 0],
    significant: [2, 16.67],
    critical: [0, 0],
  },
  {
    kyoku: 5,
    honba: 0,
    decisionCount: 13,
    optimal: [1, 7.69],
    moderate: [2, 15.38],
    significant: [0, 0],
    critical: [0, 0],
  },
  {
    kyoku: 6,
    honba: 0,
    decisionCount: 18,
    optimal: [1, 5.56],
    moderate: [2, 11.11],
    significant: [0, 0],
    critical: [0, 0],
  },
  {
    kyoku: 7,
    honba: 0,
    decisionCount: 14,
    optimal: [1, 7.14],
    moderate: [1, 7.14],
    significant: [0, 0],
    critical: [0, 0],
  },
];

export const Default: Story = {
  args: {
    roundDiffs: defaultArgs,
  },
};
