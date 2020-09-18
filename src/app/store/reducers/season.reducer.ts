import { seasonInitialState, SeasonState } from '@store/state/season.state';
import { createReducer, on, Action } from '@ngrx/store';
import { LoadSeasonDataSuccess, SetSeasonListItems } from "@store/actions/season.action";

const seasonReducer = createReducer(
  seasonInitialState,
  on(LoadSeasonDataSuccess, (state, { selectedSeason }) => ({ ...state, selectedSeason })),
  on(SetSeasonListItems, (state, { seasonsListItems }) => ({ ...state, seasonsListItems })),
);

export function reducer(state: SeasonState | undefined, action: Action) {
  return seasonReducer(state, action);
}
