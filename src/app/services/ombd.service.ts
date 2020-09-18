import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "@environments/environment";
import { Observable } from 'rxjs';
import { SeriesModel, SeasonModel, EpisodeModel } from '@store/models';

@Injectable({
  providedIn: 'root'
})
export class OmbdService {
  private readonly baseUrl = `http://www.omdbapi.com/?apikey=${environment.OMDB_APY_KEY}`;

  constructor(private http: HttpClient) { }

  public getSelectedSeries(selectedSeries: string): Observable<SeriesModel> {
    return (this.http.get(`${this.baseUrl}&t=${selectedSeries}`) as Observable<SeriesModel>);
  }

  public getSelectedSeason(seasonNumber: string, seriesName: string): Observable<SeasonModel> {
    return (this.http.get(`${this.baseUrl}&t=${seriesName}&season=${seasonNumber}`) as Observable<SeasonModel>);
  }

  public getSelectedEpisode(seasonNumber: string, seriesName: string, episodeNumber: string): Observable<EpisodeModel> {
    return (this.http.get(`${this.baseUrl}&t=${seriesName}&season=${seasonNumber}&episode=${episodeNumber}`) as Observable<EpisodeModel>);
  }
}
