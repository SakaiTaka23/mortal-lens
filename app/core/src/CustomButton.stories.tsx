import { Meta } from '@storybook/react';

import { CustomButton } from './CustomButton';
import oneJSON from './mock/1.json';

const meta = {
  component: CustomButton,
  title: 'Button',
  tags: ['autodocs'],
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = Meta<typeof CustomButton>;

console.log('oneJSON', oneJSON);

export const Default: Story = {
  args: {},
};
