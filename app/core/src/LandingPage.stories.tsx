import { Input } from '@mortal-lens/types';
import { Meta } from '@storybook/react';

import { LandingPage } from '@/index';

import one from './mock/1.json';

const meta = {
  component: LandingPage,
  title: 'Main',
  tags: ['autodocs'],
} satisfies Meta<typeof LandingPage>;

export default meta;
type Story = Meta<typeof LandingPage>;

export const OneJson: Story = {
  args: {
    input: one as unknown as Input,
  },
};
