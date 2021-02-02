import { createFeatureSelector, createSelector } from "@ngrx/store";

import { HomeState } from "./home.reducer";

export const selectHomeState = createFeatureSelector<HomeState>('home');

export const loadMovies = createSelector(
    selectHomeState,
   (homestate:HomeState) => homestate.entity,
);

export const loadMoviesLoading = createSelector(
    selectHomeState,
    (homeState: HomeState) => homeState.loading,
  );
  
  export const loadMoviesError = createSelector(
    selectHomeState,
    (homeState: HomeState) => homeState.error,
  );