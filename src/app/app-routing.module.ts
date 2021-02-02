import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MovieDataComponent } from 'src/pages/movie-list/containers/movie-data/movie-data.component';
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
      component: MovieDataComponent
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
