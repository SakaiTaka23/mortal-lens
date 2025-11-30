import { Meta, StoryObj } from '@storybook/react';

import { ReviewMessage } from '@/review/ReviewMessage';

const meta = {
  component: ReviewMessage,
  title: 'ReviewMessage',
  tags: ['autodocs'],
} satisfies Meta<typeof ReviewMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ankan: Story = {
  args: {
    result: {
      type: 'ankan',
      actor: 0,
      consumed: ['1m', '1m', '1m', '1m'],
    },
  },
};

export const Ryukyoku: Story = {
  args: {
    result: {
      type: 'ryukyoku',
      deltas: [25000, 25000, 25000, 25000],
    },
  },
};
