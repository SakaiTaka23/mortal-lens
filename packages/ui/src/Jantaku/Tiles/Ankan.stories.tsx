import { Ankan as MjaiAnkan } from '@mjai/types';
import { Meta, StoryObj } from '@storybook/react';

import { Ankan } from './Ankan';

const meta = {
  component: Ankan,
  title: 'Ankan',
  tags: ['autodocs'],
} satisfies Meta<typeof Ankan>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  type: 'ankan',
  actor: 0,
  consumed: ['1m', '1m', '1m', '1m'],
} as MjaiAnkan;

export const Default: Story = {
  args: defaultArgs,
};
