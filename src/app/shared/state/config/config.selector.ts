import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ConfigState } from './config.reducer';

export const selectConfigState = createFeatureSelector<ConfigState>('config');

export const selectLanguageConfig = createSelector(
  selectConfigState,
  (configState: ConfigState) => configState.language,
);
