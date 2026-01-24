import { Meta, StoryObj } from '@storybook/react';

import { Control } from './index';

const meta = {
  component: Control,
  title: 'Control',
  tags: ['autodocs'],
} satisfies Meta<typeof Control>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultFunrtion = () => {
  return;
};

export const Default: Story = {
  args: {
    meta: {
      engine: 'Mortal',
      gameLength: 'Hanchan',
      loadingTime: '0s',
      reviewTime: '2s 204ms',
      showRating: false,
      version: '1.5.10',
      lang: 'ja',
    },
    reviewMeta: {
      totalReviewed: 123,
      totalMatches: 89,
      rating: 0.8791772145032938,
      temperature: 0.1,
      modelTag: '4.1b',
    },
    isDarkMode: false,
    prevKyokuOnClick: defaultFunrtion,
    nextKyokuOnClick: defaultFunrtion,
    prevErrorOnClick: defaultFunrtion,
    nextErrorOnClick: defaultFunrtion,
    prevChoiceOnClick: defaultFunrtion,
    nextChoiceOnClick: defaultFunrtion,
    prevOnClick: defaultFunrtion,
    nextOnClick: defaultFunrtion,
    toggleHidden: defaultFunrtion,
    toggleDarkMode: defaultFunrtion,
  },
};
