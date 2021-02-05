import { createAction, props } from "@ngrx/store";

export const LoadDetails = createAction(
    '[Movie Details] Load Details',
    props<{id:string}>(),
);

export const LoadDetailsSuccess = createAction(
    '[Movie Details API] Load Details Success',
    props<{entity:any}>(),
);

export const LoadDetailsFailed = createAction(
    '[Movie Details API] Load Details Failed',
    
);

export const clearMovieDetailsState = createAction(
    '[Movie Details] Clear Movie Details State');

