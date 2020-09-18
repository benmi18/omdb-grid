import { createSelector } from '@ngrx/store';
import { State } from '@store/state';

export const getSeries = (state: State) => state.series;

export const selectSelectedSeries = createSelector(
  getSeries,
  series => series.selectedSeries
);

export const selectSeriesListItems = createSelector(
  getSeries,
  series => series.seriesListItems
);
