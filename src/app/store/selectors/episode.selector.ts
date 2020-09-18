import { createSelector } from '@ngrx/store';
import { State } from '@store/state';

export const getEpisode = (state: State) => state.episode;

export const selectSelectedEpisode = createSelector(
  getEpisode,
  episode => episode.selectedEpisode
);

export const selectEpisodesListItems = createSelector(
  getEpisode,
  episode => episode.episodesListItems
);
