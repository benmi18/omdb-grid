import { seriesInitialState, SeriesState } from '@store/state/series.state';
import { createReducer, on, Action } from '@ngrx/store';
import { LoadSeriesDataSuccess } from "@store/actions/series.action";

const seriesReducer = createReducer(
  seriesInitialState,
  on(LoadSeriesDataSuccess, (state, { selectedSeries }) => ({ ...state, selectedSeries }))
);

export function reducer(state: SeriesState | undefined, action: Action) {
  return seriesReducer(state, action);
}
