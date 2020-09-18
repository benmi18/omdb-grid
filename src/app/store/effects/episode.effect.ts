import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { OmbdService } from '@services/ombd.service';

import { EpisodeActionsType } from "@store/actions";
import { EpisodeModel } from '@models';


@Injectable()
export class EpisodeEffects {
  constructor(
    private actions$: Actions,
    private omdbService: OmbdService
  ) { }

  loadSeriesA$ = createEffect(() => this.actions$.pipe(
    ofType(EpisodeActionsType.LoadEpisodeData),
    mergeMap(({ episodeNumber, seasonNumber, seriesName }) => this.omdbService.getSelectedEpisode(seasonNumber, seriesName, episodeNumber)
      .pipe(
        map((selectedEpisode: EpisodeModel) => ({ type: EpisodeActionsType.LoadEpisodeDataSuccess, selectedEpisode: selectedEpisode })),
        catchError(() => EMPTY)
      )
    )
  ));

}
