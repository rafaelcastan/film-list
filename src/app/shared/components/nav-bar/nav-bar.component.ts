import { ChangeDetectionStrategy, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import * as fromConfigSelectors from 'src/app/shared/state/config/config.selector'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})

export class NavBarComponent implements OnInit, OnChanges {
  @ViewChild('sidenav', {static: false}) sidenav!: MatSidenav;
  languageOB$!: Observable<string>;
  languageSelected!: string;

  configBtn!:boolean;

  id!:string;

  languageRender!:string;

  private componentDestroyed$ = new Subject();
  constructor(private store: Store,
              private router: Router) { }

  ngOnInit() { 
    this.languageOB$ = this.store.select(fromConfigSelectors.selectLanguageConfig);
    this.languageOB$
    .pipe(takeUntil(this.componentDestroyed$))
    .subscribe(value => this.languageSelected=value);

    this.languageRender='en-US';

  }

  ngOnChanges(){
    console.log(this.configBtn)
  }
  
  openSideNav() {
    this.sidenav.open();
    this.languageRender=this.languageSelected;
  }

  closeSideNav() {
    this.sidenav.close();
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

  homePage(){
    this.router.navigateByUrl('/filmes/'+this.languageSelected);
  }
}
