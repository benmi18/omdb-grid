import { Action, createAction, props } from '@ngrx/store';
import { EpisodeModel } from '@store/models';

export enum EpisodeActionsType {
  LoadEpisodeData = '[Episode] Load episode data',
  ClearEpisodeData = '[Episode] Clear episode data',
  LoadEpisodeDataFail = '[Episode] Load episode data fail',
  LoadEpisodeDataSuccess = '[Episode] Load episode data success',
}

export const LoadEpisodeData = createAction(
  EpisodeActionsType.LoadEpisodeData,
  props<{ episodeNumber: string, seasonNumber: string, seriesName: string }>()
);

export const ClearEpisodeData = createAction(
  EpisodeActionsType.ClearEpisodeData,
);

export const LoadEpisodeDataSuccess = createAction(
  EpisodeActionsType.LoadEpisodeDataSuccess,
  props<{ selectedEpisode: EpisodeModel }>()
);

export const LoadEpisodeDataFail = createAction(
  EpisodeActionsType.LoadEpisodeDataFail,
  props<{ error: any }>()
);
