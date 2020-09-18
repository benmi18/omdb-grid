import { createAction, props } from '@ngrx/store';
import { SeriesModel } from '@store/models';

export enum SeriesActionsType {
  LoadSeriesData = '[Series] Load series data',
  LoadSeriesDataFail = '[Series] Load series data fail',
  LoadSeriesDataSuccess = '[Series] Load series data success',
}

export const LoadSeriesData = createAction(
  SeriesActionsType.LoadSeriesData,
  props<{ seriesName: string }>()
);

export const LoadSeriesDataSuccess = createAction(
  SeriesActionsType.LoadSeriesDataSuccess,
  props<{ selectedSeries: SeriesModel }>()
);

export const LoadSeriesDataFail = createAction(
  SeriesActionsType.LoadSeriesDataFail,
  props<{ error: any }>()
);
