import { from } from 'rxjs';

export * from './episode.model';
export * from './season.model';
export * from './series.model';
export * from './grid.column.model';


export interface RatingModel {
  Source: string;
  Value: string;
}
