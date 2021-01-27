import { createAction, props } from "@ngrx/store";

export const LoadMovies = createAction(
    '[Home] Load Films',
    props<{page:string}>(),
);

export const LoadMoviesSuccess = createAction(
    '[Movies API] Load Films Success',
    props<{entity:any}>(),
);

export const LoadMoviesFailed = createAction(
    '[Movies API] Load Films Failed',
);