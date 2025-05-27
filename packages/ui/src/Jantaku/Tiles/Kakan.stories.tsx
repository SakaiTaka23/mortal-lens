import { Kakan as MjaiKakan } from '@mjai/types';
import type { Meta, StoryObj } from '@storybook/react';

import { Kakan } from './Kakan';

const meta = {
  component: Kakan,
  title: 'Kakan',
  tags: ['autodocs'],
} satisfies Meta<typeof Kakan>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  type: 'kakan',
  actor: 0,
  pai: '1m',
  consumed: ['1m', '1m', '1m'],
} as MjaiKakan;

export const Default: Story = {
  args: defaultArgs,
};
