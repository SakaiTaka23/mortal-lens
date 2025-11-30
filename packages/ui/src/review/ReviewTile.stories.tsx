import { Meta, StoryObj } from '@storybook/react';

import { ReviewTile } from './ReviewTile';

const meta = {
  component: ReviewTile,
  title: 'ReviewTile',
  tags: ['autodocs'],
} satisfies Meta<typeof ReviewTile>;

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

export const ChiPon: Story = {
  args: {
    result: {
      type: 'chi',
      actor: 0,
      target: 3,
      pai: '2m',
      consumed: ['1m', '3m'],
    },
  },
};

export const OneTile: Story = {
  args: {
    result: {
      type: 'dahai',
      actor: 0,
      pai: '1m',
      tsumogiri: false,
    },
  },
};

export const Empty: Story = {
  args: {
    result: {
      type: 'none',
    },
  },
};
