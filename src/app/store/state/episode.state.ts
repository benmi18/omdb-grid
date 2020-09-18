import { EpisodeModel } from '@store/models';

export interface EpisodeState {
  episodesListItems: Array<string>;
  selectedEpisode: EpisodeModel;
}

export const episodeInitialState: EpisodeState = {
  episodesListItems: [],
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
