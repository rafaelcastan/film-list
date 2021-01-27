import { Action, createReducer, on } from "@ngrx/store"
import * as fromHomeActions from "./home.action"

export interface HomeState{
    entity:any,
    loading:boolean,
    error:boolean,
}

export const homeInitialState:HomeState={
    entity:undefined,
    loading:false,
    error:false,
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
    on(fromHomeActions.LoadMoviesFailed, (state)=>({
        ...state,
        loading:false,
        error:true,
    })),
);

export function homeReducer(state:HomeState | undefined, action:Action) :HomeState{
    return reducer(state,action);
}