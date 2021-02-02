import { createAction, props } from "@ngrx/store";

export const LoadMovies = createAction(
    '[Home] Load Films',
    props<{page:string}>(),
);

export const clearHomeState = createAction(
    '[Home] Clear Home State');

export const LoadMoreMovies = createAction(
    '[Home] Load More Films',
    props<{page:string}>(),
);


export const LoadMoviesSuccess = createAction(
    '[Movies API] Load Films Success',
    props<{entity:any}>(),
);

export const LoadMoreMoviesSuccess = createAction(
    '[Movies API] Load More Films Success',
    props<{entity:any}>(),
);

export const LoadMoviesFailed = createAction(
    '[Movies API] Load Films Failed',
);

