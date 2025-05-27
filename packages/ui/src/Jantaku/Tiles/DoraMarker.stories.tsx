import { Meta, StoryObj } from '@storybook/react';

import { DoraMarker } from './DoraMarker';

const meta = {
  component: DoraMarker,
  title: 'DoraMarker',
  tags: ['autodocs'],
} satisfies Meta<typeof DoraMarker>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: ['1m'],
};

export const Multiple: Story = {
  args: ['1m', '2m'],
};
