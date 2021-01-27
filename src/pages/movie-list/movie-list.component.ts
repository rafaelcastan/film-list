import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromHomeAction from './state/home.action';

@Component({
  selector: 'mov-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  searchControl!: FormControl;
  pageControl!:FormControl;
  count!:number;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.count = 1;
    this.pageControl= new FormControl (this.count);
    const page = this.pageControl.value;
    this.store.dispatch(fromHomeAction.LoadMovies({page}))

    this.searchControl= new FormControl ('', Validators.required);
  }

  Scrolled(){
    this.count++;
  }

}
