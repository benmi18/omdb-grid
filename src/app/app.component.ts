import { selectSeriesListItems, selectSeasonsListItems, selectEpisodesListItems } from '@store/selectors';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { State } from '@store/state';
import { DropdownType } from '@store/enums';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly onDestroy$ = new Subject<void>();
  public readonly DROP_DOWN_TYPE = DropdownType;

  public seriesListItems: Array<string> = [];
  public seasonsListItems: Array<string> = [];
  public episodesListItems: Array<string> = [];

  constructor(
    private store: Store<State>,

  ) { }

  ngOnInit() {
    this.initiateDropdownData();
  }

  private initiateDropdownData() {
    combineLatest(
      this.store.pipe(select(selectSeriesListItems)),
      // this.store.pipe(select(selectSeasonsListItems)),
      // this.store.pipe(select(selectEpisodesListItems)),
    )
      .pipe(
        tap(([seriesList]) => {
          this.seriesListItems = seriesList;
          // this.seasonsListItems = seasonsList;
          // this.episodesListItems = episodesList;
        }),
        takeUntil(this.onDestroy$)
      ).subscribe();
  }

  public onSelectionChange(seriesName, name: string) {
    switch (name) {
      case this.DROP_DOWN_TYPE.SERIES:
        // this.store.dispatch(LoadSeriesData({ seriesName }))
        break;

      default:
        break;
    }
  }


  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
