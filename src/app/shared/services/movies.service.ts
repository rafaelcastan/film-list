import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { responseToMovieList } from '../utils/response.utils';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { 
  }

  getMovieListByPage(page:string): Observable<any>{
    const params = new HttpParams ({fromObject:{page:page}});
    return this.doGet('/movie/popular', params)
    .pipe(
      map(Response => responseToMovieList(Response)));

  }

  private  doGet<T>(url:string, params: HttpParams):Observable<T>{
    params = params.append('api_key', environment.ApiKey);
    params = params.append('language','pt_BR')
    return this.http.get<T>(`https://api.themoviedb.org/3${ url }`,{params});
  }
}
