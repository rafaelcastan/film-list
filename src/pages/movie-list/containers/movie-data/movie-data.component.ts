import { AfterViewInit, ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, EventEmitter, Injector, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  selector: 'mov-movie-data',
  templateUrl: './movie-data.component.html',
  styleUrls: ['./movie-data.component.css'],
})
export class MovieDataComponent implements OnInit, OnDestroy, AfterViewInit {
  
  Movies$!: Observable<MovieListResults>;
  MovieList!: MovieListResults;

  loading$!: Observable<boolean>;
  error$!: Observable<boolean>;
  page!:number;

  loadingMore$!:Observable<boolean>;
  loadingMore!:boolean;

  languageOB$!: Observable<string>;
  languageSelected!: string;

  language!: string;
  avaibleLanguages!:Array<string>;
  windowLanguage!:string;
  
  private componentDestroyed$ = new Subject();

  constructor(private store: Store,
              private router: Router,
              private activatedRoute: ActivatedRoute,) { }

  ngOnInit()  {
    this.languageOB$ = this.store.select(fromConfigSelectors.selectLanguageConfig);
    this.languageOB$
    .pipe(takeUntil(this.componentDestroyed$))
    .subscribe(value => this.languageSelected=value);
      
    this.loading$ = this.store.pipe(select(fromHomeSelectors.loadMoviesLoading));

    this.loadingMore$ = this.store.pipe(select(fromHomeSelectors.loadMoreMoviesLoading));
    this.loadingMore$
    .pipe(takeUntil(this.componentDestroyed$))
    .subscribe(value => this.loadingMore=value);

    this.error$ = this.store.pipe(select(fromHomeSelectors.loadMoviesError));

    this.avaibleLanguages= Object.values(Language)
    this.language = this.activatedRoute.snapshot.params['language'];
    if(-1<this.avaibleLanguages.indexOf(this.language))
    {
      this.store.dispatch(fromConfigActions.updateLanguage({language:this.language}));
    }
    else{
      if(this.language===undefined){}
      else{this.windowLanguage = window.navigator.language || window.navigator.language;
        this.store.dispatch(fromConfigActions.updateLanguage({language:this.windowLanguage}));
        this.router.navigateByUrl('/filmes/'+this.windowLanguage);}
    }

  }

  ngAfterViewInit(){
    this.page=1;
    this.store.dispatch(fromHomeActions.LoadMovies({page:this.page.toString()}));
    this.Movies$ = this.store.select(fromHomeSelectors.loadMovies);
    this.Movies$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(value => this.MovieList=value);
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
