import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import * as fromMovieDetailsActions from '../state/movie-details.action'
import * as fromMovieDetailsSelectors from '../state/movie-details.selector'
import { MovieDetailsModel } from 'src/app/shared/models/movies.models';
import * as fromConfigSelectors from 'src/app/shared/state/config/config.selector'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  Details$!: Observable<MovieDetailsModel>;
  MovieDetails!: MovieDetailsModel;
  loading$!: Observable<boolean>;
  error$!: Observable<boolean>;

  languageOB$!: Observable<string>;
  languageSelected!: string;
  
  id!: string;

  private componentDestroyed$ = new Subject();

  constructor( private activatedRoute: ActivatedRoute,
               private store: Store) { }

  ngOnInit(): void {
    
    this.Details$ = this.store.select(fromMovieDetailsSelectors.LoadDetails);
    this.Details$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(value => this.MovieDetails=value);

    this.error$=this.store.select(fromMovieDetailsSelectors.LoadDetailsError);
    this.loading$=this.store.select(fromMovieDetailsSelectors.LoadDetailsLoading);

    this.languageOB$ = this.store.select(fromConfigSelectors.selectLanguageConfig);
    this.languageOB$
    .pipe(takeUntil(this.componentDestroyed$))
    .subscribe(value => this.languageSelected=value);

    this.id = this.activatedRoute.snapshot.params['id'];
    this.store.dispatch(fromMovieDetailsActions.LoadDetails({id:this.id}));
  }

  ngOnDestroy():void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
    this.store.dispatch(fromMovieDetailsActions.clearMovieDetailsState());
  }
}
