import { SeasonModel } from "@store/models";

export interface SeasonState {
  seasonsListItems: Array<string>;
  selectedSeason: SeasonModel;
}

export const seasonInitialState: SeasonState = {
  seasonsListItems: [],
  selectedSeason: {
    Title: "",
    Season: "",
    totalSeasons: "",
    Episodes: [],
    Response: ""
  },
}
