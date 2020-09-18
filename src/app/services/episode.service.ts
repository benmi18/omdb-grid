import { Injectable } from '@angular/core';
import { Column } from '../store/models';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  public get episodeGridColumns(): Array<Column> {
    return [
      {field: 'Title', title: 'Title'},
      {field: 'Released', title: 'Released'},
      {field: 'Episode', title: 'Episode'},
      {field: 'imdbRating', title: 'imdb Rating'},
    ];
  }
}
