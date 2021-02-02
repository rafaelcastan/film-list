import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

import { Store } from '@ngrx/store';
import { MovieList, MovieListResults } from 'src/app/shared/models/movies.models';

import * as fromHomeAction from '../state/home.action';

@Component({
  selector: 'mov-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class MovieListComponent implements OnInit {

  @Input() MovieList!:MovieListResults;
  @Output() Scroll = new EventEmitter();
  
  constructor(private store: Store) { }

  ngOnInit(): void {
       console.log(this.MovieList)
  }
  
  
  OnScroll(page:string) {
    this.Scroll.emit();
  } 

}
