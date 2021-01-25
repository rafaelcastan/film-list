import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from 'src/pages/movie-list/movie-list.component';
import { MoviesModule } from 'src/pages/movies.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'filmes',
    pathMatch: 'full'
},
{
    path: 'filmes',
    children: [
    {
      path: '',
      component: MovieListComponent
    }
    ]
},
{ 
    path: '**', 
    redirectTo: 'filmes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
            MoviesModule
           ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
