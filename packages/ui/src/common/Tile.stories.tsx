import type { Meta, StoryObj } from '@storybook/react';

import { Tile } from '@/common/Tile';

const meta = {
  component: Tile,
  title: 'Tile',
  tags: ['autodocs'],
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: '1m',
    naki: false,
    size: 'tehai',
    position: 'self',
  },
};

export const DoraMarker: Story = {
  args: {
    name: '1m',
    naki: false,
    size: 'doraMarker',
    position: 'self',
  },
};

export const SelfDefault: Story = {
  args: {
    name: '1m',
    naki: false,
    size: 'tehai',
    position: 'self',
  },
};

export const ShimochaDefault: Story = {
  args: {
    name: '1m',
    naki: false,
    size: 'tehai',
    position: 'shimocha',
  },
};

export const KamichaDefault: Story = {
  args: {
    name: '1m',
    naki: false,
    size: 'tehai',
    position: 'kamicha',
  },
};

export const ToimenDefault: Story = {
  args: {
    name: '1m',
    naki: false,
    size: 'tehai',
    position: 'toimen',
  },
};

export const SelfNaki: Story = {
  args: {
    name: '1m',
    naki: true,
    size: 'tehai',
    position: 'self',
  },
};

export const ShimochaNaki: Story = {
  args: {
    name: '1m',
    naki: true,
    size: 'tehai',
    position: 'shimocha',
  },
};

export const KamichaNaki: Story = {
  args: {
    name: '1m',
    naki: true,
    size: 'tehai',
    position: 'kamicha',
  },
};

export const ToimenNaki: Story = {
  args: {
    name: '1m',
    naki: true,
    size: 'tehai',
    position: 'toimen',
  },
};

export const Hidden: Story = {
  args: {
    name: '1m',
    naki: false,
    size: 'tehai',
    position: 'self',
    hidden: true,
  },
};

export const Dimmed: Story = {
  args: {
    name: '1m',
    naki: false,
    size: 'tehai',
    dimmed: true,
    position: 'self',
  },
};

export const Back: Story = {
  args: {
    name: 'back',
    naki: false,
    size: 'tehai',
    position: 'self',
  },
};

export const Error: Story = {
  args: {
    name: 'blank',
    naki: false,
    size: 'tehai',
    position: 'self',
  },
};

export const Highlight: Story = {
  args: {
    name: '1m',
    naki: false,
    size: 'tehai',
    highlight: true,
    position: 'self',
  },
};

export const HighlightDora: Story = {
  args: {
    name: '1m',
    naki: false,
    size: 'doraMarker',
    highlight: true,
    position: 'self',
  },
};
