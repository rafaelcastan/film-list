import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Language } from 'src/app/shared/models/language.enum';

import { MovieListResults } from 'src/app/shared/models/movies.models';



@Component({
  selector: 'mov-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class MovieListComponent implements OnInit {

  @Input() MovieList!:MovieListResults;
  @Input() languageSelected!:Language;

  @Output() Scroll = new EventEmitter();
  @Output() languageSelect = new EventEmitter();

  languageChosed = Language;

  selector: string = '.mat-sidenav-container';
  constructor(private store: Store,
              private router: Router) { }

  ngOnInit(): void {
  }
  
  
  onScroll() {
    this.Scroll.emit();
  } 

  info(id: number)
  {
    this.router.navigateByUrl('/filmes/details/'+id);
  }

  languageChose(language:Language){
    this.languageSelect.emit(language);
  }
}
