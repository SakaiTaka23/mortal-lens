import { Meta } from '@storybook/react';

import { Control } from './index';

const meta = {
  component: Control,
  title: 'Control',
  tags: ['autodocs'],
} satisfies Meta<typeof Control>;

export default meta;
type Story = Meta<typeof Control>;

const defaultFunrtion = () => {
  return;
};

export const Default: Story = {
  args: {
    prevKyokuOnClick: defaultFunrtion,
    nextKyokuOnClick: defaultFunrtion,
    prevErrorOnClick: defaultFunrtion,
    nextErrorOnClick: defaultFunrtion,
    prevChoiceOnClick: defaultFunrtion,
    nextChoiceOnClick: defaultFunrtion,
    prevOnClick: defaultFunrtion,
    nextOnClick: defaultFunrtion,
    optionsOnClick: defaultFunrtion,
    aboutOnClick: defaultFunrtion,
  },
};
