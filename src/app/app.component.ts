import {
  selectSeriesListItems,
  selectSeasonsListItems,
  selectSelectedSeries,
  selectSelectedSeason,
  selectSelectedEpisode
} from '@store/selectors';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { State } from '@store/state';
import { DropdownType } from '@store/enums';
import { LoadSeriesData, LoadSeasonData, LoadEpisodeData, ClearEpisodeData } from '@store/actions';
import { SeasonService } from './services/season.service';
import { EpisodeService } from './services/episode.service';
import { SeriesModel, SeasonModel, EpisodeModel } from './store/models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly onDestroy$ = new Subject<void>();
  public readonly DROP_DOWN_TYPE = DropdownType;

  public selectedSeries: SeriesModel;
  public selectedSeason: SeasonModel;
  public selectedEpisode: EpisodeModel;
  public openModal: boolean = false;
  public modalTitle: string = '';
  public seriesListItems: Array<string> = [];
  public seasonsListItems: Array<string> = [];

  constructor(
    private store: Store<State>,
    private seasonService: SeasonService,
    public episodeService: EpisodeService
  ) { }

  ngOnInit() {
    this.initiateDropdownData();
    this.initiateSeriesData();
    this.initiateSeasonData();
    this.initiateEpisodeData();
  }

  private initiateDropdownData() {
    combineLatest(
      this.store.pipe(select(selectSeriesListItems)),
      this.store.pipe(select(selectSeasonsListItems)),
    )
      .pipe(
        tap(([seriesList, seasonsList]) => {
          this.seriesListItems = seriesList;
          this.seasonsListItems = seasonsList;
        }),
        takeUntil(this.onDestroy$)
      ).subscribe();
  }

  private initiateSeriesData() {
    this.store.pipe(select(selectSelectedSeries))
      .pipe(
        tap(selectedSeries => {
          this.selectedSeries = selectedSeries;
          this.seasonService.mapSeasonsListItems(+selectedSeries.totalSeasons);
        }),
        takeUntil(this.onDestroy$)
      ).subscribe()
  }

  private initiateSeasonData() {
    this.store.pipe(select(selectSelectedSeason))
      .pipe(
        tap(selectedSeason => this.selectedSeason = selectedSeason),
        takeUntil(this.onDestroy$)
      ).subscribe()
  }

  private initiateEpisodeData() {
    this.store.pipe(select(selectSelectedEpisode))
      .pipe(
        tap(selectedEpisode => {
          this.modalTitle = selectedEpisode.Title;
          this.selectedEpisode = selectedEpisode
        }),
        takeUntil(this.onDestroy$)
      ).subscribe()
  }

  public handleSelectionChange(value, name: string) {
    switch (name) {
      case this.DROP_DOWN_TYPE.SERIES:
        this.store.dispatch(LoadSeriesData({ seriesName: value }));
        this.store.dispatch(LoadSeasonData({ seriesName: value, seasonNumber: '1' }));
        break;

      case this.DROP_DOWN_TYPE.SEASON:
        this.store.dispatch(LoadSeasonData({ seriesName: this.selectedSeries.Title, seasonNumber: value.split('Season ')[1] }));
        break;

      default:
        break;
    }
  }

  public handleTitleClick(episodeNumber) {
    this.openModal = true;
    this.store.dispatch(LoadEpisodeData({ episodeNumber, seasonNumber: this.selectedSeason.Season, seriesName: this.selectedSeries.Title }));
  }

  public handleModalClose() {
    this.openModal = false;
    this.store.dispatch(ClearEpisodeData());
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
