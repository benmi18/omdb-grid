import { createAction, props } from '@ngrx/store';
import { SeasonModel } from '@store/models';

export enum SeasonActionsType {
  SetSeasonsListItems = '[Season] Set seasons list items',
  LoadSeasonData = '[Season] Load season data',
  LoadSeasonDataFail = '[Season] Load season data fail',
  LoadSeasonDataSuccess = '[Season] Load season data success',
}

export const SetSeasonListItems = createAction(
  SeasonActionsType.SetSeasonsListItems,
  props<{ listItems: Array<string> }>()
);

export const LoadSeasonData = createAction(
  SeasonActionsType.LoadSeasonData,
  props<{ seasonNumber: string, seriesName: string }>()
);

export const LoadSeasonDataSuccess = createAction(
  SeasonActionsType.LoadSeasonDataSuccess,
  props<{ selectedSeason: SeasonModel }>()
);

export const LoadSeasonDataFail = createAction(
  SeasonActionsType.LoadSeasonDataFail,
  props<{ error: any }>()
);
