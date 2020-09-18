import { createSelector } from '@ngrx/store';
import { State } from '@store/state';

export const getSeason = (state: State) => state.season;

export const selectSelectedSeason = createSelector(
  getSeason,
  season => season.selectedSeason
);

export const selectSeasonsListItems = createSelector(
  getSeason,
  season => season.seasonsListItems
);
