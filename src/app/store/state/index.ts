import * as Series from './series.state';
import * as Season from './season.state';
import * as Episode from './episode.state';

export interface State {
  series: Series.SeriesState;
  season: Season.SeasonState;
  episode: Episode.EpisodeState;
}
