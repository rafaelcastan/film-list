import { Injectable } from "@angular/core";

import { createEffect, ofType,Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import {mergeMap,catchError, map} from 'rxjs/operators';
import { MoviesService } from "src/app/shared/services/movies.service";


import * as fromHomeActions from "./home.action"

@Injectable()
export class HomeEffects{

   loadMovies$ = createEffect(()=> this.actions$
    .pipe(
        ofType(fromHomeActions.LoadMovies),
        mergeMap(({page}) => this.moviesService.getMovieListByPage(page)),
        catchError((err,caught$)=>{
            this.store.dispatch(fromHomeActions.LoadMoviesFailed());
            return caught$;
        }),
        map((entity) => fromHomeActions.LoadMoviesSuccess({entity})),
    ),
    );


    constructor(private actions$:Actions,
                private store:Store,
                private moviesService:MoviesService) {

    }
}