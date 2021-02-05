import { ApplicationRef, Component, ComponentFactoryResolver, Injector, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { select, Store } from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MovieListResults } from 'src/app/shared/models/movies.models';
import * as fromHomeSelectors from 'src/pages/movie-list/state/home.selectors';
import  * as fromHomeActions from 'src/pages/movie-list/state/home.action';
import { Language } from 'src/app/shared/models/language.enum';
import * as fromConfigSelectors from 'src/app/shared/state/config/config.selector'
import * as fromConfigActions from 'src/app/shared/state/config/config.actions'


@Component({
  selector: 'app-movie-data',
  templateUrl: './movie-data.component.html',
  styleUrls: ['./movie-data.component.css']
})
export class MovieDataComponent implements OnInit, OnDestroy {
  Movies$!: Observable<MovieListResults>;
  MovieList!: MovieListResults;
  loading$!: Observable<boolean>;
  error$!: Observable<boolean>;
  page!:number;

  languageOB$!: Observable<Language>;
  languageSelected!: Language;

  private componentDestroyed$ = new Subject();

  constructor(private store: Store,
              private router: Router) { }

  ngOnInit()  {
    this.page=1;
    this.store.dispatch(fromHomeActions.LoadMovies({page:this.page.toString()}));
    this.Movies$ = this.store.select(fromHomeSelectors.loadMovies);
    this.Movies$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(value => this.MovieList=value);
      
    this.loading$ = this.store.pipe(select(fromHomeSelectors.loadMoviesLoading));
    this.error$ = this.store.pipe(select(fromHomeSelectors.loadMoviesError));

    this.languageOB$ = this.store.select(fromConfigSelectors.selectLanguageConfig);
    this.languageOB$
    .pipe(takeUntil(this.componentDestroyed$))
    .subscribe(value => this.languageSelected=value);
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

  languageChose(language:Language){
    this.store.dispatch(fromConfigActions.updateLanguage({language}));
    this.router.navigateByUrl('/filmes/'+language.toString());
  }
}
