import {
  DiffOverview,
  DiffTag,
  DiffTagType,
  ReviewState,
} from '@mortal-lens/types';
import { GameState, PlayerID } from 'mjai-ts';

export interface TagStateProcessorState {
  getTags(
    gameState: GameState,
    reviewState: ReviewState | undefined,
    playerID: PlayerID,
  ): DiffOverview | undefined;
}

export const TagStateProcessor = (): TagStateProcessorState => {
  const getTags = (
    gameState: GameState,
    reviewState: ReviewState | undefined,
    playerID: PlayerID,
  ): DiffOverview | undefined => {
    if (!reviewState || reviewState.diffLevel === 'None') {
      return undefined;
    }
    const tags: DiffTagType[] = [];
    tags.push(...balanceTags(reviewState));
    tags.push(...decisionTags(reviewState));
    tags.push(...statusTags(gameState, playerID));

    return {
      kyoku: gameState.KyokuState.kyoku(),
      honba: gameState.KyokuState.honba(),
      diffLevel: reviewState.diffLevel,
      junme: gameState.KyokuState.junme(),
      aiProbability: reviewState.details[reviewState.actualIndex].prob,
      tags,
      shanten: reviewState.shanten,
    } as DiffOverview;
  };

  const balanceTags = (reviewState: ReviewState): DiffTagType[] => {
    if (
      reviewState.actual.type !== 'dahai' ||
      reviewState.expected.type !== 'dahai'
    ) {
      return [];
    }

    const tags: DiffTagType[] = [];

    const actualTileType = reviewState.actual.pai;
    const expectedTileType = reviewState.expected.pai;

    const actualIsSuhai =
      actualTileType.endsWith('m') ||
      actualTileType.endsWith('p') ||
      actualTileType.endsWith('s');
    const expectedIsSuhai =
      expectedTileType.endsWith('m') ||
      expectedTileType.endsWith('p') ||
      expectedTileType.endsWith('s');

    if (actualIsSuhai && expectedIsSuhai) {
      tags.push(DiffTag.SuhaiSuhai);
    } else if (!actualIsSuhai && !expectedIsSuhai) {
      tags.push(DiffTag.JihaiJihai);
    } else {
      tags.push(DiffTag.JihaiSuhai);
    }

    return tags;
  };

  const decisionTags = (reviewState: ReviewState): DiffTagType[] => {
    const tags: DiffTagType[] = [];
    const nakiTypes = ['ankan', 'chi', 'daiminkan', 'kakan', 'pon'];
    const riichiTypes = ['reach', 'hora', 'ryukyoku'];

    const actualType = reviewState.actual.type;
    const expectedType = reviewState.expected.type;

    if (nakiTypes.includes(actualType) || nakiTypes.includes(expectedType)) {
      tags.push(DiffTag.Naki);
    } else if (
      riichiTypes.includes(actualType) ||
      riichiTypes.includes(expectedType)
    ) {
      tags.push(DiffTag.Riichi);
    }

    return tags;
  };

  const statusTags = (
    gameState: GameState,
    playerID: PlayerID,
  ): DiffTagType[] => {
    const tags: DiffTagType[] = [];
    const fuuros = gameState.TehaiState.fuuros();
    const playerFuuros = fuuros[playerID];
    if (playerFuuros.length > 0) {
      tags.push(DiffTag.MyFuuro);
    }
    fuuros.forEach((fuuro, id) => {
      if (id !== playerID && fuuro.length >= 2) {
        tags.push(DiffTag.FuuroOp);
        return;
      }
    });

    gameState.KyokuState.reachPlayers().forEach((id) => {
      if (id !== playerID) {
        tags.push(DiffTag.RiichiOp);
        return;
      }
    });

    return tags;
  };

  return {
    getTags,
  };
};
