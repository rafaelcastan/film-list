import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

import { Store } from '@ngrx/store';

import { MovieListResults } from 'src/app/shared/models/movies.models';



@Component({
  selector: 'mov-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class MovieListComponent implements OnInit {

  @Input() MovieList!:MovieListResults;
  @Output() Scroll = new EventEmitter();
  selector: string = '.mat-sidenav-container';
  constructor(private store: Store) { }

  ngOnInit(): void {
  }
  
  
  onScroll() {
    this.Scroll.emit();
  } 

  alert()
  {
    alert("Not Implemented");
  }
}
