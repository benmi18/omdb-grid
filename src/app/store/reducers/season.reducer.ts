import { seasonInitialState, SeasonState } from '@store/state/season.state';
import { createReducer, on, Action } from '@ngrx/store';
import { LoadSeasonDataSuccess } from "@store/actions/season.action";

const seasonReducer = createReducer(
  seasonInitialState,
  on(LoadSeasonDataSuccess, (state, { selectedSeason }) => ({ ...state, selectedSeason }))
);

export function reducer(state: SeasonState | undefined, action: Action) {
  return seasonReducer(state, action);
}
