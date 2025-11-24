import { Meta, StoryObj } from '@storybook/react';

import { ReviewWindow } from '@/review/ReviewWindow';

const meta = {
  component: ReviewWindow,
  title: 'ReviewWindow',
  tags: ['autodocs'],
} satisfies Meta<typeof ReviewWindow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    review: {
      actualIndex: 2,
      details: [
        {
          action: {
            type: 'dahai',
            actor: 1,
            pai: 'F',
            tsumogiri: false,
          },
          prob: 0.8168066,
          QValue: 0.0028574169,
        },
        {
          action: {
            type: 'dahai',
            actor: 1,
            pai: 'S',
            tsumogiri: false,
          },
          prob: 0.15809359,
          QValue: -0.16136411,
        },
        {
          action: {
            type: 'dahai',
            actor: 1,
            pai: '4m',
            tsumogiri: false,
          },
          prob: 0.025068536,
          QValue: -0.34552148,
        },
        {
          action: {
            type: 'dahai',
            actor: 1,
            pai: '6m',
            tsumogiri: false,
          },
          prob: 0.000027277456,
          QValue: -1.0278523,
        },
        {
          action: {
            type: 'dahai',
            actor: 1,
            pai: 'P',
            tsumogiri: false,
          },
          prob: 0.0000015097776,
          QValue: -1.317262,
        },
        {
          action: {
            type: 'dahai',
            actor: 1,
            pai: '7p',
            tsumogiri: true,
          },
          prob: 9.365227e-7,
          QValue: -1.3650165,
        },
        {
          action: {
            type: 'dahai',
            actor: 1,
            pai: '2p',
            tsumogiri: false,
          },
          prob: 6.60761e-7,
          QValue: -1.3998946,
        },
        {
          action: {
            type: 'dahai',
            actor: 1,
            pai: '4p',
            tsumogiri: false,
          },
          prob: 3.4647212e-7,
          QValue: -1.4644536,
        },
        {
          action: {
            type: 'dahai',
            actor: 1,
            pai: '8p',
            tsumogiri: false,
          },
          prob: 3.0532613e-7,
          QValue: -1.4770958,
        },
        {
          action: {
            type: 'dahai',
            actor: 1,
            pai: '6p',
            tsumogiri: false,
          },
          prob: 1.1993401e-7,
          QValue: -1.5705397,
        },
      ],
      diffLevel: 'Critical',
    },
  },
};

export const CorrectDahai: Story = {
  args: {
    review: {
      actualIndex: 0,
      details: [
        {
          action: {
            type: 'dahai',
            actor: 1,
            pai: 'F',
            tsumogiri: false,
          },
          prob: 1,
          QValue: 0.0028574169,
        },
        {
          action: {
            type: 'dahai',
            actor: 1,
            pai: 'S',
            tsumogiri: false,
          },
          prob: 0,
          QValue: -0.16136411,
        },
      ],
      diffLevel: 'None',
    },
  },
};

export const CorrectWithNaki: Story = {
  args: {
    review: {
      actualIndex: 0,
      details: [
        {
          action: {
            type: 'dahai',
            actor: 1,
            pai: 'F',
            tsumogiri: false,
          },
          prob: 0.99,
          QValue: 0.0028574169,
        },
        {
          action: {
            type: 'dahai',
            actor: 1,
            pai: 'S',
            tsumogiri: false,
          },
          prob: 0,
          QValue: -0.16136411,
        },
        {
          action: {
            type: 'ankan',
            actor: 1,
            consumed: ['1m', '1m', '1m', '1m'],
          },
          prob: 0,
          QValue: 0,
        },
      ],
      diffLevel: 'None',
    },
  },
};

export const IncorrectNaki: Story = {
  args: {
    review: {
      actualIndex: 1,
      details: [
        {
          action: {
            type: 'pon',
            actor: 1,
            target: 2,
            pai: 'F',
            consumed: ['F', 'F'],
          },
          prob: 1,
          QValue: 0.0028574169,
        },
        {
          action: {
            type: 'none',
          },
          prob: 0,
          QValue: -0.16136411,
        },
      ],
      diffLevel: 'Critical',
    },
  },
};

export const NoReview: Story = {
  args: {
    review: null,
  },
};
