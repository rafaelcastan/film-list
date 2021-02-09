import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { MaterialModule } from 'src/app/shared/material/material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import {homeReducer} from './movie-list/state/home.reducer';
import { HomeEffects } from './movie-list/state/home.effects';
import { MovieDataComponent } from './movie-list/containers/movie-data/movie-data.component';
import { MovieListComponent } from './movie-list/components/movie-list.component';
import { MovieDetailsComponent } from './movie-details/container/movie-details.component';
import { detailsReducer } from './movie-details/state/movie-details.reducer';
import { MovieDetailsEffects } from './movie-details/state/movie-details.effects';
import { Language } from 'src/app/shared/models/language.enum';




@NgModule({
  declarations: [
    MovieListComponent,
    MovieDataComponent,
    MovieDetailsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', homeReducer),
    StoreModule.forFeature('Movie Details', detailsReducer),
    EffectsModule.forFeature([HomeEffects]),
    EffectsModule.forFeature([MovieDetailsEffects]),
    InfiniteScrollModule,
  ],
  exports:[MovieDataComponent,MovieListComponent],
})
export class MoviesModule { }
