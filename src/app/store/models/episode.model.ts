import { RatingModel } from '@store/models';

export interface EpisodeModel {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Season: string;
  Episode: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<RatingModel>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  seriesID: string;
  Type: string;
  Response: string;
}
