import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListComponent } from '../pages/movie-list/movie-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class MoviesModule { }
