import { createFeatureSelector, createSelector, State } from "@ngrx/store";

import { HomeState } from "./home.reducer";

export const selectHomeState = createFeatureSelector<any>('home');

export const loadMovies = createSelector(
    selectHomeState,
    (HomeState:HomeState) => HomeState.entity,
);