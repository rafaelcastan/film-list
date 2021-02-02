import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { MovieList, MovieListResults } from '../models/movies.models';
import { responseToMovieList } from '../utils/response.utils';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { 
  }

  getMovieListByPage(page: string): Observable<MovieListResults> {
    const params = new HttpParams({ fromObject: { page: page } });
    return this.doGet('/movie/popular', params).pipe(
      map((Response: any) => Response.results),
      map((results) => {
        const Filmlist = results.map((result: any) => responseToMovieList(result));
        return Filmlist;        
      })
    );
  }
  private  doGet<T>(url:string, params: HttpParams):Observable<any[]>{
    params = params.append('api_key', environment.ApiKey);
    params = params.append('language','pt_BR')
    return this.http.get<any[]>(`https://api.themoviedb.org/3${ url }`,{params});
  }
}
