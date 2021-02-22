import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Language } from 'src/app/shared/models/language.enum';

import { MovieListResults } from 'src/app/shared/models/movies.models';



@Component({
  selector: 'mov-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class MovieListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() MovieList!:MovieListResults;
  @Input() languageSelected!:string;
  @Input() loadingMovies!:boolean;

  @Output() Scroll = new EventEmitter();

  showInfo!:boolean;
  position!:number;

  mySubscription:any;

  selector: string = '.mat-sidenav-container';
  constructor(private store: Store,
              private router: Router,
              private changeDetection: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.showInfo=false;
  }
  
  onScroll() {
    if(!this.loadingMovies)
    this.Scroll.emit();
  } 

  ngOnChanges(){
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription=this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  info(id: number)
  {
    this.router.navigateByUrl('/filmes/details/'+id);
  }
}
