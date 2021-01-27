import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MovieListComponent } from '../pages/movie-list/movie-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {homeReducer} from './movie-list/state/home.reducer';
import { HomeEffects } from './movie-list/state/home.effects';



@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', {homeReducer}),
    EffectsModule.forFeature([HomeEffects]),
  ]
})
export class MoviesModule { }
