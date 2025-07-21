import { Meta, StoryObj } from '@storybook/react';

import { ScoreOverview } from '@/Jantaku/JantakuCenter/ScoreOverview';

const meta = {
  component: ScoreOverview,
  title: 'ScoreOverview',
  tags: ['autodocs'],
} satisfies Meta<typeof ScoreOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    overview: [
      {
        bakaze: 'E',
        kyoku: 1,
        honba: 0,
        scores: [25000, 25000, 25000, 25000],
        deltas: [-1500, 500, -1500, 500],
        kyotaku: 2000,
      },
      {
        bakaze: 'E',
        kyoku: 2,
        honba: 1,
        scores: [23500, 25500, 23500, 25500],
        deltas: [4300, 0, -2300, 0],
        kyotaku: 0,
      },
      {
        bakaze: 'E',
        kyoku: 3,
        honba: 0,
        scores: [27800, 25500, 21200, 25500],
        deltas: [0, -5200, 0, 5200],
        kyotaku: 0,
      },
      {
        bakaze: 'E',
        kyoku: 4,
        honba: 0,
        scores: [27800, 20300, 21200, 30700],
        deltas: [-2000, 8000, -2000, -4000],
        kyotaku: 0,
      },
      {
        bakaze: 'S',
        kyoku: 1,
        honba: 0,
        scores: [25800, 28300, 19200, 26700],
        deltas: [-8000, 0, 9000, -1000],
        kyotaku: 0,
      },
      {
        bakaze: 'S',
        kyoku: 2,
        honba: 0,
        scores: [17800, 28300, 28200, 25700],
        deltas: [0, -5200, 5200, 0],
        kyotaku: 0,
      },
      {
        bakaze: 'S',
        kyoku: 3,
        honba: 0,
        scores: [17800, 23100, 33400, 25700],
        deltas: [0, 0, -3900, 3900],
        kyotaku: 0,
      },
      {
        bakaze: 'S',
        kyoku: 4,
        honba: 0,
        scores: [17800, 23100, 29500, 29600],
        deltas: [-700, -1700, -700, 3100],
        kyotaku: 0,
      },
      {
        bakaze: 'S',
        kyoku: 4,
        honba: 0,
        scores: [17100, 21400, 28800, 32700],
        deltas: [0, 0, 0, 0],
        kyotaku: 0,
      },
    ],
    jumpKyoku: (_kyokuIndex: number) => {
      return;
    },
    playerID: 2,
  },
};
