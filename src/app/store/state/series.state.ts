import { SeriesModel } from "@store/models";

export interface SeriesState {
  seriesListItems: Array<string>,
  selectedSeries: SeriesModel,
}

export const seriesInitialState: SeriesState = {
  seriesListItems: [
    'Game of Thrones',
    'The Walking Dead',
    'Breaking Bad',
    'Vikings',
    'The Flash'
  ],
  selectedSeries: {
    Title: "",
    Year: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Language: "",
    Country: "",
    Awards: "",
    Poster: "",
    Ratings: [],
    Metascore: "",
    imdbRating: "",
    imdbVotes: "",
    imdbID: "",
    Type: "",
    totalSeasons: "",
    Response: ""
  },
}
