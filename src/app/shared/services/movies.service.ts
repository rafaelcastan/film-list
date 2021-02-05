import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';

import {Observable, Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Language } from '../models/language.enum';
import { MovieDetailsModel, MovieList, MovieListResults } from '../models/movies.models';
import { responseToMovieDetails, responseToMovieList } from '../utils/response.utils';
import * as fromConfigSelectors from '../state/config/config.selector'
import { ConfigState } from '../state/config/config.reducer';

@Injectable({
  providedIn: 'root'
})
export class MoviesService implements OnDestroy{

  private language!: Language;

  private serviceDestroyed$ = new Subject();

  constructor(private http: HttpClient,
              private store: Store<ConfigState>) { 
    store
      .pipe(
        select(fromConfigSelectors.selectLanguageConfig),
        takeUntil(this.serviceDestroyed$),
      )
      .subscribe((language: Language) => this.language = language);
  }

  ngOnDestroy() {
    this.serviceDestroyed$.next();
    this.serviceDestroyed$.unsubscribe();
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

  getMovieDetails(id: string): Observable<MovieDetailsModel> {
    const params = new HttpParams({ fromObject: { '' : '' } });
    return this.doGet('/movie/'+id, params).pipe(
      map((results) => {
        const Filmlist = results.map((result: any) => responseToMovieDetails(result));
        console.log(Filmlist)
        return Filmlist;        
      })
    );
  }

  private  doGet<T>(url:string, params: HttpParams):Observable<any>{
    params = params.append('api_key', environment.ApiKey);
    params = params.append('language',this.language)
    return this.http.get<any>(`https://api.themoviedb.org/3${ url }`,{params});
  }
}
