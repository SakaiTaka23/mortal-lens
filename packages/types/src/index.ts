import { Event, PlayerID } from '@mjai/types';

import { Review } from './Review';

export interface Input {
  engine: string;
  gameLength: string;
  loadingTime: string;
  reviewTime: string;
  showRating: boolean;
  version: string;
  review: Review;
  playerID: PlayerID;
  mjaiLog: Event[];
  lang: string;
}
