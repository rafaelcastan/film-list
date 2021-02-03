import { ActionReducerMap } from '@ngrx/store';

import { ConfigState, configReducer } from './config/config.reducer';

export interface AppState {
  config: ConfigState,
}

export const reducers: ActionReducerMap<AppState> = {
  config: configReducer,
};