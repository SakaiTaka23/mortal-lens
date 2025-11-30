import { Meta, StoryObj } from '@storybook/react';

import { Overview } from '@/review/Overview';

const meta = {
  component: Overview,
  title: 'Overview',
  tags: ['autodocs'],
} satisfies Meta<typeof Overview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    review: {
      actual: {
        type: 'ankan',
        actor: 0,
        consumed: ['1m', '1m', '1m', '1m'],
      },
      expected: {
        type: 'ankan',
        actor: 0,
        consumed: ['1m', '1m', '1m', '1m'],
      },
    },
  },
};

export const OneTileAndNone: Story = {
  args: {
    review: {
      actual: {
        type: 'chi',
        actor: 0,
        target: 2,
        pai: '2m',
        consumed: ['1m', '3m'],
      },
      expected: {
        type: 'none',
      },
    },
  },
};

export const TwoTileAndNone: Story = {
  args: {
    review: {
      actual: {
        type: 'pon',
        actor: 0,
        target: 2,
        pai: '1m',
        consumed: ['1m', '1m'],
      },
      expected: {
        type: 'none',
      },
    },
  },
};

export const NoReview: Story = {
  args: {
    review: null,
  },
};
