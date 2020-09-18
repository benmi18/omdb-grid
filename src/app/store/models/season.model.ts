interface Episode {
  Title: string;
  Released: string;
  Episode: string;
  imdbRating: string;
  imdbID: string;
}

export interface SeasonModel {
  Title: string;
  Season: string;
  totalSeasons: string;
  Episodes: Array<Episode>;
  Response: string;
}
