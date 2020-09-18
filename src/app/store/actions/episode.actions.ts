import { Action, createAction, props } from '@ngrx/store';
import { EpisodeModel } from '@store/models';

export enum EpisodeActionsType {
  SetEpisodesListItems = '[Episode] Set episodes list items',
  LoadEpisodeData = '[Episode] Load episode data',
  LoadEpisodeDataFail = '[Episode] Load episode data fail',
  LoadEpisodeDataSuccess = '[Episode] Load episode data success',
}

export const SetEpisodeListItems = createAction(
  EpisodeActionsType.SetEpisodesListItems,
  props<{ listItems: Array<string> }>()
);

export const LoadEpisodeData = createAction(
  EpisodeActionsType.LoadEpisodeData,
  props<{ episodeNumber: string, seasonNumber: string, seriesName: string }>()
);

export const LoadEpisodeDataSuccess = createAction(
  EpisodeActionsType.LoadEpisodeDataSuccess,
  props<{ selectedEpisode: EpisodeModel }>()
);

export const LoadEpisodeDataFail = createAction(
  EpisodeActionsType.LoadEpisodeDataFail,
  props<{ error: any }>()
);
