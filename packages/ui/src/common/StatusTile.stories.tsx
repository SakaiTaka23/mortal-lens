import { Meta, StoryObj } from '@storybook/react';

import { StatusTile } from '@/common/StatusTile';

const meta = {
  title: 'StatusTile',
  component: StatusTile,
  tags: ['autodocs'],
} satisfies Meta<typeof StatusTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    possibility: 30,
    tileProps: {
      name: '1m',
      naki: false,
      position: 'self',
    },
  },
};

export const Max: Story = {
  args: {
    possibility: 100.0,
    tileProps: {
      name: '1m',
      naki: false,
      position: 'self',
    },
  },
};

export const Min: Story = {
  args: {
    possibility: 0.0,
    tileProps: {
      name: '1m',
      naki: false,
      position: 'self',
    },
  },
};

export const VerySmall: Story = {
  args: {
    possibility: 0.01,
    tileProps: {
      name: '1m',
      naki: false,
      position: 'self',
    },
  },
};

export const HighLighted: Story = {
  args: {
    possibility: 50.0,
    tileProps: {
      name: '1m',
      naki: false,
      position: 'self',
      highlight: true,
    },
  },
};
