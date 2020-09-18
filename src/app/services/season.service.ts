import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '@store/state';
import { SetSeasonListItems } from '../store/actions';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor(private store: Store<State>,) { }

  public mapSeasonsListItems(totalNumberOfSeasons: number): void {
    const seasonsListItems: Array<string> = [];
    for (let i = 1; i <= totalNumberOfSeasons; i++) seasonsListItems.push(`Season ${i}`);
    this.store.dispatch(SetSeasonListItems({ seasonsListItems }));
  }
}
