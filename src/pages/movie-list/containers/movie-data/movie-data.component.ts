import { ApplicationRef, Component, ComponentFactoryResolver, Injector, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import {Observable, Subject} from 'rxjs';
import { takeUntil,map } from 'rxjs/operators';

import { MovieList, MovieListResults } from 'src/app/shared/models/movies.models';
import * as fromHomeSelectors from 'src/pages/movie-list/state/home.selectors';
import  * as fromHomeActions from 'src/pages/movie-list/state/home.action';

@Component({
  selector: 'app-movie-data',
  templateUrl: './movie-data.component.html',
  styleUrls: ['./movie-data.component.css']
})
export class MovieDataComponent implements OnInit {
  Movies$!: Observable<MovieListResults>;
  MovieList!: MovieListResults;
  loading$!: Observable<boolean>;
  error$!: Observable<boolean>;
  page!:number;

  private componentDestroyed$ = new Subject();

  constructor(private store: Store,
              private appRef: ApplicationRef,
              private injector: Injector) { }

  ngOnInit()  {
    this.page=1;
    this.store.dispatch(fromHomeActions.LoadMovies({page:this.page.toString()}));
    this.Movies$ = this.store.select(fromHomeSelectors.loadMovies);
    this.Movies$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(value => this.MovieList=value);
      
    this.loading$ = this.store.pipe(select(fromHomeSelectors.loadMoviesLoading));
    this.error$ = this.store.pipe(select(fromHomeSelectors.loadMoviesError));
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
    this.store.dispatch(fromHomeActions.clearHomeState());
  }

  Scrolled(){
    this.page++;
    this.store.dispatch(fromHomeActions.LoadMoreMovies({page:this.page.toString()}))
  }
}
