import { createReducer, on } from '@ngrx/store';


import * as fromLanguageActions from './config.actions';

export interface ConfigState {
    language: string;
}

export const configInitialState: ConfigState = {
    language: 'en-US',
}

export const configReducer = createReducer(
  configInitialState,
  on(fromLanguageActions.updateLanguage, (state, { language }) => ({
    ...state,
    language,
  })),
);