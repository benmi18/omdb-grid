import { LoadEpisodeDataSuccess, ClearEpisodeData } from '@store/actions/episode.actions';
import { episodeInitialState, EpisodeState } from '@store/state/episode.state';
import { createReducer, on, Action } from '@ngrx/store';

const episodeReducer = createReducer(
  episodeInitialState,
  on(LoadEpisodeDataSuccess, (state, { selectedEpisode }) => ({ ...state, selectedEpisode })),
  on(ClearEpisodeData, () => ({ ...episodeInitialState}))
);

export function reducer(state: EpisodeState | undefined, action: Action) {
  return episodeReducer(state, action);
}
