import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { OmbdService } from '@services/ombd.service';

import { SeriesActionsType } from "@store/actions";
import { SeriesModel } from '@models';


@Injectable()
export class SeriesEffects {
  constructor(
    private actions$: Actions,
    private omdbService: OmbdService
  ) { }

  loadSeriesA$ = createEffect(() => this.actions$.pipe(
    ofType(SeriesActionsType.LoadSeriesData),
    mergeMap(({ seriesName }) => this.omdbService.getSelectedSeries(seriesName)
      .pipe(
        map((selectedSeries: SeriesModel) => ({ type: SeriesActionsType.LoadSeriesDataSuccess, selectedSeries })),
        catchError(() => EMPTY)
      )
    )
  ));

}
