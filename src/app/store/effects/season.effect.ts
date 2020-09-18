import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { OmbdService } from '@services/ombd.service';

import { SeasonActionsType } from "@store/actions";
import { SeasonModel } from '@models';


@Injectable()
export class SeasonEffects {
  constructor(
    private actions$: Actions,
    private omdbService: OmbdService
  ) { }

  loadSeriesA$ = createEffect(() => this.actions$.pipe(
    ofType(SeasonActionsType.LoadSeasonData),
    mergeMap(({ seasonNumber, seriesName }) => this.omdbService.getSelectedSeason(seasonNumber, seriesName)
      .pipe(
        map((selectedSeason: SeasonModel) => ({ type: SeasonActionsType.LoadSeasonDataSuccess, selectedSeason })),
        catchError(() => EMPTY)
      )
    )
  ));

}
