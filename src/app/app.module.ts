import { environment } from '@environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

// Components
import { AppComponent } from './app.component';

// Effects
import { SeriesEffects } from '@store/effects/series.effect';
import { SeasonEffects } from '@store/effects/season.effect';
import { EpisodeEffects } from '@store/effects/episode.effect';

// Reducers
import * as series from '@store/reducers/series.reducer';
import * as season from '@store/reducers/season.reducer';
import * as episode from '@store/reducers/episode.reducer';
import { GridComponent } from './components/grid/grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ModalComponent } from './components/modal/modal.component';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';





@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ModalComponent
  ],
  imports: [
    StoreModule.forRoot({
      series: series.reducer,
      season: season.reducer,
      episode: episode.reducer
    }),
    EffectsModule.forRoot([SeriesEffects, SeasonEffects, EpisodeEffects]),
    BrowserModule,
    DropDownsModule,
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    HttpClientModule,
    GridModule,
    DialogsModule,
    IndicatorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
