import { createReducer, on } from '@ngrx/store';

import { Language } from '../../models/language.enum';
import * as fromLanguageActions from './config.actions';

export interface ConfigState {
    language: Language;
}

export const configInitialState: ConfigState = {
    language: Language.English,
}

export const configReducer = createReducer(
  configInitialState,
  on(fromLanguageActions.updateLanguage, (state, { language }) => ({
    ...state,
    language,
  })),
);