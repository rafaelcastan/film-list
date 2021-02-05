import { Injectable } from "@angular/core";

import { createEffect, ofType,Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import {mergeMap,catchError, map} from 'rxjs/operators';
import { MoviesService } from "src/app/shared/services/movies.service";

import * as fromDetailsActions from "./movie-details.action"

@Injectable()
export class MovieDetailsEffects{

   loadDetails$ = createEffect(()=> this.actions$
    .pipe(
        ofType(fromDetailsActions.LoadDetails),
        mergeMap(({id}) => this.moviesServices.getMovieDetails(id)),
        catchError((err,caught$)=>{
            this.store.dispatch(fromDetailsActions.LoadDetailsFailed());
            return caught$;
        }),
        map((entity)  => fromDetailsActions.LoadDetailsSuccess({entity})),
    ),
    );
    

    

    constructor(private actions$:Actions,
                private store:Store,
                private moviesServices:MoviesService) {

    }
}