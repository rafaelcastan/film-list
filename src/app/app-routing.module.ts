import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { MovieDataComponent } from 'src/pages/movie-list/containers/movie-data/movie-data.component';
import { MoviesModule } from 'src/pages/movies.module';
import { MovieDetailsComponent } from 'src/pages/movie-details/container/movie-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'filmes/L',
    pathMatch: 'full'
},
{
  path:'filmes',
  redirectTo:'filmes/L'
},
{
    path: 'filmes',
    children: [
    {
      path: 'details',
      children:[{path: ':id',component: MovieDetailsComponent}]
    },
    {
      path:':language',
      component: MovieDataComponent,
    },
    ]
},

{ 
    path: '**', 
    redirectTo: 'filmes/L' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
            MoviesModule
           ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
