import { EpisodeModel } from '@store/models';

export interface EpisodeState {
  selectedEpisode: EpisodeModel;
}

export const episodeInitialState: EpisodeState = {
  selectedEpisode: {
    Title: "",
    Year: "",
    Rated: "",
    Released: "",
    Season: "",
    Episode: "",
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
    seriesID: "",
    Type: "",
    Response: ""
  },
};
