import { Action, createReducer, on } from "@ngrx/store"
import * as fromDetailsActions from "./movie-details.action"

export interface DetailsState{
    entity:any,
    loading:boolean,
    error:boolean,
}

export const DetailsInitialState: DetailsState={
    entity:undefined,
    loading:false,
    error:false,
}

const reducer = createReducer(
    DetailsInitialState,
    on(fromDetailsActions.LoadDetails, state=>({
        ...state,
        loading:true,
        error:false,
    })),
    on(fromDetailsActions.LoadDetailsSuccess, (state,{entity})=>({
        ...state,
        entity,
        loading:false,
    })),
   
    on(fromDetailsActions.LoadDetailsFailed, (state)=>({
        ...state,
        loading:false,
        error:true,
    })),
    on (fromDetailsActions.clearMovieDetailsState, () => DetailsInitialState),
);

export function detailsReducer(state:DetailsState | undefined, action:Action):DetailsState{
    return reducer(state,action);
}