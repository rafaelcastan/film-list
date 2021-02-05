import { createFeatureSelector, createSelector } from "@ngrx/store";

import { DetailsState } from "./movie-details.reducer";

export const selectDetailsState = createFeatureSelector<DetailsState>('Movie Details');

export const LoadDetails = createSelector(
    selectDetailsState,
   (DetailsState:DetailsState) => DetailsState.entity,
);

export const LoadDetailsLoading = createSelector(
    selectDetailsState,
    (DetailsState: DetailsState) => DetailsState.loading,
  );
  
export const LoadDetailsError = createSelector(
    selectDetailsState,
    (DetailsState: DetailsState) => DetailsState.error,
  );