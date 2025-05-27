import type { Meta, StoryObj } from '@storybook/react';

import { Tile } from './Tile';

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
  },
};

export const DoraMarker: Story = {
  args: {
    name: '1m',
    naki: false,
    size: 'doraMarker',
  },
};

export const Naki: Story = {
  args: {
    name: '1m',
    naki: true,
    size: 'tehai',
  },
};

export const Dimmed: Story = {
  args: {
    name: '1m',
    naki: false,
    size: 'tehai',
    dimmed: true,
  },
};

export const Back: Story = {
  args: {
    name: 'back',
    naki: false,
    size: 'tehai',
  },
};

export const Error: Story = {
  args: {
    name: 'blank',
    naki: false,
    size: 'tehai',
  },
};
