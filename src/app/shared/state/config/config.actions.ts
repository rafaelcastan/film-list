import { createAction, props } from '@ngrx/store';

import { Language } from '../../models/language.enum';

export const updateLanguage = createAction(
 '[Config] Change Language',
 props<{ language: Language }>(),
);