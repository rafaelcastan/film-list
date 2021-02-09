import { Action, createReducer, on } from "@ngrx/store"
import * as fromHomeActions from "./home.action"

export interface HomeState{
    entity:any,
    loading:boolean,
    error:boolean,
    loadingMore:boolean,
}

export const homeInitialState: HomeState={
    entity:undefined,
    loading:false,
    error:false,
    loadingMore:false
}

const reducer = createReducer(
    homeInitialState,
    on(fromHomeActions.LoadMovies, state=>({
        ...state,
        loading:true,
        error:false,
    })),
    on(fromHomeActions.LoadMoviesSuccess, (state,{entity})=>({
        ...state,
        entity,
        loading:false,
    })),
    on(fromHomeActions.LoadMoreMovies, state=>({
        ...state,
        loadingMore:true,
        error:false,
    })),
    on(fromHomeActions.LoadMoreMoviesSuccess, (state,{entity})=>({
        ...state,
        loadingMore:false,
        entity:state.entity.concat(entity),
    })),
    on(fromHomeActions.LoadMoviesFailed, (state)=>({
        ...state,
        error:true,
    })),
    on (fromHomeActions.clearHomeState, () => homeInitialState),
);

export function homeReducer(state:HomeState | undefined, action:Action):HomeState{
    return reducer(state,action);
}